import { useState } from 'react';
import { motion } from 'motion/react';
import { 
  ArrowRight, 
  Disc3, 
  Headphones, 
  Heart, 
  Menu, 
  MessageSquare, 
  Music2, 
  Package, 
  Plus, 
  Play,
  MoreVertical,
  Minus,
  ShoppingBag, 
  Star, 
  X,
  Instagram,
  Globe,
  Mic,
  MapPin
} from 'lucide-react';

// Button Component
const Button = ({ children, primary = false, className = "", ...props }: any) => (
  <button 
    className={`px-6 py-2 rounded-full font-sans font-medium text-sm shadow-xl border border-foreground/10 transition-all hover:-translate-y-1 hover:shadow-lg disabled:opacity-50 disabled:hover:translate-y-0 disabled:cursor-not-allowed
      ${primary ? 'bg-primary text-foreground' : 'bg-white text-foreground'} 
      ${className}`}
    {...props}
  >
    {children}
  </button>
);

// Navbar
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <nav className="sticky top-0 z-50 bg-background/90 backdrop-blur-md border-b-2 border-foreground">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <img src="https://cdn.shopify.com/s/files/1/1041/0383/8028/files/nowelogo.png?v=1783676549" alt="LA Music Records" className="h-16 md:h-20 w-auto scale-110 md:scale-125 origin-left" />
        </div>
        <div className="hidden md:flex gap-8 font-sans text-sm font-bold uppercase tracking-widest">
          <a href="#about" className="hover:text-primary transition-colors">About us</a>
          <a href="#artists" className="hover:text-primary transition-colors">Artists</a>
          <a href="#videos" className="hover:text-primary transition-colors">Videos</a>
          <a href="#studio" className="hover:text-primary transition-colors">Studio</a>
          <a href="#faq" className="hover:text-primary transition-colors">FAQ</a>
          <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
        </div>
        <div className="hidden md:block">
          <a href="#contact"><Button primary>Work With Us</Button></a>
        </div>
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-background border-b-2 border-foreground p-6 flex flex-col gap-4 font-sans font-bold uppercase tracking-widest text-center shadow-2xl">
          <a href="#about" onClick={() => setIsOpen(false)} className="py-2 hover:text-primary transition-colors">About us</a>
          <a href="#artists" onClick={() => setIsOpen(false)} className="py-2 hover:text-primary transition-colors">Artists</a>
          <a href="#videos" onClick={() => setIsOpen(false)} className="py-2 hover:text-primary transition-colors">Videos</a>
          <a href="#studio" onClick={() => setIsOpen(false)} className="py-2 hover:text-primary transition-colors">Studio</a>
          <a href="#faq" onClick={() => setIsOpen(false)} className="py-2 hover:text-primary transition-colors">FAQ</a>
          <a href="#contact" onClick={() => setIsOpen(false)} className="py-2 hover:text-primary transition-colors">Contact</a>
          <a href="#contact" onClick={() => setIsOpen(false)} className="mt-4"><Button primary className="w-full">Work With Us</Button></a>
        </div>
      )}
    </nav>
  );
};

// Hero
const Hero = () => (
  <section className="pt-16 pb-20 px-6 max-w-7xl mx-auto flex flex-col md:flex-row items-center relative overflow-hidden min-h-[80vh]">
    <div className="md:w-1/2 z-10">
      <h1 className="text-6xl md:text-8xl leading-[0.9] tracking-tighter">
        <span className="font-sans font-bold block">Sound</span>
        <span className="font-serif italic font-normal text-4xl md:text-6xl block ml-12 mt-2">That Crosses</span>
        <span className="font-sans font-bold block ml-24 mt-2">Borders</span>
      </h1>
      
      <p className="mt-8 text-lg md:text-xl font-body max-w-md">
        La Music Records is an independent music label born in Los Angeles and thriving in Dubai. We discover unique talents, craft unforgettable sounds, and support artists at every stage of their journey.
      </p>

      <div className="mt-12 flex flex-col sm:flex-row items-start sm:items-center gap-6 relative">
        <a href="#contact"><Button primary className="text-lg px-8 py-4">Submit Your Demo</Button></a>
        <a href="#artists" className="font-hand text-2xl text-foreground hover:text-primary transition-colors flex items-center gap-2 group">
          Discover our artists <ArrowRight className="w-5 h-5 transform rotate-45 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
        </a>
      </div>
    </div>

    <div className="md:w-1/2 mt-16 md:mt-0 relative flex justify-center group cursor-pointer">
      <div 
        className="relative w-80 h-80 md:w-[500px] md:h-[500px] animate-[spin_25s_linear_infinite] group-hover:animate-[spin_2s_linear_infinite]"
      >
        <div className="absolute inset-0 rounded-full border-[20px] border-foreground flex items-center justify-center bg-foreground shadow-xl transition-transform group-hover:scale-105 duration-500">
          <div className="w-full h-full rounded-full border-[2px] border-zinc-800 flex items-center justify-center bg-zinc-900">
            <div className="w-5/6 h-5/6 rounded-full border-[2px] border-zinc-700 flex items-center justify-center">
               <div className="w-4/6 h-4/6 rounded-full border-[2px] border-zinc-600 flex items-center justify-center bg-primary overflow-hidden relative">
                  <div className="absolute inset-0 opacity-20 mix-blend-overlay" style={{ backgroundImage: 'repeating-radial-gradient(circle at center, transparent 0, transparent 2px, black 3px, black 4px)'}}></div>
                  <div className="w-1/3 h-1/3 rounded-full bg-background flex items-center justify-center relative z-10">
                    <div className="w-4 h-4 rounded-full bg-foreground"></div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </div>
      <Globe className="absolute top-10 left-10 w-12 h-12 text-foreground transform -rotate-12 transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110" />
      <Star className="absolute bottom-20 left-0 w-10 h-10 text-primary fill-current stroke-foreground stroke-2 transition-transform duration-500 group-hover:rotate-45 group-hover:scale-110" />
      <Mic className="absolute top-20 right-10 w-10 h-10 text-foreground transition-transform duration-500 group-hover:-rotate-12 group-hover:scale-110" />
    </div>
  </section>
);

