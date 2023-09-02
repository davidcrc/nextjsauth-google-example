import React from "react";
import {
  Navbar as NavbarUI,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/navbar";
import { Link } from "@nextui-org/link";
import Login from "./Login";

const Navbar = () => {
  return (
    <NavbarUI className="dark text-white">
      <NavbarBrand>
        <Link className="font-bold text-inherit " href="/" aria-current="page">
          NextGoogle Auth
        </Link>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem isActive>
          <Link href="/dashboard" aria-current="page">
            Dashboard
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <Login />
      </NavbarContent>
    </NavbarUI>
  );
};

export default Navbar;
