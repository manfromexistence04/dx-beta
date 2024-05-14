"use client";
import { useState } from "react";
import styles from "./links.module.css";
import NavLink from "./navlink/navlink";

const Links = () => {


    const links = [
        {
            title: "Home",
            path: "/",
        },
        {
            title: "Services",
            path: "/services",
        },
        {
            title: "Tools",
            path: "/tools",
        },
        {
            title: "Appointments",
            path: "/appointments",
        },
        {
            title: "Blog",
            path: "/blog",
        },
        {
            title: "About",
            path: "/about",
        },
        {
            title: "Contact",
            path: "/contact",
        }
    ];

    const [open, setOpen] = useState(false)

    // Temporary
    const session = true;
    const isAdmin = true;

    return (
        <div className={styles.container}>
            <div className={styles.links}>
                {links.map((link) => (
                    <NavLink item={link} key={link.path}></NavLink>
                ))}
                {session ? (
                    <>
                        {isAdmin ? (
                            <NavLink item={{ title: "Admin", path: "/admin" }} />
                        ) : (
                            <NavLink item={{ title: "Account", path: "/account" }} />
                        )}
                        <button className={styles.logout}>Logout</button>
                    </>
                ) : (
                    <NavLink item={{ title: "Login", path: "/login" }} />
                )}
            </div>
            <button className={styles.menuButton} onClick={() => setOpen((prev) => !prev)}>Menu</button>
            {open && <div className={styles.mobileLinks}>
                {links.map((link) => (
                    <NavLink item={link} key={link.path}></NavLink>
                ))}
            </div>
            }
        </div>
    );
};

export default Links;
