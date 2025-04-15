// app/mindmap/page.tsx
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth"; // Adjust path as needed
import { redirect } from "next/navigation";
import { AppSidebar } from "@/components/app-sidebar-ssr"; // Adjust path if needed
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { getUserMindmaps } from '@/lib/getMindmaps';
import ModeSelector from "@/components/ModeSelector";
import { TaskadeSidebar } from "@/components/TaskadeSidebar";
export default async function MindmapPage() {
  const session = await getServerSession(authOptions);
  
  if (!session?.user?.email) {
    redirect("/api/auth/signin"); // Redirect to login
  }
  const mindmaps = await getUserMindmaps(session.user.email);
  console.log(session, mindmaps);
  return (
    <div className="flex h-screen">
          <div>
            {session && (
            <SidebarProvider>
              <AppSidebar mindmaps={mindmaps}/>
              <SidebarTrigger />
            </SidebarProvider>
          )}</div>
        <div className="flex-1 text-center">
     
            <h1 className="flex justify-center text-3xl font-bold items-center tracking-tighter sm:text-4xl md:text-5xl mb-6">
                Youtube to <span className="text-purple-200">MindMap</span>
            </h1>
            <ModeSelector session={session} />
            </div>
            <TaskadeSidebar/>
    </div>
          
    
  );
}
