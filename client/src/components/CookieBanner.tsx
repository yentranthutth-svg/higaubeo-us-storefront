/*
  DESIGN: Warm Minimal — Cookie Consent Banner
  Simple bottom banner, not intrusive
  Stores consent in localStorage
  Warm tones matching the design system
*/

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cookie, X } from "lucide-react";
import { Link } from "wouter";

const COOKIE_CONSENT_KEY = "cookie_consent";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (!consent) {
      // Show banner after a short delay for better UX
      const timer = setTimeout(() => setVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, "accepted");
    setVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, "declined");
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", bounce: 0.15, duration: 0.6 }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4 sm:p-5"
        >
          <div className="max-w-xl mx-auto bg-white rounded-2xl shadow-[0_8px_40px_rgba(60,36,21,0.12)] border border-[#3C2415]/5 p-5 sm:p-6">
            {/* Close button */}
            <button
              onClick={handleDecline}
              className="absolute top-3 right-3 w-7 h-7 rounded-full bg-[#3C2415]/5 hover:bg-[#3C2415]/10 flex items-center justify-center transition-colors"
              aria-label="Close"
            >
              <X className="w-3.5 h-3.5 text-[#3C2415]/50" />
            </button>

            <div className="flex gap-3 items-start mb-4">
              <div className="w-9 h-9 rounded-full bg-amber-50 flex items-center justify-center shrink-0 mt-0.5">
                <Cookie className="w-4.5 h-4.5 text-amber-600" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-[#3C2415] mb-1">
                  We value your privacy
                </h3>
                <p className="text-[0.8125rem] text-[#A89F91] leading-relaxed">
                  We use cookies to enhance your browsing experience, analyze site traffic, and personalize content. By clicking "Accept", you consent to our use of cookies.{" "}
                  <Link
                    href="/privacy"
                    className="text-[#E07A4F] hover:text-[#c4663d] underline underline-offset-2 transition-colors"
                  >
                    Learn more
                  </Link>
                </p>
              </div>
            </div>

            <div className="flex gap-2.5 justify-end">
              <button
                onClick={handleDecline}
                className="px-4 py-2 rounded-xl text-sm font-medium text-[#3C2415]/60 hover:text-[#3C2415] hover:bg-[#3C2415]/5 transition-all"
              >
                Decline
              </button>
              <button
                onClick={handleAccept}
                className="px-5 py-2 rounded-xl text-sm font-medium text-white bg-[#3C2415] hover:bg-[#2a1a0f] transition-all shadow-sm"
              >
                Accept
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
