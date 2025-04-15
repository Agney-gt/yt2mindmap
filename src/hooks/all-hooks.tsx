import { useHtmlContentContext } from "@/contexts/HTMLContextProvider";
import { EditorView } from "codemirror";
import { useSession } from "next-auth/react";

export function useFetchHtmlContent(editorRef: React.RefObject<EditorView | null>) {
  const { setHtmlContent } = useHtmlContentContext();
  const { data:session } = useSession();

  const fetchHtmlContent = async (taskId: string) => {
    //setLoading(true);
    try {
      const userEmail = session?.user?.email || 'anonymous';
      const response = await fetch(`https://yt2mapapi.blob.core.windows.net/html/user-${userEmail.split('@')[0]}/${taskId}.html`, { cache: 'no-store' });
      const text = await response.text();

      setHtmlContent(text);
      if (editorRef.current) {
        editorRef.current.dispatch({
          changes: { from: 0, to: editorRef.current.state.doc.length, insert: text },
        });
      }
    } catch (error) {
      console.error('Error fetching HTML content:', error);
    } finally {
      //setLoading(false);
    }
  };

  return { fetchHtmlContent };
}

export function useSaveHtmlContent(editorRef: React.RefObject<EditorView | null>) {
  const { setHtmlContent } = useHtmlContentContext();

  const loadSavedMindmap = async (id: string) => {
    try {
      const response = await fetch(`/api/mindmaps/${id}`);
      if (response.ok) {
        const data = await response.json();
        setHtmlContent(data.htmlContent);
        if (editorRef.current) {
          editorRef.current.dispatch({
            changes: { from: 0, to: editorRef.current.state.doc.length, insert: data.htmlContent },
          });
        }
      }
    } catch (error) {
      console.error("Error loading mindmap:", error);
    }
  };

  return { loadSavedMindmap };
}