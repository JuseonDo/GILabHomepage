import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  // Research Projects API
  app.get("/api/research-projects", async (req, res) => {
    try {
      const projects = await storage.getAllResearchProjects();
      res.json(projects);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch research projects" });
    }
  });

  app.get("/api/research-projects/:id", async (req, res) => {
    try {
      const project = await storage.getResearchProject(req.params.id);
      if (!project) {
        return res.status(404).json({ message: "Research project not found" });
      }
      res.json(project);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch research project" });
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
        publications = await storage.getAllPublications();
      }
      
      res.json(publications);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch publications" });
    }
  });

  // Contact form submission
  app.post("/api/contact", async (req, res) => {
    try {
      const { name, email, subject, message } = req.body;
      
      if (!name || !email || !subject || !message) {
        return res.status(400).json({ message: "All fields are required" });
      }
      
      // In a real application, this would send an email or save to database
      console.log("Contact form submission:", { name, email, subject, message });
      
      res.json({ message: "Message sent successfully" });
    } catch (error) {
      res.status(500).json({ message: "Failed to send message" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
