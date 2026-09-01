"use client";

import { useState } from "react";
import { Menu, X, ChevronDown, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";

export const navData = [
  { title: "HOME", href: "/" },
  { 
    title: "ABOUT US", href: "/about-us",
    submenu: [
      { title: "OEL Team", href: "/about-us/oel-team" },
      { title: "Company Profile", href: "/about-us/company-profile" }
    ]
  },
  {
    title: "PRODUCTS", href: "/products",
    submenu: [
      {
        title: "Fire Safety", href: "/product-category/fire-safety",
        submenu: [
          { title: "Fire Retardant Paint", href: "/product/fire-retardant-paint" },
          {
            title: "Fire Alarm System", href: "/product-category/fire-safety/fire-alarm-system",
            submenu: [
              { title: "FACP", href: "/product-category/fire-safety/fire-alarm-system/facp" },
              { title: "Smoke Detector", href: "/product-category/fire-safety/fire-alarm-system/smoke-detector" },
              { title: "Heat Detector", href: "/product-category/fire-safety/fire-alarm-system/heat-detector" },
              { title: "Multi Detector", href: "/product-category/fire-safety/fire-alarm-system/multi-detector" },
              { title: "Beam Detector", href: "/product-category/fire-safety/fire-alarm-system/beam-detector" },
              { title: "Dust Detector", href: "/product-category/fire-safety/fire-alarm-system/dust-detector" },
              { title: "Manual Call Point (MCP)", href: "/product-category/fire-safety/fire-alarm-system/manual-call-point" },
              { title: "Horn/ Sounder", href: "/product-category/fire-safety/fire-alarm-system/horn-sounder-fire-alarm-system" },
              { title: "Horn with Strobe", href: "/product-category/fire-safety/fire-alarm-system/horn-strobe" },
              { title: "Input Module", href: "/product-category/fire-safety/fire-alarm-system/input-module" },
              { title: "Output Module", href: "/product-category/fire-safety/fire-alarm-system/output-module" },
              { title: "Fault Isolator Module", href: "/product-category/fire-safety/fire-alarm-system/fault-isolator-module" },
              { title: "Power Supply", href: "/product-category/fire-safety/fire-alarm-system/power-supply" },
              { title: "1.5 RM Fire Cable", href: "/product-category/fire-safety/fire-alarm-system/1-5-rm-fire-rated-cable" },
              { title: "2.5 RM Fire Cable", href: "/product-category/fire-safety/fire-alarm-system/2-5-rm-fire-rated-cable" }
            ]
          },
          {
            title: "Standpipe & Hose", href: "/product-category/fire-safety/standpipe-hose-pipe",
            submenu: [
              { title: "Stand Pipe", href: "/product/stand-pipe" },
              { title: "Fire Hose Pipe", href: "/product/fire-hose-pipe" }
            ]
          },
          {
            title: "Fire Pump", href: "/product-category/fire-safety/fire-pump",
            submenu: [
              { title: "Electric Fire Pump", href: "/product/electric-fire-pump" },
              { title: "Diesel Fire Pump", href: "/product/diesel-engine-fire-pump" },
              { title: "Jockey Fire Pump", href: "/product/jockey-fire-pump" }
            ]
          },
          { title: "Valve & Accessories", href: "/product-category/fire-safety/valve-accessories" },
          { title: "Fire Sprinkler", href: "/product-category/fire-safety/fire-sprinkler" },
          { title: "Fire Suppression", href: "/product-category/fire-safety/fire-suppression-system" },
          { title: "Fire Extinguisher", href: "/product-category/fire-safety/fire-extinguisher" },
          { title: "Fire Separation", href: "/product-category/fire-safety/fire-separation-penetration" },
          { title: "Fire Door", href: "/product-category/fire-safety/fire-door-accessories" }
        ]
      },
      {
        title: "Electrical System", href: "/product-category/electrical-system",
        submenu: [
          { title: "Circuit Breaker", href: "/product-category/electrical-system/circuit-breaker" },
          { title: "Magnetic Contactor", href: "/product-category/electrical-system/magnetic-contactor" },
          { title: "Thermal Relay", href: "/product-category/electrical-system/thermal-overload-relay" },
          { title: "Sensors", href: "/product-category/electrical-system/sensors" },
          { title: "Controller", href: "/product-category/electrical-system/controller" },
          { title: "Motion Devices", href: "/product-category/electrical-system/motion-devices" },
          { title: "Inverter Drive", href: "/product-category/electrical-system/inverter-frequency-drive" },
          { title: "PLC", href: "/product-category/electrical-system/plc" },
          { title: "Soft Starter", href: "/product-category/electrical-system/soft-starter" },
          { title: "Solar Energy", href: "/product-category/electrical-system/solar-energy" }
        ]
      },
      { title: "MEP", href: "/product-category/mep" },
      { title: "HVAC", href: "/product-category/hvac" },
      { title: "Boiler", href: "/product-category/boiler" },
      { title: "Energy", href: "/product-category/energy" },
      { title: "Civil Construction", href: "/product-category/civil-construction" }
    ]
  },
  {
    title: "SERVICES", href: "/services",
    submenu: [
      { title: "Design & Drawing", href: "/services/design-drawing" },
      { title: "Consultancy", href: "/services/consultancy" },
      { title: "Supply Products", href: "/services/supply-standard-listed-products" },
      { title: "Installation", href: "/services/installation" },
      { title: "Testing", href: "/services/testing-commissioning" },
      { title: "Approval Support", href: "/services/approval-support" },
      { title: "Re-Installation", href: "/services/re-installation-of-any-system" },
      { title: "Maintenance", href: "/services/maintenance-services" }
    ]
  },
  { title: "PROJECTS", href: "/projects" },
  { title: "CLIENTS", href: "/clients" },
  { title: "NEWS & EVENTS", href: "/news-events" }
];

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function renderMenu(items: any[], depth = 0) {
  return (
    <ul className={cn(
      "flex", 
      depth === 0 ? "flex-row h-full items-center" : "hidden peer-hover:flex hover:flex flex-col absolute bg-white border border-black/10 shadow-xl py-2 z-50",
      depth > 1 ? "left-full top-0 -ml-px min-w-[240px]" : depth === 1 ? "left-0 top-full min-w-[240px]" : ""
    )}>
      {items.map((item, idx) => (
        <li key={idx} className={cn("relative h-full flex items-center", depth > 0 && "h-auto block")}>
          <Link 
            href={item.href} 
            className={cn(
              "peer flex items-center justify-between transition-colors uppercase font-mono tracking-wider w-full",
              depth === 0 
                ? "text-[11px] font-bold text-foreground px-4 h-full hover:bg-black/5" 
                : "px-4 py-3 text-[11px] font-bold text-foreground hover:bg-accent-brand hover:text-white"
            )}
          >
            {item.title}
            {item.submenu && depth === 0 && <ChevronDown className="w-3 h-3 ml-1" />}
            {item.submenu && depth > 0 && <ChevronRight className="w-3 h-3 ml-1" />}
          </Link>
          {item.submenu && renderMenu(item.submenu, depth + 1)}
        </li>
      ))}
    </ul>
  );
}

// Interactive Mobile Menu Item component
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function MobileMenuItem({ item, depth = 0 }: { item: any, depth?: number }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const hasSubmenu = item.submenu && item.submenu.length > 0;

  return (
    <li className="w-full flex flex-col border-b border-black/10 last:border-0">
      <div className="flex items-center justify-between hover:bg-black/5 relative">
        <Link 
          href={item.href} 
          className={cn(
            "py-4 px-6 font-mono uppercase tracking-wider font-bold text-foreground flex-1 pr-16",
            depth === 0 ? "text-sm" : "text-xs"
          )}
        >
          {item.title}
        </Link>
        {hasSubmenu && (
          <button 
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setIsExpanded((prev) => !prev);
            }}
            className="absolute right-0 top-0 bottom-0 w-16 flex items-center justify-center text-foreground hover:bg-black/10 transition-colors z-10"
            aria-expanded={isExpanded}
          >
            {isExpanded ? <ChevronDown className="w-6 h-6 text-accent-brand" /> : <ChevronRight className="w-6 h-6" />}
          </button>
        )}
      </div>
      {hasSubmenu && isExpanded && (
        <div className="bg-black/5 border-t border-black/5 animate-in slide-in-from-top-1">
          <ul className="flex flex-col w-full pl-2 border-l border-accent-brand/20 ml-2">
            {item.submenu.map((subItem: any, idx: number) => (
              <MobileMenuItem key={idx} item={subItem} depth={depth + 1} />
            ))}
          </ul>
        </div>
      )}
    </li>
  );
}

