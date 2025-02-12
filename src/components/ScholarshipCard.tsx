
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
import { ScholarshipApplicationForm } from "./ScholarshipApplicationForm";
import { useAuth } from "@/contexts/AuthContext";
import { useNavigate } from "react-router-dom";

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
  const [isOpen, setIsOpen] = useState(false);
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleApplyClick = () => {
    if (!user) {
      toast.error("Please sign in to apply for scholarships");
      navigate("/auth");
      return;
    }
    setIsOpen(true);
  };

  const handleApply = async (data: any) => {
    setIsSubmitting(true);
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));
      toast.success("Application submitted successfully!");
      setIsOpen(false);
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
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <Button 
            variant="outline" 
            className="hover:bg-primary hover:text-white transition-all"
            onClick={handleApplyClick}
          >
            Apply Now
          </Button>
          <DialogContent className="sm:max-w-[800px] max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>Apply for {title}</DialogTitle>
              <DialogDescription>
                Submit your application to {organization}
              </DialogDescription>
            </DialogHeader>
            <div className="py-4">
              <div className="space-y-4 mb-6">
                <div className="flex justify-between items-center p-4 bg-muted rounded-lg">
                  <div>
                    <p className="font-medium">Scholarship Details</p>
                    <p className="text-sm text-muted-foreground mt-1">Amount: ${amount}</p>
                    <p className="text-sm text-muted-foreground">Deadline: {deadline}</p>
                  </div>
                </div>
                <p className="text-sm">{description}</p>
              </div>
              <ScholarshipApplicationForm onSubmit={handleApply} isSubmitting={isSubmitting} />
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}
