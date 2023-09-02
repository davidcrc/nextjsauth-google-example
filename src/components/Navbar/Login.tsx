"use client";

import React from "react";
import { NavbarItem } from "@nextui-org/navbar";
import { Link } from "@nextui-org/link";
import { Button } from "@nextui-org/button";
import { signIn, signOut, useSession } from "next-auth/react";
import { Image } from "@nextui-org/react";

const Login = () => {
  const { data: session } = useSession();

  console.log("ss", session);

  return (
    <>
      {session?.user ? (
        <NavbarItem className="lg:flex items-center justify-center">
          <p>{session.user.name}</p>
          {session.user.image && (
            <Image
              src={session.user.image}
              width={24}
              height={24}
              alt="avatar"
            />
          )}
          <Button
            as={Link}
            color="primary"
            href="#"
            variant="light"
            onClick={async () =>
              signOut({
                callbackUrl: "/",
              })
            }
          >
            Sign Out
          </Button>
        </NavbarItem>
      ) : (
        <>
          <NavbarItem className="hidden lg:flex">
            <Button
              as={Link}
              color="primary"
              href="#"
              variant="light"
              onClick={() => signIn()}
            >
              Sign In
            </Button>
          </NavbarItem>
          <NavbarItem>
            <Button as={Link} color="primary" href="#" variant="flat">
              Sign Up
            </Button>
          </NavbarItem>
        </>
      )}
    </>
  );
};

export default Login;
