"use client";

import Link from "next/link";
import styles from "./navlink.module.css";
import { usePathname } from "next/navigation";

const NavLink = ({ item }) => {
  const pathName = usePathname();
  const isActive = pathName === item.path;

  return (
    <Link href={item.path} className={`${styles.container} ${isActive ? styles.active : ''}`}>{item.title}</Link>
  );
};

export default NavLink;
