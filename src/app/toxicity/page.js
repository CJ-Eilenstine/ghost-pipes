import toxicityStyles from "./toxicity.module.css";

export default function Toxicity() {
  return (
    <main>
      <div className={toxicityStyles.toxicityHolder}>
        <h1>Toxicity</h1>
        <h3>Are They Toxic?</h3>
        <p>Quick Answer: No, but they are also not pleasent to eat.</p>
        <p>There is a long list of reasons to NOT eat Ghost Pipes:</p>
        <ul>
          <li>They have little to no taste.</li>
          <li>They can cause minor gastrointestional issues.</li>
          <li>They are ENDANGERED</li>
          <li></li>
        </ul>
      </div>
    </main>
  );
}
