"use client";
import stateStyles from "./state.module.css";
import Link from "next/link";
import getStates from "@/hooks/getStates";
import Image from "next/image";
import GhostPipe from "../../../assets/images/ghost-pipe-biome.jpg";
export default function State({ params }) {
   let slug = params.state
   slug = slug.replace('%20', ' ');
  const stateData = getStates();
  const statesRaw = [
    "Alabama",
    "Alaska",
    "Arizona",
    "Arkansas",
    "California",
    "Colorado",
    "Connecticut",
    "Delaware",
    "Florida",
    "Georgia",
    "Hawaii",
    "Idaho",
    "Illinois",
    "Indiana",
    "Iowa",
    "Kansas",
    "Kentucky",
    "Louisiana",
    "Maine",
    "Maryland",
    "Massachusetts",
    "Michigan",
    "Minnesota",
    "Mississippi",
    "Missouri",
    "Montana",
    "Nebraska",
    "Nevada",
    "New%20Hampshire",
    "New%20Jersey",
    "New%20Mexico",
    "New%20York",
    "North%20Carolina",
    "North%20Dakota",
    "Ohio",
    "Oklahoma",
    "Oregon",
    "Pennsylvania",
    "Rhode%20Island",
    "South%20Carolina",
    "South%20Dakota",
    "Tennessee",
    "Texas",
    "Utah",
    "Vermont",
    "Virginia",
    "Washington",
    "West%20Virginia",
    "Wisconsin",
    "Wyoming",
  ];
  const statesNoPipes = [
    "arizona",
    "new%20mexico",
    "colorado",
    "utah",
    "nevada",
    "wyoming",
    "south dakota",
  ];
  let states = statesRaw.map((state) => state.toLowerCase());
  let stateRaw = params.state;
  let state = stateRaw.toLowerCase();
  if (states.includes(state)) {
    if (statesNoPipes.includes(state)) {
      return (
        <main className={stateStyles.main}>
          <div className={stateStyles.container}>
            <h1>
              Unfortunately, {stateData.capitalizeFirstLetter(slug)}{" "}
              has no Ghost Pipes.
            </h1>
            <p>
              If they did, you could find them in deep shady woods in low to
              moderate elevations.
            </p>
          </div>
        </main>
      );
    } else {
      return (
        <main className={stateStyles.main}>
          <div className={stateStyles.container}>
            <h1>
              {stateData.capitalizeFirstLetter(slug)} has Ghost
              Pipes!
            </h1>
            <p>
              you can find them in deep shady woods in low to moderate
              elevations.
            </p>
            <Image
              className={stateStyles.image}
              src={GhostPipe}
              alt="Ghost Pipe"
              width={500}
            />
          </div>
          <svg viewBox="0 0 390.3 414.4" width="0" height="0">
            <clipPath
              id="blob3"
              clipPathUnits="objectBoundingBox"
              transform="scale(0.002562, 0.002413)"
            >
              <path
                class="st0"
                d="M276.8,56.9c23.5,25.9,33.9,61.3,53.7,95.3c19.8,33.9,49,66.4,57.3,104.6c8.2,38.2-4.5,82.3-35.2,102.2
	c-30.6,20-79.2,15.8-121.3,23.7c-42.1,7.8-77.8,27.6-118.6,31.1c-40.9,3.5-86.9-9.3-99.3-41.4c-12.3-32.1,8.9-83.4,8.9-127.5
	c0-44.2-21.1-81.2-22.3-121.6C-1.1,82.9,17.9,39,51.2,17.6C84.6-3.9,132.3-2.9,174.5,5.8S253.3,30.9,276.8,56.9z"
              />
            </clipPath>
          </svg>
        </main>
      );
    }
  } else {
    return (
      <main className={stateStyles.main}>
        <div className={stateStyles.container}>
          <h1>
            We're sorry, The state you entered ({slug}) does not
            exist. Please try again.
          </h1>
          <input
            className={stateStyles.input}
            type="text"
            value={stateData.state}
            onChange={(e) => stateData.changeState(e.target.value)}
          />
          <Link href={`/biome/${stateData.state}`}>
            <button className={stateStyles.button}>Submit</button>
          </Link>
        </div>
      </main>
    );
  }
}
