/*
  DESIGN: Warm Minimal — Terms of Service Page
  Clean, readable, warm tones
  Tailored for US Amazon Affiliate landing page
*/

import { motion } from "framer-motion";
import { ArrowLeft, FileText } from "lucide-react";
import { Link } from "wouter";
import { siteConfig } from "@/data/products";

export default function Terms() {
  return (
    <div className="min-h-screen bg-[#FAF9F6]">
      {/* Header */}
      <div className="sticky top-0 z-30 bg-[#FAF9F6]/90 backdrop-blur-md border-b border-[#3C2415]/5">
        <div className="max-w-3xl mx-auto px-4 py-3 flex items-center gap-3">
          <Link
            href="/"
            className="w-9 h-9 rounded-full bg-[#3C2415]/5 hover:bg-[#3C2415]/10 flex items-center justify-center transition-colors"
          >
            <ArrowLeft className="w-4 h-4 text-[#3C2415]" />
          </Link>
          <h1 className="text-sm font-semibold text-[#3C2415]">Terms of Service</h1>
        </div>
      </div>

      {/* Content */}
      <motion.main
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="max-w-3xl mx-auto px-4 py-8 sm:py-12"
      >
        {/* Title Block */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-11 h-11 rounded-full bg-sky-50 flex items-center justify-center">
            <FileText className="w-5.5 h-5.5 text-sky-600" />
          </div>
          <div>
            <h1 className="text-xl sm:text-2xl font-bold text-[#3C2415]">Terms of Service</h1>
            <p className="text-xs text-[#A89F91]">Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
          </div>
        </div>

        {/* Terms Content */}
        <div className="space-y-8 text-[0.9375rem] text-[#3C2415]/80 leading-relaxed">

          <section>
            <p>
              Welcome to <strong className="text-[#3C2415]">{siteConfig.name}</strong>. By accessing or using our website, you agree to be bound by these Terms of Service. If you disagree with any part of these terms, you may not access the website.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#3C2415] mb-3">Use of the Website</h2>
            <p>
              This website is provided for informational purposes only. We curate and recommend products available on Amazon.com and other third-party retailers. We do not sell products directly. All purchases are made through the respective retailer's website, and their terms and conditions apply to your purchase.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#3C2415] mb-3">Affiliate Relationships</h2>
            <div className="bg-amber-50/50 rounded-xl border border-amber-200/50 p-5">
              <p className="text-[0.8125rem] text-[#3C2415]/70">
                This website participates in the <strong>Amazon Services LLC Associates Program</strong> and may participate in other affiliate programs. This means we may earn a commission when you click on affiliate links and make a purchase. This comes at no additional cost to you. Our recommendations are based on our genuine opinions and are not influenced by commission rates.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#3C2415] mb-3">Product Information</h2>
            <p>
              We make every effort to display product information accurately. However, product prices, availability, ratings, and descriptions are provided by third-party retailers and may change at any time. We are not responsible for any inaccuracies in product information displayed on our site. Always verify product details on the retailer's website before making a purchase.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#3C2415] mb-3">Intellectual Property</h2>
            <p>
              The content on this website, including text, graphics, logos, and design elements, is owned by {siteConfig.name} and is protected by applicable intellectual property laws. Product images and descriptions may be the property of their respective owners and are used under applicable affiliate program terms.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#3C2415] mb-3">Limitation of Liability</h2>
            <p>
              In no event shall {siteConfig.name} be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of this website or any products purchased through affiliate links. We are not responsible for the quality, safety, or legality of products sold by third-party retailers.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#3C2415] mb-3">External Links</h2>
            <p>
              Our website contains links to external websites that are not operated by us. We have no control over the content and practices of these sites and cannot accept responsibility for their respective privacy policies or practices.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#3C2415] mb-3">Changes to Terms</h2>
            <p>
              We reserve the right to modify or replace these Terms at any time. If a revision is material, we will try to provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#3C2415] mb-3">Contact Us</h2>
            <p>
              If you have any questions about these Terms, please contact us through our social media channels.
            </p>
          </section>

        </div>

        {/* Back to Home */}
        <div className="mt-10 pt-6 border-t border-[#3C2415]/5 text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-[#E07A4F] hover:text-[#c4663d] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </div>
      </motion.main>
    </div>
  );
}
