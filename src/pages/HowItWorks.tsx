import { Navbar } from "@/components/Navbar";
import { ArrowRight, CheckCircle2, Search, FileText, Bell, Star, Book, Users, Trophy, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube } from "lucide-react";
import { Link } from "react-router-dom";

export default function HowItWorks() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      <Navbar />
      
      <main className="container mx-auto px-4 pt-32 pb-20">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl font-bold mb-6">How VidyaRatan Works</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Your journey to finding and securing scholarships made simple
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary/20" />

          <div className="space-y-24">
            <div className="relative flex items-center justify-center animate-fade-in" style={{ animationDelay: '200ms' }}>
              <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-primary rounded-full flex items-center justify-center z-10">
                <Search className="h-6 w-6 text-white" />
              </div>
              <div className="w-1/2 pr-16 text-right">
                <h3 className="text-xl font-semibold mb-3">Search & Browse</h3>
                <p className="text-muted-foreground">
                  Explore thousands of scholarships filtered by your preferences and qualifications
                </p>
              </div>
              <div className="w-1/2 pl-16" />
            </div>

            <div className="relative flex items-center justify-center animate-fade-in" style={{ animationDelay: '400ms' }}>
              <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-primary rounded-full flex items-center justify-center z-10">
                <CheckCircle2 className="h-6 w-6 text-white" />
              </div>
              <div className="w-1/2 pr-16" />
              <div className="w-1/2 pl-16">
                <h3 className="text-xl font-semibold mb-3">Check Eligibility</h3>
                <p className="text-muted-foreground">
                  Verify your eligibility and see your chances of success for each scholarship
                </p>
              </div>
            </div>

            <div className="relative flex items-center justify-center animate-fade-in" style={{ animationDelay: '600ms' }}>
              <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-primary rounded-full flex items-center justify-center z-10">
                <FileText className="h-6 w-6 text-white" />
              </div>
              <div className="w-1/2 pr-16 text-right">
                <h3 className="text-xl font-semibold mb-3">Prepare Documents</h3>
                <p className="text-muted-foreground">
                  Get guidance on required documents and essay writing assistance
                </p>
              </div>
              <div className="w-1/2 pl-16" />
            </div>

            <div className="relative flex items-center justify-center animate-fade-in" style={{ animationDelay: '800ms' }}>
              <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-primary rounded-full flex items-center justify-center z-10">
                <ArrowRight className="h-6 w-6 text-white" />
              </div>
              <div className="w-1/2 pr-16" />
              <div className="w-1/2 pl-16">
                <h3 className="text-xl font-semibold mb-3">Apply</h3>
                <p className="text-muted-foreground">
                  Submit your applications with our streamlined one-click process
                </p>
              </div>
            </div>

            <div className="relative flex items-center justify-center animate-fade-in" style={{ animationDelay: '1000ms' }}>
              <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-primary rounded-full flex items-center justify-center z-10">
                <Bell className="h-6 w-6 text-white" />
              </div>
              <div className="w-1/2 pr-16 text-right">
                <h3 className="text-xl font-semibold mb-3">Track Progress</h3>
                <p className="text-muted-foreground">
                  Monitor your applications and receive updates on their status
                </p>
              </div>
              <div className="w-1/2 pl-16" />
            </div>

            <div className="relative flex items-center justify-center animate-fade-in" style={{ animationDelay: '1200ms' }}>
              <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-primary rounded-full flex items-center justify-center z-10">
                <Star className="h-6 w-6 text-white" />
              </div>
              <div className="w-1/2 pr-16" />
              <div className="w-1/2 pl-16">
                <h3 className="text-xl font-semibold mb-3">Succeed</h3>
                <p className="text-muted-foreground">
                  Get selected and receive guidance on next steps after winning
                </p>
              </div>
            </div>
          </div>
        </div>

        <section className="mt-32 animate-fade-in" style={{ animationDelay: '1600ms' }}>
          <h2 className="text-3xl font-bold text-center mb-16">Why Choose VidyaRatan?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 rounded-xl bg-white shadow-lg hover:shadow-xl transition-all">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Book className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Comprehensive Database</h3>
              <p className="text-muted-foreground">Access thousands of verified scholarships from trusted organizations worldwide.</p>
            </div>
            <div className="p-6 rounded-xl bg-white shadow-lg hover:shadow-xl transition-all">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Expert Guidance</h3>
              <p className="text-muted-foreground">Get personalized support from our team of education consultants.</p>
            </div>
            <div className="p-6 rounded-xl bg-white shadow-lg hover:shadow-xl transition-all">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Trophy className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Proven Success</h3>
              <p className="text-muted-foreground">Join thousands of successful students who secured their dream scholarships.</p>
            </div>
          </div>
        </section>

        <section className="mt-32 animate-fade-in" style={{ animationDelay: '1800ms' }}>
          <div className="bg-primary/5 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl font-bold text-center mb-8">Success Stories</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3].map((_, index) => (
                <div key={index} className="bg-white p-6 rounded-xl">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-primary/20" />
                    <div>
                      <h4 className="font-semibold">Student Name</h4>
                      <p className="text-sm text-muted-foreground">University Name</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground">"VidyaRatan helped me secure a full scholarship for my dream university. The process was smooth and the guidance was invaluable."</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-32 animate-fade-in" style={{ animationDelay: '2000ms' }}>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <h3 className="text-4xl font-bold text-primary mb-2">10K+</h3>
              <p className="text-muted-foreground">Active Scholarships</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-primary mb-2">50K+</h3>
              <p className="text-muted-foreground">Success Stories</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-primary mb-2">100M+</h3>
              <p className="text-muted-foreground">Scholarship Amount</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-primary mb-2">95%</h3>
              <p className="text-muted-foreground">Success Rate</p>
            </div>
          </div>
        </section>

        <div className="mt-24 text-center animate-fade-in" style={{ animationDelay: '2200ms' }}>
          <h2 className="text-2xl font-semibold mb-4">Ready to Start Your Journey?</h2>
          <p className="text-muted-foreground mb-8">
            Join thousands of students who have already found their perfect scholarship match
          </p>
          <Link 
            to="/browse-scholarships"
            className="bg-primary text-white px-8 py-3 rounded-full hover:bg-primary/90 transition-all animate-shine inline-block"
          >
            Browse Scholarships
          </Link>
        </div>
      </main>

      <footer className="bg-gray-900 text-white pt-16 pb-8">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <h3 className="text-xl font-semibold mb-4">About VidyaRatan</h3>
              <p className="text-gray-400 mb-4">
                Empowering students worldwide to achieve their educational dreams through comprehensive scholarship solutions.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Twitter className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Youtube className="h-5 w-5" />
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link to="/" className="text-gray-400 hover:text-white transition-colors">Home</Link></li>
                <li><Link to="/browse-scholarships" className="text-gray-400 hover:text-white transition-colors">Browse Scholarships</Link></li>
                <li><Link to="/how-it-works" className="text-gray-400 hover:text-white transition-colors">How It Works</Link></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Success Stories</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Blog</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Application Guide</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">FAQs</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contact Support</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
              <ul className="space-y-4">
                <li className="flex items-center text-gray-400">
                  <Mail className="h-5 w-5 mr-2" />
                  support@vidyaratan.com
                </li>
                <li className="flex items-center text-gray-400">
                  <Phone className="h-5 w-5 mr-2" />
                  +1 (555) 123-4567
                </li>
                <li className="flex items-center text-gray-400">
                  <MapPin className="h-5 w-5 mr-2" />
                  123 Education Street, Learning City, 12345
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm">
                © 2024 VidyaRatan. All rights reserved.
              </p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Privacy Policy</a>
                <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Terms of Service</a>
                <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Cookie Policy</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
