import Image from "next/image";
import styles from "./page.module.css";
import Background from "../assets/images/Background.png";
import Leaf1 from "../assets/images/Layer1.png";
import Leaf2 from "../assets/images/Layer2.png";
export default function Home() {
  return (
    
    <main className={styles.main}>
      <div className={styles.hero}>
      <h1>Ghost Pipes</h1>
      <div className={styles.container}>
      <Image src={Background} alt="Ghost Pipes" width={400} height={300} />
      <Image className={styles.leaf1} src={Leaf1} alt="Ghost Pipes" width={50} />
      <Image className={styles.leaf2} src={Leaf2} alt="Ghost Pipes" width={40} />
      </div>

      </div>
    </main>
  );
}
