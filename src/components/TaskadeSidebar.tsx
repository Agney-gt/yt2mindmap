'use client';

import { useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export function TaskadeSidebar() {
    const iframeRef = useRef<HTMLIFrameElement | null>(null);
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
        <div className="fixed top-0 right-0 h-screen z-50 flex items-center pointer-events-none">
            {/* Toggle Button */}
            {isOpen && <button
                onClick={() => setIsOpen(!isOpen)}
                className="relative -left-10 top-[10vh] bg-white p-2 rounded-l-md border border-r-0 border-gray-200 shadow-md hover:bg-gray-50 transition-colors pointer-events-auto"
            >
                {isOpen ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
            </button>}

            {/* Sidebar */}
            <div
                className={`w-[600px] h-full bg-white border-l border-gray-200 shadow-md transition-transform duration-300 ease-in-out transform ${isOpen ? 'translate-x-0' : 'translate-x-full'
                    } pointer-events-auto`}
            >
                <iframe id='taskade-but'
                    allow="clipboard-read; clipboard-write"
                    src="https://www.taskade.com/a/01JR7MD4P095GY90F24NF6AFDX"
                    width="600"
                    height="800"
                    allowFullScreen
                    ref={iframeRef}
                    className="w-full h-full"
                />
            </div>
          
        </div>
        {!isOpen && (
             <button 
               className="relative -right-0 top-[10vh] bg-white p-2 rounded-l-md border border-r-0 border-gray-200 shadow-md hover:bg-gray-50 transition-colors pointer-events-auto"
             onClick={() => setIsOpen(!isOpen)}
           >
             <ChevronLeft className="w-4 h-4" />
           </button>
        )}
        </>
    );
}
