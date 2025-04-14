import { useRef, useEffect } from "react";
import { EditorView, basicSetup } from "codemirror";
import { html } from "@codemirror/lang-html";

interface MindmapEditorProps {
  editorRef: React.RefObject<EditorView | null>
  htmlContent: string;
  setHtmlContent: (content: string) => void;
}

export function MindmapEditor({ editorRef, htmlContent, setHtmlContent }: MindmapEditorProps) {
  
  const editorContainerRef = useRef<HTMLDivElement | null>(null);
  const iframeRef = useRef<HTMLIFrameElement | null>(null);

  useEffect(() => {
    if (!editorContainerRef.current || editorRef.current) return;

    editorRef.current = new EditorView({
      parent: editorContainerRef.current,
      doc: htmlContent,
      extensions: [
        basicSetup,
        html(),
        EditorView.updateListener.of((update) => {
          if (update.docChanged) {
            const newContent = update.state.doc.toString();
            setHtmlContent(newContent);
          }
        }),
      ],
    });

    return () => {
      editorRef.current?.destroy();
      editorRef.current = null;
    };
  }, []);

  return (
    <div id="mindmap" className="w-[80vw] h-[700px] ml-[40px] flex gap-4">
      <div
        ref={editorContainerRef}
        className="editor-container w-1/4 h-full border border-gray-300 rounded-md p-2 bg-gray-50 overflow-auto"
      />
      <iframe
        title="HTML Preview"
        id="view"
        ref={iframeRef}
        className="w-3/4 h-full border border-gray-300 mb-4 mt-4"
        srcDoc={htmlContent}
        allowFullScreen
      />
    </div>
  );
}
