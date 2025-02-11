
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

export function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 glass-card px-6 py-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-500">
            VidyaRatan
          </span>
        </div>
        
        <div className="hidden md:flex items-center space-x-8">
          <a href="#" className="text-sm font-medium hover:text-primary transition-colors">
            Browse Scholarships
          </a>
          <a href="#" className="text-sm font-medium hover:text-primary transition-colors">
            How It Works
          </a>
          <a href="#" className="text-sm font-medium hover:text-primary transition-colors">
            Success Stories
          </a>
        </div>

        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="sm" className="hidden md:flex">
            Sign In
          </Button>
          <Button size="sm" className="animate-shine">
            Get Started
          </Button>
        </div>
      </div>
    </nav>
  );
}
