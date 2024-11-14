"use client";
import medicineStyles from "./medicine.module.css";
import Card from "@/components/Card";
export default function Medicine() {
  return (
    <main className={medicineStyles.main}>
      <div className={medicineStyles.container}>
      <h1>Medicine</h1>
      <p>Despite it&apos;s scary name, Ghost Pipes are a very effective medicine! They can be used to treat many illnesses, including:</p>
      <ul className={medicineStyles.list}>
        <li>General Pain</li>
        <li>Seizures</li>
        <li>Anxiety</li>
      </ul>
      <p>Click on each of the cards to learn more about what it can do!</p>
      <div className={medicineStyles.cards}>
      <Card href={"/medicine/general-pain"} title={"General Pain"} description={"Ghost Pipes can be used to treat general pain, such as headaches, migraines, and muscle pain."}/>
      <Card href={"/medicine/seizures"} title={"Seizures"} description={"Ghost Pipes can be used to treat seizures, such as epilepsy."}/>
      <Card href={"/medicine/anxiety"} title={"Anxiety"} description={"Ghost Pipes can be used to treat anxiety, such as panic attacks."} />
      </div>
      
      
      </div>
      
    </main>
  );
}
