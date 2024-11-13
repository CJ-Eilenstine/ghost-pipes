"use client";
import Image from "next/image";
import image1 from "@/assets/images/image1.jpg";
import image2 from "@/assets/images/image2.jpg";
import image3 from "@/assets/images/image3.jpg";
import image4 from "@/assets/images/image4.jpg";
import image5 from "@/assets/images/image5.jpg";
import image6 from "@/assets/images/image6.jpg";
import image7 from "@/assets/images/image7.jpg";
import image8 from "@/assets/images/image8.jpg";
import image9 from "@/assets/images/image9.jpg";
import galleryStyles from "./gallery.module.css";
import { useEffect, uses } from "react";

//Image Animation Lock Code (Prevents Multiple Animations from overlapping)

export default function Gallery() {
  return (
    <main>
      <div className={galleryStyles.galleryContainer}>
        <h1>Gallery</h1>
        <div className={galleryStyles.imgRow}>
          <div className={galleryStyles.sectionImg}>
            <a href="/gallery/normal">
              <Image src={image1} alt="A bunch of Ghost Pipes" />
            </a>
            <h3>Normal Images</h3>
          </div>
          <div className={galleryStyles.sectionImg}>
            <a href="/gallery/single">
              <Image src={image5} alt="A Closeup of a Ghost Pipe Plant" />
              <h3>Single Images</h3>
            </a>
          </div>
          <div className={galleryStyles.sectionImg}>
            <a href="/gallery/red">
              <Image
                src={image4}
                alt="Low Angle Shot!"
                // height={200}
                // width={200}
              />
              <h3>Red Images</h3>
            </a>
          </div>
          <div className={galleryStyles.sectionImg}>
            <a href="/gallery/diagrams">
              <Image
                src={image9}
                alt="Low Angle Shot!"
                // height={200}
                // width={200}
              />
              <h3>Diagrams</h3>
            </a>
          </div>
        </div>
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
        <div className={galleryStyles.imgRow}>
          <div className={galleryStyles.img}>
            <Image
              src={image4}
              alt="A bunch of Ghost Pipes"
              // height={200}
              width={200}
            />
          </div>
          <div className={galleryStyles.img}>
            <Image
              src={image5}
              alt="A Closeup of a Ghost Pipe Plant"
              height={200}
              // width={200}
            />
          </div>
          <div className={galleryStyles.img}>
            <Image
              src={image6}
              alt="Low Angle Shot!"
              height={200}
              // width={200}
            />{" "}
          </div>
        </div>
        <div className={galleryStyles.imgRow}>
          <div className={galleryStyles.img}>
            <Image
              src={image7}
              alt="A bunch of Ghost Pipes"
              // height={200}
              width={200}
            />
          </div>
          <div className={galleryStyles.img}>
            <Image
              src={image8}
              alt="A Closeup of a Ghost Pipe Plant"
              height={200}
              // width={200}
            />
          </div>
          <div className={galleryStyles.img}>
            <Image
              src={image9}
              alt="Low Angle Shot!"
              height={200}
              // width={200}
            />{" "}
          </div>
        </div>
      </div>
    </main>
  );
}
