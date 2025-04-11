'use client';

import { useSession } from 'next-auth/react';
import { useState, useEffect } from 'react';

interface SavedMindmap {
  id: string;
  title: string;
  youtubeUrl: string;
  createdAt: string;
}

export default function SavedMindmaps() {
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
      console.error('Error fetching mindmaps:', error);
    } finally {
      setLoading(false);
    }
  };

  if (!session) {
    return null;
  }

  return (
    <div className="w-60 h-[120vh] bg-gradient-to-b from-gray-50 to-white p-6 overflow-y-auto border-r border-gray-200 shadow-md transition-all duration-300 ease-in-out">
      <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b pb-3">Saved Mindmaps</h2>
      {loading ? (
        <div className="flex justify-center items-center h-40">
          <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-blue-500"></div>
        </div>
      ) : (
        <div className="space-y-4">
          {mindmaps.map((mindmap) => (
            <div
              key={mindmap.id}
              className="group p-4 bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-200 ease-in-out border border-gray-100 hover:border-blue-300 cursor-pointer transform hover:-translate-y-1"
              onClick={() => window.location.href = `/mindmap?id=${mindmap.id}`}
            >
              <h3 className="font-semibold text-gray-800 truncate mb-2 group-hover:text-blue-600">{mindmap.title}</h3>
              <p className="text-xs text-gray-500 truncate group-hover:text-gray-700">{mindmap.youtubeUrl}</p>
              <div className="mt-2 text-xs text-gray-400">{new Date(mindmap.createdAt).toLocaleDateString()}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}