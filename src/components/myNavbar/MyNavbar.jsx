"use client";
import { useState } from "react";
import { ThemeSwitcher } from "../providers/nextUI/ThemeSwitcher";
import NextLink from "next/link";
import NextImage from "next/image";
import { Link } from "@nextui-org/link";
import { Image } from "@nextui-org/image";
import { signIn, signOut, useSession } from "next-auth/react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/navbar";

const MyNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const session = useSession();

  return (
    <Navbar
      classNames={{ base: "bg-violet-100 dark:bg-violet-900" }}
      isBordered
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent className="sm:hidden">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
      </NavbarContent>

      <NavbarContent>
        <NavbarBrand>
          <Link as={NextLink} href="/">
            <Image
              as={NextImage}
              priority={true}
              isZoomed
              width={75}
              height={50}
              src="/image/logo.png"
              alt="NextUI Fruit Image with Zoom"
            />
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4">
        <NavbarItem>
          <ThemeSwitcher></ThemeSwitcher>
        </NavbarItem>
        <NavbarItem>
          <Link as={NextLink} isBlock color="foreground" href="/">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link as={NextLink} color="foreground" href="/portfolio">
            Portfolio
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link as={NextLink} color="foreground" href="/blog">
            Blog
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link as={NextLink} color="foreground" href="/about">
            About
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link as={NextLink} isBlock color="warning" href="/contact">
            Contact
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link as={NextLink} isBlock color="success" href="/dashboard">
            Dashboard
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link as={NextLink} isBlock color="success" href="/dashboard/login">
            login
          </Link>
        </NavbarItem>
        {session.status === "authenticated" && (
          <NavbarItem>
            <button onClick={signOut}>signout</button>
          </NavbarItem>
        )}
      </NavbarContent>

      <NavbarMenu>
        <NavbarMenuItem>
          <Link as={NextLink} color="foreground" href="/portfolio">
            Portfolio
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link as={NextLink} isBlock color="warning" href="/contact">
            Contact
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link as={NextLink} isBlock color="success" href="/dashboard">
            Dashboard
          </Link>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
};

export default MyNavbar;
