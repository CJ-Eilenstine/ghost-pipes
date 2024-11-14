"use client";

import ecologyStyles from "./ecology.module.css";
import Image from "next/image";
import ecologyImg from "@/assets/images/ghost-pipe-ecology.jpg";
import Link from "next/link";
import { useState } from "react";

export default function Ecology() {
  const ObservationForm = ({ onSubmit }) => {
    const [formData, setFormData] = useState({
      location: "",
      date: "",
      weather: "",
      observations: "",
    });

    const handleChange = (e) => {
      const { value } = e.target;
      setFormData((prevData) => ({ ...prevData, value }));
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      onSubmit(formData);
    };

    return (
      <main className={ecologyStyles.mainEco}>
        <h1>Ecology</h1>
        <p>
          Ecology is a branch of science that studies the relationships between
          organisms and their environments.
        </p>
        <p>{`Ghost pipes don't photosynthesize normally like most other plants, instead they get nutrients from the fungi that grow near tree roots. The fungi are in a symbiotic relationship with the tree where the fungi provide minerals like phosphate and the tree provides some of it's energy from photosynthesis. The ghost pipe is in a parasitic relationship with these fungi and take the energy they get from the tree. Ghost Pipes then use cellular respiration using the nutrients they get for energy.`}</p>
        <p>Tell us about times you saw ghost pipes and what you noticed:</p>
        <form>
          <div className={ecologyStyles.formDiv}>
            <input
              type="text"
              placeholder="Location"
              value={formData.location}
              onChange={handleChange}
            ></input>

            <input
              type="date"
              placeholder="Date"
              value={formData.date}
              onChange={handleChange}
            ></input>

            <input
              type="text"
              placeholder="Weather"
              value={formData.weather}
              onChange={handleChange}
            ></input>

            <textarea type="text" placeholder="Observations"></textarea>

            <input type="submit"></input>
          </div>
        </form>
        <Image
          src={ecologyImg}
          width={300}
          height={300}
          alt="Ghost pipes near tree to represent parasitic relationship."
        ></Image>
      </main>
    );
  };
}
