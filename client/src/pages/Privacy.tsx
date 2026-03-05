/*
  DESIGN: Warm Minimal — Privacy Policy Page
  Clean, readable, warm tones
  Tailored for US Amazon Affiliate landing page
  Covers: data collection, cookies, GA4/GTM/Pixel, affiliate links, user rights
*/

import { motion } from "framer-motion";
import { ArrowLeft, Shield } from "lucide-react";
import { Link } from "wouter";
import { siteConfig } from "@/data/products";

export default function Privacy() {
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
          <h1 className="text-sm font-semibold text-[#3C2415]">Privacy Policy</h1>
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
          <div className="w-11 h-11 rounded-full bg-emerald-50 flex items-center justify-center">
            <Shield className="w-5.5 h-5.5 text-emerald-600" />
          </div>
          <div>
            <h1 className="text-xl sm:text-2xl font-bold text-[#3C2415]">Privacy Policy</h1>
            <p className="text-xs text-[#A89F91]">Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
          </div>
        </div>

        {/* Policy Content */}
        <div className="space-y-8 text-[0.9375rem] text-[#3C2415]/80 leading-relaxed">

          {/* Introduction */}
          <section>
            <p>
              Welcome to <strong className="text-[#3C2415]">{siteConfig.name}</strong>. Your privacy is important to us. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website. Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site.
            </p>
          </section>

          {/* Information We Collect */}
          <section>
            <h2 className="text-lg font-bold text-[#3C2415] mb-3">Information We Collect</h2>
            <p className="mb-3">
              We may collect information about you in a variety of ways. The information we may collect on the site includes:
            </p>
            <div className="bg-white rounded-xl border border-[#3C2415]/5 p-5 space-y-3">
              <div>
                <h3 className="text-sm font-semibold text-[#3C2415] mb-1">Automatically Collected Data</h3>
                <p className="text-[0.8125rem] text-[#A89F91]">
                  When you visit our site, we may automatically collect certain information about your device, including your IP address, browser type, operating system, referring URLs, and browsing behavior. This data is collected through cookies and similar tracking technologies.
                </p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-[#3C2415] mb-1">Analytics Data</h3>
                <p className="text-[0.8125rem] text-[#A89F91]">
                  We use third-party analytics services (such as Google Analytics 4) to help us understand how visitors interact with our site. These services collect information such as how often users visit the site, what pages they visit, and what other sites they used prior to coming to our site.
                </p>
              </div>
            </div>
          </section>

          {/* Cookies & Tracking */}
          <section>
            <h2 className="text-lg font-bold text-[#3C2415] mb-3">Cookies & Tracking Technologies</h2>
            <p className="mb-3">
              We use cookies and similar tracking technologies to track activity on our site and hold certain information. Cookies are files with a small amount of data which may include an anonymous unique identifier.
            </p>
            <div className="bg-white rounded-xl border border-[#3C2415]/5 overflow-hidden">
              <table className="w-full text-[0.8125rem]">
                <thead>
                  <tr className="bg-[#3C2415]/[0.03]">
                    <th className="text-left p-3 font-semibold text-[#3C2415] text-xs">Technology</th>
                    <th className="text-left p-3 font-semibold text-[#3C2415] text-xs">Purpose</th>
                  </tr>
                </thead>
                <tbody className="text-[#A89F91]">
                  <tr className="border-t border-[#3C2415]/5">
                    <td className="p-3 font-medium text-[#3C2415]/70">Google Analytics 4 (GA4)</td>
                    <td className="p-3">Analyze website traffic and user behavior to improve our content and recommendations.</td>
                  </tr>
                  <tr className="border-t border-[#3C2415]/5">
                    <td className="p-3 font-medium text-[#3C2415]/70">Google Tag Manager (GTM)</td>
                    <td className="p-3">Manage and deploy marketing tags and tracking scripts efficiently.</td>
                  </tr>
                  <tr className="border-t border-[#3C2415]/5">
                    <td className="p-3 font-medium text-[#3C2415]/70">Meta Pixel</td>
                    <td className="p-3">Measure the effectiveness of our advertising and understand user actions on our site.</td>
                  </tr>
                  <tr className="border-t border-[#3C2415]/5">
                    <td className="p-3 font-medium text-[#3C2415]/70">Essential Cookies</td>
                    <td className="p-3">Remember your cookie consent preferences and ensure basic site functionality.</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-[0.8125rem] text-[#A89F91]">
              You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our site.
            </p>
          </section>

          {/* Affiliate Links */}
          <section>
            <h2 className="text-lg font-bold text-[#3C2415] mb-3">Affiliate Links & Amazon Associates</h2>
            <div className="bg-amber-50/50 rounded-xl border border-amber-200/50 p-5">
              <p className="text-[0.8125rem] text-[#3C2415]/70">
                This site is a participant in the <strong>Amazon Services LLC Associates Program</strong>, an affiliate advertising program designed to provide a means for sites to earn advertising fees by advertising and linking to Amazon.com. When you click on an affiliate link and make a purchase, we may earn a small commission at no additional cost to you. Amazon and the Amazon logo are trademarks of Amazon.com, Inc. or its affiliates. Product prices and availability are accurate as of the date/time indicated and are subject to change.
              </p>
            </div>
          </section>

          {/* Third-Party Links */}
          <section>
            <h2 className="text-lg font-bold text-[#3C2415] mb-3">Third-Party Links</h2>
            <p>
              Our site may contain links to third-party websites, including Amazon.com. We are not responsible for the privacy practices or the content of these third-party sites. We encourage you to read the privacy policy of every website you visit.
            </p>
          </section>

          {/* Your Rights */}
          <section>
            <h2 className="text-lg font-bold text-[#3C2415] mb-3">Your Privacy Rights</h2>
            <p className="mb-3">
              Depending on your location, you may have certain rights regarding your personal information:
            </p>
            <div className="grid gap-2">
              {[
                { title: "California Residents (CCPA)", desc: "You have the right to request disclosure of personal information collected, request deletion, and opt-out of the sale of your personal information." },
                { title: "EU/EEA Residents (GDPR)", desc: "You have the right to access, rectify, erase, restrict processing, data portability, and object to processing of your personal data." },
                { title: "All Users", desc: "You can opt-out of cookies and tracking by adjusting your browser settings or using our cookie consent banner." },
              ].map((item) => (
                <div key={item.title} className="bg-white rounded-xl border border-[#3C2415]/5 p-4">
                  <h3 className="text-sm font-semibold text-[#3C2415] mb-1">{item.title}</h3>
                  <p className="text-[0.8125rem] text-[#A89F91]">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Children */}
          <section>
            <h2 className="text-lg font-bold text-[#3C2415] mb-3">Children's Privacy</h2>
            <p>
              Our site does not address anyone under the age of 13. We do not knowingly collect personally identifiable information from children under 13. If you are a parent or guardian and you are aware that your child has provided us with personal data, please contact us.
            </p>
          </section>

          {/* Changes */}
          <section>
            <h2 className="text-lg font-bold text-[#3C2415] mb-3">Changes to This Privacy Policy</h2>
            <p>
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date. You are advised to review this Privacy Policy periodically for any changes.
            </p>
          </section>

          {/* Contact */}
          <section>
            <h2 className="text-lg font-bold text-[#3C2415] mb-3">Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us through our social media channels or send us a message.
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
