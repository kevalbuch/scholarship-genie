
import { Navbar } from "@/components/Navbar";
import { SearchBar } from "@/components/SearchBar";
import { ScholarshipCard } from "@/components/ScholarshipCard";

const featuredScholarships = [
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
];

export default function Index() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      <Navbar />
      
      <main className="container mx-auto px-4 pt-32 pb-20">
        {/* Hero Section */}
        <div className="text-center mb-16 animate-float">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-500">
            Find Your Perfect Scholarship
          </h1>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Discover thousands of scholarships tailored to your academic journey.
            Let us help you achieve your educational dreams.
          </p>
          <SearchBar />
        </div>

        {/* Featured Scholarships */}
        <section className="mt-20">
          <h2 className="text-3xl font-bold mb-8 text-center">Featured Scholarships</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredScholarships.map((scholarship, index) => (
              <ScholarshipCard key={index} {...scholarship} />
            ))}
          </div>
        </section>

        {/* Stats Section */}
        <section className="mt-20 text-center">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="glass-card rounded-xl p-6">
              <h3 className="text-4xl font-bold text-primary mb-2">10,000+</h3>
              <p className="text-muted-foreground">Active Scholarships</p>
            </div>
            <div className="glass-card rounded-xl p-6">
              <h3 className="text-4xl font-bold text-primary mb-2">$50M+</h3>
              <p className="text-muted-foreground">Awarded</p>
            </div>
            <div className="glass-card rounded-xl p-6">
              <h3 className="text-4xl font-bold text-primary mb-2">50,000+</h3>
              <p className="text-muted-foreground">Success Stories</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
