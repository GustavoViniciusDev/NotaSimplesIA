import Header from "@/components/header"
import Hero from "@/components/hero"
import Features from "@/components/features"
import WhyNotaSimples from "@/components/why-nota-simples"
import Pricing from "@/components/pricing"
import BetaSignup from "@/components/beta-signup"
import RealInterestTest from "@/components/real-interest-test"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Features />
      <WhyNotaSimples />
      <Pricing />
      <BetaSignup />
      <RealInterestTest />
      <Footer />
    </main>
  )
}
