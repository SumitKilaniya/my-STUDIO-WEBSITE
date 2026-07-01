import { createFileRoute } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  Camera,
  ChevronLeft,
  ChevronRight,
  Clock,
  Facebook,
  Film,
  Heart,
  Instagram,
  Mail,
  MapPin,
  Menu,
  Phone,
  Plus,
  Star,
  Users,
  Youtube,
} from "lucide-react";
import { useEffect, useRef, useState, type FormEvent, type ReactNode } from "react";
import { Lightbox, type LightboxImage } from "@/components/site/Lightbox";
import { Marquee } from "@/components/site/Marquee";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Anand Studio — Professional Photography in Rohtak" },
      {
        name: "description",
        content:
          "Anand Digital Studio captures weddings, pre-weddings, birthdays and events with cinematic precision in Rohtak. Book your session today.",
      },
      { property: "og:title", content: "Anand Studio — Professional Photography in Rohtak" },
      {
        property: "og:description",
        content:
          "Cinematic wedding, pre-wedding, and event photography in Rohtak. Explore our curated portfolio and book your session.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "Anand Digital Studio",
          image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=1200&q=80",
          telephone: "+919355566209",
          email: "anandstudio1980@gmail.com",
          address: {
            "@type": "PostalAddress",
            streetAddress: "near Dhanwantri School, Arya Nagar",
            addressLocality: "Rohtak",
            addressRegion: "Haryana",
            postalCode: "124001",
            addressCountry: "IN",
          },
          openingHours: ["Mo-Sa 10:00-19:00"],
          sameAs: [
            "https://www.instagram.com/ananddigitalstudio01/",
            "https://www.facebook.com/people/Anand-Bhakti-Live/61576146626678/",
          ],
        }),
      },
    ],
  }),
  component: Index,
});

const STUDIO = {
  name: "Anand Studio",
  fullName: "Anand Digital Studio",
  phone: "+91 93555 66209",
  phoneHref: "tel:+919355566209",
  whatsapp: "919355566209",
  email: "anandstudio1980@gmail.com",
  address: "near Dhanwantri School, Arya Nagar, Rohtak, Haryana 124001",
  addressShort: "Arya Nagar, Rohtak",
  hours: "Mon–Sat · 10 AM – 7 PM",
  instagram: "https://www.instagram.com/ananddigitalstudio01/?hl=en",
  facebook: "https://www.facebook.com/people/Anand-Bhakti-Live/61576146626678/?sk=about",
  youtube:
    "https://www.instagram.com/ananddigitalstudio01?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
  mapsEmbed:
    "https://www.google.com/maps?q=Anand+Digital+Studio+Arya+Nagar+Rohtak&output=embed",
  mapsLink: "https://maps.google.com/?q=Anand+Digital+Studio+Arya+Nagar+Rohtak",
};

const SOCIAL_LINKS: { Icon: typeof Instagram; href: string; label: string }[] = [
  { Icon: Instagram, href: STUDIO.instagram, label: "Instagram" },
  { Icon: Facebook, href: STUDIO.facebook, label: "Facebook" },
  { Icon: Youtube, href: STUDIO.youtube, label: "YouTube" },
];

