"use client";
import { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import AsideBar from "./AsideBar";
import LayoutNavbar from "./LayoutNavbar";

/* eslint-disable @typescript-eslint/no-explicit-any */
const Layout = ({ children }: any) => {
  const [isOpen, setIsOpen] = useState(true);

  // Check for desktop devices (1180px and above)
  const isDesktop = useMediaQuery({ query: "(min-width: 1180px)" });

  useEffect(() => {
    // Automatically set sidebar state based on device type
    if (!isDesktop) {
      setIsOpen(false); // Collapse sidebar on smaller screens
    }
  }, [isDesktop]);

  return (
    <div
      className={`footer-offset demo footer-offset has-navbar-vertical-aside navbar-vertical-aside-show-xl ${
        isDesktop
          ? isOpen
            ? "" // Full sidebar
            : "navbar-vertical-aside-mini-mode" // Mini sidebar on desktop
          : isOpen
          ? "" // Sidebar visible on mobile
          : "navbar-vertical-aside-closed-mode" // Sidebar hidden on mobile
      }`}
    >
      {/* Navbar */}
      <LayoutNavbar toggleSidebar={() => setIsOpen(!isOpen)} />

      {/* Sidebar */}
      <AsideBar toggleSidebar={() => setIsOpen(!isOpen)} />

      {/* Main Content */}
      <div className="main pointer-event">{children}</div>
    </div>
  );
};

export default Layout;
