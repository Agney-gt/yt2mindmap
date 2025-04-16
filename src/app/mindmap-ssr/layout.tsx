
import Header from "@/components/header";
import { NextStep, NextStepProvider, Tour} from "nextstepjs";
const steps : Tour[] = [
  {
    tour: "mainTour",
    steps: [
      {
        icon: "👋",
        title: "Welcome to YT2Mindmap",
        content: "Let's explore the powerful features of our mindmap creation tool!",
      showControls:true,
      showSkip:true
      },
      {
        title: "Left Sidebar - Mindmap History",
        icon: "📚",
        content: "Access your previously created mindmaps and manage your work history here.",
        selector: "#left-sidebar",
        showControls:true,
        showSkip:true,
        side:"right"
        
      },
      {
        title: "Text Editor",
        icon: "📝",
        content: "Edit your mindmap content, with syntax highlighting and auto-save features.",
        selector: "#mindmap",
        showControls:true,
        showSkip:true
       
      },
      {
        icon: "💡",
        title: "Save Changes",
        content: "Don't forget to save your changes using the save button above the editor.",
        selector: "#buttons",
        showControls:true,
        showSkip:true
      
      },
      {
        icon: "📄",
        title: "Mindmap View",
        content: "Visualize your content in an interactive mindmap format. Use the fullscreen button for an immersive experience.",
        selector: "#view",
        showControls:true,
        showSkip:true
     
      },
      { 
        icon: "🔗",
        title: "Input Options",
        content: "Enter a YouTube URL or paste your text directly to generate a mindmap.",
        selector: "#input",
        showControls:true,
        showSkip:true
     
      },
      {
        icon: "🔄",
        title: "Research Sidebar",
        content: "Access additional research tools and resources to enhance your mindmap content.",
        selector: "#taskade-but",
        showControls:true,
        showSkip:true,
        side:"left"
      }
    ]
  }
];
export default function MindmapLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
   <>
    <NextStepProvider>
    <NextStep steps={steps}>
    <Header/>
    {children}
    </NextStep>
    </NextStepProvider>
   </>
     
  );
}



































































































