import React from 'react';
// IMPORTANTE: Se agrega 'Variants' aquí para evitar el error de TypeScript en Vercel
import { motion, Variants } from 'framer-motion';
import { 
  MapPin, 
  UtensilsCrossed, 
  ArrowRight, 
  Moon, 
  ChefHat, 
  Sparkles, 
  Instagram, 
  Menu, 
  Phone, 
  Mail,
  Heart,
  Music
} from 'lucide-react';

// --- CONFIGURACIÓN DE IMÁGENES ---
const IMAGES = {
  hero: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop",
  concept: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?q=80&w=1277&auto=format&fit=crop", 
  dish1: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?q=80&w=800",
  dish2: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?q=80&w=800",
  dish3: "https://images.unsplash.com/photo-1553621042-f6e147245754?q=80&w=800",
  dish4: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=800", 
};

// --- MANEJO DE ERRORES DE IMAGEN ---
const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
  e.currentTarget.src = "https://images.unsplash.com/photo-1550966871-3ed3c47e2ce2?q=80&w=600";
};

// --- ANIMACIONES (TIPADAS CORRECTAMENTE) ---
// El tipado ': Variants' soluciona el error de build en Vercel
const fadeIn: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.8, 
      ease: "easeOut" 
    } 
  }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

// --- COMPONENTES ---

const Navbar = () => (
  <nav className="fixed top-0 w-full z-50 bg-background/90 backdrop-blur-md border-b border-white/5">
    <div className="container mx-auto px-6 h-20 flex items-center justify-between">
      <div className="text-2xl font-bold tracking-widest text-white cursor-pointer" onClick={() => window.scrollTo(0,0)}>
        YORU<span className="text-primary">.</span>
      </div>
      <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
        <a href="#concept" className="hover:text-primary transition-colors">CONCEPT</a>
        <a href="#menu" className="hover:text-primary transition-colors">MENU</a>
        <a href="#location" className="hover:text-primary transition-colors">LOCATION</a>
        <button 
          onClick={() => window.open('https://wa.me/523345353545?text=Hola%20Yoru%20Kitchen,%20quisiera%20reservar%20una%20mesa.', '_blank')}
          className="bg-white text-black px-5 py-2 rounded-sm font-bold hover:bg-gray-200 transition-colors"
        >
          BOOK A TABLE
        </button>
      </div>
      <div className="md:hidden text-white p-2">
        <Menu size={28} />
      </div>
    </div>
  </nav>
);

const Hero = () => (
  <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
    <div className="absolute inset-0 z-0">
      <img 
        src={IMAGES.hero}
        alt="Dark Japanese Atmosphere" 
        className="w-full h-full object-cover opacity-40"
        onError={handleImageError}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/50 to-transparent" />
    </div>

    <div className="container relative z-10 px-6 pt-20">
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
        className="max-w-3xl"
      >
        <span className="inline-block py-1 px-3 mb-6 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-bold tracking-widest uppercase">
          EST. 2025 • Downtown District
        </span>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-[1.1]">
          Modern Japanese <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">
            After Dark
          </span>
        </h1>
        
        <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-xl font-light leading-relaxed">
          Bold flavors, urban energy, and a modern dining experience designed for the night.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4">
          <a href="#menu" className="flex items-center justify-center gap-2 px-8 py-4 bg-primary text-white font-bold hover:bg-red-600 transition-all uppercase tracking-widest text-sm rounded-sm min-w-[200px]">
            <UtensilsCrossed size={18} />
            View Our Menu
          </a>
        </div>
      </motion.div>
    </div>
  </section>
);

