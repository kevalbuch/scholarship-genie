
import { useEffect, useState } from "react";
import { SearchBar } from "@/components/SearchBar";
import { ScholarshipCard } from "@/components/ScholarshipCard";
import { Navbar } from "@/components/Navbar";
import { Filter, GraduationCap, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScholarshipFilters, FilterValues } from "@/components/ScholarshipFilters";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

interface Scholarship {
  id: string;
  title: string;
  amount: number;
  deadline: string;
  organization: string;
  description: string;
  country?: string;
  field_of_study?: string;
  education_level?: string;
}

export default function BrowseScholarships() {
  const [showFilters, setShowFilters] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [filters, setFilters] = useState<FilterValues>({});
  const [scholarships, setScholarships] = useState<Scholarship[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchScholarships();
  }, [searchQuery, filters]);

  const fetchScholarships = async () => {
    try {
      setLoading(true);
      let query = supabase
        .from("scholarships")
        .select()
        .eq("status", "active");

      // Apply search
      if (searchQuery) {
        query = query.or(
          `title.ilike.%${searchQuery}%,description.ilike.%${searchQuery}%`
        );
      }

      // Apply filters
      if (filters.minAmount) {
        query = query.gte("amount", filters.minAmount);
      }
      if (filters.maxAmount) {
        query = query.lte("amount", filters.maxAmount);
      }
      if (filters.country) {
        query = query.eq("country", filters.country);
      }
      if (filters.fieldOfStudy) {
        query = query.eq("field_of_study", filters.fieldOfStudy);
      }
      if (filters.educationLevel) {
        query = query.eq("education_level", filters.educationLevel);
      }

      const { data, error } = await query;

      if (error) {
        throw error;
      }

      setScholarships(data || []);
    } catch (error) {
      console.error("Error fetching scholarships:", error);
      toast.error("Failed to fetch scholarships. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const handleFilterChange = (newFilters: FilterValues) => {
    setFilters(newFilters);
  };

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
          <SearchBar onSearch={handleSearch} />
        </div>

        <div className="flex justify-between items-center mb-8 mt-12">
          <h2 className="text-2xl font-semibold">
            {loading ? "Loading..." : `${scholarships.length} Scholarships Found`}
          </h2>
          <Button
            variant="outline"
            className="flex items-center gap-2"
            onClick={() => setShowFilters(!showFilters)}
          >
            <Filter className="h-4 w-4" />
            {showFilters ? "Hide Filters" : "Show Filters"}
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {showFilters && (
            <div className="lg:col-span-1">
              <ScholarshipFilters
                filters={filters}
                onFilterChange={handleFilterChange}
              />
            </div>
          )}
          
          <div className={`${showFilters ? "lg:col-span-3" : "lg:col-span-4"}`}>
            {loading ? (
              <div className="flex justify-center items-center h-64">
                <Loader2 className="h-8 w-8 animate-spin text-primary" />
              </div>
            ) : scholarships.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-lg text-muted-foreground">
                  No scholarships found matching your criteria.
                </p>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                {scholarships.map((scholarship) => (
                  <ScholarshipCard
                    key={scholarship.id}
                    title={scholarship.title}
                    amount={scholarship.amount.toString()}
                    deadline={new Date(scholarship.deadline).toLocaleDateString()}
                    organization={scholarship.organization}
                    description={scholarship.description}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