// About
const About = () => {
  const famousArtists = [
    "French Montana", "Black Coffee", "Lost Frequencies", "Robin Schulz", 
    "Diplo", "Dimitri Vegas & Like Mike", "Keinemusik", "Joel Corry", 
    "Eli & Fur", "Jan Blomqvist"
  ];

  return (
    <section id="about" className="py-24 px-6 max-w-7xl mx-auto overflow-hidden">
      <div className="text-center mb-20">
        <h2 className="text-4xl md:text-6xl font-serif italic">
          The Story<br/>
          <span className="font-sans font-bold not-italic">Behind the Sound</span>
        </h2>
      </div>

      {/* Chapter 1: The Origins */}
      <div className="flex flex-col md:flex-row items-center gap-12 mb-24">
        <div className="md:w-1/2 relative group">
           <div className="absolute inset-0 bg-primary opacity-20 rounded-[40%_60%_70%_30%/40%_50%_60%_50%] scale-110 z-0 transition-transform duration-700 group-hover:scale-100 group-hover:opacity-30"></div>
           <img 
              src="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&q=80&w=600" 
              alt="Los Angeles Studio" 
              className="w-full aspect-[4/3] object-cover rounded-3xl border border-foreground/10 z-10 relative shadow-xl grayscale-[20%] hover:grayscale-0 transition-all duration-500"
            />
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-max max-w-[90%] bg-white/90 backdrop-blur-md px-6 py-3 rounded-full border border-foreground/10 shadow-lg z-20">
              <p className="text-xs md:text-sm font-sans font-bold text-foreground uppercase tracking-widest text-center whitespace-nowrap overflow-hidden text-ellipsis">LA MUSIC RECORDS HEADQUARTERS - LOS ANGELES, USA</p>
            </div>
        </div>
        <div className="md:w-1/2 space-y-6 mt-8 md:mt-0">
          <div className="inline-block px-4 py-1 bg-foreground text-surface font-bold uppercase tracking-widest text-xs rounded-full shadow-md mb-2">Since 2017</div>
          <h3 className="text-3xl font-bold font-sans uppercase tracking-tight">Born in Los Angeles</h3>
          <p className="text-lg text-foreground/80 font-medium leading-relaxed">
            Our passion for music has been with us since childhood. What started as a love for sound evolved into a lifelong mission: to create, support artists, and build a space where music connects people across the globe.
          </p>
          <p className="text-lg text-foreground/80 font-medium leading-relaxed">
            In 2017, after years of experience in LA working alongside acclaimed producers and artists, La Music Records was founded. We envisioned an independent label tailored for artists hungry for international growth.
          </p>
        </div>
      </div>

      {/* Chapter 2: Dubai Expansion */}
      <div className="flex flex-col md:flex-row-reverse items-center gap-12 mb-24">
        <div className="md:w-1/2 relative group">
           <div className="absolute inset-0 bg-zinc-800 opacity-10 rounded-[60%_40%_30%_70%/60%_30%_70%_40%] scale-110 z-0 transition-transform duration-700 group-hover:scale-100 group-hover:opacity-20"></div>
           <img 
              src="https://cdn.shopify.com/s/files/1/1041/0383/8028/files/zdjecie-strona-1.jpg?v=1783640812" 
              alt="Dubai Skyline" 
              className="w-full h-auto object-contain rounded-3xl border border-foreground/10 z-10 relative shadow-xl grayscale-[20%] hover:grayscale-0 transition-all duration-500"
            />
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-max max-w-[90%] bg-white/90 backdrop-blur-md px-6 py-3 rounded-full border border-foreground/10 shadow-lg z-20">
              <p className="text-xs md:text-sm font-sans font-bold text-foreground uppercase tracking-widest text-center whitespace-nowrap overflow-hidden text-ellipsis">LA MUSIC RECORDS - FIVE PALM JUMEIRAH DUBAI</p>
            </div>
        </div>
        <div className="md:w-1/2 space-y-6 mt-8 md:mt-0">
          <div className="inline-block px-4 py-1 bg-primary text-foreground font-bold uppercase tracking-widest text-xs rounded-full shadow-md mb-2">Global Reach</div>
          <h3 className="text-3xl font-bold font-sans uppercase tracking-tight">Thriving in Dubai</h3>
          <p className="text-lg text-foreground/80 font-medium leading-relaxed">
            Taking our vision global, we launched our second branch in the vibrant city of Dubai. We operate from a state-of-the-art recording studio located in the prestigious <span className="font-bold text-foreground">FIVE Palm Jumeirah Hotel</span>.
          </p>
          <p className="text-lg text-foreground/80 font-medium leading-relaxed">
            It is here, in luxurious conditions and collaborating with top-tier sound engineers, that our latest productions come to life.
          </p>
        </div>
      </div>

      {/* Chapter 3: The FIVE MUSIC Studio & Roster */}
      <div className="bg-foreground text-surface rounded-3xl border border-foreground/10 shadow-xl overflow-hidden mb-24 relative">
        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'repeating-radial-gradient(circle at center, transparent 0, transparent 2px, white 3px, white 4px)', backgroundSize: '40px 40px'}}></div>
        <div className="p-8 md:p-16 text-center max-w-4xl mx-auto relative z-10">
          <h3 className="text-3xl md:text-5xl font-serif italic mb-6">The FIVE MUSIC Studio</h3>
          <p className="text-lg text-gray-300 font-medium mb-12">
            Our creative home regularly hosts some of the biggest names in the global music scene. We share the same rooms where these global icons shape the sound of tomorrow:
          </p>
          
          <div className="flex flex-wrap justify-center gap-3">
            {famousArtists.map((artist, i) => (
              <span key={i} className="px-4 py-2 border-2 border-zinc-700 rounded-xl text-sm font-bold font-sans uppercase tracking-wider text-gray-300 hover:text-white hover:border-primary transition-colors cursor-default bg-zinc-900/50 backdrop-blur-sm">
                {artist}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Chapter 4: The Mission */}
      <div className="max-w-4xl mx-auto text-center bg-white border border-foreground/10 shadow-xl rounded-3xl p-8 md:p-16 relative">
        <Star className="absolute -top-6 -right-6 w-12 h-12 text-primary fill-current stroke-foreground stroke-2" />
        <Music2 className="absolute -bottom-6 -left-6 w-12 h-12 text-foreground" />
        
        <h3 className="text-2xl md:text-4xl font-sans font-bold uppercase tracking-tight mb-6">Building Bridges Through Sound</h3>
        <p className="text-xl text-foreground/80 font-medium leading-relaxed">
          At La Music Records, we combine professionalism with creativity to bridge cultures and continents. Our mission is clear: discover unique talents, deliver unforgettable sounds, and fully support artists at every stage of their musical journey.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-24">
        {[
          { val: "Since 2017", label: "creating music without borders" },
          { val: "2 continents", label: "offices in the USA and Dubai (UAE)" },
          { val: "10+", label: "official videos released with our artists" },
          { val: "1 world-class studio", label: "FIVE MUSIC Studio, FIVE Palm Jumeirah, Dubai" }
        ].map((stat, i) => (
          <div key={i} className="flex flex-col items-center md:items-start text-center md:text-left gap-4 bg-white p-8 rounded-2xl border border-foreground/10 shadow-xl hover:-translate-y-2 transition-transform duration-300">
            <h3 className="text-3xl font-bold font-sans text-primary leading-tight">{stat.val}</h3>
            <p className="text-sm font-medium">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

// WhyUs
const WhyUs = () => (
  <section id="why" className="py-16 px-6 max-w-7xl mx-auto">
    <div className="text-center mb-12">
      <h2 className="text-4xl md:text-6xl font-sans font-bold">
        Why <span className="font-serif italic font-normal text-primary">Us?</span>
      </h2>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {[
        { title: "INTERNATIONAL REACH", desc: "We build bridges between cultures and continents. Your music travels from Dubai to Los Angeles — and everywhere in between.", icon: <Globe className="w-10 h-10" />, offset: "translate-y-0" },
        { title: "WORLD-CLASS STUDIO", desc: "We record at FIVE MUSIC Studio in FIVE Palm Jumeirah — the same rooms that host global names like Diplo, Robin Schulz, Black Coffee and Lost Frequencies.", icon: <Mic className="w-10 h-10" />, offset: "lg:translate-y-8" },
        { title: "FULL ARTIST SUPPORT", desc: "From the first demo to the official video — production, promotion and guidance at every stage of your musical journey.", icon: <Heart className="w-10 h-10" />, offset: "translate-y-0" },
        { title: "PROFESSIONALISM MEETS CREATIVITY", desc: "Top sound engineers, experienced producers and a genuine passion for music. We don't just release records — we develop artists.", icon: <Star className="w-10 h-10" />, offset: "lg:translate-y-8" }
      ].map((item, i) => (
        <div key={i} className={`relative ${item.offset} h-full`}>
           <div className="absolute top-4 left-4 w-full h-full bg-primary rounded-xl -z-10"></div>
           <div className="bg-white border border-foreground/10 p-8 rounded-xl shadow-xl h-full flex flex-col items-start text-left gap-4">
              <div className="bg-background rounded-full p-4 border border-foreground/10 inline-block">
                 {item.icon}
              </div>
              <h3 className="font-bold font-sans text-xl leading-tight uppercase tracking-wide">{item.title}</h3>
              <p className="text-sm font-medium text-gray-600 flex-grow">{item.desc}</p>
           </div>
        </div>
      ))}
    </div>
  </section>
);

// Featured Releases
const VideosSection = () => {
  const featured = [
    { title: "Another World (Remix)", artist: "Nicole Obarzanek, Burak Yeter", desc: "A border-crossing collaboration with the hitmaker behind “Tuesday”.", id: "Phs_Ot8ZsbE" },
    { title: "Running Yo Mouth", artist: "Jongmen x Pappa Bear", desc: "Raw energy where Polish rap meets international flow.", id: "k3hRrzXFMg8" },
    { title: "Follow You", artist: "Robert M", desc: "Dancefloor-ready sound from one of Poland's best-known DJs.", id: "gZabZrJJUag" }
  ];

  const otherVideos = [
    { id: "9l6APrvzWHI", title: "Nicole Obarzanek - Into Another World (Official Music Video)" },
    { id: "saOKWQdhrMw", title: "Nicole Obarzanek - Crazy Pride" },
    { id: "QDnIFi3i3mI", title: "Nicole Obarzanek - Toxic (Official Music Video)" },
    { id: "V26_BPSTO-M", title: "Robert M feat Ada & AR - Summer ( Official Clip )" },
    { id: "qJbiIl4yiEQ", title: "Robert M ft. Dave'Ron & Ada - Don't Let Me Down ( Official Video )" }
  ];

  return (
    <section id="videos" className="mt-16 pt-20 pb-20 bg-foreground text-surface relative">
      <div className="absolute top-0 left-0 w-full h-8 edge-jagged-top"></div>
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-6xl font-serif italic">
            Featured <span className="font-sans font-bold not-italic text-primary">Releases</span>
          </h2>
        </div>

        {/* Top 3 Featured */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-24">
          {featured.map((item, i) => (
            <div key={i} className="flex flex-col gap-4 group">
              <div className="relative w-full aspect-video bg-zinc-900 border-2 border-surface shadow-xl overflow-hidden">
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src={`https://www.youtube.com/embed/${item.id}?rel=0`}
                  title={item.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="mt-4 flex flex-col items-start">
                <h3 className="font-bold font-sans text-xl leading-tight">{item.artist}</h3>
                <h4 className="font-bold font-serif italic text-2xl text-primary">{item.title}</h4>
                <p className="text-sm text-gray-400 font-medium mt-2">{item.desc}</p>
                <a 
                  href={`https://www.youtube.com/watch?v=${item.id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 px-6 py-2 bg-white text-foreground text-sm font-bold uppercase tracking-wider hover:bg-primary transition-colors shadow-xl inline-block"
                >
                  Watch on YouTube
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Other Videos Grid */}
        <div className="border-t-2 border-zinc-800 pt-16">
          <h3 className="text-2xl font-bold font-sans mb-10 text-center uppercase tracking-widest text-zinc-500">More Videos</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 justify-center">
            {otherVideos.map((video, i) => (
              <div key={i} className="flex flex-col gap-3">
                <div className="relative w-full aspect-video bg-zinc-900 border-2 border-zinc-800 hover:border-primary transition-colors shadow-xl">
                  <iframe
                    className="absolute inset-0 w-full h-full"
                    src={`https://www.youtube.com/embed/${video.id}?rel=0`}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                </div>
                <h4 className="font-bold font-sans text-xs line-clamp-2 px-1 text-gray-300">
                  {video.title}
                </h4>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 w-full h-8 edge-jagged-bottom"></div>
    </section>
  );
};

// Artists
const ArtistsSection = () => {
  const artistsData = [
    {
      id: 'nicole',
      name: 'Nicole Obarzanek',
      color: 'bg-primary',
      bio: 'Singer and performer. Her singles “Toxic”, “Crazy Pride” and “Into Another World” define the label’s pop-electronic sound; her remix collaboration with Burak Yeter took her music to an international audience.',
      image: 'https://cdn.shopify.com/s/files/1/1041/0383/8028/files/WhatsApp_Image_2026-07-09_at_01.35.28.jpg?v=1783674360',
      tracks: [
        { title: 'Another World (Remix)', artist: 'Nicole Obarzanek, Burak Yeter', time: '03:14' },
        { title: 'Into Another World', artist: 'Nicole Obarzanek', time: '03:20' },
        { title: 'Crazy Pride', artist: 'Nicole Obarzanek', time: '02:09' },
        { title: 'Toxic', artist: 'Nicole Obarzanek', time: '03:00' },
      ]
    },
    {
      id: 'jongmen',
      name: 'Jongmen',
      color: 'bg-zinc-800',
      bio: 'Rapper with an uncompromising style. His collaboration with Pappa Bear on “Running Yo Mouth” bridges Polish rap and the international scene.',
      image: 'https://cdn.shopify.com/s/files/1/1041/0383/8028/files/Jongman.jpg?v=1783640811',
      tracks: [
        { title: 'Running Yo Mouth', artist: 'Jongmen x Pappa Bear', time: '03:45' }
      ]
    },
    {
      id: 'pappabear',
      name: 'Pappa Bear',
      color: 'bg-zinc-700',
      bio: 'International hip-hop and rap legend. Known for the high-energy collaboration “Running Yo Mouth” bridging borders and styles.',
      image: 'https://cdn.shopify.com/s/files/1/1041/0383/8028/files/Pappabear.png?v=1783640812',
      tracks: [
        { title: 'Running Yo Mouth', artist: 'Jongmen x Pappa Bear', time: '03:45' }
      ]
    },
    {
      id: 'robert',
      name: 'Robert M',
      color: 'bg-blue-600',
      bio: 'DJ and producer with years of club-scene experience. Author of dancefloor releases “Follow You”, “Summer” and “Don’t Let Me Down”.',
      image: 'https://cdn.shopify.com/s/files/1/1041/0383/8028/files/RobertM.jpg?v=1783640811',
      tracks: [
        { title: 'Follow You', artist: 'Robert M', time: '03:30' },
        { title: 'Summer', artist: 'Robert M feat. Ada & AR', time: '03:15' },
        { title: 'Don\'t Let Me Down', artist: 'Robert M ft. Dave\'Ron & Ada', time: '03:25' },
      ]
    }
  ];

  const [activeId, setActiveId] = useState(artistsData[0].id);
  const artist = artistsData.find(a => a.id === activeId) || artistsData[0];

  return (
    <section id="artists" className="py-20 px-6 max-w-7xl mx-auto">
      <div className="mb-12 text-left flex flex-col md:flex-row md:items-end justify-between gap-8">
        <div>
          <h2 className="text-4xl md:text-6xl font-sans font-bold uppercase tracking-wide">
            Our Artists
          </h2>
          <p className="mt-4 text-xl font-serif italic text-gray-600">We don't just sign artists — we grow with them.</p>
        </div>
        
        {/* Quote Block */}
        <div className="bg-foreground text-surface p-6 rounded-2xl border border-primary shadow-xl max-w-sm">
          <p className="font-serif italic text-lg leading-relaxed">"In music, we are like fish in water — we breathe it."</p>
        </div>
      </div>

      <div className="w-full flex flex-col lg:flex-row gap-12 min-h-[600px]">
        {/* Sidebar */}
        <div className="w-full lg:w-1/3 flex flex-col z-20">
          <div className="flex items-center gap-4 mb-8 pb-4 border-b border-foreground">
            <h3 className="text-2xl font-bold font-sans uppercase tracking-widest text-foreground">Roster</h3>
          </div>
          <ul className="space-y-2 flex-1">
            {artistsData.map(a => (
              <li
                key={a.id}
                onClick={() => setActiveId(a.id)}
                className={`text-3xl lg:text-4xl font-sans font-bold uppercase tracking-tight cursor-pointer transition-all flex items-center gap-4 group py-4 px-6 rounded-2xl border ${activeId === a.id ? 'bg-primary text-foreground border-foreground shadow-xl' : 'border-transparent text-foreground/40 hover:text-foreground hover:bg-black/5'}`}
              >
                <ArrowRight className={`w-8 h-8 transition-transform hidden sm:block ${activeId === a.id ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-50'}`} />
                {a.name}
              </li>
            ))}
          </ul>
        </div>

        {/* Main Content Area */}
        <div className="flex-grow relative rounded-3xl border border-foreground/10 shadow-xl overflow-hidden flex flex-col md:flex-row bg-white">
          {/* Image side */}
          <div className="w-full md:w-5/12 relative bg-zinc-900 border-b md:border-b-0 md:border-r-4 border-foreground overflow-hidden">
            <img 
              src={artist.image} 
              alt={artist.name} 
              className="absolute inset-0 w-full h-full object-cover object-top mix-blend-luminosity opacity-80 transition-opacity duration-500 hover:opacity-100" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 p-8 pointer-events-none">
              <h1 className="text-4xl lg:text-5xl font-sans font-bold text-white uppercase leading-none drop-shadow-md">
                {artist.name}
              </h1>
            </div>
          </div>

          {/* Info side */}
          <div className="w-full md:w-7/12 p-8 lg:p-12 flex flex-col relative bg-background">
            <div className="absolute top-0 right-0 w-40 h-40 bg-primary opacity-20 rounded-bl-full pointer-events-none"></div>

            <div className="relative z-10 mb-12">
              <h3 className="text-xs font-bold tracking-widest text-foreground/50 mb-4 uppercase flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary"></span> About
              </h3>
              <p className="text-lg font-medium leading-relaxed text-foreground">{artist.bio}</p>
            </div>

            <div className="relative z-10 flex-grow">
              <h3 className="text-xs font-bold tracking-widest text-foreground/50 mb-4 uppercase flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary"></span> Top Tracks
              </h3>
              <div className="flex flex-col gap-3">
                {artist.tracks.map((track, i) => (
                  <div key={i} className="flex items-center gap-4 p-4 rounded-xl border border-foreground/10 bg-white shadow-xl transition-all hover:-translate-y-1 hover:shadow-2xl">
                    <span className="text-primary font-bold text-lg font-mono w-6 text-center">{i + 1}</span>
                    <div className="flex-grow">
                      <p className="text-base font-bold leading-tight">{track.title}</p>
                      <p className="text-xs font-medium text-foreground/60 uppercase tracking-wider mt-1">{track.artist}</p>
                    </div>
                    <span className="text-sm font-bold font-mono text-foreground/40">{track.time}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Studio Section
const StudioSection = () => {
  return (
    <section id="studio" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-6xl font-serif italic">
          The <span className="font-sans font-bold not-italic text-primary">Studio</span>
        </h2>
        <p className="mt-4 text-xl font-medium text-foreground/70 max-w-2xl mx-auto">
          Where sound meets luxury. Our state-of-the-art creative home in Dubai.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Row 1 */}
        <div className="aspect-square rounded-3xl border border-foreground/10 shadow-xl overflow-hidden relative group cursor-pointer">
          <img src="https://cdn.shopify.com/s/files/1/1041/0383/8028/files/studio1.png?v=1783640814" alt="Studio Gear" className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-500 group-hover:scale-110" />
        </div>
        <div className="aspect-square rounded-3xl border border-foreground/10 shadow-xl bg-white p-8 flex flex-col justify-center items-center text-center group hover:-translate-y-2 transition-transform duration-300">
          <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-6">
            <Mic className="w-6 h-6 text-primary" />
          </div>
          <h3 className="text-2xl font-bold font-sans uppercase tracking-tight mb-4">FIVE MUSIC Studio</h3>
          <p className="text-foreground/70 font-medium">Located inside the prestigious FIVE Palm Jumeirah Hotel in Dubai, offering state-of-the-art recording facilities.</p>
        </div>
        <div className="aspect-square rounded-3xl border border-foreground/10 shadow-xl overflow-hidden relative group cursor-pointer">
          <img src="https://cdn.shopify.com/s/files/1/1041/0383/8028/files/studio2.png?v=1783640815" alt="Dubai" className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-500 group-hover:scale-110" />
        </div>

        {/* Row 2 */}
        <div className="aspect-square rounded-3xl border border-foreground/10 shadow-xl bg-foreground text-surface p-8 flex flex-col justify-center items-center text-center group hover:-translate-y-2 transition-transform duration-300 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[url('https://cdn.shopify.com/s/files/1/1041/0383/8028/files/studio3.png?v=1783640814')] bg-cover mix-blend-overlay"></div>
          <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mb-6 relative z-10">
            <Star className="w-6 h-6 text-primary" />
          </div>
          <h3 className="text-2xl font-bold font-sans uppercase tracking-tight mb-4 relative z-10">Luxurious Conditions</h3>
          <p className="text-surface/70 font-medium relative z-10">Bring your productions to life with top sound engineers and world-class acoustics in a premium environment.</p>
        </div>
        <div className="aspect-square rounded-3xl border border-foreground/10 shadow-xl overflow-hidden relative group cursor-pointer">
          <img src="https://cdn.shopify.com/s/files/1/1041/0383/8028/files/studio3.png?v=1783640814" alt="Mixing Console" className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-500 group-hover:scale-110" />
        </div>
        <div className="aspect-square rounded-3xl border border-foreground/10 shadow-xl bg-primary text-foreground p-8 flex flex-col justify-center items-center text-center group hover:-translate-y-2 transition-transform duration-300">
          <div className="w-12 h-12 rounded-full bg-foreground/10 flex items-center justify-center mb-6">
            <Globe className="w-6 h-6 text-foreground" />
          </div>
          <h3 className="text-2xl font-bold font-sans uppercase tracking-tight mb-4">Global Icons</h3>
          <p className="text-foreground/80 font-medium text-sm">Sharing the same rooms as French Montana, Black Coffee, Diplo, Lost Frequencies, Robin Schulz, and more.</p>
        </div>

        {/* Row 3 */}
        <div className="aspect-square rounded-3xl border border-foreground/10 shadow-xl overflow-hidden relative group cursor-pointer">
          <img src="https://cdn.shopify.com/s/files/1/1041/0383/8028/files/studio5.png?v=1783674004" alt="Microphone" className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-500 group-hover:scale-110" />
        </div>
        <div className="aspect-square rounded-3xl border border-foreground/10 shadow-xl bg-white p-8 flex flex-col justify-center items-center text-center group hover:-translate-y-2 transition-transform duration-300">
          <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-6">
            <Music2 className="w-6 h-6 text-primary" />
          </div>
          <h3 className="text-2xl font-bold font-sans uppercase tracking-tight mb-4">Your Sound</h3>
          <p className="text-foreground/70 font-medium">We don't just release records — we develop artists and push boundaries.</p>
        </div>
        <div className="aspect-square rounded-3xl border border-foreground/10 shadow-xl overflow-hidden relative group cursor-pointer">
          <img src="https://cdn.shopify.com/s/files/1/1041/0383/8028/files/studio6.png?v=1783674004" alt="DJ Performance" className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-500 group-hover:scale-110" />
        </div>
      </div>
    </section>
  );
};

// Marquee
const Marquee = () => (
  <div className="py-8 bg-primary text-foreground border-y border-foreground overflow-hidden whitespace-nowrap flex items-center shadow-none">
    <motion.div 
      animate={{ x: ["0%", "-50%"] }}
      transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      className="flex gap-8 items-center text-3xl font-sans font-bold uppercase tracking-widest"
    >
      {Array(6).fill("Warsaw · Los Angeles · Dubai · Berlin · London · Vienna · ").map((text, i) => (
        <span key={i}>{text}</span>
      ))}
    </motion.div>
  </div>
);

// Contact Form
const ContactForm = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResult("Sending...");
    const formData = new FormData(event.currentTarget);
    formData.append("access_key", "207a8fb9-6eba-4558-94ca-0f38c72bf5c0");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
      const data = await response.json();
      setResult(data.success ? "Message sent successfully!" : "Error sending message.");
      if (data.success) {
        event.currentTarget.reset();
        setTimeout(() => setResult(""), 5000);
      }
    } catch (error) {
      setResult("Error sending message.");
    }
  };

  return (
    <section id="contact" className="py-20 px-6 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
    <div className="md:w-5/12 w-full relative">
      <div className="aspect-square border border-foreground/10 rounded-3xl shadow-xl bg-primary flex items-center justify-center relative z-10 overflow-hidden">
         <div className="absolute inset-0 bg-[url('https://cdn.shopify.com/s/files/1/1041/0383/8028/files/studio3.png?v=1783640814')] mix-blend-multiply opacity-50 bg-cover bg-center"></div>
         <Headphones className="w-40 h-40 text-foreground relative z-20" />
      </div>
      <Music2 className="absolute -top-6 -left-6 w-16 h-16 text-foreground" />
      <Star className="absolute -bottom-6 -right-6 w-16 h-16 text-primary fill-current stroke-foreground stroke-2" />
    </div>

    <div className="md:w-7/12 w-full">
      <h2 className="text-4xl md:text-6xl font-sans font-bold mb-4 uppercase leading-none">
        Your Music Story <span className="text-primary block">Begins Here</span>
      </h2>
      <p className="text-lg font-medium mb-8 text-gray-700 max-w-md">
        Fill in the form — and we'll get back to you about collaborations, demo submissions and bookings.
      </p>

      <form onSubmit={onSubmit} className="flex flex-col gap-6">
        <div className="flex gap-6 flex-col sm:flex-row">
          <input type="text" name="name" placeholder="First name" required className="w-full bg-white border border-foreground/10 rounded-xl py-4 px-4 font-sans focus:outline-none focus:border-primary focus:shadow-lg shadow-xl transition-all" />
          <input type="text" name="last_name" placeholder="Last name" className="w-full bg-white border border-foreground/10 rounded-xl py-4 px-4 font-sans focus:outline-none focus:border-primary focus:shadow-lg shadow-xl transition-all" />
        </div>
        <div className="flex gap-6 flex-col sm:flex-row">
          <input type="email" name="email" placeholder="Email*" required className="w-full bg-white border border-foreground/10 rounded-xl py-4 px-4 font-sans focus:outline-none focus:border-primary focus:shadow-lg shadow-xl transition-all" />
          <input type="tel" name="phone" placeholder="Phone*" required className="w-full bg-white border border-foreground/10 rounded-xl py-4 px-4 font-sans focus:outline-none focus:border-primary focus:shadow-lg shadow-xl transition-all" />
        </div>
        <textarea name="message" placeholder="Message*" required rows={4} className="w-full bg-white border border-foreground/10 rounded-xl py-4 px-4 font-sans focus:outline-none focus:border-primary focus:shadow-lg shadow-xl transition-all resize-none"></textarea>
        
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mt-2">
          <div className="flex flex-col">
            <p className="text-xs text-gray-500 font-medium max-w-xs">By submitting you agree to our Privacy Policy.</p>
            {result && (
              <p className={`text-sm mt-2 font-bold ${result.includes("Error") ? "text-red-500" : (result === "Sending..." ? "text-gray-500" : "text-green-600")}`}>
                {result}
              </p>
            )}
          </div>
          <Button primary type="submit" className="text-xl px-12 py-4 w-full sm:w-auto" disabled={result === "Sending..."}>
            {result === "Sending..." ? "Sending..." : "Send"}
          </Button>
        </div>
      </form>
    </div>
  </section>
  );
};

// FAQ
const FAQ = () => {
  const faqs = [
    { q: "HOW CAN I SUBMIT MY DEMO?", a: "Send us a link to your music through the contact form. We listen to every submission and reply if we hear a fit for the label." },
    { q: "WHERE DO YOU RECORD?", a: "Our productions come to life at FIVE MUSIC Studio inside the FIVE Palm Jumeirah Hotel in Dubai, with additional operations in the USA." },
    { q: "WHAT DOES THE LABEL OFFER ARTISTS?", a: "Recording, production with top sound engineers, music video releases, promotion and support at every stage of an artist's development." },
    { q: "DO YOU WORK WITH INTERNATIONAL ARTISTS?", a: "Yes — building bridges between cultures and continents is our mission. We collaborate with artists from Europe, the USA and the Middle East." }
  ];

  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 px-6 max-w-4xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-6xl font-serif italic">
          Frequently Asked<br/>
          <span className="font-sans font-bold not-italic">Questions</span>
        </h2>
      </div>

      <div className="flex flex-col gap-6">
        {faqs.map((faq, i) => (
          <div key={i} className="border border-foreground/10 rounded-2xl shadow-xl bg-white overflow-hidden">
            <button 
              className="w-full flex justify-between items-center p-6 text-left font-sans font-bold text-lg hover:bg-zinc-50 transition-colors"
              onClick={() => setOpen(open === i ? null : i)}
            >
              {faq.q}
              <div className={`w-8 h-8 rounded-full flex items-center justify-center border border-foreground/10 transition-colors ${open === i ? 'bg-primary' : 'bg-white'}`}>
                {open === i ? <Minus className="w-4 h-4 shrink-0 text-foreground" /> : <Plus className="w-4 h-4 shrink-0 text-foreground" />}
              </div>
            </button>
            <motion.div 
              initial={false}
              animate={{ height: open === i ? 'auto' : 0, opacity: open === i ? 1 : 0 }}
              className="overflow-hidden bg-zinc-50 border-t-2 border-foreground"
            >
              <p className="p-6 text-gray-700 font-medium text-base">{faq.a}</p>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
};

// Footer
const Footer = () => (
  <footer className="bg-foreground text-surface pt-20 pb-10 px-6 relative mt-10">
    <div className="absolute top-0 left-0 w-full h-8 edge-jagged-top"></div>
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12 pt-8">
      <div className="flex flex-col gap-6 md:w-1/3">
        <div className="flex items-start">
          <img src="https://cdn.shopify.com/s/files/1/1041/0383/8028/files/nowelogo.png?v=1783676549" alt="LA Music Records" className="h-24 md:h-32 w-auto origin-left" />
        </div>
        <p className="font-sans font-medium text-sm text-surface/60 max-w-xs">
          La Music Records — sound without borders since 2017.
        </p>
        <div className="flex gap-4">
          <a href="https://www.instagram.com/l.a_musicrecords/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-surface/20 flex items-center justify-center hover:border-primary hover:text-primary transition-all hover:scale-110 text-surface"><Instagram className="w-5 h-5" /></a>
        </div>
        <a href="mailto:peter@lamusicrecords.com" className="font-sans font-medium text-sm text-primary hover:underline">peter@lamusicrecords.com</a>
        <a href="tel:+971588888295" className="font-sans font-medium text-sm text-primary hover:underline">+971 58 888 8295</a>
        <a href="https://www.lamusicrecords.com" className="font-sans font-bold text-lg text-surface hover:text-primary transition-colors mt-2">www.lamusicrecords.com</a>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-12 md:w-2/3">
        <div className="flex flex-col gap-4 font-sans text-sm text-gray-400">
          <h4 className="font-bold text-surface uppercase tracking-widest mb-2 border-b border-zinc-800 pb-2">Menu</h4>
          <a href="#about" className="hover:text-primary transition-colors">About us</a>
          <a href="#artists" className="hover:text-primary transition-colors">Artists</a>
          <a href="#videos" className="hover:text-primary transition-colors">Videos</a>
          <a href="#faq" className="hover:text-primary transition-colors">FAQ</a>
          <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
        </div>

        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-2 font-sans text-sm text-gray-400">
            <h4 className="font-bold text-surface uppercase tracking-widest mb-1 flex items-center gap-2 border-b border-zinc-800 pb-2"><MapPin className="w-4 h-4 text-primary"/> Dubai</h4>
            <p className="leading-relaxed">La Music Records<br/>The Binary by Omniyat — 1912<br/>Business Bay, Dubai, UAE</p>
          </div>
          <div className="flex flex-col gap-2 font-sans text-sm text-gray-400">
            <h4 className="font-bold text-surface uppercase tracking-widest mb-1 flex items-center gap-2 border-b border-zinc-800 pb-2"><MapPin className="w-4 h-4 text-primary"/> USA</h4>
            <p className="leading-relaxed">La Music Records c/o Aliti Group LLC<br/>2501 Chatham Rd Ste R<br/>Springfield, Illinois 62704, USA</p>
          </div>
        </div>
      </div>
    </div>

    <div className="max-w-7xl mx-auto mt-20 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 font-sans border-t border-zinc-800 pt-6">
      <p>© 2017–2026 La Music Records</p>
      <div className="flex gap-4 mt-4 md:mt-0">
        <a href="#" className="hover:text-surface transition-colors">Privacy Policy</a>
        <a href="#" className="hover:text-surface transition-colors">Terms of Use</a>
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen selection:bg-primary selection:text-foreground bg-background">
      <Navbar />
      <Hero />
      <About />
      <WhyUs />
      <VideosSection />
      <ArtistsSection />
      <StudioSection />
      <Marquee />
      <ContactForm />
      <FAQ />
      <Footer />
    </div>
  );
}
