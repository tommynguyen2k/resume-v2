import { TopicSidebar, TopicMobileNav } from "@/components/topic-sidebar";

export default function LearnLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col">
      <TopicSidebar />
      <div className="flex-1 flex flex-col min-h-[calc(100vh-4rem)] md:ml-64">
        <TopicMobileNav />
        <div className="flex-1 container py-6 md:py-8 px-4 md:px-8 max-w-5xl">
          {children}
        </div>
      </div>
    </div>
  );
}
