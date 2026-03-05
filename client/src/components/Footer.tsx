/*
  DESIGN: Warm Minimal — Footer
  Affiliate disclosure (required by Amazon Associates)
  Trust badges, Privacy Policy, Terms links
  Clean, minimal, warm tones
*/

import { Shield, Truck, Star } from "lucide-react";
import { Link } from "wouter";
import { siteConfig } from "@/data/products";

export default function Footer() {
  return (
    <footer className="mt-12 sm:mt-16 border-t border-[#3C2415]/5">
      {/* Trust Signals */}
      <div className="max-w-3xl mx-auto px-4 py-8 sm:py-10">
        <div className="grid grid-cols-3 gap-4 mb-8">
          <div className="text-center">
            <div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center mx-auto mb-2">
              <Shield className="w-5 h-5 text-emerald-600" />
            </div>
            <p className="text-xs font-medium text-[#3C2415]/70">Secure Checkout</p>
            <p className="text-[0.6875rem] text-[#A89F91]">via Amazon</p>
          </div>
          <div className="text-center">
            <div className="w-10 h-10 rounded-full bg-sky-50 flex items-center justify-center mx-auto mb-2">
              <Truck className="w-5 h-5 text-sky-600" />
            </div>
            <p className="text-xs font-medium text-[#3C2415]/70">Fast Shipping</p>
            <p className="text-[0.6875rem] text-[#A89F91]">Prime eligible</p>
          </div>
          <div className="text-center">
            <div className="w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center mx-auto mb-2">
              <Star className="w-5 h-5 text-amber-600" />
            </div>
            <p className="text-xs font-medium text-[#3C2415]/70">Top Rated</p>
            <p className="text-[0.6875rem] text-[#A89F91]">4.5+ stars</p>
          </div>
        </div>

        {/* Affiliate Disclosure */}
        <div className="bg-[#3C2415]/[0.03] rounded-xl p-4 mb-6">
          <p className="text-[0.6875rem] sm:text-xs text-[#A89F91] leading-relaxed text-center">
            <span className="font-semibold text-[#3C2415]/60">Affiliate Disclosure:</span>{" "}
            {siteConfig.affiliateDisclosure}
          </p>
        </div>

        {/* Links */}
        <div className="flex items-center justify-center gap-6 mb-6">
          <Link
            href="/privacy"
            className="text-xs text-[#A89F91] hover:text-[#3C2415] transition-colors"
          >
            Privacy Policy
          </Link>
          <span className="text-[#A89F91]/30">|</span>
          <Link
            href="/terms"
            className="text-xs text-[#A89F91] hover:text-[#3C2415] transition-colors"
          >
            Terms of Service
          </Link>
          <span className="text-[#A89F91]/30">|</span>
          <a
            href="#"
            className="text-xs text-[#A89F91] hover:text-[#3C2415] transition-colors"
          >
            Contact
          </a>
        </div>

        {/* Copyright */}
        <p className="text-center text-[0.6875rem] text-[#A89F91]/60">
          &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
