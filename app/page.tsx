"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Instagram,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  PackageCheck,
  Ruler,
  Search,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  Star,
  User,
  Wand2
} from "lucide-react";

const heroImage =
  "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1800&q=85";

const suits = [
  {
    name: "Classic Suit",
    price: "From $1,250",
    img: "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?auto=format&fit=crop&w=900&q=85"
  },
  {
    name: "Double-Breasted Suit",
    price: "From $1,580",
    img: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=900&q=85"
  },
  {
    name: "Wedding Tuxedo",
    price: "From $1,920",
    img: "https://images.unsplash.com/photo-1508243771214-6e95d137426b?auto=format&fit=crop&w=900&q=85"
  },
  {
    name: "Executive Suit",
    price: "From $1,460",
    img: "https://images.unsplash.com/photo-1617137968427-85924c800a22?auto=format&fit=crop&w=900&q=85"
  }
];

const categories = [
  {
    title: "Business Wear",
    img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=1000&q=85"
  },
  {
    title: "Wedding Collection",
    img: "https://images.unsplash.com/photo-1529634806980-85c3dd6d34ac?auto=format&fit=crop&w=1000&q=85"
  },
  {
    title: "Luxury Tuxedos",
    img: "https://images.unsplash.com/photo-1520975682031-a3c1d0f438e9?auto=format&fit=crop&w=1000&q=85"
  },
  {
    title: "Casual Blazers",
    img: "https://images.unsplash.com/photo-1610652492500-ded49ceeb378?auto=format&fit=crop&w=1000&q=85"
  }
];

const features = [
  { icon: Sparkles, title: "Premium Fabrics", text: "Italian wool, silk blends, and breathable linen." },
  { icon: Wand2, title: "Handcrafted Tailoring", text: "Made by master cutters with refined finishing." },
  { icon: PackageCheck, title: "Worldwide Shipping", text: "Protected delivery with fitting support." },
  { icon: ShieldCheck, title: "Perfect Fit Guarantee", text: "Complimentary adjustments after delivery." }
];

const testimonials = [
  {
    name: "Adrian Clarke",
    role: "Creative Director",
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80",
    quote: "The navy suit arrived with the poise of a Savile Row fitting. Clean lines, quiet confidence."
  },
  {
    name: "Marcus Bennett",
    role: "Founder",
    img: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?auto=format&fit=crop&w=300&q=80",
    quote: "Every detail felt considered, from the lapel roll to the initials inside the jacket."
  },
  {
    name: "Julian Moreau",
    role: "Architect",
    img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=300&q=80",
    quote: "Modern, restrained, and beautifully fitted. It has become my most-worn formal piece."
  }
];

const swatches = ["#2f3438", "#8b7868", "#cdc0ad", "#3f4a40", "#7b3e38", "#101010"];

