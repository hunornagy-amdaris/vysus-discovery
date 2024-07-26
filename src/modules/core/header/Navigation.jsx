import React from "react";
import Image from "next/image";
import logo from "@/assets/logo.png";
import Link from "next/link";

const Navigation = () => {
  return (
    <nav className={"py-12 px-7 flex justify-between"}>
      <Link href={"/"}>
        <Image src={logo} width={150} alt={"Logo"} />
      </Link>

      <ul className={"text-white"}>
        <li className={"inline-block mx-2"}>
          <Link
            href={"/"}
            className={
              "text-white hover:text-emerald-500 transition duration-300"
            }
          >
            Home
          </Link>
        </li>
        <li className={"inline-block mx-2"}>
          <Link
            href={"/planner"}
            className={
              "text-white hover:text-emerald-500 transition duration-300"
            }
          >
            Planner
          </Link>
        </li>
        <li className={"inline-block mx-2"}>
          <Link
            href={"/"}
            className={
              "text-white hover:text-emerald-500 transition duration-300"
            }
          >
            Login
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
