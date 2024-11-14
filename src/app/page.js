import Image from "next/image";
import styles from "./page.module.css";
import Background from "../assets/images/Background.png";
import Leaf1 from "../assets/images/Layer1.png";
import Leaf2 from "../assets/images/Layer2.png";
import image1 from "@/assets/images/image1.jpg";
import image2 from "@/assets/images/image2.jpg";
import image3 from "@/assets/images/image3.jpg";
import galleryStyles from "./gallery/gallery.module.css";
export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.hero}>
        <h1>Ghost Pipes</h1>
        <div className={styles.container}>
          <Image src={Background} alt="Ghost Pipes" width={400} height={300} />
          <Image
            className={styles.leaf1}
            src={Leaf1}
            alt="Ghost Pipes"
            width={50}
          />
          <Image
            className={styles.leaf2}
            src={Leaf2}
            alt="Ghost Pipes"
            width={40}
          />
        </div>

        <div className={styles.galleryPreview}></div>
        <h3>Gallery Preview:</h3>
        <div className={galleryStyles.imgRow}>
          <div className={galleryStyles.img}>
            <Image
              src={image1}
              alt="A bunch of Ghost Pipes"
              // height={200}
              // width={200}
              // objectFit="contain"
              // layout="fill"
            />
          </div>
          <div className={galleryStyles.img}>
            <Image
              src={image2}
              alt="A Closeup of a Ghost Pipe Plant"
              // height={200}
              // width={200}
              // objectFit="contain"
              // layout="fill"
            />
          </div>
          <div className={galleryStyles.img}>
            <Image
              src={image3}
              alt="Low Angle Shot!"
              // height={200}
              // width={200}
              // objectFit="contain"
              // layout="fill"
            />{" "}
          </div>
        </div>
        <a className={styles.galleryLink} href="/gallery">Visit the Gallery</a>
      </div>
    </main>
  );
}
