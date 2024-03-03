"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
const Sidebar = styled.div`
  width: 300px;
  height: 100vh;
  background-color: #1d1d1d;
  padding: 20px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  overflow-y: auto;
  overflow-x: hidden;
  transition: all 0.5s;
`;
const SidebarHeaderMenu = styled.div`
  width: 100%;
`;
const MenuHeaderText = styled.h3`
  font-size: 20px;
  font-weight: 600;
  color: #eeeeee;
  padding:2px 0px
  width: 100%;

  margin-bottom: 12px;
`;
const MenuItems = styled.div<any>`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  align-items: center;
  border-radius: 8px;
  cursor: pointer;
  color: white;
  background: ${(props: any) => (props.$isOpen ? " #1a1a1a" : "")};
  transition: all 0.5s;
  &:hover {
    background-color: #1a1a1a;
    // background-color: red;
  }
`;
const MenuLink = styled(Link)<any>`
  display: flex;
  justify-content: space-between;
  padding: 12px;
  align-items: center;
  border-radius: 8px;
  cursor: pointer;
  color: white;
  transition: all 0.5s;
  background: ${(props: any) => (props.isOpen ? " #1a1a1a" : "")};
  &:hover {
    background-color: #1a1a1a;
  }
`;
const Menu = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  img: {
    width: 24px;
    height: 24px;
  }
`;
const MenuText = styled.span`
  color: white;
`;
const MenuIcon = styled.div`
  img {
    width: 24px;
    height: 24px;
  }
