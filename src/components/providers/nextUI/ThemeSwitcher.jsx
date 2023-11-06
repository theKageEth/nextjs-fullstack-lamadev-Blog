"use client";
import { FaMoon, FaSun } from "react-icons/fa";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Button, ButtonGroup } from "@nextui-org/button";

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <ButtonGroup>
      <Button
        isIconOnly
        color="primary"
        variant="ghost"
        onClick={() => setTheme("light")}
      >
        <FaSun />
      </Button>
      <Button
        isIconOnly
        color="secondary"
        variant="ghost"
        onClick={() => setTheme("dark")}
      >
        <FaMoon />
      </Button>
    </ButtonGroup>
  );
}
