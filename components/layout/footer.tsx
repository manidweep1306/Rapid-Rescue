import Link from "next/link";
import { Instagram, Twitter, Linkedin, Github } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-muted/40 py-12 mt-24">
      <div className="container grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="space-y-4">
          <h3 className="font-bold text-xl tracking-tight">HORIZON</h3>
          <p className="text-muted-foreground">
            Crafting digital experiences that elevate brands and engage audiences.
          </p>
          <div className="flex space-x-4">
            <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              <Instagram className="h-5 w-5" />
              <span className="sr-only">Instagram</span>
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              <Github className="h-5 w-5" />
              <span className="sr-only">Github</span>
            </Link>
          </div>
        </div>

        <div>
          <h4 className="font-semibold mb-4 text-sm uppercase tracking-wide">Company</h4>
          <ul className="space-y-2">
            <li>
              <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                About Us
              </Link>
            </li>
            <li>
              <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                Our Team
              </Link>
            </li>
            <li>
              <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                Careers
              </Link>
            </li>
            <li>
              <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4 text-sm uppercase tracking-wide">Services</h4>
          <ul className="space-y-2">
            <li>
              <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                Web Development
              </Link>
            </li>
            <li>
              <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                UI/UX Design
              </Link>
            </li>
            <li>
              <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                Mobile Apps
              </Link>
            </li>
            <li>
              <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                Digital Marketing
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4 text-sm uppercase tracking-wide">Legal</h4>
          <ul className="space-y-2">
            <li>
              <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                Terms of Service
              </Link>
            </li>
            <li>
              <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                Cookie Policy
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="container mt-12 pt-8 border-t">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Horizon. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground mt-2 md:mt-0">
            Designed and built with ❤️ in California
          </p>
        </div>
      </div>
    </footer>
  );
}