import React from "react";
import Link from "next/link";

type props = {
  title: string;
  link: string;
};

const NavLink = ({ title, link }: props) => {
  return (
    <Link
      href={link}
      className=" w-full p-1 pb-0 flex justify-end items-center text-[16px] text-background hover:text-secondary duration-300 ease-in-out font-grandstander-medium_500 leading-normal  whitespace-nowrap capitalize"
    >
      {title}
    </Link>
  );
};

export default NavLink;
