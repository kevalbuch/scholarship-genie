import { Navbar } from "@/components/Navbar";
import { SearchBar } from "@/components/SearchBar";
import { ScholarshipCard } from "@/components/ScholarshipCard";
import { Button } from "@/components/ui/button";
import { Clock, Trophy, Users, MessageSquare, Calendar, Globe, BookOpen, GraduationCap, DollarSign } from "lucide-react";
import { Link } from "react-router-dom";

const featuredScholarships = [
  {
    title: "Global Excellence Scholarship",
    amount: "50,000",
    deadline: "Aug 30, 2024",
    organization: "International Education Fund",
    description: "Full scholarship for outstanding students pursuing undergraduate studies in any field.",
    daysLeft: 35,
  },
  {
    title: "Tech Innovation Grant",
    amount: "25,000",
    deadline: "Sep 15, 2024",
    organization: "Future Technologies Foundation",
    description: "Supporting next-generation leaders in computer science and engineering.",
    daysLeft: 5,
  },
  {
    title: "Arts & Humanities Fellowship",
    amount: "30,000",
    deadline: "Oct 1, 2024",
    organization: "Creative Minds Institute",
    description: "For students excelling in literature, fine arts, or cultural studies.",
    daysLeft: 15,
  },
];

const topContributors = [
  { name: "Dr. Sarah Chen", role: "Education Mentor", contributions: 156 },
  { name: "Raj Patel", role: "Scholarship Advisor", contributions: 143 },
  { name: "Maria Garcia", role: "Community Leader", contributions: 128 },
];

const upcomingWebinars = [
  { title: "How to Write a Winning Scholarship Essay", date: "Aug 25, 2024" },
  { title: "International Scholarship Opportunities", date: "Aug 28, 2024" },
  { title: "Financial Aid Workshop", date: "Sep 1, 2024" },
];

const careerGuides = [
  { country: "USA", universities: 500, scholarships: 1200 },
  { country: "UK", universities: 150, scholarships: 800 },
  { country: "Canada", universities: 100, scholarships: 600 },
  { country: "Australia", universities: 80, scholarships: 400 },
];

// Add testimonials data
const testimonials = [
  {
    name: "Priya Sharma",
    image: "/placeholder.svg",
    role: "Medical Student",
    testimonial: "Thanks to VidyaRatan, I secured a full scholarship for my medical studies. The platform made it incredibly easy to find and apply for relevant opportunities.",
    university: "AIIMS Delhi"
  },
  {
    name: "Alex Thompson",
    image: "/placeholder.svg",
    role: "Engineering Student",
    testimonial: "I found my dream scholarship through this platform. The application process was smooth, and the resources provided were invaluable.",
    university: "MIT"
  },
  {
    name: "Sarah Chen",
    image: "/placeholder.svg",
    role: "Arts Major",
    testimonial: "The personalized scholarship recommendations helped me find opportunities I wouldn't have discovered otherwise. Truly grateful!",
    university: "Royal College of Art"
  }
];

