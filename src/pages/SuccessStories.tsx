
import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Award,
  GraduationCap,
  Heart,
  MapPin,
  Quote,
  School,
  Star,
  Users,
} from "lucide-react";
import { Link } from "react-router-dom";

interface Testimonial {
  id: number;
  name: string;
  image: string;
  university: string;
  location: string;
  quote: string;
  scholarship: string;
  degree: string;
  year: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Chen",
    image: "/placeholder.svg",
    university: "Stanford University",
    location: "California, USA",
    quote: "The VidyaRatan scholarship opened doors I never thought possible. Today, I'm pursuing my dreams in Computer Science at Stanford.",
    scholarship: "Global Tech Leaders Scholarship",
    degree: "Computer Science",
    year: "2023"
  },
  {
    id: 2,
    name: "Raj Patel",
    image: "/placeholder.svg",
    university: "Oxford University",
    location: "Oxford, UK",
    quote: "From a small town in India to Oxford University - VidyaRatan made this incredible journey possible.",
    scholarship: "International Excellence Award",
    degree: "Economics",
    year: "2022"
  },
  {
    id: 3,
    name: "Maria Rodriguez",
    image: "/placeholder.svg",
    university: "MIT",
    location: "Massachusetts, USA",
    quote: "The mentorship and financial support through VidyaRatan transformed my academic journey completely.",
    scholarship: "Women in STEM Scholarship",
    degree: "Mechanical Engineering",
    year: "2023"
  }
];

const impactStats = [
  {
    icon: <Users className="h-6 w-6 text-primary" />,
    value: "10,000+",
    label: "Students Supported"
  },
  {
    icon: <School className="h-6 w-6 text-primary" />,
    value: "500+",
    label: "Partner Universities"
  },
  {
    icon: <GraduationCap className="h-6 w-6 text-primary" />,
    value: "95%",
    label: "Graduation Rate"
  },
  {
    icon: <Award className="h-6 w-6 text-primary" />,
    value: "$50M+",
    label: "Scholarships Awarded"
  }
];

export default function SuccessStories() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-500">
            Success Stories
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover how VidyaRatan scholarships have transformed lives and empowered students worldwide to achieve their academic dreams.
          </p>
        </div>
      </section>

      {/* Impact Statistics */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">Our Global Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {impactStats.map((stat, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto">{stat.icon}</div>
                  <CardTitle className="text-4xl font-bold text-primary">
                    {stat.value}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Stories */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">Featured Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.id} className="hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div>
                      <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                      <CardDescription className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        {testimonial.location}
                      </CardDescription>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <School className="h-4 w-4" />
                      {testimonial.university}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <GraduationCap className="h-4 w-4" />
                      {testimonial.degree}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="relative">
                    <Quote className="h-8 w-8 text-primary/20 absolute -top-4 -left-4" />
                    <p className="text-muted-foreground italic relative z-10 pt-4">
                      "{testimonial.quote}"
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics and Recognition */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">Recognition & Achievement</h2>
              <p className="text-muted-foreground">
                Our scholarship recipients have gone on to achieve remarkable success in their academic and professional careers. Many have been recognized with prestigious awards and have made significant contributions to their fields.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-2">
                  <Star className="h-5 w-5 text-primary" />
                  <span>90% Employment Rate</span>
                </div>
                <div className="flex items-center gap-2">
                  <Heart className="h-5 w-5 text-primary" />
                  <span>85% Alumni Giving</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="h-5 w-5 text-primary" />
                  <span>200+ PhD Scholars</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-primary" />
                  <span>Global Network</span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img src="/placeholder.svg" alt="Student Success" className="rounded-lg shadow-lg" />
              <img src="/placeholder.svg" alt="Graduation Ceremony" className="rounded-lg shadow-lg mt-8" />
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Start Your Success Story</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Join thousands of students who have transformed their lives through VidyaRatan scholarships. Your journey to academic excellence starts here.
          </p>
          <div className="flex gap-4 justify-center">
            <Link to="/browse-scholarships">
              <Button size="lg" variant="secondary">
                Browse Scholarships
              </Button>
            </Link>
            <Link to="/auth">
              <Button size="lg" variant="outline" className="bg-white text-primary hover:bg-white/90">
                Apply Now
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
