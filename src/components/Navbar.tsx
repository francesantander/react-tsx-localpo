import React from "react";
import Logo from "../assets/relume.svg";
import { useDisclosure } from "@mantine/hooks";
import { Burger, Button, Drawer } from "@mantine/core";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  const [opened, { open, close }] = useDisclosure(false);

  const links = [
    {
      path: "/",
      title: "Home",
    },
    {
      path: "/find-jobs",
      title: "Find Jobs",
    },
    {
      path: "/post-job",
      title: "Post Job",
    },
    {
      path: "/about-us",
      title: "About Us",
    },
    {
      path: "/contact-us",
      title: "Contact Us",
    },
  ];

  return (
    <>
      <div className="w-full fixed top-0 bg-bgColor z-50">
        <div className="max-w-[85rem] mx-auto p-4 flex items-center justify-between">
          <div className="flex items-center gap-x-2">
            <img className="w-10" src={Logo} alt="Local Po" />
            <h1 className="font-black text-xl">LOCAL PO</h1>
          </div>
          <div>
            <Burger
              className="lg:hidden"
              opened={opened}
              onClick={open}
              aria-label="Toggle navigation"
            />
            <div className="hidden lg:flex lg:flex-row lg:gap-x-6">
              {links.map((item, index) => (
                <Link className="text-textGray" to={item.path} key={index}>
                  {item.title}
                </Link>
              ))}
            </div>
          </div>
          <div className="hidden lg:block">
            <Button>Sign In</Button>
            <Button variant="transparent">Employers</Button>
          </div>
        </div>
      </div>
      <Drawer opened={opened} onClose={close} title="Menu">
        <div className="flex flex-col gap-y-4 text-2xl">
          {links.map((item, index) => (
            <Link to={item.path} key={index}>
              {item.title}
            </Link>
          ))}
        </div>
        <div className="mt-10">
          <Button>Sign In</Button>
          <Button variant="transparent">Employers</Button>
        </div>
      </Drawer>
    </>
  );
};

export default Navbar;
