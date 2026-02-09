"use client";

import Link from "next/link";
import { Facebook, Twitter, Linkedin, Mail } from "lucide-react";
import { Separator } from "@/components/ui/separator";

export default function Footer() {
  return (
    <footer className="bg-background border-t dark:border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 py-10">

        <div className="md:flex  justify-between pb-4 gap-8 space-y-10">

          <div className="space-y-3">
            <h2 className="text-2xl font-semibold">SkillBridge</h2>
            <p className="text-sm text-muted-foreground">
              Connecting students with certified tutors for quality learning.
            </p>
          </div>


          <div>
            <h3 className="font-medium mb-3">Quick Links</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="#" className="hover:text-primary">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/tutor" className="hover:text-primary">
                  Find Tutors
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-primary">
                  Contact
                </Link>
              </li>
            </ul>
          </div>


          <div>
            <h3 className="font-medium mb-3">Support</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="#" className="hover:text-primary">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>


          <div>
            <h3 className="font-medium mb-3">Contact</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <Mail size={16} />
                support@skillbridge.com
              </li>
              <li className="flex gap-3 mt-3">
                <Link href="#" className="hover:text-primary">
                  <Facebook size={18} />
                </Link>
                <Link href="#" className="hover:text-primary">
                  <Twitter size={18} />
                </Link>
                <Link href="#" className="hover:text-primary">
                  <Linkedin size={18} />
                </Link>
              </li>
            </ul>
          </div>
        </div>


        <Separator className="my-6 dark:bg-zinc-800" />


        <div className=" flex items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} SkillBridge. All rights reserved.</p>
          <p>
            Designed & Developed by{" "}
            <span className="font-medium text-foreground">
              Samiul Islam
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}