function SectionTitle({ eyebrow, title, light = false }: { eyebrow: string; title: string; light?: boolean }) {
  return (
    <div className="mx-auto mb-10 max-w-3xl text-center">
      <p className={`mb-3 text-xs font-semibold uppercase tracking-[0.28em] ${light ? "text-oat" : "text-taupe"}`}>{eyebrow}</p>
      <h2 className={`font-display text-4xl font-semibold leading-tight md:text-6xl ${light ? "text-linen" : "text-charcoal"}`}>{title}</h2>
    </div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-porcelain text-charcoal">
      <div className="bg-charcoal px-4 py-2 text-center text-xs font-medium uppercase tracking-[0.22em] text-linen">
        Handcrafted Bespoke Suits for the Modern Gentleman
      </div>

      <header className="sticky top-0 z-50 border-b border-charcoal/10 bg-porcelain/88 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 lg:px-8">
          <a href="#" className="font-display text-3xl font-semibold tracking-wide">
            Atelier Vale
          </a>
          <div className="hidden items-center gap-8 text-sm font-medium text-smoke lg:flex">
            {["Home", "Collections", "Customize Suit", "About", "Contact"].map((item) => (
              <a key={item} href={`#${item.toLowerCase().replaceAll(" ", "-")}`} className="transition hover:text-charcoal">
                {item}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-2">
            {[Search, ShoppingBag, User].map((Icon, index) => (
              <button
                key={index}
                aria-label="Navigation action"
                className="grid h-10 w-10 place-items-center rounded-full text-charcoal transition hover:bg-linen"
              >
                <Icon size={18} />
              </button>
            ))}
            <button aria-label="Open menu" className="grid h-10 w-10 place-items-center rounded-full bg-linen lg:hidden">
              <Menu size={19} />
            </button>
          </div>
        </nav>
      </header>

      <section id="home" className="px-4 py-5 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative mx-auto min-h-[76vh] max-w-7xl overflow-hidden rounded-[30px] bg-charcoal shadow-soft"
        >
          <img src={heroImage} alt="Man wearing a tailored suit" className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal/80 via-charcoal/38 to-linen/10" />
          <div className="relative flex min-h-[76vh] max-w-3xl flex-col justify-center px-6 py-16 text-linen md:px-14">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.32em] text-oat">Bespoke tailoring studio</p>
            <h1 className="text-balance font-display text-6xl font-semibold leading-[0.88] md:text-8xl">WEAR YOUR CONFIDENCE</h1>
            <p className="mt-7 max-w-xl text-lg leading-8 text-linen/85">
              Experience timeless bespoke tailoring crafted for modern elegance.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a href="#customize-suit" className="rounded-full bg-linen px-7 py-4 text-center text-sm font-semibold text-charcoal transition hover:-translate-y-1 hover:bg-white">
                Customize Suit
              </a>
              <a href="#collections" className="rounded-full border border-linen/45 px-7 py-4 text-center text-sm font-semibold text-linen transition hover:-translate-y-1 hover:bg-linen/12">
                Explore Collection
              </a>
            </div>
          </div>
        </motion.div>
      </section>

      <section id="collections" className="mx-auto max-w-7xl px-4 py-20 lg:px-8">
        <SectionTitle eyebrow="Featured suits" title="Tailored essentials with modern restraint" />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {suits.map((suit, index) => (
            <motion.article
              key={suit.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: index * 0.06 }}
              className="group overflow-hidden rounded-fashion border border-charcoal/10 bg-white shadow-card transition duration-300 hover:-translate-y-2"
            >
              <div className="aspect-[4/5] overflow-hidden bg-linen">
                <img src={suit.img} alt={suit.name} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
              </div>
              <div className="p-5">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-display text-2xl font-semibold">{suit.name}</h3>
                    <p className="mt-1 text-sm text-smoke">{suit.price}</p>
                  </div>
                  <ArrowRight className="mt-2 text-taupe transition group-hover:translate-x-1" size={19} />
                </div>
                <button className="mt-5 w-full rounded-full bg-charcoal px-5 py-3 text-sm font-semibold text-linen transition hover:bg-espresso">
                  Customize Now
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section id="about" className="border-y border-charcoal/10 bg-linen/70 px-4 py-12 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-2 lg:grid-cols-4">
          {features.map(({ icon: Icon, title, text }) => (
            <div key={title} className="rounded-fashion bg-porcelain p-6">
              <Icon className="mb-5 text-espresso" size={25} />
              <h3 className="font-display text-2xl font-semibold">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-smoke">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 lg:px-8">
        <SectionTitle eyebrow="Suit categories" title="Editorial wardrobes for every occasion" />
        <div className="grid gap-5 md:grid-cols-2">
          {categories.map((category) => (
            <article key={category.title} className="group relative min-h-[390px] overflow-hidden rounded-[28px] bg-charcoal">
              <img src={category.img} alt={category.title} className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/78 via-charcoal/10 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between gap-4 p-7 text-linen">
                <h3 className="font-display text-4xl font-semibold">{category.title}</h3>
                <button className="rounded-full bg-linen/95 px-5 py-3 text-sm font-semibold text-charcoal transition hover:bg-white">
                  View
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="customize-suit" className="bg-[#eee3d6] px-4 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-taupe">Customization experience</p>
            <h2 className="font-display text-5xl font-semibold leading-tight md:text-6xl">Design a suit that speaks softly and fits precisely</h2>
            <p className="mt-5 max-w-xl leading-8 text-smoke">
              Choose the construction, cloth, finish, and initials before our tailors refine every proportion by hand.
            </p>
            <div className="mt-8 overflow-hidden rounded-[28px] bg-charcoal">
              <img
                src="https://images.unsplash.com/photo-1555069519-127aadedf1ee?auto=format&fit=crop&w=1000&q=85"
                alt="Tailor working on suit fabric"
                className="h-[420px] w-full object-cover opacity-90"
              />
            </div>
          </div>
          <div className="rounded-[28px] border border-charcoal/10 bg-porcelain p-5 shadow-soft md:p-7">
            <div className="grid gap-4 md:grid-cols-2">
              {["Suit Type", "Material Quality", "Fabric Selection", "Button Style", "Pants Fit"].map((label, index) => (
                <label key={label} className={index === 2 ? "md:col-span-2" : ""}>
                  <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.18em] text-smoke">{label}</span>
                  <select className="w-full rounded-2xl border border-charcoal/10 bg-white px-4 py-4 text-sm outline-none transition focus:border-taupe">
                    <option>{label === "Suit Type" ? "Two-piece tailored suit" : label === "Material Quality" ? "Super 150s Italian wool" : label === "Button Style" ? "Horn buttons" : label === "Pants Fit" ? "Tapered classic fit" : "Fine herringbone weave"}</option>
                    <option>Premium seasonal selection</option>
                    <option>Atelier recommendation</option>
                  </select>
                </label>
              ))}
              <label>
                <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.18em] text-smoke">Embroidery Initials</span>
                <input className="w-full rounded-2xl border border-charcoal/10 bg-white px-4 py-4 text-sm outline-none transition focus:border-taupe" placeholder="A.V." />
              </label>
              <div>
                <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.18em] text-smoke">Color Selection</span>
                <div className="flex flex-wrap gap-3 rounded-2xl bg-white p-4">
                  {swatches.map((color) => (
                    <button key={color} aria-label="Fabric color" className="h-9 w-9 rounded-full border-2 border-white shadow-card ring-1 ring-charcoal/10" style={{ backgroundColor: color }} />
                  ))}
                </div>
              </div>
            </div>
            <div className="mt-6 rounded-[24px] bg-linen p-5">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-taupe">Preview</p>
                  <h3 className="mt-1 font-display text-3xl font-semibold">Charcoal wool, horn buttons</h3>
                </div>
                <Ruler className="text-espresso" />
              </div>
              <div className="mt-5 grid grid-cols-3 gap-3 text-center text-xs font-semibold text-smoke">
                {["Canvas", "Lapel", "Monogram"].map((item) => (
                  <div key={item} className="rounded-2xl bg-porcelain px-3 py-4">{item}</div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-4 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
        <div>
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-taupe">Measurements</p>
          <h2 className="font-display text-5xl font-semibold leading-tight">Precision starts with clean measurements</h2>
          <form className="mt-8 grid gap-4 rounded-[28px] bg-white p-5 shadow-card md:grid-cols-2 md:p-7">
            {["Height", "Weight", "Chest", "Waist", "Shoulder", "Inseam"].map((field) => (
              <label key={field}>
                <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.18em] text-smoke">{field}</span>
                <input className="w-full rounded-2xl border border-charcoal/10 bg-porcelain px-4 py-4 outline-none transition focus:border-taupe" placeholder={field === "Weight" ? "kg" : "cm"} />
              </label>
            ))}
            <button className="rounded-full bg-charcoal px-6 py-4 text-sm font-semibold text-linen transition hover:bg-espresso md:col-span-2">
              Save Measurements
            </button>
          </form>
        </div>
        <div className="grid gap-5">
          <div className="overflow-hidden rounded-[28px] bg-linen shadow-card">
            <img
              src="https://images.unsplash.com/photo-1598808503746-f34c53b9323e?auto=format&fit=crop&w=900&q=85"
              alt="Tailor taking suit measurements"
              className="h-72 w-full object-cover"
            />
            <div className="p-6">
              <h3 className="font-display text-3xl font-semibold">Need Measuring Help?</h3>
              <p className="mt-2 leading-7 text-smoke">Book a video fitting or visit the studio for a guided measurement session.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-charcoal px-4 py-20 text-linen lg:px-8">
        <SectionTitle eyebrow="Client notes" title="Quiet luxury, spoken by clients" light />
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-3">
          {testimonials.map((item) => (
            <article key={item.name} className="rounded-[24px] border border-linen/10 bg-linen/7 p-6 backdrop-blur">
              <div className="flex items-center gap-4">
                <img src={item.img} alt={item.name} className="h-14 w-14 rounded-full object-cover" />
                <div>
                  <h3 className="font-display text-2xl font-semibold">{item.name}</h3>
                  <p className="text-sm text-linen/60">{item.role}</p>
                </div>
              </div>
              <div className="mt-5 flex text-oat">{Array.from({ length: 5 }).map((_, i) => <Star key={i} size={17} fill="currentColor" />)}</div>
              <p className="mt-5 leading-8 text-linen/78">&quot;{item.quote}&quot;</p>
            </article>
          ))}
        </div>
      </section>

      <section id="contact" className="mx-auto grid max-w-7xl gap-8 px-4 py-20 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
        <div>
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-taupe">Contact</p>
          <h2 className="font-display text-5xl font-semibold leading-tight">Visit the tailoring studio</h2>
          <div className="mt-8 space-y-4 text-sm text-smoke">
            <p className="flex items-center gap-3"><MapPin size={18} /> 18 Savile House, Mayfair Studio, London</p>
            <p className="flex items-center gap-3"><Mail size={18} /> concierge@ateliervale.com</p>
          </div>
          <button className="mt-8 inline-flex items-center gap-3 rounded-full bg-sage px-6 py-4 text-sm font-semibold text-white transition hover:-translate-y-1 hover:bg-charcoal">
            <MessageCircle size={18} /> WhatsApp Consultation
          </button>
          <div className="mt-8 flex gap-3">
            {[Instagram, Mail, MessageCircle].map((Icon, index) => (
              <button key={index} className="grid h-11 w-11 place-items-center rounded-full bg-linen text-charcoal transition hover:bg-oat">
                <Icon size={18} />
              </button>
            ))}
          </div>
        </div>
        <form className="grid gap-4 rounded-[28px] bg-white p-5 shadow-card md:grid-cols-2 md:p-7">
          <input className="rounded-2xl border border-charcoal/10 bg-porcelain px-4 py-4 outline-none focus:border-taupe" placeholder="Name" />
          <input className="rounded-2xl border border-charcoal/10 bg-porcelain px-4 py-4 outline-none focus:border-taupe" placeholder="Email" />
          <input className="rounded-2xl border border-charcoal/10 bg-porcelain px-4 py-4 outline-none focus:border-taupe md:col-span-2" placeholder="Preferred suit style" />
          <textarea className="min-h-36 rounded-2xl border border-charcoal/10 bg-porcelain px-4 py-4 outline-none focus:border-taupe md:col-span-2" placeholder="Tell us about the occasion" />
          <button className="rounded-full bg-charcoal px-6 py-4 text-sm font-semibold text-linen transition hover:bg-espresso md:col-span-2">
            Request Appointment
          </button>
        </form>
      </section>

      <footer className="border-t border-charcoal/10 bg-linen px-4 py-10 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[1fr_1fr_1.2fr]">
          <div>
            <h2 className="font-display text-3xl font-semibold">Atelier Vale</h2>
            <p className="mt-3 max-w-xs text-sm leading-6 text-smoke">Bespoke tailoring for measured modern elegance.</p>
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-smoke">
            {["Home", "Collections", "Customize Suit", "About", "Contact"].map((item) => (
              <a key={item} href="#" className="hover:text-charcoal">{item}</a>
            ))}
          </div>
          <div>
            <p className="mb-3 text-sm font-semibold">Newsletter</p>
            <div className="flex overflow-hidden rounded-full bg-porcelain p-1">
              <input className="min-w-0 flex-1 bg-transparent px-4 outline-none" placeholder="Email address" />
              <button className="rounded-full bg-charcoal px-5 py-3 text-sm font-semibold text-linen">Join</button>
            </div>
          </div>
        </div>
        <p className="mx-auto mt-10 max-w-7xl text-xs text-smoke">&copy; 2026 Atelier Vale. All rights reserved.</p>
      </footer>
    </main>
  );
}
