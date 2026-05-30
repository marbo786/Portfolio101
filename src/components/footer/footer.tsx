import React from "react";
import SocialMediaButtons from "../social/social-media-icons";
import { config } from "@/data/config";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="flex w-full shrink-0 flex-col items-center justify-between gap-4 border-t border-border px-6 py-6 md:px-12 sm:flex-row bg-slate-900/10 dark:bg-black/10 backdrop-blur-md relative z-10">
      <p className="text-xs text-gray-500 dark:text-gray-400 font-mono">
        © {year} {config.author}. All rights reserved.
      </p>
      <div className="flex items-center justify-center">
        <SocialMediaButtons />
      </div>
    </footer>
  );
}

export default Footer;
