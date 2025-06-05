'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const Navbar = () => {
  const pathname = usePathname();

  const linkStyle = (path: string) =>
    `tab-hover text-white me-3 ${pathname === path ? 'active-tab fw-bold' : ''}`;

  return (
    <>
      <nav className="navbar navbar-expand-lg py-2" style={{ backgroundColor: "#0057b8" }}>
        <div className="container">
          <a className="navbar-brand fw-bold text-white" href="#">
            GANAPATHI TRAVELS
          </a>
          <div className="ms-auto d-flex align-items-center">
            <a href="#" className="text-white me-3 p-2">🌐 English (US)</a>
            <a href="#" className="text-white me-3 p-2">💵 INDIAN</a>
            <a href="#" className="text-white me-3 p-2">❓ Help</a>
            <a href="#" className="text-white me-3 p-2">🏠 List your property</a>
            <div className="p-2">
              <button className="btn btn-outline-light btn-sm me-2">Register</button>
              <button className="btn btn-outline-light btn-sm">Sign in</button>
            </div>
          </div>
        </div>
      </nav>

      <nav>
        <div className="container d-flex align-items-center py-2" style={{ backgroundColor: "#0057b8" }}>
          <Link href="/stays" className={linkStyle('/stays')}>🏨 Stays</Link>
          <Link href="/cars" className={linkStyle('/cars')}>🚗 Cars</Link>
          <Link href="/packages" className={linkStyle('/packages')}>🎟 Packages</Link>
          <Link href="/taxis" className={linkStyle('/taxis')}>🚕 Airport Taxis</Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
