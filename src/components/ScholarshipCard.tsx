
import { Button } from "@/components/ui/button";
import { Calendar, DollarSign } from "lucide-react";

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
        <Button variant="outline" className="hover:bg-primary hover:text-white transition-all">
          Apply Now
        </Button>
      </div>
    </div>
  );
}
