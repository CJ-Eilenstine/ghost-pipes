import aboutStyles from "./about.module.css";
import Link from "next/link";

export default function About() {
  return (
    <main className={aboutStyles.mainAbout}>
      <h1>About</h1>
      <p>Ghost pipes belong to the Monotropaceae family.</p>
      <p>
        These one curve plants live in deep shady woods that you might find a
        witches house made of candy in.
      </p>
      <p>
        Ghost pipes normally are 4-8 inches tall and with small scale like
        leaves and a white flower with 5 petals.
      </p>
      <Link href={"/about/reproduction"}>
        <button>Learn about the Ghost Pipe Reproduction</button>
      </Link>
      <img src="/ghost-red.jpg" />
    </main>
  );
}
