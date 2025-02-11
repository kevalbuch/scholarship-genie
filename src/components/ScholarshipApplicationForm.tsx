
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Upload, Loader2 } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { supabase } from "@/integrations/supabase/client";

interface ApplicationFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  currentSchool: string;
  gpa: string;
  graduationYear: string;
  essay: string;
}

export function ScholarshipApplicationForm({ onSubmit, isSubmitting }: { 
  onSubmit: (data: ApplicationFormData) => void;
  isSubmitting: boolean;
}) {
  const [files, setFiles] = useState<File[]>([]);
  const { user, profile } = useAuth();
  const form = useForm<ApplicationFormData>();

  useEffect(() => {
    if (profile) {
      form.reset({
        firstName: profile.first_name || "",
        lastName: profile.last_name || "",
        email: profile.email || user?.email || "",
        phone: profile.phone || "",
        currentSchool: profile.current_school || "",
        gpa: profile.gpa || "",
        graduationYear: profile.graduation_year || "",
        essay: ""
      });
    }
  }, [profile, user]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFiles(Array.from(e.target.files));
    }
  };

  const handleSubmit = async (data: ApplicationFormData) => {
    // Update profile with the latest data
    if (user) {
      const { error } = await supabase
        .from('profiles')
        .upsert({
          id: user.id,
          first_name: data.firstName,
          last_name: data.lastName,
          email: data.email,
          phone: data.phone,
          current_school: data.currentSchool,
          gpa: data.gpa,
          graduation_year: data.graduationYear,
        });

      if (error) {
        console.error('Error updating profile:', error);
      }
    }

    onSubmit(data);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>First Name</FormLabel>
                <FormControl>
                  <Input placeholder="John" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="lastName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Last Name</FormLabel>
                <FormControl>
                  <Input placeholder="Doe" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input type="email" placeholder="john@example.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone Number</FormLabel>
                <FormControl>
                  <Input type="tel" placeholder="+1 (555) 000-0000" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          <FormField
            control={form.control}
            name="currentSchool"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Current School</FormLabel>
                <FormControl>
                  <Input placeholder="University of..." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="gpa"
            render={({ field }) => (
              <FormItem>
                <FormLabel>GPA</FormLabel>
                <FormControl>
                  <Input type="number" step="0.01" min="0" max="4" placeholder="3.50" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="graduationYear"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Expected Graduation Year</FormLabel>
                <FormControl>
                  <Input type="number" min="2024" max="2030" placeholder="2025" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="essay"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Personal Statement</FormLabel>
              <FormControl>
                <Textarea 
                  placeholder="Tell us about yourself and why you deserve this scholarship..." 
                  className="min-h-[200px]"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="space-y-4">
          <FormLabel>Supporting Documents</FormLabel>
          <div className="border-2 border-dashed border-gray-200 rounded-lg p-6 text-center">
            <Input
              type="file"
              multiple
              className="hidden"
              id="file-upload"
              onChange={handleFileChange}
              accept=".pdf,.doc,.docx"
            />
            <label
              htmlFor="file-upload"
              className="cursor-pointer flex flex-col items-center space-y-2"
            >
              <Upload className="h-8 w-8 text-gray-400" />
              <span className="text-sm text-gray-500">
                Upload transcripts, recommendations, or other documents
              </span>
              <span className="text-xs text-gray-400">
                (PDF, DOC, DOCX up to 10MB each)
              </span>
            </label>
          </div>
          {files.length > 0 && (
            <ul className="text-sm space-y-2">
              {files.map((file, index) => (
                <li key={index} className="text-gray-600">
                  {file.name} ({(file.size / 1024 / 1024).toFixed(2)} MB)
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="flex justify-end space-x-4">
          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Submitting...
              </>
            ) : (
              "Submit Application"
            )}
          </Button>
        </div>
      </form>
    </Form>
  );
}
