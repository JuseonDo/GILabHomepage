# Overview

This is a research laboratory website built as a full-stack application showcasing research projects, team members, and publications. The application serves as an academic portfolio and information hub with a modern, professional design suitable for scientific institutions. It features responsive layouts, interactive components, and comprehensive content management for displaying research activities, team profiles, and academic publications.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **React with TypeScript**: Modern component-based UI using React 18 with full TypeScript support
- **Wouter for Routing**: Lightweight client-side routing solution instead of React Router
- **TanStack Query**: Server state management for efficient data fetching, caching, and synchronization
- **Vite Build System**: Fast development server and optimized production builds with hot module replacement
- **Tailwind CSS**: Utility-first styling with shadcn/ui component library for consistent design
- **Component Structure**: Organized into pages (home, members, research, access), reusable UI components, and layout components

## Backend Architecture  
- **Express.js Server**: Node.js web server handling API routes and static file serving
- **RESTful API Design**: Clean REST endpoints for research projects, team members, and publications
- **In-Memory Storage**: Currently using memory-based storage with structured interfaces for future database integration
- **Middleware Stack**: Request logging, JSON parsing, error handling, and development tooling integration

## Data Layer
- **Drizzle ORM**: Type-safe database toolkit configured for PostgreSQL with schema definitions
- **Database Schema**: Well-defined tables for users, research projects, team members, and publications with proper relationships
- **Type Safety**: Generated TypeScript types from database schema using drizzle-zod integration
- **Migration System**: Database migration management through drizzle-kit

## Development Environment
- **Development Server**: Integrated Vite dev server with Express backend proxy
- **TypeScript Configuration**: Shared types between client and server through workspace organization
- **Path Aliases**: Convenient import paths for components, utilities, and shared code
- **Hot Reload**: Development server with automatic refresh for both frontend and backend changes

## UI Component System
- **shadcn/ui Integration**: Professional component library with customizable Radix UI primitives
- **Design System**: Consistent theming through CSS custom properties and Tailwind configuration
- **Responsive Design**: Mobile-first approach with breakpoint-aware components
- **Accessibility**: ARIA-compliant components with keyboard navigation and screen reader support

# External Dependencies

## Core Framework Dependencies
- **@neondatabase/serverless**: PostgreSQL database driver optimized for serverless environments
- **drizzle-orm** and **drizzle-kit**: Type-safe ORM and migration toolkit for database operations
- **@tanstack/react-query**: Server state management and data synchronization library

## UI and Styling Dependencies  
- **@radix-ui/***: Comprehensive set of unstyled, accessible UI primitives for building the component library
- **tailwindcss**: Utility-first CSS framework for rapid UI development
- **class-variance-authority**: Utility for creating variant-based component APIs
- **lucide-react**: Modern icon library with React components

## Development and Build Tools
- **vite**: Next-generation frontend build tool with fast HMR and optimized bundling
- **typescript**: Static type checking for enhanced developer experience and code reliability
- **@replit/vite-plugin-runtime-error-modal**: Development error handling specific to Replit environment

## Form and Validation
- **react-hook-form** and **@hookform/resolvers**: Efficient form handling with validation integration
- **zod**: TypeScript-first schema validation library integrated with database schemas

## Additional Utilities
- **date-fns**: Comprehensive date manipulation library for handling publication dates and timestamps  
- **wouter**: Minimalist routing library as lightweight alternative to React Router
- **nanoid**: URL-safe unique ID generator for generating database identifiers