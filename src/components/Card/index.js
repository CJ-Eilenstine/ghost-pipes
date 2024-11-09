import CardStyles from "./card.module.css";
import Link from "next/link";

export default function Card({href, title, description}) {
    return (
        <>
        <Link className={CardStyles.cardLink} href={href || "#"}>
        <div className={CardStyles.card}>
            <div>
                <h2 className={CardStyles.cardLink}>{title || "Title"}</h2>
                <p className={CardStyles.cardLink}>{description || "Description"}</p>
            </div>
        </div>
        </Link>
      </>
    );
}