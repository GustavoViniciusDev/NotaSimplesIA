"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./theme-toggle";

export default function Header() {
  return (
    <header className="fixed top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <nav className="flex items-center justify-between max-w-7xl mx-auto px-4 py-5 md:px-8 md:py-6">
        <Link
          href="/"
          className="flex items-center gap-2 font-bold text-xl text-primary hover:opacity-80 transition-opacity"
        >
          <div className="w-6 h-6 bg-gradient-to-br from-primary to-primary/70 rounded-md" />
          NotaSimples IA
        </Link>

        <div className="flex items-center gap-3 md:gap-4">
          <ThemeToggle />
          <Link
            href="#"
            className="text-sm text-foreground/70 hover:text-foreground transition-colors hidden sm:inline-block"
          >
            Entrar
          </Link>
          <Button
            asChild
            size="sm"
            className="bg-primary hover:bg-primary/90 text-primary-foreground"
          >
            <Link href="#">Começar grátis</Link>
          </Button>
        </div>
      </nav>
    </header>
  );
}