const img = (id: string, w = 900) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`;

const HERO_BG = img("1488646953014-85cb44e25828", 2000);

const HERO_THUMBS = [
  img("1519741497674-611481863552"),
  img("1583939003579-730e3918a45a"),
  img("1502635385003-ee1e6a1a742d"),
  img("1469371670807-013ccf25f16a"),
  img("1511285560929-80b456fea0bc"),
  img("1542038784456-1ea8e935640e"),
  img("1465495976277-4387d4b0e4a6"),
  img("1604017011826-d3b4c23f8914"),
  img("1519225421980-715cb0215aed"),
];

const SERVICES = [
  { icon: Heart, name: "Wedding Photography", desc: "Cinematic, full-day storytelling.", image: img("1519741497674-611481863552") },
  { icon: Camera, name: "Pre-Wedding Shoots", desc: "Romantic outdoor sessions.", image: img("1511285560929-80b456fea0bc") },
  { icon: Star, name: "Birthday & Events", desc: "Joyful, candid celebration coverage.", image: img("1530103862676-de8c9debad1d") },
  { icon: Users, name: "Corporate & Live Events", desc: "Polished editorial coverage.", image: img("1492691527719-9d1e07e534b4") },
  { icon: Film, name: "Cinematic Films", desc: "Story-driven highlight films.", image: img("1485463611174-f302f6a5c1c9") },
  { icon: Camera, name: "Drone Coverage", desc: "Sweeping aerial perspectives.", image: img("1469474968028-56623f02e42e") },
];

const OCCASION_IMAGES = [
  { src: img("1519741497674-611481863552"), label: "Wedding Photography" },
  { src: img("1502635385003-ee1e6a1a742d"), label: "Portrait Sessions" },
  { src: img("1542038784456-1ea8e935640e"), label: "Commercial Photography" },
  { src: img("1530103862676-de8c9debad1d"), label: "Event Photography" },
];

const FEATURED = [
  { src: img("1511285560929-80b456fea0bc"), label: "Wedding Photography" },
  { src: img("1488646953014-85cb44e25828"), label: "Travel Photography" },
  { src: img("1469371670807-013ccf25f16a"), label: "Lifestyle Photography" },
  { src: img("1485463611174-f302f6a5c1c9"), label: "Fashion Photography" },
];

const PORTFOLIO_POOL: { src: string; cat: string; caption: string; span?: number }[] = [
  { src: img("1519741497674-611481863552"), cat: "Weddings", caption: "Sanya & Rohan", span: 2 },
  { src: img("1583939003579-730e3918a45a"), cat: "Portraits", caption: "Studio Light" },
  { src: img("1511285560929-80b456fea0bc"), cat: "Pre-Wedding", caption: "Golden Hour" },
  { src: img("1492691527719-9d1e07e534b4"), cat: "Events", caption: "Summit Night", span: 2 },
  { src: img("1502635385003-ee1e6a1a742d"), cat: "Portraits", caption: "Editorial" },
  { src: img("1530103862676-de8c9debad1d"), cat: "Birthdays", caption: "Aria Turns 5" },
  { src: img("1542038784456-1ea8e935640e"), cat: "Live Coverage", caption: "Backstage" },
  { src: img("1465495976277-4387d4b0e4a6"), cat: "Weddings", caption: "Mandap" },
  { src: img("1604017011826-d3b4c23f8914"), cat: "Pre-Wedding", caption: "Coast" },
  { src: img("1485463611174-f302f6a5c1c9"), cat: "Portraits", caption: "Fashion", span: 2 },
  { src: img("1469371670807-013ccf25f16a"), cat: "Events", caption: "Gala" },
  { src: img("1519225421980-715cb0215aed"), cat: "Live Coverage", caption: "Concert" },
  { src: img("1527529482837-4698179dc6ce"), cat: "Weddings", caption: "First Look" },
  { src: img("1583939411023-14783179e581"), cat: "Birthdays", caption: "Cake Smash" },
  { src: img("1469474968028-56623f02e42e"), cat: "Pre-Wedding", caption: "Desert" },
  { src: img("1488646953014-85cb44e25828"), cat: "Portraits", caption: "Wanderer" },
  { src: img("1539635278303-d4002c07eae3"), cat: "Events", caption: "Reception" },
  { src: img("1519741497674-611481863552"), cat: "Weddings", caption: "Vows" },
  { src: img("1502635385003-ee1e6a1a742d"), cat: "Portraits", caption: "Profile" },
  { src: img("1492691527719-9d1e07e534b4"), cat: "Live Coverage", caption: "Stage" },
  { src: img("1530103862676-de8c9debad1d"), cat: "Birthdays", caption: "Candles" },
  { src: img("1542038784456-1ea8e935640e"), cat: "Events", caption: "Dinner" },
  { src: img("1465495976277-4387d4b0e4a6"), cat: "Weddings", caption: "Bride" },
  { src: img("1604017011826-d3b4c23f8914"), cat: "Pre-Wedding", caption: "Shore" },
  { src: img("1485463611174-f302f6a5c1c9"), cat: "Portraits", caption: "Mood" },
  { src: img("1469371670807-013ccf25f16a"), cat: "Events", caption: "Afterparty" },
  { src: img("1519225421980-715cb0215aed"), cat: "Live Coverage", caption: "Lights" },
  { src: img("1527529482837-4698179dc6ce"), cat: "Weddings", caption: "Dance" },
  { src: img("1583939411023-14783179e581"), cat: "Birthdays", caption: "Joy" },
  { src: img("1488646953014-85cb44e25828"), cat: "Portraits", caption: "Journey" },
];

const FILTERS = ["All", "Weddings", "Pre-Wedding", "Birthdays", "Events", "Live Coverage", "Portraits"];

const COLLECTIONS = [
  { n: "01", tag: "WEDDING COLLECTION", title: "Sanya & Rohan", date: "Mar 2024", src: img("1519741497674-611481863552") },
  { n: "02", tag: "PRE-WEDDING", title: "Aanya & Veer", date: "Jan 2024", src: img("1511285560929-80b456fea0bc") },
  { n: "03", tag: "PORTRAIT SERIES", title: "Solitude", date: "Nov 2023", src: img("1502635385003-ee1e6a1a742d") },
  { n: "04", tag: "LIVE EVENT", title: "Summit '23", date: "Oct 2023", src: img("1492691527719-9d1e07e534b4") },
  { n: "05", tag: "FASHION EDITORIAL", title: "After Dark", date: "Sep 2023", src: img("1485463611174-f302f6a5c1c9") },
];

const COLLECTION_CATEGORIES = [
  { n: "01", title: "Fashion Photography" },
  { n: "02", title: "Pre-Wedding Photography", active: true },
  { n: "03", title: "Portrait Photography" },
  { n: "04", title: "Maternity Photography" },
  { n: "05", title: "Custom Requests" },
];

const TESTIMONIALS = [
  { name: "Priya & Karan", event: "Wedding", quote: "They captured emotions we didn't know we showed. Every frame feels like a memory frozen in time." },
  { name: "Ananya Mehra", event: "Maternity", quote: "Calm, patient, and incredibly artistic. The final gallery brought me to tears." },
  { name: "Vikram Singh", event: "Corporate Event", quote: "Polished, on-time, and the edit turnaround was unreal. A genuine pro team." },
  { name: "Riya & Arjun", event: "Pre-Wedding", quote: "The golden-hour set looks like a film. We can't stop sharing it." },
  { name: "The Kapoors", event: "Birthday", quote: "Captured every candid laugh. Worth every rupee, twice over." },
  { name: "Neha Sharma", event: "Portraits", quote: "I've never felt this comfortable in front of a camera. Stunning results." },
];

const SECTION_ANIM = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
} as const;

function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-text-secondary">
      <span className="h-1.5 w-1.5 rounded-full bg-accent" />
      {children}
    </div>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-bg-dark font-body text-text-primary antialiased">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <OccasionGrid />
      <FeaturedWork />
      <Team />
      <Portfolio />
      <CollectionStrip />
      <Testimonials />
      <BookingBanner />
      <ContactForm />
      <Footer />
    </div>
  );
}

/* ---------------- NAVBAR ---------------- */
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About Us" },
    { href: "#services", label: "Service" },
    { href: "#portfolio", label: "Portfolio" },
    { href: "#contact", label: "Contact Us" },
  ];

  return (
    <header
      role="navigation"
      aria-label="Main navigation"
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-border-soft bg-bg-dark/85 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-[76px] max-w-[1280px] items-center justify-between px-6 md:px-16">
        <a
          href="#home"
          aria-label="Anand Studio — home"
          className="flex items-center gap-2.5 font-display text-lg font-bold tracking-tight"
          style={{ height: 44 }}
        >
          <span className="grid h-9 w-9 place-items-center rounded-full bg-accent/15 text-accent">
            <Camera className="h-4 w-4" aria-hidden="true" />
          </span>
          <span className="leading-tight">
            <span className="block text-accent">Anand</span>
            <span className="block text-[11px] font-medium tracking-[0.18em] text-text-secondary">
              STUDIO
            </span>
          </span>
        </a>
        <nav className="hidden items-center gap-9 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-text-primary/85 transition hover:text-accent"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="hidden rounded-full bg-accent px-6 py-2.5 text-sm font-semibold text-bg-darker transition hover:scale-[1.03] hover:bg-accent-light md:inline-block"
        >
          Book Now
        </a>
        <button
          onClick={() => setOpen(true)}
          className="grid h-10 w-10 place-items-center rounded-full bg-white/10 text-white md:hidden"
          aria-label="Open menu"
        >
          <Menu className="h-5 w-5" />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex flex-col bg-bg-darker p-8 md:hidden"
          >
            <div className="flex justify-end">
              <button
                onClick={() => setOpen(false)}
                className="grid h-10 w-10 place-items-center rounded-full bg-white/10"
                aria-label="Close"
              >
                ✕
              </button>
            </div>
            <nav className="mt-12 flex flex-col gap-6">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="font-display text-3xl font-semibold tracking-tight"
                >
                  {l.label}
                </a>
              ))}
            </nav>
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-auto rounded-full bg-accent py-4 text-center font-semibold text-bg-darker"
            >
              Book Now
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

/* ---------------- HERO ---------------- */
function Hero() {
  const [idx, setIdx] = useState(0);
  const [paused, setPaused] = useState(false);
  const groups = [
    HERO_THUMBS.slice(0, 3),
    HERO_THUMBS.slice(3, 6),
    HERO_THUMBS.slice(6, 9),
  ];
  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setIdx((i) => (i + 1) % groups.length), 3000);
    return () => clearInterval(t);
  }, [paused, groups.length]);

  return (
    <section id="home" className="relative min-h-screen overflow-hidden">
      {/* REPLACE THIS URL WITH YOUR HERO PHOTO in src/data/images.js */}
      <img
        src={HERO_BG}
        alt="Anand Studio — cinematic photography in Rohtak"
        loading="eager"
        fetchPriority="high"
        width={2000}
        height={1333}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-bg-darker/85 via-bg-darker/40 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-bg-darker/90 via-transparent to-bg-darker/30" />

      <div className="relative mx-auto flex min-h-screen max-w-[1280px] flex-col justify-center px-6 pt-32 pb-40 md:px-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl"
        >
          <Eyebrow>Capture Moments That Tell Stories</Eyebrow>
          <h1 className="mt-6 font-display text-4xl font-bold leading-[1.08] tracking-tight text-white md:text-6xl">
            Professional photography that turns real moments into timeless visual memories.
          </h1>
          <p className="mt-6 max-w-[480px] text-base leading-relaxed text-white/75">
            Explore a curated portfolio of portraits, events, lifestyle, and commercial photography
            crafted with creativity and precision.
          </p>
          <a
            href="#portfolio"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-bg-darker transition hover:scale-[1.03] hover:bg-white/90"
          >
            View Portfolio <ArrowRight className="h-4 w-4" />
          </a>
        </motion.div>

        {/* mini carousel */}
        <div
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          className="absolute right-6 bottom-12 hidden flex-col items-end gap-3 md:flex md:right-16"
        >
          <div className="relative h-[110px] w-[360px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={idx}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 flex gap-3"
              >
                {groups[idx].map((src, i) => (
                  <img
                    key={src + i}
                    src={src}
                    alt=""
                    className="h-[110px] w-[110px] rounded-xl border-2 border-white object-cover shadow-xl"
                    style={{ transform: `translateY(${i % 2 === 1 ? "-6px" : "0"})` }}
                  />
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
          <div className="flex gap-1.5">
            {groups.map((_, i) => (
              <button
                key={i}
                onClick={() => setIdx(i)}
                className={`h-1.5 rounded-full transition-all ${
                  i === idx ? "w-6 bg-accent" : "w-1.5 border border-white/60"
                }`}
                aria-label={`Set ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- ABOUT ---------------- */
