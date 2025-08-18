import { db } from './db';
import { users, researchProjects, teamMembers, publications, authors } from '@shared/schema';
import type { 
  User, InsertUser, LoginUser, 
  ResearchProject, InsertResearchProject, 
  TeamMember, InsertTeamMember, 
  Publication, InsertPublication,
  Author, InsertAuthor
} from '@shared/schema';
import { eq, desc, and } from 'drizzle-orm';
import { hashPassword, verifyPassword } from './auth';

export interface IStorage {
  // User management
  getUserById(id: string): Promise<User | undefined>;
  getUserByEmail(email: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  loginUser(credentials: LoginUser): Promise<User | null>;
  approveUser(id: string): Promise<boolean>;
  getAllPendingUsers(): Promise<User[]>;
  
  // Research projects
  getAllResearchProjects(): Promise<ResearchProject[]>;
  getResearchProject(id: string): Promise<ResearchProject | undefined>;
  createResearchProject(project: InsertResearchProject, authorId: string): Promise<ResearchProject>;
  
  // Team members
  getAllTeamMembers(): Promise<TeamMember[]>;
  getTeamMembersByType(type: string): Promise<TeamMember[]>;
  createTeamMember(member: InsertTeamMember): Promise<TeamMember>;
  
  // Publications with authors
  getAllPublicationsWithAuthors(): Promise<(Publication & { authors: Author[] })[]>;
  getPublicationsByYear(year: string): Promise<(Publication & { authors: Author[] })[]>;
  createPublication(publication: InsertPublication, authorId: string, authorsList: InsertAuthor[]): Promise<Publication>;
}

export class DatabaseStorage implements IStorage {
  // User management
  async getUserById(id: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.id, id));
    return user;
  }

  async getUserByEmail(email: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.email, email));
    return user;
  }

  async createUser(userData: InsertUser): Promise<User> {
    const hashedPassword = await hashPassword(userData.password);
    const [user] = await db
      .insert(users)
      .values({
        ...userData,
        password: hashedPassword,
        isApproved: false, // Requires admin approval
      })
      .returning();
    return user;
  }

  async loginUser(credentials: LoginUser): Promise<User | null> {
    const user = await this.getUserByEmail(credentials.email);
    if (!user || !user.isApproved) {
      return null;
    }

    const isValidPassword = await verifyPassword(credentials.password, user.password);
    if (!isValidPassword) {
      return null;
    }

    return user;
  }

  async approveUser(id: string): Promise<boolean> {
    const [user] = await db
      .update(users)
      .set({ isApproved: true, updatedAt: new Date() })
      .where(eq(users.id, id))
      .returning();
    return !!user;
  }

  async getAllPendingUsers(): Promise<User[]> {
    return db.select().from(users).where(eq(users.isApproved, false));
  }

  // Research projects
  async getAllResearchProjects(): Promise<ResearchProject[]> {
    return db.select().from(researchProjects).orderBy(researchProjects.order);
  }

  async getResearchProject(id: string): Promise<ResearchProject | undefined> {
    const [project] = await db.select().from(researchProjects).where(eq(researchProjects.id, id));
    return project;
  }

  async createResearchProject(projectData: InsertResearchProject, authorId: string): Promise<ResearchProject> {
    const [project] = await db
      .insert(researchProjects)
      .values({
        ...projectData,
        authorId,
      })
      .returning();
    return project;
  }

  // Team members
  async getAllTeamMembers(): Promise<TeamMember[]> {
    return db.select().from(teamMembers).orderBy(teamMembers.type, teamMembers.order);
  }

  async getTeamMembersByType(type: string): Promise<TeamMember[]> {
    return db.select().from(teamMembers)
      .where(eq(teamMembers.type, type))
      .orderBy(teamMembers.order);
  }

  async createTeamMember(memberData: InsertTeamMember): Promise<TeamMember> {
    const [member] = await db
      .insert(teamMembers)
      .values(memberData)
      .returning();
    return member;
  }

  // Publications with authors
  async getAllPublicationsWithAuthors(): Promise<(Publication & { authors: Author[] })[]> {
    const publicationsList = await db.select().from(publications).orderBy(desc(publications.year));
    
    const result = [];
    for (const publication of publicationsList) {
      const authorsList = await db.select()
        .from(authors)
        .where(eq(authors.publicationId, publication.id))
        .orderBy(authors.order);
      
      result.push({
        ...publication,
        authors: authorsList,
      });
    }
    
    return result;
  }

  async getPublicationsByYear(year: string): Promise<(Publication & { authors: Author[] })[]> {
    const publicationsList = await db.select()
      .from(publications)
      .where(eq(publications.year, year))
      .orderBy(desc(publications.createdAt));
    
    const result = [];
    for (const publication of publicationsList) {
      const authorsList = await db.select()
        .from(authors)
        .where(eq(authors.publicationId, publication.id))
        .orderBy(authors.order);
      
      result.push({
        ...publication,
        authors: authorsList,
      });
    }
    
    return result;
  }

  async createPublication(publicationData: InsertPublication, authorId: string, authorsList: InsertAuthor[]): Promise<Publication> {
    const [publication] = await db
      .insert(publications)
      .values({
        ...publicationData,
        authorId,
      })
      .returning();

    // Insert authors
    if (authorsList.length > 0) {
      await db.insert(authors).values(
        authorsList.map((author, index) => ({
          ...author,
          publicationId: publication.id,
          order: index,
        }))
      );
    }

    return publication;
  }
}

export const storage = new DatabaseStorage();
