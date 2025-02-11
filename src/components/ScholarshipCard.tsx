
import { Button } from "@/components/ui/button";
import { Calendar, DollarSign } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useState } from "react";
import { toast } from "sonner";

interface ScholarshipCardProps {
  title: string;
  amount: string;
  deadline: string;
  organization: string;
  description: string;
}

export function ScholarshipCard({
  title,
  amount,
  deadline,
  organization,
  description,
}: ScholarshipCardProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleApply = async () => {
    setIsSubmitting(true);
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));
      toast.success("Application submitted successfully!");
    } catch (error) {
      toast.error("Failed to submit application. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="glass-card hover-card rounded-xl p-6">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <p className="text-sm text-muted-foreground">{organization}</p>
        </div>
        <span className="flex items-center text-lg font-bold text-primary">
          <DollarSign className="h-5 w-5 mr-1" />
          {amount}
        </span>
      </div>
      
      <p className="text-sm mb-4 line-clamp-2">{description}</p>
      
      <div className="flex items-center justify-between">
        <div className="flex items-center text-sm text-muted-foreground">
          <Calendar className="h-4 w-4 mr-1" />
          Deadline: {deadline}
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline" className="hover:bg-primary hover:text-white transition-all">
              Apply Now
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Apply for {title}</DialogTitle>
              <DialogDescription>
                Submit your application to {organization}
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="space-y-4">
                <p className="text-sm">
                  Scholarship Amount: ${amount}
                </p>
                <p className="text-sm">
                  Application Deadline: {deadline}
                </p>
                <p className="text-sm">
                  {description}
                </p>
              </div>
              <div className="flex justify-end gap-4">
                <Button
                  variant="outline"
                  onClick={() => toast.info("Application saved as draft")}
                >
                  Save as Draft
                </Button>
                <Button
                  onClick={handleApply}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Submit Application"}
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}
