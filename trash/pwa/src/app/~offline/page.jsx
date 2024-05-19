import Image from "next/image";
import React from "react";
// import styles from "./about.module.css"

const FallbackPage = () => {
    return (
        <div>
            <span>Offline!</span>
            <div>
                <Image src="/images/about.png" alt="" width={500} height={500}></Image>
            </div>
        </div>
    )
};

export default FallbackPage;