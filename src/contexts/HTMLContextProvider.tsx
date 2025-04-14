"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

type HtmlContentContextType = {
  htmlContent: string;
  setHtmlContent: React.Dispatch<React.SetStateAction<string>>;
};

const HtmlContentContext = createContext<HtmlContentContextType | undefined>(undefined);

export function HtmlContentProvider({ children }: { children: ReactNode }) {
  const [htmlContent, setHtmlContent] = useState("");

  return (
    <HtmlContentContext.Provider value={{ htmlContent, setHtmlContent }}>
      {children}
    </HtmlContentContext.Provider>
  );
}

export function useHtmlContentContext() {
  const context = useContext(HtmlContentContext);
  if (!context) {
    throw new Error("useHtmlContentContext must be used within a HtmlContentProvider");
  }
  return context;
}