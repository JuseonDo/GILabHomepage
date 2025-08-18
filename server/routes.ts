import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { getSession, requireAuth, requireAdmin } from "./auth";
import { insertUserSchema, loginSchema, insertPublicationSchema, insertResearchProjectSchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Setup session middleware
  app.use(getSession());

  // Authentication Routes
  app.post("/api/auth/register", async (req, res) => {
    try {
      const userData = insertUserSchema.parse(req.body);
      const user = await storage.createUser(userData);
      res.status(201).json({ 
        message: "Registration successful. Please wait for admin approval.",
        user: { 
          id: user.id, 
          email: user.email, 
          firstName: user.firstName,
          lastName: user.lastName,
          isApproved: user.isApproved 
        }
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ message: "Invalid input data", errors: error.errors });
      }
      console.error("Registration error:", error);
      res.status(500).json({ message: "Registration failed" });
    }
  });

  app.post("/api/auth/login", async (req, res) => {
    try {
      const credentials = loginSchema.parse(req.body);
      const user = await storage.loginUser(credentials);
      
      if (!user) {
        return res.status(401).json({ message: "Invalid credentials or account not approved" });
      }

      req.session.userId = user.id;
      req.session.user = {
        id: user.id,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        isAdmin: user.isAdmin,
        isApproved: user.isApproved
      };

      res.json({ 
        message: "Login successful", 
        user: req.session.user 
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ message: "Invalid input data" });
      }
      console.error("Login error:", error);
      res.status(500).json({ message: "Login failed" });
    }
  });

  app.post("/api/auth/logout", (req, res) => {
    req.session.destroy((err) => {
      if (err) {
        return res.status(500).json({ message: "Logout failed" });
      }
      res.json({ message: "Logout successful" });
    });
  });

  app.get("/api/auth/user", (req, res) => {
    if (!req.session.user) {
      return res.status(401).json({ message: "Not authenticated" });
    }
    res.json(req.session.user);
  });

  // Admin Routes
  app.get("/api/admin/pending-users", requireAuth, requireAdmin, async (req, res) => {
    try {
      const pendingUsers = await storage.getAllPendingUsers();
      res.json(pendingUsers);
    } catch (error) {
      console.error("Failed to fetch pending users:", error);
      res.status(500).json({ message: "Failed to fetch pending users" });
    }
  });

  app.post("/api/admin/approve-user/:id", requireAuth, requireAdmin, async (req, res) => {
    try {
      const approved = await storage.approveUser(req.params.id);
      if (!approved) {
        return res.status(404).json({ message: "User not found" });
      }
      res.json({ message: "User approved successfully" });
    } catch (error) {
      console.error("Failed to approve user:", error);
      res.status(500).json({ message: "Failed to approve user" });
    }
  });

  // Research Projects API
  app.get("/api/research-projects", async (req, res) => {
    try {
      const projects = await storage.getAllResearchProjects();
      res.json(projects);
    } catch (error) {
      console.error("Failed to fetch research projects:", error);
      res.status(500).json({ message: "Failed to fetch research projects" });
    }
  });

  app.post("/api/research-projects", requireAuth, async (req, res) => {
    try {
      const projectData = insertResearchProjectSchema.parse(req.body);
      const project = await storage.createResearchProject(projectData, req.session.userId!);
      res.status(201).json(project);
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ message: "Invalid input data", errors: error.errors });
      }
      console.error("Failed to create research project:", error);
      res.status(500).json({ message: "Failed to create research project" });
    }
  });

  // Team Members API
  app.get("/api/team-members", async (req, res) => {
    try {
      const { type } = req.query;
      let members;
      
      if (type && typeof type === 'string') {
        members = await storage.getTeamMembersByType(type);
      } else {
        members = await storage.getAllTeamMembers();
      }
      
      res.json(members);
    } catch (error) {
      console.error("Failed to fetch team members:", error);
      res.status(500).json({ message: "Failed to fetch team members" });
    }
  });

  // Publications API
  app.get("/api/publications", async (req, res) => {
    try {
      const { year } = req.query;
      let publications;
      
      if (year && typeof year === 'string') {
        publications = await storage.getPublicationsByYear(year);
      } else {
        publications = await storage.getAllPublicationsWithAuthors();
      }
      
      res.json(publications);
    } catch (error) {
      console.error("Failed to fetch publications:", error);
      res.status(500).json({ message: "Failed to fetch publications" });
    }
  });

  // Create publication with authors
  app.post("/api/publications", requireAuth, async (req, res) => {
    try {
      const { publication, authors } = req.body;
      
      const publicationData = insertPublicationSchema.parse(publication);
      const authorsData = z.array(z.object({
        name: z.string(),
        homepage: z.string().optional()
      })).parse(authors);

      const newPublication = await storage.createPublication(
        publicationData, 
        req.session.userId!, 
        authorsData
      );

      res.status(201).json(newPublication);
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ message: "Invalid input data", errors: error.errors });
      }
      console.error("Failed to create publication:", error);
      res.status(500).json({ message: "Failed to create publication" });
    }
  });

  // Contact form submission
  app.post("/api/contact", async (req, res) => {
    try {
      const { name, email, subject, message } = req.body;
      
      if (!name || !email || !subject || !message) {
        return res.status(400).json({ message: "All fields are required" });
      }
      
      console.log("Contact form submission:", { name, email, subject, message });
      res.json({ message: "Message sent successfully" });
    } catch (error) {
      res.status(500).json({ message: "Failed to send message" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
