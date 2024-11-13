import ecologyStyles from "./ecology.module.css";
import Image from "next/image";
import ecologyImg from "@/assets/images/ghost-pipe-ecology.jpg";

export default function Ecology() {
  return (
    <main className={ecologyStyles.mainEco}>
      <h1>Ecology</h1>
      <p>
        Ecology is a branch of science that studies the relationships between
        organisms and their environments.
      </p>
      <p>{`Ghost pipes don't photosynthesize normally like most other plants, instead they get nutrients from the fungi that grow near tree roots. The fungi are in a symbiotic relationship with the tree where the fungi provide minerals like phosphate and the tree provides some of it's energy from photosynthesis. The ghost pipe is in a parasitic relationship with these fungi and take the energy they get from the tree.`}</p>
      <p>Lorem</p>
      <Image
        src={ecologyImg}
        width={300}
        height={300}
        alt="Ghost pipes near tree to represent parasitic relationship."
      ></Image>
    </main>
  );
}
