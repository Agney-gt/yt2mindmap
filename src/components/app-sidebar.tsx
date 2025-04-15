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
import Link from "next/link";
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
  }, [session?.user?.email]);

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
    <Sidebar id="left-sidebar" >
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Saved Mindmaps</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
            
              {!loading && mindmaps.map((item) => (
                <SidebarMenuItem key={item.title} className="my-2">
                  <SidebarMenuButton asChild>
                  <div className="flex justify-between items-center w-full">
                    <Link href={`/mindmap?id=${item.id}`}>
                      <span>{item.title}</span>
                      <span>{item.youtubeUrl}</span>
                      <span>{new Date(item.createdAt).toLocaleDateString()}</span>
                    </Link>
                    <button
                      onClick={async (e) => {
                        e.preventDefault(); // prevent Link from being triggered
                        const confirmed = confirm("Are you sure you want to delete this mindmap?");
                        if (!confirmed) return;

                        try {
                          const res = await fetch(`/api/mindmaps/${item.id}`, {
                            method: 'DELETE',
                          });
                    
                          if (!res.ok) {
                            const contentType = res.headers.get("content-type");
                            let errorMessage = "Unknown error";
                    
                            if (contentType?.includes("application/json")) {
                              const err = await res.json();
                              errorMessage = err.error || errorMessage;
                            } else {
                              const text = await res.text();
                              console.error("Raw error response:", text);
                              errorMessage = text;
                            }
                    
                            alert(`Failed to delete: ${errorMessage}`);
                            return;
                          }
                    
                          alert("Mindmap deleted");
                          // Optionally refresh or re-fetch list here
                        } catch (error) {
                          console.error("Deletion error:", error);
                          alert("Something went wrong while trying to delete the mindmap.");
                        }
                      }}
                      className="ml-4 text-red-500 hover:text-red-700"
                    >
                      Delete
                    </button></div>
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