function About() {
  return (
    <section id="about" className="bg-bg-dark py-24 md:py-32">
      <motion.div {...SECTION_ANIM} className="mx-auto grid max-w-[1280px] grid-cols-1 items-center gap-16 px-6 md:grid-cols-2 md:px-16">
        <div className="relative h-[520px]">
          <img
            src={img("1500051638674-ff996a0ec29e", 800)}
            alt="Photographer working outdoors"
            className="absolute bottom-0 left-0 h-[360px] w-[78%] rounded-3xl object-cover shadow-2xl"
          />
          <img
            src={img("1502635385003-ee1e6a1a742d", 700)}
            alt="Autumn portrait"
            className="absolute top-0 right-0 h-[300px] w-[55%] rounded-3xl object-cover shadow-2xl ring-1 ring-white/10"
          />
        </div>
        <div>
          <Eyebrow>Behind the Lens</Eyebrow>
          <h2 className="mt-5 font-display text-4xl font-bold leading-tight tracking-tight md:text-5xl">
            Meet the creative mind capturing unforgettable moments.
          </h2>
          <p className="mt-6 max-w-md text-text-secondary">
            For over a decade we've been telling stories with light — weddings, portraits, and
            editorial shoots that feel honest, cinematic, and quietly emotional. Every frame is
            crafted with intention.
          </p>
          <div className="mt-8 grid grid-cols-3 gap-3">
            {[
              { n: "10+", l: "Years of Experience" },
              { n: "386+", l: "Happy Clients" },
              { n: "600+", l: "Photo Shoots" },
            ].map((s) => (
              <div key={s.l} className="rounded-2xl border border-border-soft bg-surface p-5 text-center">
                <div className="font-display text-2xl font-bold text-accent md:text-3xl">{s.n}</div>
                <div className="mt-1 text-xs text-text-secondary">{s.l}</div>
              </div>
            ))}
          </div>
          <a
            href="#contact"
            className="mt-8 inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white hover:text-bg-darker"
          >
            Learn More About Me <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </motion.div>
    </section>
  );
}

