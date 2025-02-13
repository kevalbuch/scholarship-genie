
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { useState } from "react";

interface SearchBarProps {
  onSearch?: (query: string) => void;
}

export function SearchBar({ onSearch }: SearchBarProps) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch?.(searchTerm);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);
    onSearch?.(value);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-3xl mx-auto">
      <div className="glass-card rounded-full p-2 flex items-center">
        <Input
          type="text"
          placeholder="Search scholarships by keyword, country, or field of study..."
          className="border-0 bg-transparent focus:ring-0 text-lg placeholder:text-gray-400 flex-1"
          value={searchTerm}
          onChange={handleChange}
        />
        <Button type="submit" size="lg" className="rounded-full px-8 animate-shine">
          <Search className="mr-2 h-4 w-4" />
          Search
        </Button>
      </div>
    </form>
  );
}
