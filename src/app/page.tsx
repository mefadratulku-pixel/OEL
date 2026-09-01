"use client";

import { ShieldCheck } from "lucide-react";

function Hero() {
  return (
    <section className="pt-16 min-h-[90vh] grid grid-cols-12 bg-dotted">
      {/* Left Margin */}
      <div className="hidden lg:block lg:col-span-2 grid-border-r relative">
         <div className="absolute top-20 left-6 font-mono text-[10px] tracking-widest text-foreground-muted uppercase">
            <span className="text-accent-brand">╔</span> EST. 2014
         </div>
      </div>

      {/* Main Content Area */}
      <div className="col-span-12 lg:col-span-10 grid grid-cols-1 lg:grid-cols-10 grid-border-b pb-20">
        {/* Intro Tag */}
        <div className="col-span-1 lg:col-span-10 p-6 flex justify-start">
          <div className="flex items-center bg-black/5 rounded-sm">
            <span className="bg-accent-brand text-white font-mono text-xs font-bold px-2 py-1">01</span>
            <span className="font-mono text-xs font-bold px-3 uppercase tracking-wider">Intro</span>
          </div>
        </div>

        {/* Headline */}
        <div className="col-span-1 lg:col-span-7 px-6 lg:px-12 pt-6 lg:pt-10 pb-16 lg:pb-20 relative">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-medium tracking-tight leading-[1.05] text-foreground">
            Professional <br className="hidden sm:block" /> Engineering & <br /> Consultant.
          </h1>
          <p className="mt-8 font-mono text-xs sm:text-sm tracking-wide text-foreground-muted max-w-md uppercase leading-relaxed">
            We built engineering and technical solutions to reduce risk and scale execution for our clients.
          </p>
        </div>

        {/* Dynamic Graphic Area */}
        <div className="hidden lg:flex col-span-3 items-center justify-center relative p-8 group">
           <div className="w-full aspect-square border border-black/10 bg-white relative flex items-center justify-center overflow-hidden">
              {/* Corner markers */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-accent-brand z-20 transition-all duration-500 group-hover:w-full group-hover:h-full"></div>
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-accent-brand z-20 transition-all duration-500 group-hover:w-full group-hover:h-full"></div>
              
              {/* Project Image */}
              <div className="absolute inset-2 bg-[#f4f4f4] z-0 overflow-hidden">
                <img 
                  src="https://oel.com.bd/wp-content/uploads/2021/01/slider_1.jpg" 
                  alt="Engineering Project"
                  className="w-full h-full object-cover lg:grayscale opacity-80 mix-blend-multiply group-hover:scale-110 group-hover:grayscale-0 transition-all duration-700"
                />
              </div>

              {/* Blueprint Grid Overlay */}
              <div className="absolute inset-2 bg-dotted opacity-50 z-10 mix-blend-overlay"></div>

              {/* Animated Scanner Line */}
              <div className="absolute top-2 left-2 right-2 h-[2px] bg-accent-brand z-20 shadow-[0_0_15px_rgba(17,173,17,0.8)] animate-[scan_3s_ease-in-out_infinite]"></div>
              
              {/* Data Overlay */}
              <div className="absolute bottom-6 left-6 font-mono text-[9px] text-white bg-black/60 px-2 py-1 z-20 backdrop-blur-sm">
                 COORD: 23.8103° N, 90.4125° E<br/>
                 STATUS: <span className="text-accent-brand font-bold">OPTIMAL</span>
              </div>
              <div className="absolute top-6 right-6 font-mono text-[9px] text-white bg-black/60 px-2 py-1 z-20 backdrop-blur-sm flex items-center gap-2">
                 <span>SYS.ON</span>
                 <span className="w-2 h-2 rounded-full bg-accent-brand animate-pulse"></span>
              </div>
           </div>
           
           {/* Decorative lines connecting to the box */}
           <div className="absolute top-1/2 -left-32 w-32 border-t border-black/10 border-dashed"></div>
           <div className="absolute top-1/2 -right-32 w-32 border-t border-black/10 border-dashed"></div>
        </div>

        {/* Bottom Actions */}
        <div className="col-span-1 lg:col-span-10 grid grid-cols-1 md:grid-cols-2 mt-auto border-t border-black/10">
          <a href="/" className="py-6 flex items-center justify-center font-mono text-xs sm:text-sm font-bold uppercase tracking-wider bg-white border-b md:border-b-0 border-black/10 md:grid-border-r hover:bg-black/5 transition-colors">
            Explore Services
          </a>
          <a href="/about-us/company-profile" className="py-6 flex items-center justify-center font-mono text-xs sm:text-sm font-bold uppercase tracking-wider bg-foreground text-white hover:bg-black/90 transition-colors">
            Company Profile
          </a>
        </div>
      </div>
      
      {/* Stats Bar */}
      <div className="col-span-12 grid grid-cols-1 md:grid-cols-3">
        <div className="p-8 border-b border-black/10 md:border-b-0 md:grid-border-r flex flex-col">
          <span className="text-accent-brand mb-4 font-mono text-xs">╔</span>
          <h4 className="font-mono text-sm font-bold uppercase tracking-widest leading-relaxed">Top Engineering <br className="hidden md:block"/> Firm in BD</h4>
        </div>
        <div className="p-8 border-b border-black/10 md:border-b-0 md:grid-border-r flex flex-col">
          <span className="text-accent-brand mb-4 font-mono text-xs">╔</span>
          <h4 className="font-mono text-sm font-bold uppercase tracking-widest leading-relaxed">Certified Fire <br className="hidden md:block"/> Protection Experts</h4>
        </div>
        <div className="p-8 flex flex-col">
          <span className="text-accent-brand mb-4 font-mono text-xs">╔</span>
          <h4 className="font-mono text-sm font-bold uppercase tracking-widest leading-relaxed">From Installation <br className="hidden md:block"/> To Maintenance</h4>
        </div>
      </div>
    </section>
  );
}

function Team() {
  const team = [
    {
      name: "Engr. Md. Fazlul Bari",
      role: "Chairman & CEO",
      image: "https://oel.com.bd/wp-content/uploads/2022/01/bari-chairman.jpg"
    },
    {
      name: "Engr. Md. Jahurul Islam",
      role: "Managing Director",
      image: "https://oel.com.bd/wp-content/uploads/2022/01/jahurul-md.jpg"
    },
    {
      name: "Engr. Md Ashikur Rahman",
      role: "Chief Technical Director",
      image: "https://oel.com.bd/wp-content/uploads/2022/01/Ashikur-Rakman-td.jpg"
    },
    {
      name: "Engr. Tariqul Islam",
      role: "Director",
      image: "https://oel.com.bd/wp-content/uploads/2022/01/Tarikul.jpg"
    },
    {
      name: "Engr. Shafiqul Islam",
      role: "Director",
      image: "https://oel.com.bd/wp-content/uploads/2022/01/SOhag.jpg"
    },
    {
      name: "Engr. Alokes Biswas",
      role: "Technical Director",
      image: "https://oel.com.bd/wp-content/uploads/2022/11/ENGR_ALOKESH_BISWAS.png"
    }
  ];

  return (
    <section className="grid grid-cols-12 border-t border-black/10">
      {/* Title Sidebar */}
      <div className="col-span-12 lg:col-span-3 border-b border-black/10 lg:border-b-0 lg:grid-border-r p-6 lg:p-12 bg-white">
        <div className="flex items-center bg-black/5 rounded-sm w-max mb-8">
          <span className="bg-accent-brand text-white font-mono text-xs font-bold px-2 py-1">02</span>
          <span className="font-mono text-xs font-bold px-3 uppercase tracking-wider">Team</span>
        </div>
        <h2 className="text-4xl lg:text-5xl font-medium tracking-tight leading-tight">
          Meet our <br className="hidden lg:block"/> leaders
        </h2>
      </div>

      {/* Grid Content */}
      <div className="col-span-12 lg:col-span-9 bg-background grid grid-cols-2 lg:grid-cols-3">
        {team.map((member, i) => (
          <div key={i} className="p-4 sm:p-8 flex flex-col items-center text-center border-b border-r border-black/10 lg:grid-border-b lg:grid-border-r hover:bg-black/5 transition-colors group">
            <div className="w-16 h-16 sm:w-24 sm:h-24 mb-4 sm:mb-8 relative border-2 border-transparent group-hover:border-accent-brand transition-colors p-1 rounded-full sm:rounded-none overflow-hidden">
              <div className="absolute -top-1 -right-1 w-2 h-2 bg-accent-brand opacity-100 lg:opacity-0 group-hover:opacity-100 transition-opacity z-10 hidden sm:block"></div>
              <img src={member.image} alt={member.name} className="w-full h-full object-cover lg:grayscale group-hover:grayscale-0 transition-all rounded-full sm:rounded-none" />
            </div>
            <h3 className="font-mono text-[10px] sm:text-xs font-bold uppercase tracking-widest mb-1 sm:mb-2 text-foreground">{member.name}</h3>
            <p className="text-accent-brand text-[8px] sm:text-[10px] font-bold tracking-widest uppercase">{member.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Clients() {
  const clients = [
    { name: "Noman Group", logo: "https://oel.com.bd/wp-content/uploads/2021/02/client-logo-01.jpg" },
    { name: "Standard Group", logo: "https://oel.com.bd/wp-content/uploads/2021/02/Standard-web.png" },
    { name: "BEXIMCO", logo: "https://oel.com.bd/wp-content/uploads/2021/02/BEXIMCO-web.png" },
    { name: "DBL Group", logo: "https://oel.com.bd/wp-content/uploads/2022/07/DBL-web.png" },
    { name: "LGED", logo: "https://oel.com.bd/wp-content/uploads/2021/02/LGED-web.png" },
    { name: "Dhaka WASA", logo: "https://oel.com.bd/wp-content/uploads/2023/02/Dhaka-WASA.jpg" }
  ];

  return (
    <section className="grid grid-cols-12 border-t border-black/10 bg-white">
      <div className="col-span-12 lg:col-span-3 grid-border-r p-8 flex items-center">
         <h4 className="font-mono text-sm font-bold uppercase tracking-widest">Trusted By:</h4>
      </div>
      <div className="col-span-12 lg:col-span-9 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
        {clients.map((client, i) => (
          <div key={i} className="p-6 border-b border-r border-black/10 lg:border-b-0 hover:bg-black/5 transition-colors flex items-center justify-center h-24">
            <img src={client.logo} alt={client.name} className="max-w-full max-h-full object-contain lg:grayscale lg:opacity-60 lg:hover:grayscale-0 lg:hover:opacity-100 transition-all mix-blend-multiply" />
          </div>
        ))}
      </div>
    </section>
  );
}

function Certifications() {
  return (
    <section className="grid grid-cols-12 border-t border-black/10 bg-accent-brand text-white">
      {/* Title Sidebar */}
      <div className="col-span-12 lg:col-span-3 border-b lg:border-b-0 lg:border-r border-white/20 p-6 lg:p-12">
        <div className="flex items-center bg-black/20 rounded-sm w-max mb-8">
          <span className="bg-white text-accent-brand font-mono text-xs font-bold px-2 py-1">03</span>
          <span className="font-mono text-xs font-bold px-3 uppercase tracking-wider text-white">Certifications</span>
        </div>
        <h2 className="text-4xl lg:text-5xl font-medium tracking-tight leading-tight text-white drop-shadow-md">
          Global <br className="hidden lg:block"/> Standards
        </h2>
        <p className="mt-6 font-mono text-xs tracking-wide text-white/90 uppercase leading-relaxed">
          We are committed to maintaining the highest international standards in our operations, quality, and environmental management.
        </p>
      </div>

      {/* Image Content */}
      <div className="col-span-12 lg:col-span-9 p-6 lg:p-12 flex items-center justify-center relative overflow-hidden">
         {/* Custom white dotted pattern for dark background */}
         <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(rgba(255, 255, 255, 0.3) 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
         <div className="relative z-10 w-full max-w-4xl bg-white p-4 md:p-8 transform transition-transform hover:scale-[1.01] duration-500 shadow-2xl">
            <img 
               src="/certificates.png" 
               alt="ISO Certifications - 45001:2018, 14001:2015, 9001:2015" 
               className="w-full h-auto mix-blend-multiply" 
            />
         </div>
      </div>
    </section>
  );
}

function Products() {
  const categories = [
    { title: "Fire Safety", href: "/product-category/fire-safety", icon: "01", image: "https://oel.com.bd/wp-content/uploads/2022/01/spraycontec2-600x431.jpg" },
    { title: "Electrical System", href: "/product-category/electrical-system", icon: "02", image: "https://oel.com.bd/wp-content/uploads/2022/01/14.-1.5-RM-FRLS-Cable-600x600.jpg" },
    { title: "HVAC", href: "/product-category/hvac", icon: "03", image: "https://oel.com.bd/wp-content/uploads/2021/01/slider_3.jpg" },
    { title: "MEP", href: "/product-category/mep", icon: "04", image: "https://oel.com.bd/wp-content/uploads/2022/01/1.-FACP.jpg" },
    { title: "Boiler", href: "/product-category/boiler", icon: "05", image: "https://oel.com.bd/wp-content/uploads/2022/02/14.-Ball-Valve.jpg" },
    { title: "Energy", href: "/product-category/energy", icon: "06", image: "https://oel.com.bd/wp-content/uploads/2022/01/Electric-Fire-Pump-600x600.jpg" },
  ];

  return (
    <section className="grid grid-cols-12 border-t border-black/10 bg-white">
      {/* Title Sidebar */}
      <div className="col-span-12 lg:col-span-3 border-b border-black/10 lg:border-b-0 lg:grid-border-r p-6 lg:p-12 bg-background">
        <div className="flex items-center bg-black/5 rounded-sm w-max mb-8">
          <span className="bg-accent-brand text-white font-mono text-xs font-bold px-2 py-1">04</span>
          <span className="font-mono text-xs font-bold px-3 uppercase tracking-wider">Solutions</span>
        </div>
        <h2 className="text-4xl lg:text-5xl font-medium tracking-tight leading-tight">
          Our <br className="hidden lg:block"/> Products
        </h2>
        <p className="mt-6 font-mono text-xs tracking-wide text-foreground-muted uppercase leading-relaxed">
          Comprehensive engineering products and solutions tailored for industrial and commercial needs.
        </p>
      </div>

      {/* Grid Content */}
      <div className="col-span-12 lg:col-span-9 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((cat, i) => (
          <a key={i} href={cat.href} className="p-8 flex flex-col border-b border-black/10 sm:border-r sm:border-black/10 lg:grid-border-b lg:grid-border-r hover:bg-black/5 transition-all group relative overflow-hidden bg-white min-h-[280px]">
            {/* Background Image Container */}
            <div className="absolute inset-4 z-0 overflow-hidden bg-[#f9f9f9]">
               <img 
                 src={cat.image} 
                 alt={cat.title} 
                 className="w-full h-full object-cover lg:grayscale opacity-40 lg:opacity-20 mix-blend-multiply group-hover:scale-110 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 ease-out"
               />
               {/* Overlay to ensure text readability */}
               <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-100 lg:opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
            
            <div className="absolute top-0 right-0 w-16 h-16 bg-background rounded-bl-full -mr-8 -mt-8 z-0"></div>
            
            {/* Text Content */}
            <div className="relative z-10 flex flex-col h-full justify-between pointer-events-none">
              <span className="font-mono text-xs font-bold text-accent-brand group-hover:text-white transition-colors drop-shadow-md">{cat.icon} //</span>
              <h3 className="font-mono text-sm font-bold uppercase tracking-widest text-foreground group-hover:text-white transition-colors mt-12 drop-shadow-md">{cat.title}</h3>
            </div>

            {/* Arrow indicator */}
            <div className="absolute bottom-8 right-8 opacity-100 lg:opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-300 z-10 text-white drop-shadow-md">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <main className="pt-16"> {/* Offset for fixed header */}
      <Hero />
      <Team />
      <Certifications />
      <Products />
      <Clients />
    </main>
  );
}

