import { useState } from 'react'
import { motion, AnimatePresence, type Variants } from "motion/react"
import {
  Check,
  Search,
  Zap,
  Layers,
  Clock,
  Sparkles,
  Cloud,
  Copy,
  Palette,
  Code,
  Link2,
  FileText,
  Laptop,
  ArrowRight,
  Smartphone,
  Lock,
  Plus,
  Minus,
  AppleIcon,
  Trophy,
  Medal,
  Lightbulb,
  Star,
  Award
} from 'lucide-react'
import './index.css'

// FAQ Data type
interface FAQItem {
  question: string
  answer: string
}

const faqData: FAQItem[] = [
  {
    question: "What is FlowFree?",
    answer: "FlowFree is a native macOS productivity tool that visualizes your clipboard history. It automatically organizes items by content type (text, images, links, colors, files), source application, and custom tags so you can search, find, and paste anything back in seconds."
  },
  {
    question: "Where is my clipboard history stored?",
    answer: "Your clipboard history is stored entirely locally on your device in an encrypted database. It never leaves your machine, ensuring complete data sovereignty and absolute privacy."
  },
  {
    question: "Does FlowFree upload my copied content?",
    answer: "No. FlowFree operates with a strict local-first philosophy. The app works fully offline and does not upload your clipboard history, screenshots, or extracted text to any external servers."
  },
  {
    question: "Can I search my clipboard history?",
    answer: "Yes! You can search by text content, source application, file type, or custom tags. FlowFree also features automatic local OCR, allowing you to search for text inside screenshots and images."
  },
  {
    question: "Is there a Windows version?",
    answer: "We are currently focused on delivering the best possible experience for macOS. However, a Windows version is on our long-term product roadmap."
  }
]

// ==========================================
// OPTIMIZED SMOOTH VARIANTS (GPU ACCELERATED)
// ==========================================
const staggerContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15, delayChildren: 0.4 } }
}

const fadeBlur: Variants = {
  hidden: { opacity: 0, scale: 0.95, y: 20 },
  visible: {
    opacity: 1, scale: 1, y: 0,
    transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }
  }
}

const headingContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2, delayChildren: 0.2 } }
}

const sectionContainer: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1.5 } }
}

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } }
}

const awardContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15, delayChildren: 0.3 } }
}

const awardItem: Variants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1, y: 0, scale: 1,
    transition: { type: "spring" as const, stiffness: 60, damping: 20 }
  }
}

const statsContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2, delayChildren: 0.5 } }
}

const statItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: "easeOut" as const } }
}

const featureIntroContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2, delayChildren: 0.1 } }
}

const wordReveal: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } }
}

const standardFade: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } }
}

const cardFade: Variants = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] as [number, number, number, number], delay: 0.2 } }
}

const flipScale: Variants = {
  hidden: { opacity: 0, rotateY: 90, scale: 0.8, transformPerspective: 1200 },
  visible: {
    opacity: 1, rotateY: 0, scale: 1, transformPerspective: 1200,
    transition: { type: "spring" as const, stiffness: 70, damping: 20 }
  }
}

const tagStagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.05, delayChildren: 0.6 } }
}

const tagItem: Variants = {
  hidden: { opacity: 0, scale: 0.8, y: 10 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { type: "spring" as const, stiffness: 100, damping: 15 } }
}

