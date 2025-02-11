
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

export function SearchBar() {
  return (
    <div className="w-full max-w-3xl mx-auto">
      <div className="glass-card rounded-full p-2 flex items-center">
        <Input
          type="text"
          placeholder="Search scholarships by keyword, country, or field of study..."
          className="border-0 bg-transparent focus:ring-0 text-lg placeholder:text-gray-400 flex-1"
        />
        <Button size="lg" className="rounded-full px-8 animate-shine">
          <Search className="mr-2 h-4 w-4" />
          Search
        </Button>
      </div>
    </div>
  );
}
