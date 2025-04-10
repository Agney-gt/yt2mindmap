// components/client-layout.tsx
"use client"

import { usePathname } from "next/navigation"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const showFooter = pathname !== "/mindmap"

  return (
    <>
      <Header />
      <main className="min-h-[calc(100vh-160px)]">{children}</main>
      {showFooter && <Footer />}
    </>
  )
}
