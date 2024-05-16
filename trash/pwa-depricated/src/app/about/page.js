import Image from "next/image";
import styles from "./about.module.css"

const AboutPage = () => {
    return (
    <div>
      <div className={styles.imgContainer}>
      <Image src="/images/about.png" alt="" width={500} height={500}></Image>
      </div>
    </div>
    )
  };
  
export default AboutPage;