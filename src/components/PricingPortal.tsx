'use client';

import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import PricingPage from '@/app/pricing/page';
import { PayPalScriptProvider } from "@paypal/react-paypal-js";

interface PricingPortalProps {
  isOpen: boolean;
}

export default function PricingPortal({ isOpen }: PricingPortalProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  if (!mounted || !isOpen) return null;

  return createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="relative w-full max-w-4xl bg-white rounded-lg shadow-xl overflow-y-auto max-h-[90vh]">

        <PayPalScriptProvider
          options={{
            clientId: "AUMwCW2Ur--qNjc7X-ilOTASRgfJ1M7V0_KbwjoBfpj8JG1Du5PKXVrXjqe2EDNPdMEYhM9EI4XysYbs",
            vault: true,
            intent: "subscription",
          }}
        >
          <PricingPage />
        </PayPalScriptProvider>
      </div>
    </div>,
    document.body
  );
}