import {
  Feather,
  Mail,
  MapPin,
  Shield,
  ShoppingCart,
  Star,
  Sun,
  Users,
} from "lucide-react";
import { motion } from "motion/react";

const currentYear = new Date().getFullYear();

const trustStats = [
  { value: "SPF 50+", label: "Sun Protection" },
  { value: "4,800+", label: "Happy Customers" },
  { value: "Derm-Tested", label: "Dermatologist Approved" },
  { value: "100%", label: "Cruelty Free" },
];

function GoldButton({
  children,
  className = "",
  onClick,
}: { children: React.ReactNode; className?: string; onClick?: () => void }) {
  return (
    <motion.button
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.97 }}
      onClick={onClick}
      className={`inline-flex items-center justify-center gap-2 rounded-full bg-gold text-white font-semibold px-8 py-3 text-base shadow-gold transition-colors duration-200 hover:bg-gold-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${className}`}
    >
      {children}
    </motion.button>
  );
}

const features = [
  {
    icon: Shield,
    title: "SPF 50+ Protection",
    description:
      "Broad-spectrum UVA & UVB defense that shields your skin from harmful rays all day long.",
  },
  {
    icon: Feather,
    title: "Lightweight & Non-Greasy",
    description:
      "Ultra-light formula absorbs instantly, leaving no residue — perfect for everyday wear.",
  },
  {
    icon: Users,
    title: "Suitable for All Skin Types",
    description:
      "Dermatologist-tested and gentle enough for sensitive, oily, dry, and combination skin.",
  },
];

