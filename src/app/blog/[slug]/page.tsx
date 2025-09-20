import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

// Sample blog posts data (in a real app, this would come from a CMS or database)
const blogPosts = [
  {
    id: "building-modern-web-apps",
    title: "Building Modern Web Applications",
    excerpt: "Exploring the latest trends and best practices in modern web development, from React to Next.js and beyond.",
    date: "Dec 15, 2024",
    readTime: "5 min read",
    content: `# Building Modern Web Applications

The landscape of web development has evolved dramatically over the past few years. Today's applications need to be fast, responsive, and provide an excellent user experience across all devices.

## Key Technologies

### React and Next.js
React has become the de facto standard for building user interfaces, and Next.js takes it to the next level with features like:

- Server-side rendering (SSR)
- Static site generation (SSG)
- API routes
- Built-in optimization

### TypeScript
TypeScript brings type safety to JavaScript, helping catch errors early and improving developer experience.

## Best Practices

1. **Component Architecture**: Build reusable, composable components
2. **State Management**: Use appropriate state management solutions
3. **Performance**: Optimize for Core Web Vitals
4. **Accessibility**: Ensure your apps work for everyone

## Conclusion

Building modern web applications requires staying up-to-date with the latest technologies and best practices. The key is to choose the right tools for your project and always prioritize user experience.`
  },
  {
    id: "art-of-clean-code",
    title: "The Art of Clean Code",
    excerpt: "Principles and practices for writing maintainable and readable code that your future self will thank you for.",
    date: "Dec 10, 2024",
    readTime: "7 min read",
    content: `# The Art of Clean Code

Clean code is not just about making your code work—it's about making it readable, maintainable, and elegant. Here are the principles that guide my approach to writing code.

## Meaningful Names

The name of a variable, function, or class should reveal its intent. Avoid abbreviations and be descriptive.

\`\`\`typescript
// Bad
const d = new Date();
const u = users.filter(u => u.active);

// Good
const currentDate = new Date();
const activeUsers = users.filter(user => user.isActive);
\`\`\`

## Functions Should Do One Thing

Functions should be small and do one thing well. If you can't describe what a function does in a single sentence, it's probably doing too much.

\`\`\`typescript
// Bad
function processUserData(user) {
  // Validate user
  if (!user.email) throw new Error('Invalid email');
  
  // Save to database
  database.save(user);
  
  // Send welcome email
  emailService.send(user.email, 'Welcome!');
  
  // Log activity
  logger.log('User created', user.id);
}

// Good
function validateUser(user) {
  if (!user.email) throw new Error('Invalid email');
}

function saveUser(user) {
  return database.save(user);
}

function sendWelcomeEmail(user) {
  return emailService.send(user.email, 'Welcome!');
}
\`\`\`

## Comments Are a Code Smell

Good code is self-documenting. If you need comments to explain what your code does, consider refactoring it instead.

## Conclusion

Clean code is an investment in the future. It makes your codebase easier to understand, modify, and extend. Take the time to write clean code—your future self will thank you.`
  },
  {
    id: "getting-started-with-typescript",
    title: "Getting Started with TypeScript",
    excerpt: "A beginner's guide to TypeScript and how it can improve your JavaScript development experience.",
    date: "Dec 5, 2024",
    readTime: "6 min read",
    content: `# Getting Started with TypeScript

TypeScript is a superset of JavaScript that adds static type checking. It helps catch errors early and provides better tooling support.

## Why TypeScript?

- **Type Safety**: Catch errors at compile time
- **Better IDE Support**: Autocomplete, refactoring, and navigation
- **Self-Documenting Code**: Types serve as documentation
- **Easier Refactoring**: Confident changes across large codebases

## Basic Types

\`\`\`typescript
// Primitive types
let name: string = "Anurag";
let age: number = 25;
let isActive: boolean = true;

// Arrays
let numbers: number[] = [1, 2, 3];
let names: string[] = ["Alice", "Bob"];

// Objects
interface User {
  id: number;
  name: string;
  email: string;
  isActive?: boolean; // Optional property
}

const user: User = {
  id: 1,
  name: "Anurag",
  email: "anurag@example.com"
};
\`\`\`

## Functions

\`\`\`typescript
// Function with typed parameters and return type
function greet(name: string): string {
  return \`Hello, \${name}!\`;
}

// Arrow function
const add = (a: number, b: number): number => a + b;

// Optional parameters
function createUser(name: string, email?: string): User {
  return {
    id: Math.random(),
    name,
    email: email || ""
  };
}
\`\`\`

## Getting Started

1. Install TypeScript: \`npm install -g typescript\`
2. Initialize a project: \`tsc --init\`
3. Start coding with \`.ts\` files
4. Compile to JavaScript: \`tsc\`

## Conclusion

TypeScript might seem intimidating at first, but the benefits far outweigh the learning curve. Start small and gradually add types to your existing JavaScript projects.`
  }
];

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = blogPosts.find((p) => p.id === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          {/* Back button */}
          <Button variant="ghost" asChild className="mb-8">
            <Link href="/blog" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Blog
            </Link>
          </Button>

          {/* Article header */}
          <header className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{post.title}</h1>
            <div className="flex items-center gap-4 text-muted-foreground mb-6">
              <span>{post.date}</span>
              <span>•</span>
              <span>{post.readTime}</span>
            </div>
            <Separator />
          </header>

          {/* Article content */}
          <article className="prose max-w-none">
            <div 
              className="whitespace-pre-wrap"
              dangerouslySetInnerHTML={{ 
                __html: post.content
                  .replace(/```([\s\S]*?)```/g, '<pre><code>$1</code></pre>')
                  .replace(/`([^`]+)`/g, '<code>$1</code>')
                  .replace(/^# (.*$)/gm, '<h1>$1</h1>')
                  .replace(/^## (.*$)/gm, '<h2>$1</h2>')
                  .replace(/^### (.*$)/gm, '<h3>$1</h3>')
                  .replace(/^\- (.*$)/gm, '<li>$1</li>')
                  .replace(/^\d+\. (.*$)/gm, '<li>$1</li>')
                  .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                  .replace(/\*(.*?)\*/g, '<em>$1</em>')
                  .replace(/\n\n/g, '</p><p>')
                  .replace(/^(?!<[h|p|l|s|d])/gm, '<p>')
                  .replace(/<p><\/p>/g, '')
              }}
            />
          </article>

          {/* Navigation */}
          <div className="mt-12 pt-8 border-t">
            <Button asChild>
              <Link href="/blog">← Back to All Posts</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
