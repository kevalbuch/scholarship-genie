
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export interface FilterValues {
  minAmount?: number;
  maxAmount?: number;
  country?: string;
  fieldOfStudy?: string;
  educationLevel?: string;
}

interface ScholarshipFiltersProps {
  onFilterChange: (filters: FilterValues) => void;
  filters: FilterValues;
}

const countries = ["USA", "UK", "Canada", "Australia", "India", "Germany", "France"];
const fieldsOfStudy = ["Computer Science", "Engineering", "Medicine", "Arts", "Business", "Law", "Sciences"];
const educationLevels = ["Undergraduate", "Masters", "PhD", "Postdoctoral"];

export function ScholarshipFilters({ onFilterChange, filters }: ScholarshipFiltersProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md space-y-6">
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label>Min Amount ($)</Label>
            <Input
              type="number"
              placeholder="Min amount"
              value={filters.minAmount || ""}
              onChange={(e) =>
                onFilterChange({
                  ...filters,
                  minAmount: e.target.value ? Number(e.target.value) : undefined,
                })
              }
            />
          </div>
          <div className="space-y-2">
            <Label>Max Amount ($)</Label>
            <Input
              type="number"
              placeholder="Max amount"
              value={filters.maxAmount || ""}
              onChange={(e) =>
                onFilterChange({
                  ...filters,
                  maxAmount: e.target.value ? Number(e.target.value) : undefined,
                })
              }
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label>Country</Label>
          <Select
            value={filters.country}
            onValueChange={(value) => onFilterChange({ ...filters, country: value })}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select country" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="">All Countries</SelectItem>
              {countries.map((country) => (
                <SelectItem key={country} value={country}>
                  {country}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label>Field of Study</Label>
          <Select
            value={filters.fieldOfStudy}
            onValueChange={(value) => onFilterChange({ ...filters, fieldOfStudy: value })}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select field of study" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="">All Fields</SelectItem>
              {fieldsOfStudy.map((field) => (
                <SelectItem key={field} value={field}>
                  {field}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label>Education Level</Label>
          <Select
            value={filters.educationLevel}
            onValueChange={(value) => onFilterChange({ ...filters, educationLevel: value })}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select education level" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="">All Levels</SelectItem>
              {educationLevels.map((level) => (
                <SelectItem key={level} value={level}>
                  {level}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <Button
          variant="outline"
          className="w-full"
          onClick={() => onFilterChange({})}
        >
          Reset Filters
        </Button>
      </div>
    </div>
  );
}
