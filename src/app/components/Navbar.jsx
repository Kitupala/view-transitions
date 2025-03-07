"use client";

import Link from "next/link";
import { useTransitionRouter } from "next-view-transitions";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const router = useTransitionRouter();
  const currentPath = usePathname();

  function slideInOut() {
    document.documentElement.animate(
      [
        {
          opacity: 1,
          transform: "translateY(0)",
        },
        {
          opacity: 0.2,
          transform: "translateY(-35%)",
        },
      ],
      {
        duration: 1000,
        easing: "cubic-bezier(0.87, 0, 0.13, 1)",
        fill: "forwards",
        pseudoElement: "::view-transition-old(root)",
      },
    );

    document.documentElement.animate(
      [
        {
          clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
        },
        {
          clipPath: "polygon(0% 100%, 100% 100%, 100% 0, 0% 0%)",
        },
      ],
      {
        duration: 1000,
        easing: "cubic-bezier(0.87, 0, 0.13, 1)",
        fill: "forwards",
        pseudoElement: "::view-transition-new(root)",
      },
    );
  }

  const handleClick = (href, e) => {
    if (currentPath === href) {
      e.preventDefault();
      return;
    }

    e.preventDefault();
    router.push(href, {
      onTransitionReady: slideInOut,
    });
  };

  return (
    <nav className="fixed top-0 left-0 w-full p-7 flex justify-between items-center z-10">
      <div className="logo">
        <div className="nav-link">
          <Link href="/" onClick={(e) => handleClick("/", e)}>
            Index
          </Link>
        </div>
      </div>
      <div className="flex gap-8">
        <div className="nav-link">
          <Link href="/services" onClick={(e) => handleClick("/services", e)}>
            Services
          </Link>
        </div>
        <div className="nav-link">
          <Link href="/projects" onClick={(e) => handleClick("/projects", e)}>
            Projects
          </Link>
        </div>
        <div className="nav-link">
          <Link href="/info" onClick={(e) => handleClick("/info", e)}>
            Info
          </Link>
        </div>
        <div className="nav-link">
          <Link href="/lorem" onClick={(e) => handleClick("/lorem", e)}>
            Lorem
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
