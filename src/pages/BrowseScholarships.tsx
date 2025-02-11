
import { SearchBar } from "@/components/SearchBar";
import { ScholarshipCard } from "@/components/ScholarshipCard";
import { Navbar } from "@/components/Navbar";
import { Filter, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";

const scholarships = [
  {
    title: "Global Excellence Scholarship",
    amount: "50,000",
    deadline: "Aug 30, 2024",
    organization: "International Education Fund",
    description: "Full scholarship for outstanding students pursuing undergraduate studies in any field.",
  },
  {
    title: "Tech Innovation Grant",
    amount: "25,000",
    deadline: "Sep 15, 2024",
    organization: "Future Technologies Foundation",
    description: "Supporting next-generation leaders in computer science and engineering.",
  },
  {
    title: "Arts & Humanities Fellowship",
    amount: "30,000",
    deadline: "Oct 1, 2024",
    organization: "Creative Minds Institute",
    description: "For students excelling in literature, fine arts, or cultural studies.",
  },
  {
    title: "Women in STEM Scholarship",
    amount: "40,000",
    deadline: "Sep 30, 2024",
    organization: "Women's Tech Alliance",
    description: "Empowering women pursuing careers in Science, Technology, Engineering, and Mathematics.",
  },
  {
    title: "Social Impact Scholarship",
    amount: "20,000",
    deadline: "Oct 15, 2024",
    organization: "Community Change Foundation",
    description: "For students committed to making positive social change through their studies and work.",
  },
  {
    title: "Environmental Studies Grant",
    amount: "35,000",
    deadline: "Sep 20, 2024",
    organization: "Green Future Institute",
    description: "Supporting research and studies in environmental science and sustainability.",
  },
];

export default function BrowseScholarships() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      <Navbar />
      
      <main className="container mx-auto px-4 pt-32 pb-20">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-6 flex items-center justify-center gap-3">
            <GraduationCap className="h-8 w-8 text-primary" />
            Browse Scholarships
          </h1>
          <p className="text-lg text-muted-foreground mb-8">
            Discover opportunities that match your profile and aspirations
          </p>
          <SearchBar />
        </div>

        <div className="flex justify-between items-center mb-8 mt-12">
          <h2 className="text-2xl font-semibold">Available Scholarships</h2>
          <Button variant="outline" className="flex items-center gap-2">
            <Filter className="h-4 w-4" />
            Filter Results
          </Button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {scholarships.map((scholarship, index) => (
            <ScholarshipCard key={index} {...scholarship} />
          ))}
        </div>
      </main>
    </div>
  );
}
