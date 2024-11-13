"use client";
import Image from "next/image";
import { useRouter } from "next/router";
import image1 from "@/assets/images/image1.jpg";
import image2 from "@/assets/images/image2.jpg";
import image3 from "@/assets/images/image3.jpg";
import image4 from "@/assets/images/image4.jpg";
import image5 from "@/assets/images/image5.jpg";
import image6 from "@/assets/images/image6.jpg";
import image7 from "@/assets/images/image7.jpg";
import image8 from "@/assets/images/image8.jpg";
import image9 from "@/assets/images/image9.jpg";
import image10 from "@/assets/images/image10.jpg";
import image11 from "@/assets/images/image11.jpg";
import galleryStyles from "../gallery.module.css";

const normalImages = [image1, image2, image3, image7];
const singleImages = [image5, image6];
const redImages = [image4, image8];
const diagrams = [image9, image10, image11];

export default function GalleryByCategory({ params }) {
  const { slug } = params;

  const imageGroups = {
    normal: normalImages,
    red: redImages,
    single: singleImages,
    diagrams: diagrams,
  };

  const selectedImages = imageGroups[slug] || [];

  return (
    <div className={galleryStyles.galleryContainer}>
        <div className={galleryStyles.catHeader}>
            <h1>{slug.charAt(0).toUpperCase() + slug.slice(1)} Images</h1>
            <a className={galleryStyles.backLink} href="/gallery">Return To Gallery --&gt;</a>
        </div>
      
      <div >
        <div className={galleryStyles.catRow}>
          {selectedImages.map((img, index) => (
            <Image
              className={galleryStyles.img}
              key={index}
              src={img}
              alt={`${slug} image ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
