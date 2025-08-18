import { type User, type InsertUser, type ResearchProject, type InsertResearchProject, type TeamMember, type InsertTeamMember, type Publication, type InsertPublication } from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  getAllResearchProjects(): Promise<ResearchProject[]>;
  getResearchProject(id: string): Promise<ResearchProject | undefined>;
  createResearchProject(project: InsertResearchProject): Promise<ResearchProject>;
  
  getAllTeamMembers(): Promise<TeamMember[]>;
  getTeamMembersByType(type: string): Promise<TeamMember[]>;
  createTeamMember(member: InsertTeamMember): Promise<TeamMember>;
  
  getAllPublications(): Promise<Publication[]>;
  getPublicationsByYear(year: string): Promise<Publication[]>;
  createPublication(publication: InsertPublication): Promise<Publication>;
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private researchProjects: Map<string, ResearchProject>;
  private teamMembers: Map<string, TeamMember>;
  private publications: Map<string, Publication>;

  constructor() {
    this.users = new Map();
    this.researchProjects = new Map();
    this.teamMembers = new Map();
    this.publications = new Map();
    
    this.initializeData();
  }

  private initializeData() {
    // Research Projects
    const projects: InsertResearchProject[] = [
      {
        title: "Deep Learning for Medical Image Analysis",
        description: "Advanced neural network architectures for automated medical diagnosis, achieving 95% accuracy in early cancer detection through innovative computer vision techniques.",
        category: "AI Research",
        date: "2024.01",
        leadResearcher: "Dr. Kim Min-soo",
        imageUrl: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600",
        order: 0
      },
      {
        title: "Autonomous Surgical Robot System",
        description: "Revolutionary robotic system for precision surgery with haptic feedback and AI-guided navigation, reducing human error by 85% in complex procedures.",
        category: "Robotics",
        date: "2023.12",
        leadResearcher: "Dr. Lee Soo-jin",
        imageUrl: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600",
        order: 1
      },
      {
        title: "CRISPR Gene Editing Platform",
        description: "Next-generation gene editing technology with enhanced precision and reduced off-target effects, opening new possibilities for genetic disease treatment.",
        category: "Biotechnology",
        date: "2023.11",
        leadResearcher: "Dr. Park Jae-hyun",
        imageUrl: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600",
        order: 2
      }
    ];

    projects.forEach(project => {
      this.createResearchProject(project);
    });

    // Team Members
    const members: InsertTeamMember[] = [
      {
        name: "Dr. Kim Jae-wook",
        position: "Principal Investigator & Lab Director",
        specialization: "Artificial Intelligence, Machine Learning",
        bio: "Ph.D. in Computer Science from MIT. Over 20 years of experience in artificial intelligence and machine learning research. Published 150+ papers in top-tier journals and conferences. Leading expert in deep learning and medical AI applications.",
        imageUrl: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300",
        type: "director",
        order: 0
      },
      {
        name: "Dr. Lee Min-jung",
        position: "Senior Research Scientist",
        specialization: "AI in Healthcare, Computer Vision",
        bio: "Specialized in medical AI applications and computer vision.",
        imageUrl: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
        type: "researcher",
        order: 0
      },
      {
        name: "Dr. Park Sung-ho",
        position: "Research Scientist",
        specialization: "Robotics, Machine Learning",
        bio: "Expert in robotic systems and machine learning applications.",
        imageUrl: "https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
        type: "researcher",
        order: 1
      },
      {
        name: "Dr. Choi Hye-jin",
        position: "Postdoctoral Researcher",
        specialization: "Biotechnology, Gene Editing",
        bio: "Researcher in biotechnology and CRISPR gene editing.",
        imageUrl: "https://images.unsplash.com/photo-1594824850511-c96c1ee2e172?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
        type: "researcher",
        order: 2
      },
      {
        name: "김민수",
        position: "Ph.D. Student",
        specialization: "Deep Learning",
        type: "student",
        order: 0
      },
      {
        name: "이지영",
        position: "Ph.D. Student",
        specialization: "Computer Vision",
        type: "student",
        order: 1
      },
      {
        name: "박준호",
        position: "M.S. Student",
        specialization: "Robotics",
        type: "student",
        order: 2
      },
      {
        name: "정소영",
        position: "M.S. Student",
        specialization: "AI Ethics",
        type: "student",
        order: 3
      },
      {
        name: "강태현",
        position: "M.S. Student",
        specialization: "Machine Learning",
        type: "student",
        order: 4
      },
      {
        name: "윤하늘",
        position: "Ph.D. Student",
        specialization: "Biotechnology",
        type: "student",
        order: 5
      }
    ];

    members.forEach(member => {
      this.createTeamMember(member);
    });

    // Publications
    const publications: InsertPublication[] = [
      {
        title: "Deep Learning-Based Automated Diagnosis of Diabetic Retinopathy Using Retinal Fundus Images",
        authors: "Kim, J.W., Lee, M.J., Park, S.H., et al.",
        journal: "Nature Medicine, Vol. 30, pp. 245-258",
        year: "2024",
        type: "journal",
        abstract: "A novel deep learning framework for automated detection and classification of diabetic retinopathy achieving 98.5% accuracy on large-scale clinical datasets...",
        url: "#"
      },
      {
        title: "Haptic-Guided Robotic Surgery: Enhanced Precision Through Multi-Modal Feedback",
        authors: "Lee, S.J., Park, J.H., Kim, J.W., Choi, H.J.",
        conference: "IEEE International Conference on Robotics and Automation (ICRA)",
        year: "2023",
        type: "conference",
        abstract: "This paper presents a novel haptic feedback system for robotic surgery that combines tactile, visual, and auditory cues to enhance surgical precision...",
        url: "#"
      },
      {
        title: "Enhanced CRISPR-Cas9 Delivery Using Nanoparticle-Mediated Gene Editing",
        authors: "Park, J.H., Choi, H.J., Lee, M.J., Kim, J.W.",
        journal: "Cell, Vol. 186, Issue 12, pp. 2651-2668",
        year: "2023",
        type: "journal",
        abstract: "Development of lipid nanoparticles for improved CRISPR-Cas9 delivery with 95% editing efficiency and minimal off-target effects in vivo...",
        url: "#"
      }
    ];

    publications.forEach(publication => {
      this.createPublication(publication);
    });
  }

  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async getAllResearchProjects(): Promise<ResearchProject[]> {
    return Array.from(this.researchProjects.values()).sort((a, b) => a.order - b.order);
  }

  async getResearchProject(id: string): Promise<ResearchProject | undefined> {
    return this.researchProjects.get(id);
  }

  async createResearchProject(insertProject: InsertResearchProject): Promise<ResearchProject> {
    const id = randomUUID();
    const project: ResearchProject = { ...insertProject, id };
    this.researchProjects.set(id, project);
    return project;
  }

  async getAllTeamMembers(): Promise<TeamMember[]> {
    return Array.from(this.teamMembers.values()).sort((a, b) => {
      if (a.type !== b.type) {
        const typeOrder = { director: 0, researcher: 1, student: 2 };
        return typeOrder[a.type as keyof typeof typeOrder] - typeOrder[b.type as keyof typeof typeOrder];
      }
      return a.order - b.order;
    });
  }

  async getTeamMembersByType(type: string): Promise<TeamMember[]> {
    return Array.from(this.teamMembers.values())
      .filter(member => member.type === type)
      .sort((a, b) => a.order - b.order);
  }

  async createTeamMember(insertMember: InsertTeamMember): Promise<TeamMember> {
    const id = randomUUID();
    const member: TeamMember = { ...insertMember, id };
    this.teamMembers.set(id, member);
    return member;
  }

  async getAllPublications(): Promise<Publication[]> {
    return Array.from(this.publications.values()).sort((a, b) => parseInt(b.year) - parseInt(a.year));
  }

  async getPublicationsByYear(year: string): Promise<Publication[]> {
    return Array.from(this.publications.values()).filter(pub => pub.year === year);
  }

  async createPublication(insertPublication: InsertPublication): Promise<Publication> {
    const id = randomUUID();
    const publication: Publication = { ...insertPublication, id };
    this.publications.set(id, publication);
    return publication;
  }
}

export const storage = new MemStorage();
