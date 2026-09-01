"use client";

import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-foreground text-white border-t border-black/10 mt-auto">
      <div className="grid grid-cols-1 lg:grid-cols-4 max-w-7xl mx-auto">
        <div className="col-span-1 lg:col-span-1 p-12 border-b lg:border-b-0 lg:border-r border-white/10">
           <img src="https://oel.com.bd/wp-content/uploads/2022/02/oel-logo-2022.png" alt="OEL" className="h-10 mb-8 bg-white p-2" />
           <p className="font-mono text-xs leading-relaxed text-white/50 uppercase tracking-wider">
             Top leading Engineering Firm in Bangladesh and suppliers of top-tier electrical system, MEP, HVAC, Boiler, firefighting equipment.
           </p>
        </div>
        <div className="col-span-1 lg:col-span-1 p-12 border-b lg:border-b-0 lg:border-r border-white/10">
          <h4 className="font-mono text-sm font-bold uppercase tracking-widest mb-8 text-accent-brand">Contact</h4>
          <ul className="space-y-4 font-mono text-xs uppercase tracking-wider text-white/70">
            <li>Mirpur-2, Dhaka-1216.</li>
            <li>01712003246</li>
            <li>info@oel.com.bd</li>
          </ul>
        </div>
        <div className="col-span-1 lg:col-span-2 p-12 flex flex-col justify-between">
          <div>
            <h4 className="font-mono text-sm font-bold uppercase tracking-widest mb-8 text-accent-brand">Standards</h4>
            <div className="flex gap-4 flex-wrap opacity-70 grayscale hover:grayscale-0 transition-all">
               <img src="https://oel.com.bd/wp-content/uploads/2021/02/01.png" alt="ASHRAE" className="h-8 bg-white p-1" />
               <img src="https://oel.com.bd/wp-content/uploads/2021/02/02.png" alt="NFPA" className="h-8 bg-white p-1" />
               <img src="https://oel.com.bd/wp-content/uploads/2021/02/06.png" alt="ISO" className="h-8 bg-white p-1" />
            </div>
          </div>
          <div className="mt-16 font-mono text-[10px] uppercase tracking-widest text-white/30 border-t border-white/10 pt-4">
             Copyrighted © {new Date().getFullYear()} OEL. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