function App() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null)
  const [copiedFeature, setCopiedFeature] = useState<string | null>(null)
  const [selectedLibraryTab, setSelectedLibraryTab] = useState<'all' | 'text' | 'image' | 'link' | 'color'>('all')

  const toggleFaq = (index: number) => {
    if (activeFaq === index) {
      setActiveFaq(null)
    } else {
      setActiveFaq(index)
    }
  }

  const libraryClips = [
    { id: 1, type: 'text', content: 'FlowFree is a performance-first clipboard history tool.', time: 'Just now', app: 'Safari' },
    { id: 2, type: 'color', content: '#6366f1', time: '4m ago', app: 'Figma' },
    { id: 3, type: 'link', content: 'https://github.com/studio/flowboard', time: '12m ago', app: 'VS Code' },
    { id: 4, type: 'image', content: 'hero_mockup.png', time: '30m ago', app: 'CleanShot X' },
    { id: 5, type: 'text', content: 'pnpm add @flowboard/ui', time: '1h ago', app: 'Terminal' },
  ]

  const filteredClips = libraryClips.filter(clip =>
    selectedLibraryTab === 'all' || clip.type === selectedLibraryTab
  )

  const handleCopyDemo = (text: string, id: string) => {
    navigator.clipboard.writeText(text)
    setCopiedFeature(id)
    setTimeout(() => setCopiedFeature(null), 2000)
  }

  return (
    <div className="bg-surface text-on-surface font-sans antialiased selection:bg-primary selection:text-white min-h-screen">

      {/* NAVBAR ANIMATION */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-4xl"
      >
        <div className="bg-black/90 backdrop-blur-md rounded-full px-6 py-3 shadow-2xl border border-white/10">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <div className="h-7 w-7 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-bold text-sm shadow-lg">
                F
              </div>
              <span className="text-lg font-semibold text-white">FlowFree</span>
            </div>

            <div className="hidden md:flex items-center space-x-6">
              <a className="text-sm text-gray-300 hover:text-white font-medium transition-colors" href="#features">Features</a>
              <a className="text-sm text-gray-300 hover:text-white font-medium transition-colors" href="#faq">FAQ</a>
              <a className="text-sm text-gray-300 hover:text-white font-medium transition-colors" href="#">Changelog</a>
              <a className="text-sm text-gray-300 hover:text-white font-medium transition-colors" href="#">Showcase</a>
              <a className="text-sm text-gray-300 hover:text-white font-medium transition-colors" href="#pricing">Pricing</a>
            </div>

            <div className="flex items-center gap-4">
              <a
                className="bg-white text-black px-4 py-2 rounded-full font-medium text-sm hover:bg-gray-100 transition-colors flex items-center gap-2"
                href="#pricing"
              >
                <AppleIcon className="w-4 h-4" />
                <span className="hidden sm:inline">Download</span>
              </a>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* HERO SECTION ANIMATIONS */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="pt-32 pb-24 text-center px-4 relative overflow-hidden bg-cover bg-center"
        id="hero"
        style={{
          background: 'linear-gradient(180deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
        }}
      >
        <div className="max-w-4xl mx-auto relative z-10 pt-8 flex flex-col items-center">

          {/* Portfolio Showcase Badge */}
          <motion.div variants={fadeBlur} className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/20 text-white text-sm font-medium mb-8 backdrop-blur-md border border-white/30 shadow-lg">
            <Sparkles className="w-4 h-4" />
            Portfolio Showcase • Concept Design
          </motion.div>

          {/* Heading (Staggered by line) */}
          <motion.h1
            variants={headingContainer}
            className="text-6xl md:text-8xl font-black text-white tracking-tighter leading-none mb-6 flex flex-col items-center"
          >
            <motion.span variants={fadeBlur} className="inline-block">Copy once.</motion.span>
            <motion.span variants={fadeBlur} className="inline-block">Reuse anytime.</motion.span>
          </motion.h1>

          {/* Description */}
          <motion.p variants={fadeBlur} className="text-sm md:text-lg text-white/95 max-w-2xl mx-auto mb-10 font-light leading-relaxed">
            FlowFree saves your clipboard and screenshots in a beautiful visual history, automatically grouped by type, app, and custom categories, so you can search, find, and paste anything back in seconds.
          </motion.p>

          {/* CTA Button */}
          <motion.a
            variants={fadeBlur}
            className="inline-flex items-center justify-center bg-primary text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-primary-dark transition-all hover:scale-105 gap-2 shadow-2xl"
            href="#pricing"
          >
            <AppleIcon className="w-5 h-5" />
            Get Started Now
          </motion.a>

          {/* Metadata Features */}
          <motion.div variants={fadeBlur} className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-white/90 font-medium">
            <span className="flex items-center gap-1">✓ One-time purchase</span>
            <span className="flex items-center gap-1">✓ Fully offline & privacy</span>
            <span className="flex items-center gap-1">✓ macOS Sonoma 14.0+</span>
          </motion.div>
        </div>

        {/* App Preview - Replaced with a beautiful placeholder mockup */}
        <motion.div
          variants={fadeBlur}
          className="mt-16 max-w-5xl mx-auto relative h-[450px] md:h-[550px] rounded-3xl overflow-hidden shadow-2xl border-t border-x border-white/20 bg-gradient-to-br from-indigo-900 via-purple-900 to-slate-900 flex items-center justify-center"
        >
          <div className="relative w-[90%] h-[85%] bg-slate-800 rounded-xl shadow-2xl border border-white/10 flex overflow-hidden">
            {/* Fake sidebar */}
            <div className="w-16 bg-slate-900/80 flex flex-col items-center py-4 gap-3 border-r border-white/5">
              {[1, 2, 3, 4, 5].map(i => (
                <div key={i} className="w-8 h-8 rounded-lg bg-white/5 hover:bg-white/10 transition-colors" />
              ))}
            </div>
            {/* Fake main content */}
            <div className="flex-1 p-6 flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
                <div className="ml-4 flex-1 h-6 bg-white/5 rounded-md max-w-xs" />
              </div>
              <div className="grid grid-cols-3 gap-3 flex-1">
                {[1, 2, 3, 4, 5, 6].map(i => (
                  <div key={i} className="bg-white/5 rounded-xl border border-white/5 p-3 flex flex-col gap-2">
                    <div className="h-20 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-lg" />
                    <div className="h-2 bg-white/10 rounded-full w-3/4" />
                    <div className="h-2 bg-white/10 rounded-full w-1/2" />
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* Floating glow */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
        </motion.div>
      </motion.section>

      {/* Social Proof - Awards & Achievements */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionContainer}
        className="py-24 bg-white border-y border-gray-100 relative overflow-hidden"
      >
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-60 pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-50 rounded-full blur-3xl opacity-60 pointer-events-none" />

        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <motion.div variants={fadeUp} className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 200, damping: 20, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/5 border border-black/10 text-black/80 text-xs font-bold uppercase tracking-wider mb-4"
            >
              <Award className="w-3.5 h-3.5" />
              Trusted by Professionals
            </motion.div>
            <h3 className="text-3xl md:text-4xl font-black text-black mb-4 tracking-tight">
              Award-Winning Design
            </h3>
            <p className="text-gray-500 text-base md:text-lg max-w-xl mx-auto leading-relaxed">
              Recognized by the global design community for pushing the boundaries of native macOS experiences.
            </p>
          </motion.div>

          <motion.div variants={awardContainer} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
            <motion.div
              variants={awardItem}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group flex flex-col items-center justify-center p-6 rounded-2xl bg-gray-50/50 backdrop-blur-sm border border-gray-200 hover:border-black hover:shadow-2xl hover:shadow-black/5 transition-all duration-300 cursor-default"
            >
              <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mb-3 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
                <span className="text-white font-bold text-xl">P</span>
              </div>
              <div className="text-center">
                <div className="text-xs font-bold text-black">#4 Product</div>
                <div className="text-xs font-bold text-black">of the Day</div>
                <div className="text-[10px] text-gray-500 font-semibold mt-1">Product Hunt</div>
              </div>
            </motion.div>

            <motion.div
              variants={awardItem}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group flex flex-col items-center justify-center p-6 rounded-2xl bg-gray-50/50 backdrop-blur-sm border border-gray-200 hover:border-black hover:shadow-2xl hover:shadow-black/5 transition-all duration-300 cursor-default"
            >
              <div className="flex items-center gap-1 mb-2 group-hover:scale-110 transition-transform duration-300">
                <Award className="w-5 h-5 text-black" />
                <span className="text-2xl font-serif italic text-black">m</span>
                <Award className="w-5 h-5 text-black" />
              </div>
              <div className="flex gap-0.5 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-black text-black" />
                ))}
              </div>
              <div className="text-xs font-bold text-black">Editor's Pick</div>
            </motion.div>

            <motion.div
              variants={awardItem}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group flex flex-col items-center justify-center p-6 rounded-2xl bg-gray-50/50 backdrop-blur-sm border border-gray-200 hover:border-black hover:shadow-2xl hover:shadow-black/5 transition-all duration-300 cursor-default"
            >
              <Trophy className="w-8 h-8 text-black mb-2 group-hover:rotate-12 group-hover:scale-110 transition-transform duration-300" />
              <div className="text-center">
                <div className="text-[10px] font-bold text-black uppercase tracking-wider">Best UI</div>
                <div className="text-[10px] font-bold text-black uppercase tracking-wider">Design</div>
                <div className="text-[10px] text-gray-500 font-semibold mt-1">CSSDA Award</div>
              </div>
            </motion.div>

            <motion.div
              variants={awardItem}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group flex flex-col items-center justify-center p-6 rounded-2xl bg-gray-50/50 backdrop-blur-sm border border-gray-200 hover:border-black hover:shadow-2xl hover:shadow-black/5 transition-all duration-300 cursor-default"
            >
              <Medal className="w-8 h-8 text-black mb-2 group-hover:-rotate-12 group-hover:scale-110 transition-transform duration-300" />
              <div className="text-center">
                <div className="text-[10px] font-bold text-black uppercase tracking-wider">Best UX</div>
                <div className="text-[10px] font-bold text-black uppercase tracking-wider">Design</div>
                <div className="text-[10px] text-gray-500 font-semibold mt-1">CSSDA Award</div>
              </div>
            </motion.div>

            <motion.div
              variants={awardItem}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group flex flex-col items-center justify-center p-6 rounded-2xl bg-gray-50/50 backdrop-blur-sm border border-gray-200 hover:border-black hover:shadow-2xl hover:shadow-black/5 transition-all duration-300 cursor-default"
            >
              <Lightbulb className="w-8 h-8 text-black mb-2 group-hover:rotate-12 group-hover:scale-110 transition-transform duration-300" />
              <div className="text-center">
                <div className="text-[10px] font-bold text-black uppercase tracking-wider">Best</div>
                <div className="text-[10px] font-bold text-black uppercase tracking-wider">Innovation</div>
                <div className="text-[10px] text-gray-500 font-semibold mt-1">CSSDA Award</div>
              </div>
            </motion.div>

            <motion.div
              variants={awardItem}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group flex flex-col items-center justify-center p-6 rounded-2xl bg-gray-50/50 backdrop-blur-sm border border-gray-200 hover:border-black hover:shadow-2xl hover:shadow-black/5 transition-all duration-300 cursor-default"
            >
              <Sparkles className="w-8 h-8 text-black mb-2 group-hover:rotate-12 group-hover:scale-110 transition-transform duration-300" />
              <div className="text-center">
                <div className="text-[10px] font-bold text-black uppercase tracking-wider">Special</div>
                <div className="text-[10px] font-bold text-black uppercase tracking-wider">Design Kudos</div>
                <div className="text-[10px] text-gray-500 font-semibold mt-1">CSSDA Award</div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div variants={statsContainer} className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 pt-12 border-t border-gray-200">
            <motion.div variants={statItem} className="text-center group cursor-default">
              <div className="text-4xl md:text-5xl font-black text-black mb-2 tracking-tight group-hover:text-primary transition-colors duration-300">10K+</div>
              <div className="text-sm text-gray-500 font-semibold uppercase tracking-wide">Active Users</div>
            </motion.div>
            <motion.div variants={statItem} className="text-center group cursor-default">
              <div className="text-4xl md:text-5xl font-black text-black mb-2 tracking-tight group-hover:text-primary transition-colors duration-300">4.9</div>
              <div className="text-sm text-gray-500 font-semibold uppercase tracking-wide">Average Rating</div>
            </motion.div>
            <motion.div variants={statItem} className="text-center group cursor-default">
              <div className="text-4xl md:text-5xl font-black text-black mb-2 tracking-tight group-hover:text-primary transition-colors duration-300">50+</div>
              <div className="text-sm text-gray-500 font-semibold uppercase tracking-wide">Countries</div>
            </motion.div>
            <motion.div variants={statItem} className="text-center group cursor-default">
              <div className="text-4xl md:text-5xl font-black text-black mb-2 tracking-tight group-hover:text-primary transition-colors duration-300">99%</div>
              <div className="text-sm text-gray-500 font-semibold uppercase tracking-wide">Satisfaction</div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Main Features Intro */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="py-24 bg-surface px-4"
        id="features"
      >
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <motion.h2
            variants={featureIntroContainer}
            className="text-4xl md:text-5xl font-black tracking-tight mb-6 text-on-surface flex flex-col items-center"
          >
            <motion.span variants={wordReveal} className="block">Your clipboard,</motion.span>
            <motion.span variants={wordReveal} className="block">wherever you need it</motion.span>
          </motion.h2>

          <motion.p variants={standardFade} className="text-xl text-text-muted leading-relaxed max-w-2xl mx-auto">
            Use the quick shelf, instant search, inline paste, drag-and-drop, and the full Library view to find, reuse, and organize anything you copied.
          </motion.p>
        </div>

        <motion.div variants={tagStagger} className="flex flex-wrap justify-center gap-3 mb-20 max-w-4xl mx-auto">
          {["Local first", "Privacy first", "Search anything", "Screenshots", "Screenshot & image OCR", "Grouped by App", "Type filters", "Sensitive detection", "Custom categories"].map((tag, idx) => (
            <motion.span
              variants={tagItem}
              key={idx}
              className="px-4 py-2 bg-white rounded-full text-sm font-medium border border-border-light shadow-sm hover:border-primary hover:text-primary transition-colors cursor-default"
            >
              {tag}
            </motion.span>
          ))}
        </motion.div>

        <motion.div variants={cardFade} className="max-w-5xl mx-auto feature-card mb-12 text-center pt-16 pb-0 px-0 overflow-hidden relative border border-border-light bg-white/50 backdrop-blur-sm shadow-sm">
          <div className="px-8 max-w-2xl mx-auto relative z-10">
            <h3 className="text-3xl font-bold mb-4">Reuse Anything Without Switching Apps</h3>
            <p className="text-text-muted mb-8 leading-relaxed">
              Keep your most useful clips right at the top of your Mac. Drag images, assets, text, colors, SVG icons, screenshots, and files directly from the shelf into any app, without opening another window or switching context.
            </p>
          </div>
          <div className="h-64 md:h-[420px] bg-gradient-to-br from-indigo-100 via-purple-50 to-blue-100 mt-8 rounded-t-3xl mx-6 md:mx-16 shadow-inner overflow-hidden border-t border-x border-gray-300 flex items-center justify-center">
            <div className="w-3/4 h-3/4 bg-white/60 backdrop-blur-sm rounded-2xl border border-white shadow-xl flex flex-col p-6 gap-3">
              <div className="h-3 bg-gray-200 rounded-full w-1/2" />
              <div className="h-3 bg-gray-200 rounded-full w-3/4" />
              <div className="h-3 bg-gray-200 rounded-full w-2/3" />
              <div className="flex-1 bg-gradient-to-br from-indigo-200 to-purple-200 rounded-xl mt-2" />
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={flipScale}
          className="max-w-2xl mx-auto my-16 bg-white p-8 rounded-3xl shadow-sm border border-border-light text-left"
          whileHover={{ y: -5, transition: { duration: 0.3 } }}
        >
          <div className="flex text-yellow-400 mb-4 text-lg">
            ★★★★★
          </div>
          <p className="text-gray-700 italic mb-6 leading-relaxed">
            "I've been using FlowFree now for a week and I absolutely love it. The visual grouping and category-based organization is a game-changer compared to other clipboard tools I've tried. Being able to search by app or content type has saved me countless hours in my daily workflow."
          </p>
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-full overflow-hidden flex items-center justify-center text-white font-bold">
              A
            </div>
            <div>
              <div className="font-bold text-sm text-on-surface">Alex Chen</div>
              <div className="text-xs text-text-muted">Senior Product Designer</div>
            </div>
          </div>
        </motion.div>
      </motion.section>

      {/* Feature Grid */}
      <section className="py-12 bg-surface px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">

          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="feature-card flex flex-col justify-between h-[520px] overflow-hidden relative border border-border-light shadow-sm bg-white hover:shadow-md transition-shadow"
          >
            <div className="text-center relative z-10 px-4">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Sparkles className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Screenshot &amp; Image OCR</h3>
              <p className="text-text-muted text-sm px-4 leading-relaxed">
                Take a screenshot or copy an image, and FlowFree automatically recognizes the text inside it locally. Search for error messages, code lines, notes, or receipts.
              </p>
            </div>
            <div className="mt-8 bg-gray-50 h-64 rounded-t-xl mx-4 shadow-inner border-t border-x border-gray-200 relative overflow-hidden flex flex-col p-4">
              <div className="flex items-center gap-2 bg-white rounded-lg p-2 border border-gray-200 shadow-sm text-xs text-gray-500 mb-4">
                <Search className="w-3.5 h-3.5 text-gray-400" />
                <span>Search history: </span>
                <span className="font-semibold text-primary px-1.5 py-0.5 bg-primary/10 rounded">NullPointer</span>
              </div>
              <div className="bg-white rounded-lg border border-gray-200 shadow-sm flex-1 p-3 font-mono text-[10px] text-gray-700 relative select-none">
                <div className="text-red-600 font-bold border-b border-red-100 pb-1 mb-2">Uncaught Exception:</div>
                <div className="relative inline-block">
                  java.lang.
                  <span className="bg-primary/20 text-primary border border-primary/40 px-0.5 rounded font-bold">NullPointerException</span>
                  : Attempt to invoke virtual method on a null object reference
                </div>
                <div className="mt-2 text-gray-400">at com.flowboard.app.MainActivity.init(MainActivity.java:42)</div>
                <div className="absolute right-3 bottom-3 bg-primary text-white text-[10px] px-2 py-1 rounded flex items-center gap-1 font-sans cursor-pointer hover:bg-primary-dark shadow-sm">
                  <Check className="w-3 h-3" /> Copied Text
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="feature-card flex flex-col justify-between h-[520px] overflow-hidden relative border border-border-light shadow-sm bg-white hover:shadow-md transition-shadow"
          >
            <div className="text-center relative z-10 px-4">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Layers className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Multi-Clip Copy</h3>
              <p className="text-text-muted text-sm px-4 leading-relaxed">
                Copy multiple items from different apps and content types into one combined clip card. Collect text, links, images, files, code, and more.
              </p>
            </div>
            <div className="mt-8 bg-gray-50 h-64 rounded-t-xl mx-4 shadow-inner border-t border-x border-gray-200 p-4 overflow-y-auto">
              <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-3 space-y-2">
                <div className="flex justify-between items-center border-b border-gray-100 pb-2">
                  <span className="text-xs font-bold text-gray-800">Stack: Design System</span>
                  <span className="bg-primary/10 text-primary text-[9px] px-1.5 py-0.5 rounded-full font-bold">3 items</span>
                </div>
                <div className="space-y-1.5 text-xs text-gray-700">
                  <div className="flex items-center gap-2 p-1.5 bg-gray-50 rounded border border-gray-100 font-mono text-[10px]">
                    <Code className="w-3.5 h-3.5 text-gray-500 flex-shrink-0" />
                    <span className="truncate">--color-primary: #6366f1;</span>
                  </div>
                  <div className="flex items-center gap-2 p-1.5 bg-gray-50 rounded border border-gray-100">
                    <Palette className="w-3.5 h-3.5 text-blue-500 flex-shrink-0" />
                    <span className="font-semibold text-gray-600">Primary Color Theme</span>
                    <span className="w-3 h-3 rounded bg-[#6366f1] ml-auto border border-gray-200"></span>
                  </div>
                  <div className="flex items-center gap-2 p-1.5 bg-gray-50 rounded border border-gray-100">
                    <Link2 className="w-3.5 h-3.5 text-green-600 flex-shrink-0" />
                    <span className="truncate text-blue-600 font-medium hover:underline">design.system.io/docs</span>
                  </div>
                </div>
                <button
                  onClick={() => handleCopyDemo('--color-primary: #6366f1;', 'multiclip')}
                  className="w-full bg-black text-white text-xs py-1.5 rounded-lg font-bold hover:bg-gray-800 transition-colors flex items-center justify-center gap-1.5"
                >
                  {copiedFeature === 'multiclip' ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-green-400" /> Copied Stack!
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" /> Copy Entire Stack
                    </>
                  )}
                </button>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="feature-card flex flex-col justify-between h-[520px] overflow-hidden relative md:col-span-2 border border-border-light shadow-sm bg-white hover:shadow-md transition-shadow"
          >
            <div className="text-center max-w-2xl mx-auto relative z-10 px-4">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Zap className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Inline Shortcuts</h3>
              <p className="text-text-muted text-sm leading-relaxed">
                Create a quick text alias for any clip, like <code className="bg-gray-100 text-primary px-1.5 py-0.5 rounded font-mono font-bold">;welcome</code>, and type it anywhere to instantly insert your saved text, template, or clip. No app switching required.
              </p>
            </div>
            <div className="mt-8 bg-gray-50 h-64 rounded-t-xl mx-6 md:mx-16 shadow-inner border-t border-x border-gray-200 p-4">
              <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-4 h-full flex flex-col">
                <div className="text-xs text-gray-400 mb-1 flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                  Active Text Editor
                </div>
                <div className="border border-gray-100 rounded-lg p-2.5 flex-1 font-mono text-xs text-gray-800 relative bg-gray-50/50">
                  <span>Dear Customer, </span>
                  <span className="border-r border-gray-900 animate-caret font-bold text-primary">;welcome</span>
                  <div className="absolute left-4 top-10 bg-white border border-gray-200 rounded-xl shadow-xl p-1.5 w-64 z-20 font-sans space-y-1">
                    <div className="bg-primary text-white rounded-lg p-1.5 text-[11px] font-medium flex justify-between items-center cursor-pointer">
                      <span>;welcome → "Hi there! Welcome to..."</span>
                      <span className="bg-white/20 px-1 rounded text-[8px]">Tab</span>
                    </div>
                    <div className="text-gray-700 hover:bg-gray-100 rounded-lg p-1.5 text-[11px] font-medium flex justify-between items-center cursor-pointer">
                      <span>;pricing → "Standard plans start at..."</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="feature-card flex flex-col justify-between h-[520px] overflow-hidden relative border border-border-light shadow-sm bg-white hover:shadow-md transition-shadow"
          >
            <div className="text-center relative z-10 px-4">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Clock className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Clip Reminders</h3>
              <p className="text-text-muted text-sm px-4 leading-relaxed">
                Set reminders on any copied item—text, files, images, links, or screenshots. Choose a quick relative time or select a custom date and time to review it.
              </p>
            </div>
            <div className="mt-8 bg-gray-50 h-64 rounded-t-xl mx-4 shadow-inner border-t border-x border-gray-200 p-4">
              <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-4 relative">
                <div className="flex items-start justify-between mb-4">
                  <div className="space-y-1">
                    <span className="text-[10px] font-bold text-primary bg-primary/10 px-2 py-0.5 rounded-full">Reminder Active</span>
                    <h4 className="text-xs font-bold text-gray-800">Check API Keys doc</h4>
                    <p className="text-[10px] text-gray-500 font-mono">Copied from Notion • 10m ago</p>
                  </div>
                  <Clock className="w-4 h-4 text-primary" />
                </div>
                <div className="bg-gray-50 rounded-lg p-2.5 border border-gray-200 space-y-1.5">
                  <div className="text-[10px] font-bold text-gray-500">Alert Me:</div>
                  <div className="grid grid-cols-2 gap-1.5">
                    <button className="bg-primary text-white text-[9px] font-semibold py-1 rounded border border-primary shadow-sm">In 1 Hour</button>
                    <button className="bg-white text-gray-700 text-[9px] font-semibold py-1 rounded border border-gray-200 hover:bg-gray-100">Tomorrow</button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="feature-card flex flex-col justify-between h-[520px] overflow-hidden relative border border-border-light shadow-sm bg-white hover:shadow-md transition-shadow"
          >
            <div className="text-center relative z-10 px-4">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Laptop className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Quick Paste Anywhere</h3>
              <p className="text-text-muted text-sm px-4 leading-relaxed">
                Press <code className="bg-gray-100 text-primary px-1.5 py-0.5 rounded font-mono font-bold">⌃ ⌘ V</code> in any application to open FlowFree instantly. Search your clipboard, templates, and files inline.
              </p>
            </div>
            <div className="mt-8 bg-gray-50 h-64 rounded-t-xl mx-4 shadow-inner border-t border-x border-gray-200 p-4">
              <div className="bg-white rounded-xl border border-gray-200 shadow-md p-3 relative space-y-2">
                <div className="flex items-center gap-2 border-b border-gray-100 pb-2">
                  <Search className="w-3.5 h-3.5 text-gray-400" />
                  <input
                    type="text"
                    readOnly
                    value="logo_design"
                    className="text-xs font-semibold text-gray-800 outline-none w-full bg-transparent border-none p-0 focus:ring-0"
                  />
                </div>
                <div className="space-y-1">
                  <div className="bg-primary/10 text-primary border border-primary/20 rounded-lg p-2 flex items-center justify-between text-xs font-medium cursor-pointer">
                    <span className="flex items-center gap-1.5 font-mono">🖼️ logo_dark.svg</span>
                    <span className="text-[10px] opacity-75">⏎ Paste SVG</span>
                  </div>
                  <div className="hover:bg-gray-50 text-gray-700 rounded-lg p-2 flex items-center justify-between text-xs font-medium cursor-pointer">
                    <span className="flex items-center gap-1.5 truncate">https://design.system/logo.png</span>
                    <span className="text-[10px] text-gray-400 font-bold">⌘2</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, rotateX: 90, y: 60 }}
            whileInView={{ opacity: 1, rotateX: 0, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            style={{ transformPerspective: 1200 }}
            className="feature-card flex flex-col justify-between h-[620px] overflow-hidden relative md:col-span-2 border border-border-light shadow-sm bg-white hover:shadow-md transition-shadow"
          >
            <div className="text-center max-w-2xl mx-auto relative z-10 px-4 pt-4">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Layers className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-3xl font-bold mb-4">Your Clipboard Library</h3>
              <p className="text-text-muted leading-relaxed">
                See your clipboard as a clean visual timeline, then open the full Library window to browse, organize, manage, and reuse your saved assets, snippets, screenshots, and text.
              </p>
            </div>
            <div className="mt-8 bg-gray-50 h-96 rounded-t-2xl mx-4 md:mx-12 shadow-inner border-t border-x border-gray-200 p-4 flex flex-col">
              <div className="flex gap-1.5 border-b border-gray-200 pb-3 overflow-x-auto">
                {(['all', 'text', 'image', 'link', 'color'] as const).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setSelectedLibraryTab(tab)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all capitalize ${selectedLibraryTab === tab
                      ? 'bg-primary text-white shadow-sm'
                      : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                      }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
              <div className="flex-1 mt-3 space-y-2 overflow-y-auto pr-1">
                {filteredClips.map((clip) => (
                  <div key={clip.id} className="bg-white p-3 rounded-xl border border-gray-200 shadow-sm flex items-center justify-between hover:border-primary transition-all group">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        {clip.type === 'text' && <FileText className="w-3.5 h-3.5 text-gray-500" />}
                        {clip.type === 'color' && <Palette className="w-3.5 h-3.5 text-blue-500" />}
                        {clip.type === 'link' && <Link2 className="w-3.5 h-3.5 text-green-500" />}
                        {clip.type === 'image' && <Sparkles className="w-3.5 h-3.5 text-purple-500" />}
                        <span className="text-xs font-semibold text-gray-700 truncate max-w-[200px] md:max-w-md font-mono">{clip.content}</span>
                        {clip.type === 'color' && (
                          <span className="w-3 h-3 rounded border border-gray-200 shadow-sm" style={{ backgroundColor: clip.content }}></span>
                        )}
                      </div>
                      <div className="flex items-center gap-2 text-[10px] text-gray-400">
                        <span>{clip.app}</span>
                        <span>•</span>
                        <span>{clip.time}</span>
                      </div>
                    </div>
                    <button
                      onClick={() => handleCopyDemo(clip.content, `library-${clip.id}`)}
                      className="opacity-0 group-hover:opacity-100 transition-opacity bg-gray-50 hover:bg-gray-100 p-1.5 rounded-lg border border-gray-200 flex items-center gap-1 text-[10px] font-bold text-gray-600"
                    >
                      {copiedFeature === `library-${clip.id}` ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-green-500" /> Copied
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" /> Copy
                        </>
                      )}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 40 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="md:col-span-2 flex justify-center"
          >
            <div className="feature-card flex flex-col justify-between h-[520px] w-full md:max-w-2xl overflow-hidden relative border border-border-light shadow-sm bg-white hover:shadow-md transition-shadow">
              <div className="text-center relative z-10 px-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Cloud className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-3">Cloud Sync</h3>
                <p className="text-text-muted text-sm px-4 leading-relaxed">
                  Keep your clipboard history in sync across your macOS and iOS devices seamlessly and securely with military-grade end-to-end encryption.
                </p>
              </div>
              <div className="mt-8 bg-gray-50 h-64 rounded-t-xl mx-4 shadow-inner border-t border-x border-gray-200 p-6 flex flex-col items-center justify-center relative">
                <div className="flex items-center justify-center gap-8 md:gap-12 relative z-10">
                  <div className="flex flex-col items-center gap-1 bg-white p-3 rounded-2xl border border-gray-200 shadow-md">
                    <Laptop className="w-8 h-8 text-primary" />
                    <span className="text-[10px] font-bold text-gray-600">macOS</span>
                  </div>
                  <div className="flex items-center justify-center animate-pulse">
                    <Cloud className="w-8 h-8 text-primary" />
                  </div>
                  <div className="flex flex-col items-center gap-1 bg-white p-3 rounded-2xl border border-gray-200 shadow-md">
                    <Smartphone className="w-8 h-8 text-primary" />
                    <span className="text-[10px] font-bold text-gray-600">iOS App</span>
                  </div>
                </div>
                <div className="mt-6 flex items-center gap-1.5 text-xs text-gray-500 font-bold bg-white px-3.5 py-1.5 rounded-full border border-gray-200 shadow-sm">
                  <Lock className="w-3.5 h-3.5 text-green-500" />
                  <span>End-to-End Encrypted</span>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* Use Cases Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="py-24 bg-white px-4 rounded-t-[3rem] border-t border-border-light"
      >
        <div className="max-w-4xl mx-auto text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl md:text-5xl font-black tracking-tight mb-6 text-on-surface"
          >
            Built for everything you copy
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="text-xl text-text-muted max-w-2xl mx-auto leading-relaxed"
          >
            From code snippets and design assets to customer replies, screenshots, links, and personal notes, FlowFree keeps every useful piece of your clipboard organized and ready to reuse.
          </motion.p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { emoji: "🎨", title: "Designers", desc: "Keep colors, SVG icons, screenshots, design specifications, gradients, and layout assets close at hand in a visually searchable timeline.", isComingSoon: false },
            { emoji: "💻", title: "Developers", desc: "Save code snippets, CLI commands, JSON payloads, API endpoints, and github links automatically, then reuse them instantly inline.", isComingSoon: false },
            { emoji: "✍️", title: "Content & Marketing", desc: "Capture taglines, SEO keywords, outline notes, reference URLs, image inspirations, and drafting notes before they expire.", isComingSoon: false },
            { emoji: "📈", title: "Sales & Support", desc: "Quickly paste template replies, product document links, pricing notes, and client screenshots without navigating tabs.", isComingSoon: true }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 1.0,
                ease: [0.16, 1, 0.3, 1],
                delay: index * 0.15
              }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="p-8 rounded-3xl bg-surface-container-low border border-border-light hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
            >
              {item.isComingSoon && (
                <div className="absolute inset-0 bg-white/80 backdrop-blur-[2px] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                  <span className="bg-black text-white text-xs px-3.5 py-1.5 rounded-full font-bold shadow-md">Coming Soon</span>
                </div>
              )}
              <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center mb-6 border border-border-light">
                <span className="text-2xl">{item.emoji}</span>
              </div>
              <h4 className={`text-xl font-bold mb-3 ${item.isComingSoon ? 'text-gray-500' : ''}`}>{item.title}</h4>
              <p className="text-sm text-text-muted leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Pricing Section */}
      <motion.section
        className="py-32 pricing-gradient text-center px-4 relative overflow-hidden"
        id="pricing"
      >
        <motion.div
          className="absolute top-20 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl pointer-events-none"
          animate={{ scale: [1, 1.2, 1], x: [0, 30, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-20 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl pointer-events-none"
          animate={{ scale: [1.2, 1, 1.2], x: [0, -30, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="max-w-3xl mx-auto mb-16 relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl md:text-7xl font-black tracking-tighter mb-6 text-on-surface leading-tight max-w-full break-words"
          >
            One price.<br />Lifetime access.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.3 }}
            className="text-xl text-text-muted font-medium mb-4 leading-relaxed"
          >
            One-time payment. No subscription.<br />Get lifetime access to FlowFree on your Mac.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.5 }}
            className="text-sm text-text-muted/80 max-w-lg mx-auto"
          >
            Try it risk-free. If FlowFree doesn't fit your workflow, email us within 14 days and we'll refund your purchase in full.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 100, rotateX: 25, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ type: "spring", stiffness: 60, damping: 15, delay: 0.4 }}
          style={{ transformPerspective: 1500 }}
          whileHover={{ y: -10, transition: { duration: 0.3 } }}
          className="max-w-md mx-auto bg-white/95 p-10 rounded-[2.5rem] shadow-2xl border border-white/50 relative z-10"
        >
          <motion.div
            className="absolute -top-4 right-8 bg-red-500 text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-md flex items-center gap-1.5"
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            Limited offer 🥳
          </motion.div>

          <div className="text-left mb-8">
            <h3 className="text-2xl font-bold mb-1">FlowFree for macOS</h3>
            <p className="text-text-muted text-sm font-semibold">1 device personal license</p>
          </div>

          <motion.div
            className="text-left mb-8 flex items-end gap-2"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 100, damping: 10, delay: 0.8 }}
          >
            <span className="text-6xl font-black text-gray-900">$19</span>
            <span className="text-gray-400 line-through text-2xl mb-1.5 font-medium">$49</span>
            <span className="text-xs text-primary font-bold bg-primary/10 px-2 py-1 rounded-md mb-2 ml-2">Save 60%</span>
          </motion.div>

          <ul className="text-left space-y-4 mb-8 text-sm font-medium text-gray-700 border-t border-gray-100 pt-6">
            {[
              "One-time payment (no recurring subscriptions)",
              "14-day absolute money-back guarantee",
              "Lifetime software updates included",
              "All premium features unlocked",
              "Highly optimized native macOS application",
              "Local OCR and automatic type categorizations"
            ].map((feature, index) => (
              <motion.li
                key={index}
                className="flex items-start gap-3"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 1.0 + (index * 0.1), duration: 0.8, ease: "easeOut" }}
              >
                <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="leading-tight">{feature}</span>
              </motion.li>
            ))}
          </ul>

          <motion.a
            className="block w-full text-center py-4 rounded-2xl font-bold text-lg flex items-center justify-center gap-2 relative overflow-hidden bg-gray-50 border border-gray-200 shadow-lg group text-black"
            href="#"
            whileHover={{ scale: 1.02, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
            whileTap={{ scale: 0.98 }}
          >
            <motion.div
              className="absolute inset-0 z-0"
              initial={{ y: "100%" }}
              whileHover={{ y: "0%" }}
              transition={{ type: "spring", stiffness: 80, damping: 15 }}
            >
              <motion.div
                className="absolute bg-gradient-to-b from-sky-400 via-blue-500 to-blue-700"
                style={{
                  width: "250%",
                  height: "250%",
                  bottom: "-80%",
                  left: "-75%",
                  borderRadius: "42%",
                  boxShadow: "inset 0 0 30px rgba(255,255,255,0.5), inset 0 -20px 40px rgba(0,0,0,0.2)"
                }}
                animate={{ rotate: 360 }}
                transition={{ rotate: { duration: 8, ease: "linear", repeat: Infinity } }}
              />

              <motion.div
                className="absolute w-3 h-3 bg-white/40 rounded-full bottom-[20%] left-[20%]"
                animate={{ y: [-10, -40], opacity: [0, 1, 0] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
              />
              <motion.div
                className="absolute w-2 h-2 bg-white/50 rounded-full bottom-[10%] left-[60%]"
                animate={{ y: [-5, -30], opacity: [0, 1, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 0.5, delay: 0.5 }}
              />
            </motion.div>

            <span className="relative z-10 transition-colors duration-300 group-hover:text-shadow-gray-600 flex items-center gap-2 drop-shadow-sm">
              Download for macOS <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </span>
          </motion.a>

          <p className="text-xs text-gray-400 mt-4 text-center">
            Secure checkout powered by Stripe.
          </p>
        </motion.div>
      </motion.section>

      {/* FAQ Section */}
      <motion.section
        className="py-24 bg-surface px-4 border-t border-border-light"
        id="faq"
      >
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl md:text-5xl font-black tracking-tight mb-6"
            >
              Frequently Asked<br />Questions
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-text-muted leading-relaxed max-w-xl mx-auto"
            >
              Everything you need to know before getting started with FlowFree, from privacy and compatibility to how your clipboard history is stored and handled.
            </motion.p>
          </div>

          <div className="space-y-4">
            {faqData.map((faq, index) => {
              const isOpen = activeFaq === index
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.8,
                    delay: index * 0.08,
                    ease: [0.16, 1, 0.3, 1]
                  }}
                  className="bg-white rounded-2xl border border-border-light hover:border-gray-300 transition-colors overflow-hidden shadow-sm hover:shadow-md"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full p-6 text-left flex justify-between items-center focus:outline-none group"
                  >
                    <h4 className="font-bold text-lg text-on-surface pr-4 group-hover:text-primary transition-colors">
                      {faq.question}
                    </h4>

                    <div className="text-xl text-gray-400 flex-shrink-0 w-6 h-6 flex items-center justify-center">
                      <AnimatePresence mode="wait" initial={false}>
                        {isOpen ? (
                          <motion.div
                            key="minus"
                            initial={{ rotate: -90, opacity: 0 }}
                            animate={{ rotate: 0, opacity: 1 }}
                            exit={{ rotate: 90, opacity: 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                          >
                            <Minus className="w-5 h-5 text-primary" />
                          </motion.div>
                        ) : (
                          <motion.div
                            key="plus"
                            initial={{ rotate: 90, opacity: 0 }}
                            animate={{ rotate: 0, opacity: 1 }}
                            exit={{ rotate: -90, opacity: 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                          >
                            <Plus className="w-5 h-5" />
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 border-t border-gray-100 pt-4">
                          <p className="text-text-muted text-sm leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              )
            })}
          </div>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="bg-black text-white pt-20 pb-10 px-4 rounded-t-[3rem] mt-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-bold text-lg shadow-lg">
                F
              </div>
              <span className="text-2xl font-black">FlowFree</span>
            </div>
            <p className="text-gray-400 text-sm mb-6 leading-relaxed">
              FlowFree saves your clipboard and screenshots in a beautiful visual history, automatically grouped by type, app, and custom categories, so you can search, find, and paste anything back in seconds.
            </p>
            <a
              className="inline-flex items-center justify-center bg-white text-black px-6 py-3 rounded-xl font-bold text-sm hover:bg-gray-200 transition-colors shadow-md"
              href="#pricing"
            >
              Download for macOS
            </a>
          </div>
          <div>
            <h5 className="text-gray-500 font-bold mb-4 uppercase text-xs tracking-wider">Menu</h5>
            <ul className="space-y-3 text-sm text-gray-300">
              <li><a className="hover:text-white transition-colors" href="#hero">Home</a></li>
              <li><a className="hover:text-white transition-colors" href="#features">Features</a></li>
              <li><a className="hover:text-white transition-colors" href="#faq">FAQ</a></li>
              <li><a className="hover:text-white transition-colors" href="#pricing">Pricing</a></li>
              <li><a className="hover:text-white transition-colors" href="#">Changelog</a></li>
            </ul>
          </div>
          <div>
            <h5 className="text-gray-500 font-bold mb-4 uppercase text-xs tracking-wider">Navigation</h5>
            <ul className="space-y-3 text-sm text-gray-300">
              <li><a className="hover:text-white transition-colors" href="#">Contact</a></li>
              <li><a className="hover:text-white transition-colors" href="#">Roadmap</a></li>
              <li><a className="hover:text-white transition-colors" href="#">Privacy Policy</a></li>
              <li><a className="hover:text-white transition-colors" href="#">Terms of Service</a></li>
              <li><a className="hover:text-white transition-colors" href="#">Customer Portal</a></li>
            </ul>
          </div>
          <div>
            <h5 className="text-gray-500 font-bold mb-4 uppercase text-xs tracking-wider">Studio</h5>
            <ul className="space-y-3 text-sm text-gray-300">
              <li><a className="hover:text-white transition-colors" href="#">About Us</a></li>
              <li><a className="hover:text-white transition-colors" href="#">Case Studies</a></li>
              <li><a className="hover:text-white transition-colors" href="#">Our Process</a></li>
              <li><a className="hover:text-white transition-colors" href="#">Get in Touch</a></li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <p>© 2026 FlowFree</p>
          <p>Designed & developed with ❤️</p>
        </div>
        <div className="w-full overflow-hidden mt-12 flex justify-center opacity-[0.08] select-none pointer-events-none -mx-4">
          <h1 className="text-[22vw] font-bold leading-[0.85] tracking-tighter text-white whitespace-nowrap">
            FlowFree
          </h1>
        </div>
      </footer>

    </div>
  )
}

export default App