import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
  } from "@/components/ui/sidebar"
import { useSession } from "next-auth/react";
import { useState, useEffect } from "react";

interface SavedMindmap {
  id: string;
  title: string;
  youtubeUrl: string;
  createdAt: string;
}

export function AppSidebar() {
  const { data: session } = useSession();
  const [mindmaps, setMindmaps] = useState<SavedMindmap[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (session?.user?.email) {
      fetchSavedMindmaps();
    }
  }, [session]);

  const fetchSavedMindmaps = async () => {
    if (!session?.user?.email) return;
    
    setLoading(true);
    try {
      const response = await fetch(`/api/mindmaps?email=${encodeURIComponent(session.user.email)}`);
      if (response.ok) {
        const data = await response.json();
        setMindmaps(data);
      }
    } catch (error) {
      console.error("Error fetching mindmaps:", error);
    } finally {
      setLoading(false);
    }
  };

  if (!session) {
    return null;
  }

  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Saved Mindmaps</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
            
              {!loading && mindmaps.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={`/mindmap?id=${item.id}`}>
                      <span>{item.title}</span>
                      <span>{item.youtubeUrl}</span>
                      <span>{new Date(item.createdAt).toLocaleDateString()}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}