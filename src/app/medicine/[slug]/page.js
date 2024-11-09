"use client";
import descstyles from "./slug.module.css";
import image1 from "../../../assets/images/image1.jpg";
import image2 from "../../../assets/images/image2.jpg";
import image3 from "../../../assets/images/image3.jpg";
import getStates from "@/hooks/getStates";
import Image from "next/image";
export default function Slug({ params }) {
    const stateData = getStates();
    let title = ['general-pain', 'seizures', 'anxiety'];
    let description = ['This nutrient-dense herb has salicylic acid as one of its main constituent which aids in inducing analgesia. Salicylic acid acts just like Aspirin to relieve the obstinate pain of different origins like migraine, emotional pain, and overwhelming physical pain. Ghost pipe also helps in repressing the traumatic memories that may trigger anxiety and panic attacks due to sensory overload.',"It is reputed to have cured remittent and intermittent fevers, and to be an excellent antiperiodic. In convulsions of children, epilepsy, chorea, and other spasmodic affections, its administration has been followed with prompt success; hence its common name Fit or Convulsion root. The juice of the plant, alone, or combined with rose water, has been found to be an excellent application for obstinate ophthalmic inflammation, to ulcers, and as an injection in gonorrhoea, inflammation and ulceration of the bladder.", "Ghost pipe, or Indian pipe, has been used in Indigenous herbal medicine for its pain-relieving and calming properties. Some herbalists believe it helps ease anxiety by promoting a sense of calm and introspection, making people less reactive to stressors. It’s often used as a nervine tonic for this purpose."]
    let images = []
    let image = [image1, image2, image3]
    let slug = params.slug
    let indexOf = title.indexOf(slug);
    let desc = description[indexOf];
    slug = slug.replace('-', ' ');
    slug = stateData.capitalizeFirstLetter(slug);
    return (
        <main className={descstyles.main}>
            <div className={descstyles.container}>
            <h1>{slug}</h1>
            <p>{desc}</p>
            <Image src={image[indexOf]} alt={slug}  height={300} className={descstyles.image} />
            </div>
        </main>
    );
}