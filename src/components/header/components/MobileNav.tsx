"use client";
import {
  Box,
  Button,
  List,
  ListItemButton,
  ListItemText,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";

import {
  burgerButtonStyles,
  burgerIconStyles,
  burgerWrapStyles,
} from "../../../styles/headerStyles";

const MobileNav = () => {
  const [burgerClicked, setBurgerClicked] = useState<boolean>(false);
  const burger = useRef<HTMLHeadingElement>(null);
  const router = useRouter();
  const isMobile = useMediaQuery("(max-width: 600px)");
  const handleBurgerButtonClick = () => {
    burgerClicked ? setBurgerClicked(false) : setBurgerClicked(true);
  };
  const pathname = usePathname();

  useEffect(() => {
    const handleClickOutside = (event: Event) => {
      if (
        burger.current != null &&
        !burger.current.contains(event.target as HTMLInputElement)
      ) {
        setBurgerClicked(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [burger]);

  useEffect(() => {
    setBurgerClicked(false);
  }, [pathname]);

  if (!isMobile) {
    return null;
  }

  return (
    <Box ref={burger} display="block">
      <Box sx={burgerWrapStyles}>
        <Box sx={burgerIconStyles}>
          <Button onClick={handleBurgerButtonClick} sx={burgerButtonStyles}>
            <MenuIcon sx={{ fontSize: 30 }} />
          </Button>
        </Box>
      </Box>
      {burgerClicked && (
        <Box mt={6}>
          <List>
            <ListItemButton
              onClick={() => {
                router.push("/");
              }}
            >
              <ListItemText primary="Home" />
            </ListItemButton>
            <ListItemButton
              onClick={() => {
                router.push("/about");
              }}
            >
              <ListItemText primary="About" />
            </ListItemButton>
          </List>
        </Box>
      )}
    </Box>
  );
};

export default MobileNav;