const Concept = () => (
  <section id="concept" className="py-24 bg-background">
    <div className="container mx-auto px-6">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Flavor, Style, <br/>& Energy.</h2>
          <div className="w-24 h-1 bg-primary mb-8"></div>
          <p className="text-muted text-lg leading-relaxed mb-6">
            Yoru Kitchen was created as a response to the energy of the night. Inspired by Tokyo’s nightlife and street food culture, we blend traditional flavors with a bold, urban approach.
          </p>
          <p className="text-muted text-lg leading-relaxed">
            It's not just dinner; it's a destination. From the neon lights to the carefully curated playlist, everything is crafted to feel alive.
          </p>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative h-[400px] md:h-[600px] w-full group"
        >
          <img 
            src={IMAGES.concept} 
            alt="Chef Plating" 
            onError={handleImageError}
            className="w-full h-full object-cover rounded-sm grayscale group-hover:grayscale-0 transition-all duration-700 shadow-2xl shadow-primary/10"
          />
          <div className="absolute -bottom-6 -left-6 bg-surface p-6 border border-white/10 hidden md:block shadow-xl">
             <p className="text-white font-bold text-xl">"Atmosphere is an ingredient."</p>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

const Features = () => {
  const features = [
    {
      icon: <ChefHat size={32} className="text-primary" />,
      title: "Culinary Tradition",
      desc: "Modern techniques meeting classic roots."
    },
    {
      icon: <Moon size={32} className="text-primary" />,
      title: "Night Atmosphere",
      desc: "Designed to be enjoyed after dark. Music & lights."
    },
    {
      icon: <Sparkles size={32} className="text-primary" />,
      title: "Visual Experience",
      desc: "Dishes designed to be striking and memorable."
    }
  ];

  return (
    <section className="py-24 bg-surface border-y border-white/5">
      <div className="container mx-auto px-6">
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {features.map((f, i) => (
            <motion.div 
              key={i} 
              variants={fadeIn}
              className="bg-background/50 p-8 border border-white/5 hover:border-primary/50 transition-colors group rounded-sm"
            >
              <div className="mb-6 bg-surface w-16 h-16 flex items-center justify-center rounded-full group-hover:scale-110 transition-transform border border-white/5">
                {f.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{f.title}</h3>
              <p className="text-muted leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const MenuPreview = () => (
  <section id="menu" className="py-24 bg-background">
     <div className="container mx-auto px-6">
       <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
         <div>
            <h3 className="text-3xl md:text-4xl text-white font-bold mb-2">Featured Dishes</h3>
            <p className="text-muted">A glimpse into our night menu.</p>
         </div>
         <a href="#" className="text-primary font-bold flex items-center gap-2 hover:translate-x-2 transition-transform">
           Full Menu <ArrowRight size={18} />
         </a>
       </div>
       
       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { img: IMAGES.dish1, name: "Neon Roll", price: "$18" },
            { img: IMAGES.dish2, name: "Midnight Ramen", price: "$22" },
            { img: IMAGES.dish3, name: "Wagyu Skewers", price: "$35" },
            { img: IMAGES.dish4, name: "Signature Drink", price: "$16" },
          ].map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group"
            >
              <div className="aspect-square bg-surface rounded-sm overflow-hidden relative mb-4">
                <img 
                  src={item.img} 
                  alt={item.name} 
                  onError={handleImageError}
                  className="w-full h-full object-cover group-hover:scale-110 group-hover:brightness-110 transition-all duration-700"
                />
              </div>
              <div className="flex justify-between items-center">
                <h4 className="text-white font-bold text-lg group-hover:text-primary transition-colors">{item.name}</h4>
                <span className="text-primary font-medium">{item.price}</span>
              </div>
            </motion.div>
          ))}
       </div>
     </div>
  </section>
);

const LocationMap = () => (
  <section id="location" className="w-full h-[400px] md:h-[500px] bg-surface relative grayscale hover:grayscale-0 transition-all duration-700 group">
    <iframe 
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3240.828030578688!2d139.6993256762319!3d35.68123617258712!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188cd0d6b1ba1f%3A0x1c32a1f1ecacfdd5!2sShinjuku%20City%2C%20Tokyo%2C%20Japan!5e0!3m2!1sen!2smx!4v1709123456789!5m2!1sen!2smx"
      width="100%" 
      height="100%" 
      style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg)' }} 
      allowFullScreen={true} 
      loading="lazy" 
      referrerPolicy="no-referrer-when-downgrade"
      title="Yoru Kitchen Location"
      className="group-hover:filter-none transition-all duration-700"
    ></iframe>
    
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
       <div className="bg-background/90 backdrop-blur text-white p-6 border border-primary/50 shadow-2xl text-center min-w-[280px]">
          <MapPin className="text-primary mx-auto mb-2" size={32} />
          <h3 className="font-bold text-xl uppercase tracking-widest">Yoru Kitchen</h3>
          <p className="text-gray-400 text-sm mt-1">221 Neon Street, Downtown</p>
          <div className="mt-4 inline-block px-3 py-1 bg-primary text-white text-xs font-bold uppercase">
             Get Directions
          </div>
       </div>
    </div>
  </section>
);

const SocialResponsibility = () => (
  <section className="py-24 bg-background relative overflow-hidden">
    <div className="container mx-auto px-6">
      <div className="max-w-4xl mx-auto text-center">
        <Heart className="mx-auto text-primary mb-4" size={40} />
        <h2 className="text-3xl font-bold text-white mb-6">Stronger Communities</h2>
        <div className="grid md:grid-cols-3 gap-6 text-center mt-12">
          {["Supporting local suppliers", "Responsible food practices", "Cultural appreciation"].map((item, i) => (
            <div key={i} className="p-6 border border-white/5 bg-surface/30 rounded-sm">
              <p className="text-gray-300 font-medium">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-surface pt-20 pb-10 border-t border-white/10">
    <div className="container mx-auto px-6">
      <div className="grid md:grid-cols-4 gap-12 mb-16">
        <div className="col-span-1 md:col-span-2">
          <h2 className="text-3xl font-bold text-white mb-6 tracking-widest">YORU<span className="text-primary">.</span></h2>
          <p className="text-muted max-w-sm mb-6">
            Modern Japanese Food After Dark. A destination for those who seek flavor, style, and night-time energy.
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full bg-background border border-white/10 flex items-center justify-center text-white hover:bg-primary hover:border-primary transition-all">
              <Instagram size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-background border border-white/10 flex items-center justify-center text-white hover:bg-primary hover:border-primary transition-all">
              <Music size={18} />
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-white font-bold mb-6 tracking-wider text-sm">CONTACT</h3>
          <ul className="space-y-4 text-muted text-sm">
            <li className="flex items-center gap-3">
              <Phone size={16} className="text-primary" />
              +52 33 4535 3545
            </li>
            <li className="flex items-center gap-3">
              <Mail size={16} className="text-primary" />
              hello@yorukitchen.com
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-bold mb-6 tracking-wider text-sm">VISIT US</h3>
          <ul className="space-y-4 text-muted text-sm">
            <li className="flex items-start gap-3">
              <MapPin size={16} className="text-primary mt-1" />
              <span>221 Neon Street,<br />Downtown District</span>
            </li>
            <li className="mt-6 text-xs text-gray-500 uppercase tracking-widest border-t border-white/5 pt-4">
              Open Daily <br/> <span className="text-white text-sm font-bold">6:00 PM - 2:00 AM</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-600">
        <p>© 2025 Yoru Kitchen. All rights reserved.</p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
        </div>
      </div>
    </div>
  </footer>
);

// --- APP PRINCIPAL ---

function App() {
  return (
    <div className="bg-background min-h-screen text-gray-200 font-sans selection:bg-primary selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Concept />
        <Features />
        <MenuPreview />
        <SocialResponsibility />
        <LocationMap />
      </main>
      <Footer />
    </div>
  );
}

export default App;