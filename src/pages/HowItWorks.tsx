
import { Navbar } from "@/components/Navbar";
import { ArrowRight, CheckCircle2, Search, FileText, Bell, Star } from "lucide-react";

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
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary/20" />

          {/* Timeline items */}
          <div className="space-y-24">
            {/* Step 1 */}
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

            {/* Step 2 */}
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

            {/* Step 3 */}
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

            {/* Step 4 */}
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

            {/* Step 5 */}
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

            {/* Step 6 */}
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

        <div className="mt-24 text-center animate-fade-in" style={{ animationDelay: '1400ms' }}>
          <h2 className="text-2xl font-semibold mb-4">Ready to Start Your Journey?</h2>
          <p className="text-muted-foreground mb-8">
            Join thousands of students who have already found their perfect scholarship match
          </p>
          <button className="bg-primary text-white px-8 py-3 rounded-full hover:bg-primary/90 transition-all animate-shine">
            Browse Scholarships
          </button>
        </div>
      </main>
    </div>
  );
}
