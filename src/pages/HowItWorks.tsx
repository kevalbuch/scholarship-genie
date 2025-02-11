
import { Navbar } from "@/components/Navbar";
import { ArrowRight, CheckCircle2, Search, FileText, Bell, Star } from "lucide-react";

export default function HowItWorks() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      <Navbar />
      
      <main className="container mx-auto px-4 pt-32 pb-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-6">How VidyaRatan Works</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Your journey to finding and securing scholarships made simple
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Step 1 */}
          <div className="glass-card p-6 rounded-xl hover-card">
            <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
              <Search className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Search & Browse</h3>
            <p className="text-muted-foreground">
              Explore thousands of scholarships filtered by your preferences and qualifications
            </p>
          </div>

          {/* Step 2 */}
          <div className="glass-card p-6 rounded-xl hover-card">
            <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
              <CheckCircle2 className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Check Eligibility</h3>
            <p className="text-muted-foreground">
              Verify your eligibility and see your chances of success for each scholarship
            </p>
          </div>

          {/* Step 3 */}
          <div className="glass-card p-6 rounded-xl hover-card">
            <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
              <FileText className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Prepare Documents</h3>
            <p className="text-muted-foreground">
              Get guidance on required documents and essay writing assistance
            </p>
          </div>

          {/* Step 4 */}
          <div className="glass-card p-6 rounded-xl hover-card">
            <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
              <ArrowRight className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Apply</h3>
            <p className="text-muted-foreground">
              Submit your applications with our streamlined one-click process
            </p>
          </div>

          {/* Step 5 */}
          <div className="glass-card p-6 rounded-xl hover-card">
            <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
              <Bell className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Track Progress</h3>
            <p className="text-muted-foreground">
              Monitor your applications and receive updates on their status
            </p>
          </div>

          {/* Step 6 */}
          <div className="glass-card p-6 rounded-xl hover-card">
            <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
              <Star className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Succeed</h3>
            <p className="text-muted-foreground">
              Get selected and receive guidance on next steps after winning
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