/* ---------------- SERVICES ---------------- */
function Services() {
  return (
    <section id="services" className="bg-bg-darker py-24 md:py-32">
      <motion.div {...SECTION_ANIM} className="mx-auto max-w-[1280px] px-6 md:px-16">
        <div className="flex flex-col items-center text-center">
          <Eyebrow>What We Do</Eyebrow>
          <h2 className="mt-5 font-display text-4xl font-bold tracking-tight md:text-5xl">
            Services We Offer
          </h2>
        </div>
        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          {SERVICES.map((s, i) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative h-[280px] overflow-hidden rounded-2xl border border-border-soft bg-surface transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-accent/10"
            >
              <div className="relative z-10 flex h-full flex-col p-6">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-accent/15 text-accent">
                  <s.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 font-display text-lg font-semibold">{s.name}</h3>
                <p className="mt-2 text-sm text-text-secondary transition-opacity duration-300 group-hover:opacity-0">
                  {s.desc}
                </p>
                <span className="mt-auto inline-flex items-center gap-1 text-sm font-semibold text-accent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  View Work <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </div>
              <div
                className="absolute inset-x-0 bottom-0 h-1/2 translate-y-4 bg-cover bg-center opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100"
                style={{ backgroundImage: `url(${s.image})` }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/60 to-transparent" />
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

/* ---------------- OCCASION GRID ---------------- */
function OccasionGrid() {
  return (
    <section className="bg-bg-darker pb-24 md:pb-32">
      <motion.div {...SECTION_ANIM} className="mx-auto grid max-w-[1280px] grid-cols-1 gap-12 px-6 md:grid-cols-[2fr_3fr] md:gap-16 md:px-16">
        <div className="flex flex-col justify-center">
          <Eyebrow>Photography Services</Eyebrow>
          <h2 className="mt-5 font-display text-4xl font-bold leading-tight tracking-tight md:text-5xl">
            Professional photography tailored for every occasion.
          </h2>
          <p className="mt-5 max-w-md text-text-secondary">
            From intimate elopements to high-energy live events, we shape each shoot around your
            story, your venue, and your vibe.
          </p>
          <a
            href="#services"
            className="mt-7 inline-flex w-fit items-center gap-2 rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white hover:text-bg-darker"
          >
            View All Services <ArrowRight className="h-4 w-4" />
          </a>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {OCCASION_IMAGES.map((o) => (
            <div key={o.label} className="group relative aspect-square overflow-hidden rounded-2xl">
              <img
                src={o.src}
                alt={o.label}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <span className="absolute bottom-3 left-3 rounded-full bg-black/55 px-3 py-1 text-xs font-medium text-white backdrop-blur">
                {o.label}
              </span>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

/* ---------------- FEATURED WORK ---------------- */
function FeaturedWork() {
  const [open, setOpen] = useState(false);
  const [start, setStart] = useState(0);
  const galleryImages: LightboxImage[] = PORTFOLIO_POOL.map((p) => ({
    src: p.src.replace("w=900", "w=1600"),
    caption: `${p.caption} · ${p.cat}`,
  }));
  return (
    <section className="bg-bg-dark py-24 md:py-32">
      <motion.div {...SECTION_ANIM} className="mx-auto max-w-[1280px] px-6 md:px-16">
        <div className="flex flex-col items-center text-center">
          <Eyebrow>Featured Work</Eyebrow>
          <h2 className="mt-5 max-w-3xl font-display text-4xl font-bold leading-tight tracking-tight md:text-5xl">
            A selection of my most recent and favorite captures.
          </h2>
          <p className="mt-5 max-w-xl text-text-secondary">
            A small window into the stories we've had the privilege of telling.
          </p>
        </div>
        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2">
          {FEATURED.map((f, i) => (
            <button
              key={i}
              onClick={() => {
                setStart(i);
                setOpen(true);
              }}
              className="group relative aspect-[4/3] overflow-hidden rounded-3xl text-left"
            >
              <img src={f.src} alt={f.label} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
              <span className="absolute bottom-5 left-5 font-display text-xl font-bold text-white transition-transform duration-300 group-hover:-translate-y-1">
                {f.label}
              </span>
            </button>
          ))}
        </div>
        <div className="mt-12 text-center">
          <button
            onClick={() => {
              setStart(0);
              setOpen(true);
            }}
            className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-bg-darker transition hover:scale-[1.03]"
          >
            Explore Full Gallery <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </motion.div>
      <Lightbox images={galleryImages} open={open} initialIndex={start} onClose={() => setOpen(false)} />
    </section>
  );
}

/* ---------------- TEAM ---------------- */
function Team() {
  return (
    <section id="team" className="bg-bg-dark pb-24 md:pb-32">
      <motion.div {...SECTION_ANIM} className="mx-auto grid max-w-[1280px] grid-cols-1 items-center gap-12 px-6 md:grid-cols-2 md:gap-16 md:px-16">
        <div className="relative">
          <div className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-3xl shadow-2xl">
            <img
              src={img("1500648767791-00dcc994a43e", 900)}
              alt="Rohan Sharma, Lead Photographer"
              className="h-full w-full object-cover"
            />
            <div className="absolute top-4 left-4 flex gap-2 rounded-full bg-black/45 px-2 py-2 backdrop-blur">
              {[
                { Icon: Facebook, href: "https://facebook.com" },
                { Icon: Instagram, href: "https://instagram.com" },
                { Icon: Youtube, href: "https://youtube.com" },
              ].map(({ Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="grid h-9 w-9 place-items-center rounded-full bg-surface text-accent transition hover:bg-accent hover:text-bg-darker"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 to-transparent p-6">
              <div className="font-display text-lg font-bold text-white">Rohan Sharma</div>
              <div className="text-sm text-white/70">Lead Photographer</div>
            </div>
          </div>
        </div>
        <div>
          <Eyebrow>Our Team</Eyebrow>
          <h2 className="mt-5 font-display text-4xl font-bold leading-tight tracking-tight md:text-5xl">
            Meet our team of photography experts
          </h2>
          <p className="mt-5 max-w-md text-text-secondary">
            A close-knit crew of photographers, second shooters, and editors who've spent years
            sharpening one craft — telling your story honestly.
          </p>
          <a
            href="#contact"
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-bg-darker transition hover:scale-[1.03] hover:bg-accent-light"
          >
            Book a Session <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </motion.div>
    </section>
  );
}

/* ---------------- PORTFOLIO ---------------- */
function Portfolio() {
  const [filter, setFilter] = useState("All");
  const [visible, setVisible] = useState(18);
  const [lightOpen, setLightOpen] = useState(false);
  const [lightStart, setLightStart] = useState(0);

  const filtered = PORTFOLIO_POOL.filter((p) => filter === "All" || p.cat === filter);
  const shown = filtered.slice(0, visible);
  const lightImages: LightboxImage[] = filtered.map((p) => ({
    src: p.src.replace("w=900", "w=1600"),
    caption: `${p.caption} · ${p.cat}`,
  }));

  return (
    <section id="portfolio" className="bg-bg-dark py-24 md:py-32">
      <div className="mx-auto max-w-[1280px] px-6 md:px-16">
        <motion.div {...SECTION_ANIM} className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <Eyebrow>Our Work</Eyebrow>
            <h2 className="mt-5 font-display text-5xl font-bold tracking-tight md:text-6xl">Portfolio</h2>
          </div>
          <p className="max-w-sm text-text-secondary md:text-right">
            Every frame is crafted with intention — browse by category to discover your story.
          </p>
        </motion.div>

        <div className="mt-10 flex flex-wrap gap-2">
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => {
                setFilter(f);
                setVisible(18);
              }}
              className={`rounded-full px-5 py-2 text-sm font-medium transition ${
                filter === f
                  ? "bg-accent text-bg-darker"
                  : "bg-surface text-text-secondary hover:bg-surface-2 hover:text-white"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={filter}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="mt-8 columns-2 gap-1.5 sm:columns-3 lg:columns-4"
          >
            {shown.map((p, i) => (
              <motion.button
                key={`${filter}-${i}`}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: (i % 12) * 0.04 }}
                onClick={() => {
                  setLightStart(i);
                  setLightOpen(true);
                }}
                className="group relative mb-1.5 block w-full break-inside-avoid overflow-hidden rounded-[3px]"
                style={{ aspectRatio: p.span === 2 ? "3/4" : i % 5 === 0 ? "1/1" : i % 3 === 0 ? "4/5" : "3/4" }}
              >
                <img
                  src={p.src}
                  alt={p.caption}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="absolute bottom-3 left-3 translate-y-2 text-left opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  <div className="text-sm font-semibold text-white">{p.caption}</div>
                  <div className="text-[11px] uppercase tracking-wider text-accent">{p.cat}</div>
                </div>
              </motion.button>
            ))}
          </motion.div>
        </AnimatePresence>

        {visible < filtered.length && (
          <div className="mt-12 text-center">
            <button
              onClick={() => setVisible((v) => v + 12)}
              className="inline-flex items-center gap-2 rounded-full bg-surface px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-surface-2"
            >
              <Plus className="h-4 w-4" /> Load More
            </button>
          </div>
        )}
      </div>
      <Lightbox images={lightImages} open={lightOpen} initialIndex={lightStart} onClose={() => setLightOpen(false)} />
    </section>
  );
}

/* ---------------- COLLECTION STRIP ---------------- */
function CollectionStrip() {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el || paused) return;
    const t = setInterval(() => {
      if (!el) return;
      if (el.scrollLeft + el.clientWidth >= el.scrollWidth - 2) {
        el.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        el.scrollBy({ left: 1, behavior: "auto" });
      }
    }, 30);
    return () => clearInterval(t);
  }, [paused]);

  const nudge = (dir: number) => {
    setPaused(true);
    scrollerRef.current?.scrollBy({ left: dir * 380, behavior: "smooth" });
    setTimeout(() => setPaused(false), 3500);
  };

  return (
    <section className="bg-bg-darker py-24 md:py-32">
      <motion.div {...SECTION_ANIM} className="mx-auto max-w-[1280px] px-6 md:px-16">
        <div className="flex items-end justify-between">
          <div>
            <Eyebrow>Featured Collections</Eyebrow>
            <h2 className="mt-5 font-display text-4xl font-bold tracking-tight md:text-5xl">Collection</h2>
          </div>
          <div className="flex gap-2">
            <button onClick={() => nudge(-1)} className="grid h-11 w-11 place-items-center rounded-full bg-surface text-white transition hover:bg-accent hover:text-bg-darker" aria-label="Previous">
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button onClick={() => nudge(1)} className="grid h-11 w-11 place-items-center rounded-full bg-surface text-white transition hover:bg-accent hover:text-bg-darker" aria-label="Next">
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div
          ref={scrollerRef}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          className="mt-10 flex gap-5 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {[...COLLECTIONS, ...COLLECTIONS].map((c, i) => (
            <div key={i} className="relative aspect-[4/5] w-[320px] shrink-0 overflow-hidden rounded-2xl">
              <img src={c.src} alt={c.title} loading="lazy" className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5">
                <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-accent">{c.tag}</div>
                <div className="mt-1 font-display text-xl font-bold text-white">{c.title}</div>
                <div className="text-xs text-white/65">{c.date}</div>
              </div>
              <div className="absolute top-4 left-4 rounded-full bg-black/55 px-2.5 py-1 text-[11px] font-semibold text-white backdrop-blur">
                {c.n}
              </div>
            </div>
          ))}
        </div>

        <ul className="mt-12 divide-y divide-border-soft border-t border-border-soft">
          {COLLECTION_CATEGORIES.map((c) => (
            <li key={c.n}>
              <a
                href="#portfolio"
                className={`group flex items-center justify-between py-5 transition ${
                  c.active ? "text-accent" : "text-white hover:text-accent"
                }`}
              >
                <div className="flex items-center gap-6">
                  <span className="font-mono text-sm text-text-secondary">{c.n}</span>
                  <span className="font-display text-2xl font-semibold md:text-3xl">{c.title}</span>
                </div>
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </a>
            </li>
          ))}
        </ul>
      </motion.div>
    </section>
  );
}

/* ---------------- TESTIMONIALS ---------------- */
function Testimonials() {
  const [idx, setIdx] = useState(0);
  const [paused, setPaused] = useState(false);
  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setIdx((i) => (i + 1) % TESTIMONIALS.length), 5000);
    return () => clearInterval(t);
  }, [paused]);

  return (
    <section className="bg-bg-dark py-20">
      <motion.div {...SECTION_ANIM} className="mx-auto max-w-[1100px] px-6 md:px-16">
        <div className="flex items-end justify-between">
          <div>
            <Eyebrow>Kind Words</Eyebrow>
            <h2 className="mt-3 font-display text-2xl font-bold tracking-tight md:text-3xl">What our clients say</h2>
          </div>
          <div className="flex gap-2">
            <button onClick={() => setIdx((i) => (i - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)} className="grid h-9 w-9 place-items-center rounded-full bg-surface text-white transition hover:bg-accent hover:text-bg-darker" aria-label="Previous">
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button onClick={() => setIdx((i) => (i + 1) % TESTIMONIALS.length)} className="grid h-9 w-9 place-items-center rounded-full bg-surface text-white transition hover:bg-accent hover:text-bg-darker" aria-label="Next">
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3"
        >
          {[0, 1, 2].map((off) => {
            const t = TESTIMONIALS[(idx + off) % TESTIMONIALS.length];
            return (
              <motion.div
                key={`${idx}-${off}`}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35 }}
                className="rounded-2xl border border-border-soft bg-surface p-5"
              >
                <div className="flex items-start justify-between">
                  <div className="flex gap-0.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <div className="grid h-8 w-8 place-items-center rounded-full bg-accent/20 text-xs font-bold text-accent">
                    {t.name.split(" ").map((s) => s[0]).join("").slice(0, 2)}
                  </div>
                </div>
                <p className="mt-3 line-clamp-2 text-sm italic text-text-secondary">"{t.quote}"</p>
                <div className="mt-3 text-sm font-semibold text-white">
                  {t.name} <span className="font-normal text-text-secondary">· {t.event}</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-6 flex justify-center gap-1.5">
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              onClick={() => setIdx(i)}
              className={`h-1.5 rounded-full transition-all ${i === idx ? "w-6 bg-accent" : "w-1.5 bg-white/25"}`}
              aria-label={`Testimonial ${i + 1}`}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
}

/* ---------------- BOOKING BANNER ---------------- */
function BookingBanner() {
  const strip1 = PORTFOLIO_POOL.slice(0, 12);
  const strip2 = PORTFOLIO_POOL.slice(12, 24);
  const tile = (p: { src: string }, w: number, h: number, i: number) => (
    <div key={i} className="shrink-0 px-1" style={{ width: w, height: h }}>
      <img src={p.src} alt="" loading="lazy" className="h-full w-full rounded-md object-cover opacity-70" />
    </div>
  );
  return (
    <section className="bg-bg-darker">
      <Marquee direction="right">
        <div className="flex items-end gap-0 py-3">
          {strip1.map((p, i) =>
            tile(p, i % 3 === 0 ? 260 : i % 3 === 1 ? 180 : 220, 180, i),
          )}
        </div>
      </Marquee>

      <div className="px-6 py-20 text-center md:py-28">
        <motion.div {...SECTION_ANIM}>
          <Eyebrow>
            <span className="mx-auto">Let's Work Together</span>
          </Eyebrow>
          <h2 className="mx-auto mt-5 max-w-3xl font-display text-4xl font-bold leading-tight tracking-tight md:text-6xl">
            Let's create something timeless together.
          </h2>
          <a
            href="#contact"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-accent px-9 py-4 text-base font-semibold text-bg-darker transition hover:scale-[1.03] hover:bg-accent-light"
          >
            Book Now <ArrowRight className="h-4 w-4" />
          </a>
        </motion.div>
      </div>

      <Marquee direction="left">
        <div className="flex items-end gap-0 py-3">
          {strip2.map((p, i) =>
            tile(p, i % 3 === 0 ? 220 : i % 3 === 1 ? 280 : 180, 180, i),
          )}
        </div>
      </Marquee>
    </section>
  );
}

/* ---------------- CONTACT FORM ---------------- */
function ContactForm() {
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const sanitize = (s: string) => s.replace(/<[^>]*>/g, "").replace(/[\r\n]+/g, " ").trim();
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const errs: Record<string, string> = {};
    const name = sanitize(String(data.get("name") ?? ""));
    const email = sanitize(String(data.get("email") ?? ""));
    const phone = sanitize(String(data.get("phone") ?? ""));
    const event = sanitize(String(data.get("event") ?? ""));
    const date = sanitize(String(data.get("date") ?? ""));
    const message = sanitize(String(data.get("message") ?? ""));
    if (!name) errs.name = "Required";
    if (!email) errs.email = "Required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errs.email = "Invalid email";
    if (!phone) errs.phone = "Required";
    else if (!/^\d{10}$/.test(phone.replace(/\D/g, "").slice(-10))) errs.phone = "Enter a 10-digit phone";
    if (!event) errs.event = "Required";
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;

    const text =
      `New Booking Inquiry — Anand Digital Studio%0A%0A` +
      `Name: ${encodeURIComponent(name)}%0A` +
      `Email: ${encodeURIComponent(email)}%0A` +
      `Phone: ${encodeURIComponent(phone)}%0A` +
      `Event Type: ${encodeURIComponent(event)}%0A` +
      (date ? `Event Date: ${encodeURIComponent(date)}%0A` : "") +
      (message ? `%0AMessage:%0A${encodeURIComponent(message)}` : "");
    window.open(`https://wa.me/${STUDIO.whatsapp}?text=${text}`, "_blank", "noopener,noreferrer");
    setSent(true);
    form.reset();
    setTimeout(() => setSent(false), 6000);
  };

  const inputCls =
    "w-full rounded-xl border border-border-soft bg-surface px-4 py-3 text-sm text-white placeholder:text-text-secondary/70 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30";

  return (
    <section id="contact" className="bg-bg-dark py-24 md:py-32">
      <motion.div {...SECTION_ANIM} className="mx-auto max-w-[1280px] px-6 md:px-16">
        <div className="text-center">
          <Eyebrow><span className="mx-auto">Get in Touch</span></Eyebrow>
          <h2 className="mt-5 font-display text-4xl font-bold tracking-tight md:text-5xl">Book Your Session</h2>
          <p className="mx-auto mt-4 max-w-xl text-text-secondary">
            Ready to create something beautiful together? Fill out the form below and we'll get back to you within 24 hours.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-10 lg:grid-cols-[3fr_2fr]">
          <form onSubmit={onSubmit} className="space-y-4 rounded-3xl border border-border-soft bg-bg-darker p-6 md:p-8">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div>
                <label className="mb-1.5 block text-xs font-medium text-text-secondary">Full Name *</label>
                <input name="name" className={inputCls} placeholder="Your full name" />
                {errors.name && <p className="mt-1 text-xs text-red-400">{errors.name}</p>}
              </div>
              <div>
                <label className="mb-1.5 block text-xs font-medium text-text-secondary">Email Address *</label>
                <input name="email" type="email" className={inputCls} placeholder="you@email.com" />
                {errors.email && <p className="mt-1 text-xs text-red-400">{errors.email}</p>}
              </div>
              <div>
                <label className="mb-1.5 block text-xs font-medium text-text-secondary">Phone Number *</label>
                <input name="phone" className={inputCls} placeholder="+91 98765 43210" />
                {errors.phone && <p className="mt-1 text-xs text-red-400">{errors.phone}</p>}
              </div>
              <div>
                <label className="mb-1.5 block text-xs font-medium text-text-secondary">Event Type *</label>
                <select name="event" defaultValue="" className={inputCls}>
                  <option value="" disabled>Choose one</option>
                  <option>Wedding</option>
                  <option>Pre-Wedding</option>
                  <option>Birthday</option>
                  <option>Corporate</option>
                  <option>Live Event</option>
                  <option>Other</option>
                </select>
                {errors.event && <p className="mt-1 text-xs text-red-400">{errors.event}</p>}
              </div>
              <div className="md:col-span-2">
                <label className="mb-1.5 block text-xs font-medium text-text-secondary">Event Date</label>
                <input name="date" type="date" className={inputCls} />
              </div>
              <div className="md:col-span-2">
                <label className="mb-1.5 block text-xs font-medium text-text-secondary">Message</label>
                <textarea name="message" rows={5} className={inputCls} placeholder="Tell us about your event — vision, venue, vibe..." />
              </div>
            </div>
            <button type="submit" className="w-full rounded-xl bg-accent py-3.5 text-sm font-semibold text-bg-darker transition hover:bg-accent-light">
              Send Inquiry
            </button>
            {sent && (
              <div className="rounded-xl border border-accent/40 bg-accent/10 px-4 py-3 text-sm text-accent" role="status">
                Thank you! We'll get back to you within 24 hours.
              </div>
            )}
          </form>

          <div className="space-y-5">
            <div className="grid grid-cols-2 gap-4">
              {[
                { Icon: MapPin, l: "Studio Address", v: STUDIO.address },
                { Icon: Phone, l: "Phone", v: STUDIO.phone },
                { Icon: Mail, l: "Email", v: STUDIO.email },
                { Icon: Clock, l: "Business Hours", v: STUDIO.hours },
              ].map(({ Icon, l, v }) => (
                <div key={l} className="rounded-2xl border border-border-soft bg-surface p-4">
                  <span className="grid h-9 w-9 place-items-center rounded-lg bg-accent/15 text-accent">
                    <Icon className="h-4 w-4" />
                  </span>
                  <div className="mt-3 text-xs text-text-secondary">{l}</div>
                  <div className="text-sm font-medium text-white">{v}</div>
                </div>
              ))}
            </div>
            <div>
              <div className="text-xs font-semibold uppercase tracking-[0.18em] text-text-secondary">Follow:</div>
              <div className="mt-3 flex gap-2">
                {SOCIAL_LINKS.map(({ Icon, href, label }) => (
                  <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="grid h-10 w-10 place-items-center rounded-full bg-surface text-accent transition hover:bg-accent hover:text-bg-darker">
                    <Icon className="h-4 w-4" aria-hidden="true" />
                  </a>
                ))}
              </div>
            </div>
            <div className="relative overflow-hidden rounded-2xl border border-border-soft">
              <iframe
                title="Anand Digital Studio location on map"
                src={STUDIO.mapsEmbed}
                className="h-64 w-full grayscale-[0.4]"
                loading="lazy"
              />
              <a
                href={STUDIO.mapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute top-3 left-3 rounded-full bg-bg-darker/90 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur transition hover:bg-accent hover:text-bg-darker"
              >
                Open in Maps ↗
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

/* ---------------- FOOTER ---------------- */
function Footer() {
  return (
    <footer className="border-t border-border-soft bg-bg-darker pt-16">
      <div className="mx-auto grid max-w-[1280px] grid-cols-1 gap-10 px-6 pb-12 md:grid-cols-4 md:px-16">
        <div>
          <a href="#home" className="flex items-center gap-2.5 font-display text-lg font-bold">
            <span className="grid h-9 w-9 place-items-center rounded-full bg-accent/15 text-accent">
              <Camera className="h-4 w-4" />
            </span>
            Anand Digital Studio
          </a>
          <p className="mt-4 text-sm leading-relaxed text-text-secondary">
            A boutique photography studio crafting cinematic, honest stories in light — for weddings, portraits, and beyond.
          </p>
          <div className="mt-4 flex gap-2">
            {[Instagram, Facebook, Youtube].map((Icon, i) => (
              <a key={i} href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="grid h-9 w-9 place-items-center rounded-full bg-surface text-accent transition hover:bg-accent hover:text-bg-darker">
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
        <FooterCol title="Quick Links" links={[
          ["Home", "#home"],
          ["About", "#about"],
          ["Portfolio", "#portfolio"],
          ["Blog", "#"],
          ["Contact", "#contact"],
        ]} />
        <FooterCol title="Our Services" links={[
          ["Wedding Photography", "#services"],
          ["Pre-Wedding Shoots", "#services"],
          ["Birthday & Events", "#services"],
          ["Corporate Events", "#services"],
          ["Cinematic Films", "#services"],
          ["Drone Coverage", "#services"],
        ]} />
        <div>
          <h3 className="font-display text-base font-semibold text-white">Stay Inspired</h3>
          <p className="mt-3 text-sm text-text-secondary">New work and behind-the-scenes, monthly.</p>
          <form onSubmit={(e) => e.preventDefault()} className="mt-4 flex gap-2">
            <input type="email" required placeholder="your@email.com" className="flex-1 rounded-full border border-border-soft bg-surface px-4 py-2.5 text-sm text-white placeholder:text-text-secondary/70 focus:border-accent focus:outline-none" />
            <button className="rounded-full bg-accent px-4 py-2.5 text-sm font-semibold text-bg-darker transition hover:bg-accent-light">Subscribe →</button>
          </form>
        </div>
      </div>
      <div className="border-t border-border-soft py-5 text-center text-xs text-text-secondary">
        © {new Date().getFullYear()} Anand Digital Studio. All rights reserved.
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: [string, string][] }) {
  return (
    <div>
      <h3 className="font-display text-base font-semibold text-white">{title}</h3>
      <ul className="mt-3 space-y-2">
        {links.map(([l, h]) => (
          <li key={l}>
            <a href={h} className="text-sm text-text-secondary transition hover:text-accent">{l}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