`;

const MenuContent = styled.div<any>`
  height: ${(props: any) =>
    props.$isOpen ? `${props.children.length * 45}px` : "0px"};
  overflow: hidden;
  transition: all 0.3s;
  display: flex;
  flex-direction: column;
  // justify-content: space-between;

  &:after {
    content: "";
    display: ${(props: any) =>
      props.children.length === 1 ? `none` : "block"};
    position: absolute;
    left: 42px;
    margin-top: 20px;
    border-left: 2px dotted gray;
    background-color: red;
    height: ${(props: any) => {
      let len = props.children.length - 1;
      return props.isOpen ? `${len * 44}px` : "0px";
    }}
`;
const SubmenuContent = styled(Link)<any>`
  display: flex;
  align-items: center;
  // gap: 12px;
  // margin: 6px 0px;
  color: white;
  padding: 10px 10px 10px 40px;
  // border: ${(props: any) => (props.$isActive ? "1px solid #333333" : "")};
  transition: all 0.5s;
  border-radius: 8px;
  background-color: ${(props: any) => (props.$isActive ? "#1a1a1a" : "")};

  &:hover {
    background-color: green;
  }
  &:before {
    content: "";
    display: ${(props: any) => (props.isChild > 1 ? `block` : `block`)};
    position: absolute;
    border-radius: 50%;
    left: ${(props: any) => (props.isActive ? "35px" : "39px")};
    z-index: 100;
    width: ${(props: any) => (props.isActive ? "15px" : "8px")};
    height: ${(props: any) => (props.isActive ? "15px" : "8px")};
    border: ${(props: any) => (props.isActive ? "green" : "white")} 2px solid;
    background-color: white;
  }
`;
const SubmenuContentText = styled.span<any>`
  margin-left: 20px;
  font-size: 16px;
  font-weight: 500;
  color: white;
`;
const MenuActiveIcon = styled.span`
  display: block;
  position: absolute;
  border-radius: 50%;
  width: 7px;
  height: 7px;
  background-color: white;
`;
export default function Home() {
  const [openSubmenu, setOpenSubmenu] = useState<any>({});

  const toggleSubmenu = (data: any) => {
    if (openSubmenu?.title == data?.title) {
      setOpenSubmenu(null);
    } else {
      setOpenSubmenu(data);
    }
  };
  let menubarItem: any = {
    mainMenu: {
      title: "Main Menu",
      menu: [
        {
          title: "Dashboard",
          icon: "/assets/home.svg",
          href: "/home",
          submenu: [],
        },
        {
          title: "Floating",
          icon: "/assets/home.svg",
          href: "/floating",
          submenu: [],
        },
      ],
    },
    essential: {
      title: "Essentials",
      menu: [
        {
          title: "Projects",
          icon: "/assets/home.svg",
          submenu: [
            {
              href: "/",
              title: "Add new",
              icon: "/assets/arrow.svg",
            },
            {
              href: "/home",
              title: "Add new",
              icon: "/assets/arrow.svg",
            },
            {
              href: "/home",
              title: "Add new",
              icon: "/assets/arrow.svg",
            },
          ],
        },
        {
          title: "Billing",
          icon: "/assets/home.svg",
          submenu: [
            {
              href: "/",
              title: "All",
              icon: "/assets/arrow.svg",
            },
          ],
        },
        {
          title: "Customers",
          icon: "/assets/home.svg",
          submenu: [
            {
              href: "/",
              title: "All",
              icon: "/assets/arrow.svg",
            },
          ],
        },
        {
          title: "Tutorials",
          icon: "/assets/home.svg",
          submenu: [
            {
              href: "/",
              title: "All",
              icon: "/assets/arrow.svg",
            },
          ],
        },
        {
          title: "Faqs",
          icon: "/assets/home.svg",
          submenu: [
            {
              href: "/",
              title: "All",
              icon: "/assets/arrow.svg",
            },
          ],
        },
        {
          title: "Servers",
          icon: "/assets/home.svg",
          submenu: [
            {
              href: "/",
              title: "All",
              icon: "/assets/arrow.svg",
            },
          ],
        },
        {
          title: "Database",
          icon: "/assets/home.svg",
          submenu: [
            {
              href: "/",
              title: "All",
              icon: "/assets/arrow.svg",
            },
          ],
        },
      ],
    },
    others: {
      title: "Other",
      menu: [
        {
          title: "Settings",
          icon: "/assets/home.svg",
          href: "/settings",
          submenu: [],
        },
        {
          title: "Profile",
          icon: "/assets/home.svg",
          href: "/profile",
          submenu: [],
        },
        {
          title: "Support Tickets",
          icon: "/assets/home.svg",
          href: "/",
          submenu: [],
        },
        {
          title: "Support Chart",
          icon: "/assets/home.svg",
          href: "/",
          submenu: [],
        },
        {
          title: "Support Call",
          icon: "/assets/home.svg",
          href: "/",
          submenu: [],
        },
        {
          title: "Contact Us",
          icon: "/assets/home.svg",
          href: "/",
          submenu: [],
        },
      ],
    },
  };
  const ref = useRef(null);

  const pathname: any = usePathname();
  let isOpen: any;
  return (
    <Sidebar>
      {Object.keys(menubarItem).map((item, index) => (
        <SidebarHeaderMenu key={index}>
          <MenuHeaderText> {menubarItem[item]?.title}</MenuHeaderText>
          {menubarItem[item]?.menu?.map((menu: any, menuIndex: any) =>
            !menu?.href ? (
              <div key={menuIndex}>
                <MenuItems
                  onClick={() => toggleSubmenu(menu)}
                  $isOpen={openSubmenu?.title === menu?.title ? true : false}>
                  <Menu>
                    <Image
                      src="/assets/home.svg"
                      width={24}
                      height={24}
                      alt=""
                    />
                    <MenuText> {menu?.title}</MenuText>
                  </Menu>
                  {menu?.submenu?.length ? (
                    <MenuIcon>
                      <Image
                        src={` ${
                          openSubmenu?.title === menu?.title
                            ? "/assets/arrowDown.svg"
                            : "/assets/arrow.svg"
                        }`}
                        width={24}
                        height={24}
                        alt=""
                      />
                    </MenuIcon>
                  ) : (
                    ""
                  )}
                </MenuItems>
                <MenuContent $isOpen={openSubmenu?.title === menu?.title}>
                  {openSubmenu?.title === menu?.title &&
                    openSubmenu?.submenu?.map(
                      (submenu: any, submenuIndex: any) => (
                        <SubmenuContent
                          ref={ref}
                          $isChild={openSubmenu?.submenu?.length}
                          key={submenuIndex}
                          href={submenu?.href}
                          isActive={pathname === submenu?.href ? true : false}>
                          {/* {pathname === submenu?.href && (
                            <MenuActiveIcon> </MenuActiveIcon>
                          )} */}
                          <SubmenuContentText
                            $isActive={
                              pathname === submenu?.href ? true : false
                            }>
                            {submenu?.title}{" "}
                          </SubmenuContentText>
                        </SubmenuContent>
                      )
                    )}
                </MenuContent>
              </div>
            ) : (
              <MenuLink
                href={menu?.href}
                key={menuIndex}
                $isOpen={openSubmenu?.title === menu?.title ? true : false}>
                <Menu>
                  <Image src="/assets/home.svg" width={24} height={24} alt="" />
                  <MenuText> {menu?.title}</MenuText>
                </Menu>
              </MenuLink>
            )
          )}
        </SidebarHeaderMenu>
      ))}
    </Sidebar>
  );
}
