"use client";
import biomeStyles from "./biome.module.css";
import Link from "next/link";
import { useState, useContext } from "react";
import getStates from "@/hooks/getStates";
export default function Biome() {
  const stateData = getStates();
  return (
    
    <main>
      <h1>Biome</h1>
      <p>Ghost Pipes exist in many different biomes and regions throughout the world, especially in the United States! It has a large geographic distribution, coasting around most of the country! To see if your state has Ghost Pipes, enter your state below!</p>
      <input type="text" value={stateData.state} onChange={(e) => stateData.changeState(e.target.value)} />
      <Link href={`/biome/${stateData.state}`}><button>Submit</button></Link>
    </main>
  );
}
