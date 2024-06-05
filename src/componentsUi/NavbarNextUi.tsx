"use client";

import { usePathname } from "next/navigation";
import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Button,
} from "@nextui-org/react";
import { AcmeLogo } from "./AcmeLogo.jsx";
import ThemeSwitcher from "@/app/components/ThemeSwitcher";
import UserTime from "@/app/components/UserTime";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const pathname = usePathname();

  return (
    <Navbar maxWidth="full">
      <NavbarContent>
        <NavbarBrand>
          <AcmeLogo />
          <Link className="pe-5 text-black dark:text-white" href="/">
            Auto Holod
          </Link>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className=" flex items-center gap-5">
          <ThemeSwitcher />
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
