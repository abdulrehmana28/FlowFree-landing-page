import { useState } from 'react'
import {
  Check,
  Menu,
  X,
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
    question: "What is Supaste?",
    answer: "Supaste is a native macOS clipboard manager that saves your copy history visually. It automatically groups items by content type (text, images, links, colors, files), source application, and your own custom categories so you can search, find, and paste anything back in seconds."
  },
  {
    question: "Where is my clipboard history stored?",
    answer: "Your clipboard history is stored entirely locally on your machine in a secure database. It never leaves your device, ensuring complete data sovereignty and absolute privacy."
  },
  {
    question: "Does Supaste upload my copied content?",
    answer: "No. Supaste operates with a local-first philosophy. The app works fully offline and does not upload your clipboard history, screenshots, or extracted text to any external servers."
  },
  {
    question: "Can I search my clipboard history?",
    answer: "Yes! You can search by text content, source application name, file type, or custom tags. Supaste also features automatic local OCR, allowing you to search for text inside screenshots and images."
  },
  {
    question: "Is there a Windows version?",
    answer: "We are currently focused on delivering the best possible experience for macOS. However, a Windows version is on our long-term product roadmap."
  }
]

function App() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null)
  const [copiedFeature, setCopiedFeature] = useState<string | null>(null)

  // Library interactive state
  const [selectedLibraryTab, setSelectedLibraryTab] = useState<'all' | 'text' | 'image' | 'link' | 'color'>('all')

  const toggleFaq = (index: number) => {
    if (activeFaq === index) {
      setActiveFaq(null)
    } else {
      setActiveFaq(index)
    }
  }

  // Visual library mock data based on tab filter
  const libraryClips = [
    { id: 1, type: 'text', content: 'Supaste is a performance-first clipboard history tool.', time: 'Just now', app: 'Safari' },
    { id: 2, type: 'color', content: '#0080ff', time: '4m ago', app: 'Figma' },
    { id: 3, type: 'link', content: 'https://github.com/supaste/landing', time: '12m ago', app: 'VS Code' },
    { id: 4, type: 'image', content: 'screenshot_hero.png', time: '30m ago', app: 'CleanShot X' },
    { id: 5, type: 'text', content: 'yarn add @tailwindcss/vite', time: '1h ago', app: 'Terminal' },
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

      {/* Navigation - Apple Style */}
      <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-4xl">
        <div className="bg-black/90 backdrop-blur-md rounded-full px-6 py-3 shadow-2xl border border-white/10">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <img
                alt="Supaste Logo"
                className="h-7 w-7 rounded-lg"
                src="https://framerusercontent.com/images/E5Op3vw8SO4i4cThRZINxLqTKlE.png?scale-down-to=512&width=1024&height=1024"
              />
              <span className="text-lg font-semibold text-white">Supaste</span>
            </div>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center space-x-6">
              <a className="text-sm text-gray-300 hover:text-white font-medium transition-colors" href="#features">Features</a>
              <a className="text-sm text-gray-300 hover:text-white font-medium transition-colors" href="#faq">FAQ</a>
              <a className="text-sm text-gray-300 hover:text-white font-medium transition-colors" href="#">Updates</a>
              <a className="text-sm text-gray-300 hover:text-white font-medium transition-colors" href="#">Cooldock</a>
              <a className="text-sm text-gray-300 hover:text-white font-medium transition-colors" href="#pricing">Pricing</a>
            </div>

            {/* Download Button */}
            <div className="flex items-center gap-4">
              <a
                className="bg-white text-black px-4 py-2 rounded-full font-medium text-sm hover:bg-gray-100 transition-colors flex items-center gap-2"
                href="#pricing"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.05 2.95.72 3.84 1.93-3.15 1.83-2.61 6.06.49 7.37-.77 1.48-1.55 2.87-2.98 3.71zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"></path>
                </svg>
                <span className="hidden sm:inline">Download</span>
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        className="pt-32 pb-24 text-center px-4 relative overflow-hidden bg-cover bg-center"
        id="hero"
        style={{
          background: 'linear-gradient(180deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
        }}
      >
        <div className="max-w-4xl mx-auto relative z-10 pt-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/20 text-white text-sm font-medium mb-8 backdrop-blur-md border border-white/30 shadow-lg">
            <img
              alt="icon"
              className="w-4 h-4 rounded-sm"
              src="./src/assets/apple-logo-hero.svg"
            />
            Clipboard History Redefined
          </div>

          <h1 className="text-6xl md:text-8xl font-black text-white tracking-tighter leading-none mb-6">
            Copy once.<br />Reuse anytime.
          </h1>

          <p className="text-sm md:text-lg text-white/95 max-w-2xl mx-auto mb-10 font-light leading-relaxed">
            Supaste saves your clipboard and screenshots in a beautiful visual history, automatically grouped by type, app, and custom categories, so you can search, find, and paste anything back in seconds.
          </p>

          <a
            className="inline-flex items-center justify-center bg-primary text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-primary-dark transition-all hover:scale-105 gap-2 shadow-2xl"
            href="#pricing"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.05 2.95.72 3.84 1.93-3.15 1.83-2.61 6.06.49 7.37-.77 1.48-1.55 2.87-2.98 3.71zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"></path>
            </svg>
            Get Started Now
          </a>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-white/90 font-medium">
            <span className="flex items-center gap-1">✓ One-time purchase</span>
            <span className="flex items-center gap-1">✓ Fully offline & privacy</span>
            <span className="flex items-center gap-1">✓ macOS Sonoma 14.0+</span>
          </div>
        </div>

        {/* App interface preview container */}
        <div className="mt-16 max-w-5xl mx-auto relative h-144 md:h-[550px] rounded-t-3xl rounded-b-3xl overflow-hidden shadow-2xl border-t border-x border-white/20 ">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover object-top"
          >
            <source
              src="https://offload-assets.framercoder.com/05f324f2-7151-4757-9ad7-485d306cad09/325b6570-0e84-40b6-ab4e-1aa18e907554_compressed-video%20(7).mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
      </section>

      {/* Social Proof - Awards & Achievements */}
      <section className="py-20 bg-white border-y border-gray-100">
        <div className="max-w-6xl mx-auto px-4">

          {/* Section Header */}
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-black mb-3 tracking-tight">
              Award-Winning Design
            </h3>
            <p className="text-gray-500 text-sm md:text-base">
              Recognized by the design community worldwide
            </p>
          </div>

          {/* Awards Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">

            {/* Product Hunt */}
            <div className="group flex flex-col items-center justify-center p-6 rounded-2xl bg-gray-50 border border-gray-200 hover:border-black hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                <span className="text-white font-bold text-xl">P</span>
              </div>
              <div className="text-center">
                <div className="text-xs font-bold text-black">#4 Product</div>
                <div className="text-xs font-bold text-black">of the Day</div>
                <div className="text-[10px] text-gray-500 font-semibold mt-1">Product Hunt</div>
              </div>
            </div>

            {/* Muzli Picks */}
            <div className="group flex flex-col items-center justify-center p-6 rounded-2xl bg-gray-50 border border-gray-200 hover:border-black hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <div className="flex items-center gap-1 mb-2">
                <Award className="w-5 h-5 text-black" />
                <span className="text-2xl font-serif italic text-black">m</span>
                <Award className="w-5 h-5 text-black" />
              </div>
              <div className="flex gap-0.5 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-black text-black" />
                ))}
              </div>
              <div className="text-xs font-bold text-black">Muzli Picks</div>
            </div>

            {/* Best UI Design */}
            <div className="group flex flex-col items-center justify-center p-6 rounded-2xl bg-gray-50 border border-gray-200 hover:border-black hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <Trophy className="w-8 h-8 text-black mb-2 group-hover:rotate-12 transition-transform" />
              <div className="text-center">
                <div className="text-[10px] font-bold text-black uppercase tracking-wider">Best UI</div>
                <div className="text-[10px] font-bold text-black uppercase tracking-wider">Design</div>
                <div className="text-[10px] text-gray-500 font-semibold mt-1">CSSDA Award</div>
              </div>
            </div>

            {/* Best UX Design */}
            <div className="group flex flex-col items-center justify-center p-6 rounded-2xl bg-gray-50 border border-gray-200 hover:border-black hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <Medal className="w-8 h-8 text-black mb-2 group-hover:rotate-12 transition-transform" />
              <div className="text-center">
                <div className="text-[10px] font-bold text-black uppercase tracking-wider">Best UX</div>
                <div className="text-[10px] font-bold text-black uppercase tracking-wider">Design</div>
                <div className="text-[10px] text-gray-500 font-semibold mt-1">CSSDA Award</div>
              </div>
            </div>

            {/* Best Innovation */}
            <div className="group flex flex-col items-center justify-center p-6 rounded-2xl bg-gray-50 border border-gray-200 hover:border-black hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <Lightbulb className="w-8 h-8 text-black mb-2 group-hover:rotate-12 transition-transform" />
              <div className="text-center">
                <div className="text-[10px] font-bold text-black uppercase tracking-wider">Best</div>
                <div className="text-[10px] font-bold text-black uppercase tracking-wider">Innovation</div>
                <div className="text-[10px] text-gray-500 font-semibold mt-1">CSSDA Award</div>
              </div>
            </div>

            {/* Special Design Kudos */}
            <div className="group flex flex-col items-center justify-center p-6 rounded-2xl bg-gray-50 border border-gray-200 hover:border-black hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <Sparkles className="w-8 h-8 text-black mb-2 group-hover:rotate-12 transition-transform" />
              <div className="text-center">
                <div className="text-[10px] font-bold text-black uppercase tracking-wider">Special</div>
                <div className="text-[10px] font-bold text-black uppercase tracking-wider">Design Kudos</div>
                <div className="text-[10px] text-gray-500 font-semibold mt-1">CSSDA Award</div>
              </div>
            </div>

          </div>

          {/* Stats Bar */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 pt-8 border-t border-gray-200">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-black text-black mb-1 tracking-tight">10K+</div>
              <div className="text-xs text-gray-500 font-medium">Active Users</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-black text-black mb-1 tracking-tight">4.9</div>
              <div className="text-xs text-gray-500 font-medium">Average Rating</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-black text-black mb-1 tracking-tight">50+</div>
              <div className="text-xs text-gray-500 font-medium">Countries</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-black text-black mb-1 tracking-tight">99%</div>
              <div className="text-xs text-gray-500 font-medium">Satisfaction</div>
            </div>
          </div>

        </div>
      </section>

      {/* Main Features Intro */}
      <section className="py-24 bg-surface px-4" id="features">
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-6 text-on-surface">
            Your clipboard,<br />wherever you need it
          </h2>
          <p className="text-xl text-text-muted leading-relaxed">
            Use the notch shelf, quick search, inline paste, drag and drop, and the full Library view to find, reuse, and organize anything you copied.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-20 max-w-4xl mx-auto">
          {["Local first", "Privacy first", "Search anything", "Screenshots", "Screenshot & image OCR", "Grouped by App", "Type filters", "Sensitive detection", "Custom categories"].map((tag, idx) => (
            <span
              key={idx}
              className="px-4 py-2 bg-white rounded-full text-sm font-medium border border-border-light shadow-sm hover:border-primary hover:text-primary transition-colors cursor-default"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Feature Block 1 */}
        <div className="max-w-5xl mx-auto feature-card mb-12 text-center pt-16 pb-0 px-0 overflow-hidden relative border border-border-light bg-white/50 backdrop-blur-sm shadow-sm">
          <div className="px-8 max-w-2xl mx-auto relative z-10">
            <h3 className="text-3xl font-bold mb-4">Reuse Anything Without Switching Apps</h3>
            <p className="text-text-muted mb-8 leading-relaxed">
              Keep your most useful clips right at the top of your Mac. Drag images, assets, text, colors, SVG icons, screenshots, and files directly from the notch into any app, without opening another window or switching context.
            </p>
          </div>

          <div className="h-64 md:h-108 bg-gray-100 mt-8 rounded-t-3xl rounded-b-3xl  mx-6 md:mx-16 shadow-inner overflow-hidden border-t border-x border-gray-300">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover object-top"
            >
              <source
                src="https://offload-assets.framercoder.com/05f324f2-7151-4757-9ad7-485d306cad09/d2e53957-e0d0-448b-a414-ef59066c3577_screenshot%20ocr%20(1).mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>

        {/* Testimonial */}
        <div className="max-w-2xl mx-auto my-16 bg-white p-8 rounded-3xl shadow-sm border border-border-light text-left">
          <div className="flex text-yellow-400 mb-4 text-lg">
            ★★★★★
          </div>
          <p className="text-gray-700 italic mb-6 leading-relaxed">
            "I've been using Supaste now for a week and I LOVE It. I've been looking for this my entire career. I've tried other clipboard apps that just have a running list, but the visual and category aspect to this app is amazing. I also love that it's a part of the notch. And finding previous copies by searching, app, or type of content is insanely useful."
          </p>
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-gray-300 rounded-full overflow-hidden">
              <img
                alt="Evan"
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCIGZnJ8-m_EYUHGxeWAEWeT1P2dhXSZUzE2A_ZoaqERImt3QWgC1RhRq4Ay4hUVMo1V22k0wdK7YrS_Hm_Vvdu9fJCcJy5yVcY8fL46Y8_cJqByigcGWOINkSXD5U2rA9P_Bb_rZxOIbt8L8pibYU8QY1er4QelY5w_6bzsF14k9FSyOcMelRX7Z8ZsxL_AhKcxDZxR0hIV_-3Uxud_IouA4hROoUm9-yjIyI40vZlTs2NHiGKmDCaqB69UTjUPZVJvz2FCVICICzQ"
              />
            </div>
            <div>
              <div className="font-bold text-sm text-on-surface">Evan</div>
              <div className="text-xs text-text-muted">Lead Designer &amp; Developer</div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Grid */}
      <section className="py-12 bg-surface px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* Card 1: OCR */}
          <div className="feature-card flex flex-col justify-between h-[520px] overflow-hidden relative border border-border-light shadow-sm bg-white hover:shadow-md transition-shadow">
            <div className="text-center relative z-10 px-4">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Sparkles className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Screenshot &amp; Image OCR</h3>
              <p className="text-text-muted text-sm px-4 leading-relaxed">
                Take a screenshot or copy an image, and Supaste automatically recognizes the text inside it locally. Search for error messages, code lines, notes, or receipts.
              </p>
            </div>

            {/* High-Fidelity OCR Interactive Preview */}
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
                <div className="mt-2 text-gray-400">at com.supaste.app.MainActivity.init(MainActivity.java:42)</div>
                <div className="absolute right-3 bottom-3 bg-primary text-white text-[10px] px-2 py-1 rounded flex items-center gap-1 font-sans cursor-pointer hover:bg-primary-dark shadow-sm">
                  <Check className="w-3 h-3" /> Copied Text
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Multi-clip */}
          <div className="feature-card flex flex-col justify-between h-[520px] overflow-hidden relative border border-border-light shadow-sm bg-white hover:shadow-md transition-shadow">
            <div className="text-center relative z-10 px-4">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Layers className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Multi-Clip Copy</h3>
              <p className="text-text-muted text-sm px-4 leading-relaxed">
                Copy multiple items from different apps and content types into one combined clip card. Collect text, links, images, files, code, and more.
              </p>
            </div>

            {/* Multi-Clip Interactive Preview */}
            <div className="mt-8 bg-gray-50 h-64 rounded-t-xl mx-4 shadow-inner border-t border-x border-gray-200 p-4 overflow-y-auto">
              <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-3 space-y-2">
                <div className="flex justify-between items-center border-b border-gray-100 pb-2">
                  <span className="text-xs font-bold text-gray-800">Stack: Tailwind Configuration</span>
                  <span className="bg-primary/10 text-primary text-[9px] px-1.5 py-0.5 rounded-full font-bold">3 items</span>
                </div>
                <div className="space-y-1.5 text-xs text-gray-700">
                  <div className="flex items-center gap-2 p-1.5 bg-gray-50 rounded border border-gray-100 font-mono text-[10px]">
                    <Code className="w-3.5 h-3.5 text-gray-500 flex-shrink-0" />
                    <span className="truncate">--color-primary: #0080ff;</span>
                  </div>
                  <div className="flex items-center gap-2 p-1.5 bg-gray-50 rounded border border-gray-100">
                    <Palette className="w-3.5 h-3.5 text-blue-500 flex-shrink-0" />
                    <span className="font-semibold text-gray-600">Primary Color Theme</span>
                    <span className="w-3 h-3 rounded bg-[#0080ff] ml-auto border border-gray-200"></span>
                  </div>
                  <div className="flex items-center gap-2 p-1.5 bg-gray-50 rounded border border-gray-100">
                    <Link2 className="w-3.5 h-3.5 text-green-600 flex-shrink-0" />
                    <span className="truncate text-blue-600 font-medium hover:underline">tailwindcss.com/docs</span>
                  </div>
                </div>
                <button
                  onClick={() => handleCopyDemo('--color-primary: #0080ff;', 'multiclip')}
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
          </div>

          {/* Card 3: Shortcuts */}
          <div className="feature-card flex flex-col justify-between h-[520px] overflow-hidden relative md:col-span-2 border border-border-light shadow-sm bg-white hover:shadow-md transition-shadow">
            <div className="text-center max-w-2xl mx-auto relative z-10 px-4">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Zap className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Inline Shortcuts</h3>
              <p className="text-text-muted text-sm leading-relaxed">
                Create a quick text alias for any clip, like <code className="bg-gray-100 text-primary px-1.5 py-0.5 rounded font-mono font-bold">;welcome</code>, and type it anywhere to instantly insert your saved text, template, or clip. No app switching required.
              </p>
            </div>

            {/* Shortcuts Preview */}
            <div className="mt-8 bg-gray-50 h-64 rounded-t-xl mx-6 md:mx-16 shadow-inner border-t border-x border-gray-200 p-4">
              <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-4 h-full flex flex-col">
                <div className="text-xs text-gray-400 mb-1 flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                  Active Text Editor
                </div>
                <div className="border border-gray-100 rounded-lg p-2.5 flex-1 font-mono text-xs text-gray-800 relative bg-gray-50/50">
                  <span>Dear Customer, </span>
                  <span className="border-r border-gray-900 animate-caret font-bold text-primary">;welcome</span>

                  {/* Suggestion Dropdown Popup */}
                  <div className="absolute left-4 top-10 bg-white border border-gray-200 rounded-xl shadow-xl p-1.5 w-64 z-20 font-sans space-y-1">
                    <div className="bg-primary text-white rounded-lg p-1.5 text-[11px] font-medium flex justify-between items-center cursor-pointer">
                      <span>;welcome → "Hi there! Welcome to..."</span>
                      <span className="bg-white/20 px-1 rounded text-[8px]">Tab</span>
                    </div>
                    <div className="text-gray-700 hover:bg-gray-100 rounded-lg p-1.5 text-[11px] font-medium flex justify-between items-center cursor-pointer">
                      <span>;pricing → "Supaste standard plans..."</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 4: Reminders */}
          <div className="feature-card flex flex-col justify-between h-[520px] overflow-hidden relative border border-border-light shadow-sm bg-white hover:shadow-md transition-shadow">
            <div className="text-center relative z-10 px-4">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Clock className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Clip Reminders</h3>
              <p className="text-text-muted text-sm px-4 leading-relaxed">
                Set reminders on any copied item—text, files, images, links, or screenshots. Choose a quick relative time or select a custom date and time to review it.
              </p>
            </div>

            {/* Reminders Interactive Preview */}
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

                {/* Popover */}
                <div className="bg-gray-50 rounded-lg p-2.5 border border-gray-200 space-y-1.5">
                  <div className="text-[10px] font-bold text-gray-500">Alert Me:</div>
                  <div className="grid grid-cols-2 gap-1.5">
                    <button className="bg-primary text-white text-[9px] font-semibold py-1 rounded border border-primary shadow-sm">In 1 Hour</button>
                    <button className="bg-white text-gray-700 text-[9px] font-semibold py-1 rounded border border-gray-200 hover:bg-gray-100">Tomorrow</button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 5: Quick Paste */}
          <div className="feature-card flex flex-col justify-between h-[520px] overflow-hidden relative border border-border-light shadow-sm bg-white hover:shadow-md transition-shadow">
            <div className="text-center relative z-10 px-4">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Laptop className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Quick Paste Anywhere</h3>
              <p className="text-text-muted text-sm px-4 leading-relaxed">
                Press <code className="bg-gray-100 text-primary px-1.5 py-0.5 rounded font-mono font-bold">⌃ ⌘ V</code> in any application to open Supaste instantly. Search your clipboard, templates, and files inline.
              </p>
            </div>

            {/* Quick Paste Interactive Preview */}
            <div className="mt-8 bg-gray-50 h-64 rounded-t-xl mx-4 shadow-inner border-t border-x border-gray-200 p-4">
              <div className="bg-white rounded-xl border border-gray-200 shadow-md p-3 relative space-y-2">
                <div className="flex items-center gap-2 border-b border-gray-100 pb-2">
                  <Search className="w-3.5 h-3.5 text-gray-400" />
                  <input
                    type="text"
                    readOnly
                    value="supaste_logo"
                    className="text-xs font-semibold text-gray-800 outline-none w-full bg-transparent border-none p-0 focus:ring-0"
                  />
                </div>
                <div className="space-y-1">
                  <div className="bg-primary/10 text-primary border border-primary/20 rounded-lg p-2 flex items-center justify-between text-xs font-medium cursor-pointer">
                    <span className="flex items-center gap-1.5 font-mono">🖼️ supaste_logo_dark.svg</span>
                    <span className="text-[10px] opacity-75">⏎ Paste SVG</span>
                  </div>
                  <div className="hover:bg-gray-50 text-gray-700 rounded-lg p-2 flex items-center justify-between text-xs font-medium cursor-pointer">
                    <span className="flex items-center gap-1.5 truncate">https://supaste.com/logo.png</span>
                    <span className="text-[10px] text-gray-400 font-bold">⌘2</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 6: Library */}
          <div className="feature-card flex flex-col justify-between h-[620px] overflow-hidden relative md:col-span-2 border border-border-light shadow-sm bg-white hover:shadow-md transition-shadow">
            <div className="text-center max-w-2xl mx-auto relative z-10 px-4 pt-4">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Layers className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-3xl font-bold mb-4">Your Clipboard Library</h3>
              <p className="text-text-muted leading-relaxed">
                See your clipboard as a clean visual timeline, then open the full Library window to browse, organize, manage, and reuse your saved assets, snippets, screenshots, and text.
              </p>
            </div>

            {/* Fully Functional/Interactive Library Mockup */}
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

              {/* Timeline list */}
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
          </div>

          {/* Card 7: Cloud Sync */}
          <div className="feature-card flex flex-col justify-between h-[520px] overflow-hidden relative border border-border-light shadow-sm bg-white hover:shadow-md transition-shadow">
            <div className="text-center relative z-10 px-4">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Cloud className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Cloud Sync</h3>
              <p className="text-text-muted text-sm px-4 leading-relaxed">
                Keep your clipboard history in sync across your macOS and iOS devices seamlessly and securely with military-grade end-to-end encryption.
              </p>
            </div>

            {/* Cloud Sync Preview */}
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

        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-24 bg-white px-4 rounded-t-[3rem] border-t border-border-light">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-6 text-on-surface">
            Built for everything you copy
          </h2>
          <p className="text-xl text-text-muted max-w-2xl mx-auto leading-relaxed">
            From code snippets and design assets to customer replies, screenshots, links, and personal notes, Supaste keeps every useful piece of your clipboard organized and ready to reuse.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

          {/* Designers */}
          <div className="p-8 rounded-3xl bg-surface-container-low border border-border-light hover:shadow-lg transition-all duration-300">
            <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center mb-6 border border-border-light">
              <span className="text-2xl">🎨</span>
            </div>
            <h4 className="text-xl font-bold mb-3">Designers</h4>
            <p className="text-sm text-text-muted leading-relaxed">
              Keep colors, SVG icons, screenshots, design specifications, gradients, and layout assets close at hand in a visually searchable timeline.
            </p>
          </div>

          {/* Developers */}
          <div className="p-8 rounded-3xl bg-surface-container-low border border-border-light hover:shadow-lg transition-all duration-300">
            <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center mb-6 border border-border-light">
              <span className="text-2xl">💻</span>
            </div>
            <h4 className="text-xl font-bold mb-3">Developers</h4>
            <p className="text-sm text-text-muted leading-relaxed">
              Save code snippets, CLI commands, JSON payloads, API endpoints, and github links automatically, then reuse them instantly inline.
            </p>
          </div>

          {/* Content */}
          <div className="p-8 rounded-3xl bg-surface-container-low border border-border-light hover:shadow-lg transition-all duration-300">
            <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center mb-6 border border-border-light">
              <span className="text-2xl">✍️</span>
            </div>
            <h4 className="text-xl font-bold mb-3">Content &amp; Marketing</h4>
            <p className="text-sm text-text-muted leading-relaxed">
              Capture taglines, SEO keywords, outline notes, reference URLs, image inspirations, and drafting notes before they expire.
            </p>
          </div>

          {/* Sales */}
          <div className="p-8 rounded-3xl bg-surface-container-low border border-border-light hover:shadow-lg transition-all duration-300 relative overflow-hidden group">
            <div className="absolute inset-0 bg-white/75 backdrop-blur-[1px] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
              <span className="bg-black text-white text-xs px-3.5 py-1.5 rounded-full font-bold shadow-md">Coming Soon</span>
            </div>
            <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center mb-6 border border-border-light">
              <span className="text-2xl">📈</span>
            </div>
            <h4 className="text-xl font-bold mb-3 text-gray-500">Sales &amp; Support</h4>
            <p className="text-sm text-text-muted leading-relaxed">
              Quickly paste template replies, product document links, pricing notes, and client screenshots without navigating tabs.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-32 pricing-gradient text-center px-4 relative" id="pricing">
        <div className="max-w-3xl mx-auto mb-16 relative z-10">
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-6 text-on-surface leading-tight">
            One price.<br />Lifetime access.
          </h2>
          <p className="text-xl text-text-muted font-medium mb-4 leading-relaxed">
            One-time payment. No subscription.<br />Get lifetime access to Supaste on your Mac.
          </p>
          <p className="text-sm text-text-muted/80 max-w-lg mx-auto">
            Try it risk-free. If Supaste doesn't fit your workflow, email us within 14 days and we'll refund your purchase in full.
          </p>
        </div>

        {/* Pricing Card */}
        <div className="max-w-md mx-auto bg-white/90 backdrop-blur-xl p-10 rounded-[2.5rem] shadow-2xl border border-white/50 relative z-10 transform hover:scale-105 transition-all duration-300">
          <div className="absolute -top-4 right-8 bg-red-500 text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-md animate-pulse">
            Limited offer 🥳
          </div>

          <div className="text-left mb-8">
            <h3 className="text-2xl font-bold mb-1">Supaste App for macOS</h3>
            <p className="text-text-muted text-sm font-semibold">1 device personal license</p>
          </div>

          <div className="text-left mb-8 flex items-end gap-2">
            <span className="text-6xl font-black text-gray-900">$19</span>
            <span className="text-gray-400 line-through text-2xl mb-1.5 font-medium">$49</span>
            <span className="text-xs text-primary font-bold bg-primary/10 px-2 py-1 rounded-md mb-2 ml-2">Save 60%</span>
          </div>

          <ul className="text-left space-y-4 mb-8 text-sm font-medium text-gray-700 border-t border-gray-100 pt-6">
            {[
              "One-time payment (no recurring subscriptions)",
              "14-day absolute money-back guarantee",
              "Lifetime software updates included",
              "All premium features unlocked",
              "Highly optimized native macOS application",
              "Local OCR and automatic type categorizations"
            ].map((feature, index) => (
              <li key={index} className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="leading-tight">{feature}</span>
              </li>
            ))}
          </ul>

          <a
            className="block w-full bg-black text-white text-center py-4 rounded-2xl font-bold hover:bg-gray-800 transition-colors shadow-lg text-lg flex items-center justify-center gap-2"
            href="#"
          >
            Download for macOS <ArrowRight className="w-5 h-5" />
          </a>

          <p className="text-xs text-gray-400 mt-4 text-center">
            Secure checkout by Polar.sh, powered by Stripe.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-surface px-4 border-t border-border-light" id="faq">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-6">
              Frequently Asked<br />Questions
            </h2>
            <p className="text-text-muted leading-relaxed">
              Everything you need to know before getting started with Supaste, from privacy and compatibility to how your clipboard history is stored and handled.
            </p>
          </div>

          {/* Interactive Accordion Accordion */}
          <div className="space-y-4">
            {faqData.map((faq, index) => {
              const isOpen = activeFaq === index
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl border border-border-light hover:border-gray-300 transition-colors overflow-hidden"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full p-6 text-left flex justify-between items-center focus:outline-none"
                  >
                    <h4 className="font-bold text-lg text-on-surface pr-4">{faq.question}</h4>
                    <span className="text-xl text-gray-400 transition-transform duration-200">
                      {isOpen ? <Minus className="w-5 h-5 text-primary" /> : <Plus className="w-5 h-5" />}
                    </span>
                  </button>

                  {/* Collapsible Content */}
                  <div
                    className={`transition-all duration-300 ease-in-out ${isOpen ? 'max-h-60 border-t border-gray-100 p-6' : 'max-h-0'
                      } overflow-hidden`}
                  >
                    <p className="text-text-muted text-sm leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white pt-20 pb-10 px-4 rounded-t-[3rem] mt-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">

          {/* Brand Column */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <img
                alt="Logo"
                className="w-10 h-10 rounded-xl"
                src="https://framerusercontent.com/images/E5Op3vw8SO4i4cThRZINxLqTKlE.png?scale-down-to=512&width=1024&height=1024"
              />
              <span className="text-2xl font-black">Supaste</span>
            </div>

            <p className="text-gray-400 text-sm mb-6 leading-relaxed">
              Supaste saves your clipboard and screenshots in a beautiful visual history, automatically grouped by type, app, and custom categories, so you can search, find, and paste anything back in seconds.
            </p>

            <a
              className="inline-flex items-center justify-center bg-white text-black px-6 py-3 rounded-xl font-bold text-sm hover:bg-gray-200 transition-colors shadow-md"
              href="#pricing"
            >
              Download for macOS
            </a>
          </div>

          {/* Links Columns */}
          <div>
            <h5 className="text-gray-500 font-bold mb-4 uppercase text-xs tracking-wider">Menu</h5>
            <ul className="space-y-3 text-sm text-gray-300">
              <li><a className="hover:text-white transition-colors" href="#hero">Home</a></li>
              <li><a className="hover:text-white transition-colors" href="#features">Features</a></li>
              <li><a className="hover:text-white transition-colors" href="#faq">FAQ</a></li>
              <li><a className="hover:text-white transition-colors" href="#pricing">Pricing</a></li>
              <li><a className="hover:text-white transition-colors" href="#">Updates</a></li>
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
            <h5 className="text-gray-500 font-bold mb-4 uppercase text-xs tracking-wider">More Products</h5>
            <ul className="space-y-3 text-sm text-gray-300">
              <li><a className="hover:text-white transition-colors" href="#">Cooldock</a></li>
              <li><a className="hover:text-white transition-colors" href="#">Runey.app</a></li>
              <li><a className="hover:text-white transition-colors" href="#">Revone.app</a></li>
            </ul>
          </div>
        </div>

        <div className="max-w-7xl mx-auto border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <p>© 2026 Supaste.com - All rights reserved</p>
          <p>Built with  by <a className="text-gray-300 hover:text-white transition-colors" href="#">Solt Wagner</a></p>
        </div>

        {/* Large background text - Full Width */}
        <div className="w-full overflow-hidden mt-12 flex justify-center opacity-[0.06] select-none pointer-events-none -mx-4">
          <h1 className="text-[22vw] font-bold leading-[0.85] tracking-tighter text-white whitespace-nowrap">
            Supaste
          </h1>
        </div>
      </footer>

    </div>
  )
}

export default App
