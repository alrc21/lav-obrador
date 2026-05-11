"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { useEffect, useState } from "react";
import { CartIcon } from "./CartIcon";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className="sticky top-0 z-40 flex h-16 items-center justify-between px-6 transition-all md:px-8"
      style={{
        backgroundColor: scrolled ? "rgba(247, 241, 232, 0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(10px)" : "none",
        borderBottom: scrolled ? "1px solid var(--color-line)" : "1px solid transparent",
      }}
    >
      <Link
        href="/"
        className="flex items-center gap-2 text-sm transition hover:opacity-70"
        style={{ color: "var(--color-accent)" }}
        aria-label="Volver al inicio"
      >
        <ArrowLeft size={18} strokeWidth={1.5} />
      </Link>

      <Link href="/" aria-label="LAV Obrador inicio">
        <Image src="/logo.svg" alt="" width={70} height={48} priority />
      </Link>

      <CartIcon />
    </nav>
  );
}
