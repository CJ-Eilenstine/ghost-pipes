import navStyles from "./nav.module.css";
import Link from "next/link";

export default function Nav() {
  return (
    <nav className={navStyles.mainNav}>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/biome">Biome</Link>
        </li>
        <li>
          <Link href="/toxicity">Toxicity</Link>
        </li>
        <li>
          <Link href="/ecology">Ecology</Link>
        </li>
        <li>
          <Link href="/medicine">Medicine</Link>
        </li>
        <li>
          <Link href="/culture">Culture</Link>
        </li>
        <li>
          <Link href="/gallery">Gallery</Link>
        </li>
        <li>
          <Link href="/references">References</Link>
        </li>
      </ul>
    </nav>
  );
}