export default function App() {
  return (
    <div className="min-h-screen bg-background font-body">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur-sm">
        <div className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
          <a href="/" data-ocid="nav.link" className="flex items-center gap-2">
            <Sun className="h-5 w-5 text-gold" />
            <span className="font-display font-bold text-xl tracking-wide text-gold">
              RADIANTÈ
            </span>
          </a>
          <nav className="hidden md:flex items-center gap-8">
            <a
              href="#features"
              data-ocid="nav.features.link"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Features
            </a>
            <a
              href="#product"
              data-ocid="nav.product.link"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Product
            </a>
            <a href="#product" data-ocid="nav.buynow.link">
              <GoldButton className="!px-5 !py-2 !text-sm">Buy Now</GoldButton>
            </a>
          </nav>
          <a
            href="#product"
            className="md:hidden"
            data-ocid="nav.mobile.buynow.link"
          >
            <GoldButton className="!px-4 !py-2 !text-sm">Buy Now</GoldButton>
          </a>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 md:py-28">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_60%_50%,oklch(0.73_0.12_85_/_0.08),transparent)]" />
          <div className="mx-auto max-w-6xl px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Copy */}
              <motion.div
                initial={{ opacity: 0, y: 32 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="text-center md:text-left"
              >
                <span className="inline-block text-xs font-semibold uppercase tracking-widest text-gold mb-4 border border-gold/30 rounded-full px-4 py-1 bg-gold/5">
                  SPF 50+ Sunscreen
                </span>
                <h1 className="font-display text-5xl md:text-6xl font-bold leading-tight text-foreground mb-5">
                  Glow Fearlessly
                  <br />
                  <span className="text-gold">Under the Sun</span>
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-md mx-auto md:mx-0">
                  Protect your skin with our SPF 50+ sunscreen — light as air,
                  golden in feel.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                  <a href="#product" data-ocid="hero.primary_button">
                    <GoldButton>
                      <ShoppingCart className="h-4 w-4" />
                      Buy Now
                    </GoldButton>
                  </a>
                  <a
                    href="#features"
                    data-ocid="hero.secondary_button"
                    className="inline-flex items-center justify-center rounded-full border border-border px-8 py-3 text-base font-semibold text-foreground hover:border-gold/60 hover:text-gold transition-colors duration-200"
                  >
                    Learn More
                  </a>
                </div>
                {/* Social proof */}
                <div className="mt-8 flex items-center gap-3 justify-center md:justify-start">
                  <div className="flex -space-x-2">
                    {["A", "B", "C", "D"].map((l) => (
                      <div
                        key={l}
                        className="w-8 h-8 rounded-full bg-gold/20 border-2 border-background flex items-center justify-center text-xs font-bold text-gold"
                      >
                        {l}
                      </div>
                    ))}
                  </div>
                  <div>
                    <div className="flex gap-0.5">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          className="h-3.5 w-3.5 fill-gold text-gold"
                        />
                      ))}
                    </div>
                    <p className="text-xs text-muted-foreground">
                      4,800+ happy customers
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Product image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
                className="flex justify-center md:justify-end"
              >
                <div className="relative">
                  <div className="absolute inset-0 rounded-3xl bg-gold/10 blur-3xl scale-90" />
                  <img
                    src="/assets/generated/sunscreen-product.dim_600x700.png"
                    alt="RADIANTÈ Ultra Glow Sunscreen bottle"
                    className="relative w-72 md:w-96 object-contain drop-shadow-2xl"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Features / Why Choose Us */}
        <section id="features" className="py-24 bg-secondary/40">
          <div className="mx-auto max-w-6xl px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-14"
            >
              <span className="text-xs font-semibold uppercase tracking-widest text-gold">
                Why RADIANTÈ
              </span>
              <h2 className="font-display text-4xl font-bold text-foreground mt-2">
                Why Choose Us
              </h2>
              <p className="mt-3 text-muted-foreground max-w-xl mx-auto">
                Engineered for daily protection. Loved by thousands across
                India.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-7">
              {features.map((f, i) => (
                <motion.div
                  key={f.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.12 }}
                  className="bg-card rounded-2xl p-8 shadow-card border border-border relative overflow-hidden group"
                  data-ocid={`features.item.${i + 1}`}
                >
                  <div className="absolute top-0 left-6 right-6 h-[3px] rounded-full bg-gold/80 group-hover:left-0 group-hover:right-0 transition-all duration-300" />
                  <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center mb-5">
                    <f.icon className="h-6 w-6 text-gold" />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                    {f.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {f.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Product Spotlight */}
        <section id="product" className="py-24">
          <div className="mx-auto max-w-6xl px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <span className="text-xs font-semibold uppercase tracking-widest text-gold">
                Our Product
              </span>
              <h2 className="font-display text-4xl font-bold text-foreground mt-2">
                Featured Product
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65 }}
              className="mx-auto max-w-2xl bg-card rounded-3xl shadow-card border border-border overflow-hidden"
              data-ocid="product.card"
            >
              <div className="grid md:grid-cols-2">
                <div className="bg-gradient-to-br from-gold/8 to-background flex items-center justify-center p-10">
                  <img
                    src="/assets/generated/sunscreen-product.dim_600x700.png"
                    alt="RADIANTÈ Ultra Glow Sunscreen"
                    className="w-52 object-contain drop-shadow-xl"
                  />
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <span className="text-xs font-semibold uppercase tracking-widest text-gold mb-2">
                    SPF 50+ • Broad Spectrum
                  </span>
                  <h3 className="font-display text-2xl font-bold text-foreground leading-snug mb-3">
                    RADIANTÈ Ultra Glow Sunscreen
                  </h3>
                  <p className="text-sm text-muted-foreground mb-5 leading-relaxed">
                    Your daily shield against sun damage. Non-greasy,
                    fast-absorbing, and gentle on all skin types.
                  </p>
                  <div className="flex items-baseline gap-2 mb-6">
                    <span className="text-4xl font-bold font-display text-gold">
                      ₹499
                    </span>
                    <span className="text-sm text-muted-foreground line-through">
                      ₹699
                    </span>
                    <span className="text-xs font-semibold text-green-600 bg-green-50 px-2 py-0.5 rounded-full">
                      29% off
                    </span>
                  </div>
                  <GoldButton data-ocid="product.primary_button">
                    <ShoppingCart className="h-4 w-4" />
                    Buy Now — ₹499
                  </GoldButton>
                  <p className="text-xs text-muted-foreground mt-3 text-center">
                    Free shipping on orders above ₹599
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Trust Strip */}
        <section className="border-y border-border bg-secondary/30 py-10">
          <div className="mx-auto max-w-6xl px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {trustStats.map((item) => (
                <div key={item.value} className="flex flex-col items-center">
                  <span className="font-display text-2xl font-bold text-gold">
                    {item.value}
                  </span>
                  <span className="text-sm text-muted-foreground mt-1">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-footer-bg text-footer-text">
        <div className="mx-auto max-w-6xl px-6 py-14">
          <div className="grid md:grid-cols-3 gap-10">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Sun className="h-5 w-5 text-gold" />
                <span className="font-display text-xl font-bold text-gold">
                  RADIANTÈ
                </span>
              </div>
              <p className="text-sm text-footer-text/70 leading-relaxed max-w-xs">
                Premium sun care engineered for every skin type. Glow
                fearlessly, every day.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-footer-text mb-4">
                Contact Us
              </h4>
              <div className="space-y-3">
                <a
                  href="mailto:support@radiante.com"
                  className="flex items-center gap-3 text-sm text-footer-text/70 hover:text-gold transition-colors"
                  data-ocid="footer.email.link"
                >
                  <Mail className="h-4 w-4 flex-shrink-0" />
                  support@radiante.com
                </a>
                <div className="flex items-start gap-3 text-sm text-footer-text/70">
                  <MapPin className="h-4 w-4 flex-shrink-0 mt-0.5" />
                  <span>Coimbatore, Tamil Nadu, India</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-footer-text mb-4">
                Quick Links
              </h4>
              <ul className="space-y-2">
                {["Features", "Product"].map((link) => (
                  <li key={link}>
                    <a
                      href={`#${link.toLowerCase()}`}
                      className="text-sm text-footer-text/70 hover:text-gold transition-colors"
                      data-ocid={`footer.${link.toLowerCase()}.link`}
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-footer-text/50">
            <p>© {currentYear} RADIANTÈ Sunscreen. All rights reserved.</p>
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== "undefined" ? window.location.hostname : "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gold transition-colors"
            >
              Built with ❤️ using caffeine.ai
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