function CountdownTimer({ daysLeft }: { daysLeft: number }) {
  const getStatusColor = (days: number) => {
    if (days > 30) return "text-green-500";
    if (days > 7) return "text-yellow-500";
    return "text-red-500";
  };

  return (
    <div className={`flex items-center ${getStatusColor(daysLeft)}`}>
      <Clock className="h-4 w-4 mr-1" />
      <span className="text-sm font-medium">
        {daysLeft} {daysLeft === 1 ? "day" : "days"} left
      </span>
    </div>
  );
}

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

        {/* Featured Scholarships with Countdown - Updated Layout */}
        <section className="mt-20">
          <h2 className="text-3xl font-bold mb-8 text-center">Featured Scholarships</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredScholarships.map((scholarship, index) => (
              <div key={index} className="glass-card rounded-xl p-8 hover:shadow-xl transition-all">
                <div className="flex flex-col h-full">
                  <div className="mb-6">
                    <h3 className="text-2xl font-semibold mb-3">{scholarship.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{scholarship.organization}</p>
                    <p className="text-base mb-4">{scholarship.description}</p>
                  </div>
                  
                  <div className="mt-auto space-y-4">
                    <div className="flex items-center justify-between p-4 bg-primary/5 rounded-lg">
                      <div className="flex items-center">
                        <DollarSign className="h-5 w-5 text-primary mr-2" />
                        <span className="text-lg font-semibold">${scholarship.amount}</span>
                      </div>
                      <CountdownTimer daysLeft={scholarship.daysLeft} />
                    </div>
                    
                    <Button 
                      variant="outline" 
                      className="w-full hover:bg-primary hover:text-white transition-all"
                    >
                      Apply Now
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* New Testimonials Section */}
        <section className="mt-20">
          <h2 className="text-3xl font-bold mb-8 text-center">Success Stories</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="glass-card rounded-xl p-8 text-center">
                <div className="w-20 h-20 mx-auto mb-6 rounded-full overflow-hidden">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">{testimonial.name}</h3>
                <p className="text-primary font-medium mb-1">{testimonial.role}</p>
                <p className="text-sm text-muted-foreground mb-4">{testimonial.university}</p>
                <p className="text-sm italic">"{testimonial.testimonial}"</p>
              </div>
            ))}
          </div>
        </section>

        {/* Rest of the sections */}
        <section className="mt-20">
          <h2 className="text-3xl font-bold mb-8 text-center">Community Leaders</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {topContributors.map((contributor, index) => (
              <div key={index} className="glass-card rounded-xl p-6 text-center">
                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 flex items-center justify-center">
                  <Users className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{contributor.name}</h3>
                <p className="text-sm text-muted-foreground mb-2">{contributor.role}</p>
                <div className="flex items-center justify-center text-primary">
                  <Trophy className="h-4 w-4 mr-1" />
                  <span>{contributor.contributions} contributions</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Upcoming Webinars */}
        <section className="mt-20">
          <h2 className="text-3xl font-bold mb-8 text-center">Upcoming Webinars</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {upcomingWebinars.map((webinar, index) => (
              <div key={index} className="glass-card rounded-xl p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="font-semibold mb-2">{webinar.title}</h3>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4 mr-1" />
                      {webinar.date}
                    </div>
                  </div>
                </div>
                <Button variant="outline" className="w-full">Register Now</Button>
              </div>
            ))}
          </div>
        </section>

        {/* Study Abroad Guide */}
        <section className="mt-20">
          <h2 className="text-3xl font-bold mb-8 text-center">Study Abroad Guide</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {careerGuides.map((guide, index) => (
              <div key={index} className="glass-card rounded-xl p-6 text-center">
                <Globe className="h-8 w-8 mx-auto mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">{guide.country}</h3>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p>{guide.universities} Universities</p>
                  <p>{guide.scholarships} Scholarships</p>
                </div>
                <Button variant="ghost" className="mt-4 w-full">
                  Learn More
                </Button>
              </div>
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

      {/* Footer */}
      <footer className="bg-white border-t">
        <div className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold text-lg mb-4">About Us</h3>
              <p className="text-muted-foreground text-sm">
                Helping students achieve their educational dreams through scholarships
                and financial aid opportunities.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li><Link to="/browse-scholarships" className="text-muted-foreground hover:text-primary">Browse Scholarships</Link></li>
                <li><Link to="/how-it-works" className="text-muted-foreground hover:text-primary">How It Works</Link></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary">Success Stories</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary">FAQs</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Resources</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-muted-foreground hover:text-primary">Scholarship Guide</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary">Application Tips</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary">Document Checklist</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary">Essay Writing Help</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Contact</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-muted-foreground hover:text-primary">Contact Support</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary">Feedback</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary">Report an Issue</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary">Partner with Us</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t text-center text-sm text-muted-foreground">
            <p>&copy; 2024 VidyaRatan. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
