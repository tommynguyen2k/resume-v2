import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, X, Minus } from "lucide-react";
import { FadeInOnScroll } from "@/components/motion/fade-in";

const features = [
  {
    name: "Bundle Size",
    zustand: { value: "~1KB", rating: "good" },
    redux: { value: "~12KB", rating: "neutral" },
    context: { value: "0KB", rating: "good" },
  },
  {
    name: "Boilerplate",
    zustand: { value: "Minimal", rating: "good" },
    redux: { value: "Moderate", rating: "neutral" },
    context: { value: "Minimal", rating: "good" },
  },
  {
    name: "DevTools",
    zustand: { value: "Yes", rating: "good" },
    redux: { value: "Excellent", rating: "good" },
    context: { value: "Limited", rating: "neutral" },
  },
  {
    name: "TypeScript",
    zustand: { value: "Excellent", rating: "good" },
    redux: { value: "Excellent", rating: "good" },
    context: { value: "Good", rating: "good" },
  },
  {
    name: "Middleware",
    zustand: { value: "Yes", rating: "good" },
    redux: { value: "Extensive", rating: "good" },
    context: { value: "No", rating: "bad" },
  },
  {
    name: "Persistence",
    zustand: { value: "Built-in", rating: "good" },
    redux: { value: "Plugin", rating: "neutral" },
    context: { value: "Manual", rating: "bad" },
  },
  {
    name: "Learning Curve",
    zustand: { value: "Easy", rating: "good" },
    redux: { value: "Steep", rating: "bad" },
    context: { value: "Easy", rating: "good" },
  },
  {
    name: "Best For",
    zustand: { value: "Most apps", rating: "neutral" },
    redux: { value: "Complex apps", rating: "neutral" },
    context: { value: "Simple state", rating: "neutral" },
  },
];

function RatingIcon({ rating }: { rating: string }) {
  if (rating === "good") return <Check className="h-4 w-4 text-green-500" />;
  if (rating === "bad") return <X className="h-4 w-4 text-red-500" />;
  return <Minus className="h-4 w-4 text-yellow-500" />;
}

export function ComparisonTable() {
  return (
    <FadeInOnScroll>
      <Card>
        <CardHeader>
          <CardTitle>State Management Comparison</CardTitle>
          <CardDescription>
            Quick comparison of popular state management solutions for React
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b">
                  <th className="py-3 px-4 text-left font-medium">Feature</th>
                  <th className="py-3 px-4 text-left font-medium">
                    <div className="flex items-center gap-2">
                      Zustand
                      <Badge variant="secondary" className="text-xs">
                        Recommended
                      </Badge>
                    </div>
                  </th>
                  <th className="py-3 px-4 text-left font-medium">
                    Redux Toolkit
                  </th>
                  <th className="py-3 px-4 text-left font-medium">
                    Context API
                  </th>
                </tr>
              </thead>
              <tbody>
                {features.map((feature) => (
                  <tr key={feature.name} className="border-b last:border-0">
                    <td className="py-3 px-4 font-medium">{feature.name}</td>
                    <td className="py-3 px-4">
                      <div className="flex items-center gap-2">
                        <RatingIcon rating={feature.zustand.rating} />
                        {feature.zustand.value}
                      </div>
                    </td>
                    <td className="py-3 px-4">
                      <div className="flex items-center gap-2">
                        <RatingIcon rating={feature.redux.rating} />
                        {feature.redux.value}
                      </div>
                    </td>
                    <td className="py-3 px-4">
                      <div className="flex items-center gap-2">
                        <RatingIcon rating={feature.context.rating} />
                        {feature.context.value}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </FadeInOnScroll>
  );
}