// Mobile rendering is now an interactive accordion
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function renderMobileMenu(items: any[]) {
  return (
    <ul className="flex flex-col w-full pb-4">
      {items.map((item, idx) => (
        <MobileMenuItem key={idx} item={item} />
      ))}
    </ul>
  );
}

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDesktopSidebarOpen, setIsDesktopSidebarOpen] = useState(false);

  return (
    <>
    <header className="fixed top-0 left-0 right-0 z-50 bg-background border-b border-black/10 h-16 flex">
      {/* Logo Area */}
      <div className="w-64 h-full grid-border-r flex items-center px-6 shrink-0 bg-white relative">
        <div className="absolute top-0 right-0 w-1 h-1 bg-accent-brand"></div>
        <Link href="/">
          <img 
            src="https://oel.com.bd/wp-content/uploads/2022/02/oel-logo-2022.png" 
            alt="Optimum Engineers Ltd." 
            className="h-8 object-contain"
          />
        </Link>
      </div>

      {/* Navigation Area */}
      <div className="flex-1 h-full flex items-center bg-white/50 backdrop-blur-md">
        <nav className="hidden lg:flex items-center h-full">
          {renderMenu(navData)}
        </nav>
      </div>

      {/* CTA Area */}
      <div className="hidden md:flex h-full shrink-0">
        <Link href="/contact-us" className="h-full flex items-center justify-center px-8 font-mono text-xs font-bold uppercase tracking-wider bg-background hover:bg-black/5 transition-colors grid-border-l">
          Contact Us
        </Link>
        <button 
          onClick={() => setIsDesktopSidebarOpen(true)}
          className="h-full w-16 bg-foreground text-white flex items-center justify-center hover:bg-black/80 transition-colors"
        >
          <Menu className="w-6 h-6" />
        </button>
      </div>

      {/* Mobile Menu Toggle */}
      <button className="md:hidden h-full w-16 bg-foreground text-white flex items-center justify-center ml-auto border-l border-black/10" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Mobile Menu Drawer */}
      {isOpen && (
        <div className="absolute top-16 left-0 right-0 max-h-[calc(100vh-64px)] overflow-y-auto bg-white border-b border-black/10 shadow-2xl flex flex-col md:hidden animate-in slide-in-from-top-4">
          {renderMobileMenu(navData)}
        </div>
      )}
    </header>

    {/* Desktop Offcanvas Sidebar Overlay */}
    {isDesktopSidebarOpen && (
      <div 
        className="fixed inset-0 z-[60] bg-black/20 backdrop-blur-sm transition-opacity hidden md:block"
        onClick={() => setIsDesktopSidebarOpen(false)}
      ></div>
    )}

    {/* Desktop Offcanvas Sidebar Panel */}
    <div 
      className={cn(
        "fixed top-0 right-0 h-full w-[400px] bg-white z-[70] shadow-2xl transition-transform duration-500 ease-in-out hidden md:flex flex-col border-l border-black/10",
        isDesktopSidebarOpen ? "translate-x-0" : "translate-x-full"
      )}
    >
      <div className="flex items-center justify-between p-6 border-b border-black/10 h-16 shrink-0">
        <span className="font-mono text-xs uppercase font-bold tracking-widest text-foreground">Optimum Engineers</span>
        <button 
          onClick={() => setIsDesktopSidebarOpen(false)}
          className="p-2 hover:bg-black/5 transition-colors grid-border-x grid-border-t grid-border-b bg-background"
        >
          <X className="w-4 h-4 text-foreground" />
        </button>
      </div>
      <div className="p-8 flex flex-col gap-10 overflow-y-auto">
        <div>
          <h3 className="font-mono text-xs uppercase tracking-widest text-accent-brand mb-4">About Us</h3>
          <p className="text-foreground-muted leading-relaxed text-sm">
            Optimum Engineers Ltd. is a leading engineering, consulting, and contracting company in Bangladesh, specializing in Fire Safety, Electrical Systems, HVAC, and MEP solutions.
          </p>
        </div>
        <div>
          <h3 className="font-mono text-xs uppercase tracking-widest text-accent-brand mb-4">Contact Info</h3>
          <ul className="flex flex-col gap-6 text-foreground text-sm">
            <li className="flex flex-col gap-1">
              <span className="font-bold">Address</span>
              <span className="text-foreground-muted">House: 02, Road: 04, Block: A<br/>Section: 10, Mirpur, Dhaka-1216</span>
            </li>
            <li className="flex flex-col gap-1">
              <span className="font-bold">Phone</span>
              <span className="text-foreground-muted">+880 1713 039 333<br/>+880 1713 039 334</span>
            </li>
            <li className="flex flex-col gap-1">
              <span className="font-bold">Email</span>
              <a href="mailto:info@oel.com.bd" className="text-foreground-muted hover:text-accent-brand transition-colors">info@oel.com.bd</a>
            </li>
          </ul>
        </div>
        <div className="mt-auto pt-8 border-t border-black/10">
          <Link 
            href="/contact-us" 
            onClick={() => setIsDesktopSidebarOpen(false)}
            className="w-full py-4 bg-foreground text-white font-mono text-sm uppercase tracking-wider font-bold flex items-center justify-center hover:bg-accent-brand transition-colors"
          >
            Get a Quote
          </Link>
        </div>
      </div>
    </div>
    </>
  );
}
