import { CodeBlock } from "./code-block";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Code, Eye } from "lucide-react";

interface ExampleCardProps {
  title: string;
  description: string;
  code: string;
  lang?: string;
  filename?: string;
  preview: React.ReactNode;
  tags?: string[];
}

export function ExampleCard({
  title,
  description,
  code,
  lang = "tsx",
  filename,
  preview,
  tags,
}: ExampleCardProps) {
  return (
    <Card className="overflow-hidden">
      <CardHeader>
        <div className="flex items-start justify-between gap-4">
          <div>
            <CardTitle className="text-xl">{title}</CardTitle>
            <CardDescription className="mt-1.5">{description}</CardDescription>
          </div>
          {tags && tags.length > 0 && (
            <div className="flex flex-wrap gap-1.5">
              {tags.map((tag) => (
                <Badge key={tag} variant="secondary" className="text-xs">
                  {tag}
                </Badge>
              ))}
            </div>
          )}
        </div>
      </CardHeader>
      <CardContent className="p-0">
        <Tabs defaultValue="preview" className="w-full">
          <div className="border-t border-b bg-muted/50 px-4">
            <TabsList className="h-12 bg-transparent p-0 gap-4">
              <TabsTrigger
                value="preview"
                className="data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none px-2 pb-3 pt-3"
              >
                <Eye className="h-4 w-4 mr-2" />
                Preview
              </TabsTrigger>
              <TabsTrigger
                value="code"
                className="data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none px-2 pb-3 pt-3"
              >
                <Code className="h-4 w-4 mr-2" />
                Code
              </TabsTrigger>
            </TabsList>
          </div>
          <TabsContent value="preview" className="m-0">
            <div className="p-6 min-h-[200px] flex items-center justify-center">
              {preview}
            </div>
          </TabsContent>
          <TabsContent value="code" className="m-0">
            <CodeBlock code={code} lang={lang} filename={filename} />
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}

// A simpler variant for side-by-side display
interface SideBySideExampleProps {
  title: string;
  description: string;
  code: string;
  lang?: string;
  filename?: string;
  preview: React.ReactNode;
}

export function SideBySideExample({
  title,
  description,
  code,
  lang = "tsx",
  filename,
  preview,
}: SideBySideExampleProps) {
  return (
    <div className="space-y-4">
      <div>
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-muted-foreground text-sm mt-1">{description}</p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="min-h-[200px] p-6 border rounded-lg flex items-center justify-center bg-muted/30">
          {preview}
        </div>
        <CodeBlock code={code} lang={lang} filename={filename} />
      </div>
    </div>
  );
}
