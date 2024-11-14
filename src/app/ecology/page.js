"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import ecologyStyles from "./ecology.module.css";
import ecologyImg from "@/assets/images/ghost-pipe-ecology.jpg";

export default function Ecology() {
  const [formData, setFormData] = useState({
    location: "",
    date: "",
    weather: "",
    observations: "",
  });

  const [slug, setSlug] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const generatedSlug = `${formData.location}-${formData.date}`
      .toLowerCase()
      .replace(/\s+/g, "-");

    setSlug(generatedSlug);
  };

  return (
    <main className={ecologyStyles.mainEco}>
      <h1>Ecology</h1>
      <p>
        Ecology is a branch of science that studies the relationships between
        organisms and their environments.
      </p>
      <p>{`Ghost pipes don't photosynthesize normally like most other plants, instead they get nutrients from the fungi that grow near tree roots. The fungi are in a symbiotic relationship with the tree where the fungi provide minerals like phosphate and the tree provides some of its energy from photosynthesis. The ghost pipe is in a parasitic relationship with these fungi and takes the energy they get from the tree. Ghost Pipes then use cellular respiration using the nutrients they get for energy.`}</p>
      <p>Tell us about times you saw ghost pipes and what you noticed:</p>

      <form onSubmit={handleSubmit}>
        <div className={ecologyStyles.formDiv}>
          <input
            type="text"
            name="location"
            placeholder="Location"
            value={formData.location}
            onChange={handleChange}
          />
          <input
            type="date"
            name="date"
            placeholder="Date"
            value={formData.date}
            onChange={handleChange}
          />
          <input
            type="text"
            name="weather"
            placeholder="Weather"
            value={formData.weather}
            onChange={handleChange}
          />
          <textarea
            name="observations"
            placeholder="Observations"
            value={formData.observations}
            onChange={handleChange}
          />
          <input type="submit" value="Submit" />
        </div>
      </form>

      {slug && (
        <Link href={`/ecology/${slug}`}>
          <button>Go to Your Observation</button>
        </Link>
      )}

      <Image
        src={ecologyImg}
        width={300}
        height={300}
        alt="Ghost pipes near tree to represent parasitic relationship."
      />
    </main>
  );
}
