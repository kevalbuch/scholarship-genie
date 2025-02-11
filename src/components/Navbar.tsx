
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { Link } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";

export function Navbar() {
  const { user, signOut } = useAuth();

  return (
    <nav className="fixed top-0 w-full z-50 glass-card px-6 py-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Link to="/" className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-500">
            VidyaRatan
          </Link>
        </div>
        
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/browse-scholarships" className="text-sm font-medium hover:text-primary transition-colors">
            Browse Scholarships
          </Link>
          <Link to="/how-it-works" className="text-sm font-medium hover:text-primary transition-colors">
            How It Works
          </Link>
          <a href="#" className="text-sm font-medium hover:text-primary transition-colors">
            Success Stories
          </a>
        </div>

        <div className="flex items-center space-x-4">
          {user ? (
            <Button size="sm" variant="ghost" onClick={() => signOut()}>
              Sign Out
            </Button>
          ) : (
            <>
              <Link to="/auth">
                <Button variant="ghost" size="sm">
                  Sign In
                </Button>
              </Link>
              <Link to="/auth">
                <Button size="sm" className="animate-shine">
                  Get Started
                </Button>
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
