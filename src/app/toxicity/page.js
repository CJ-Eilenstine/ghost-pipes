import Image from "next/image";
import toxicityStyles from "./toxicity.module.css";
import toxicImg from "@/assets/images/toxic.png";
export default function Toxicity() {
  return (
    <main>
      <div className={toxicityStyles.toxicityHolder}>
        <div className={toxicityStyles.heading}>
          <div className={toxicityStyles.headText}>
            <h1>Toxicity</h1>
            <h3>Are They Toxic?</h3>
          </div>
          <div className={toxicityStyles.toxImg}>
            <Image
              src={toxicImg}
              alt="Toxicity Page Logo"
              width={200}
              height={200}
            ></Image>
          </div>
        </div>

        <div className={toxicityStyles.textContent}>
          <p>Quick Answer: No, but they are also not pleasent to eat.</p>
          <p>
            There is a long list of reasons to{" "}
            <span className={toxicityStyles.importantText}>NOT</span> eat Ghost
            Pipes:
          </p>
          <ul>
            <li>They have little to no taste, unless you cook them.</li>
            <ul className={toxicityStyles.subList}>
              <li>If you DO cook them, they taste slightly like Asparagus.</li>
            </ul>
            <li>
              They can cause minor problems like nausea, stomach pain, and other
              issues.
            </li>
            <li>
              They are{" "}
              <span className={toxicityStyles.importantText}>VERY RARE</span>,
              so they should be protected.
            </li>
          </ul>
          <p>
            Lastly, there are theories that Ghost Pipes actually produce a
            neurotoxin.
          </p>
          <p>
            To Learn more about that,{" "}
            <span className={toxicityStyles.embeddedLink}>
              <a
                target="_blank"
                href="https://publicwebuploads.uwec.edu/documents/Sandra-Prickett.pdf"
              >
                Click Here!
              </a>
            </span>{" "}
            to read a report on the subject.
          </p>
        </div>
      </div>
    </main>
  );
}
