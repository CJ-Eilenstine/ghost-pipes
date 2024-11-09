"use client";
import stateStyles from "./state.module.css";
import Link from "next/link";
import getStates from "@/hooks/getStates";
export default function State({ params }) {
    const stateData = getStates();
    const statesRaw = ['Alabama','Alaska','Arizona','Arkansas','California','Colorado','Connecticut','Delaware','Florida','Georgia','Hawaii','Idaho','Illinois','Indiana','Iowa','Kansas','Kentucky','Louisiana','Maine','Maryland','Massachusetts','Michigan','Minnesota','Mississippi','Missouri','Montana','Nebraska','Nevada','New Hampshire','New Jersey','New Mexico','New York','North Carolina','North Dakota','Ohio','Oklahoma','Oregon','Pennsylvania','Rhode Island','South Carolina','South Dakota','Tennessee','Texas','Utah','Vermont','Virginia','Washington','West Virginia','Wisconsin','Wyoming']
    const statesNoPipes = ["arizona", "new mexico", "colorado", "utah", "nevada", "wyoming", "south dakota"]
    let states = statesRaw.map((state) => state.toLowerCase());
    let stateRaw = (params.state);
    let state = stateRaw.toLowerCase();
    if (states.includes(state)) {
    if (statesNoPipes.includes(state)) {
        return (
            <main>
                <h1>Unfortunately, {stateData.capitalizeFirstLetter(stateData.state)} has no Ghost Pipes. If they did, you could find them in deep shady woods in low to moderate elevations.</h1>
            </main>
        );
    } else {
        return (
            <main>
                <h1>{stateData.capitalizeFirstLetter(stateData.state)} has Ghost Pipes! you can find them in deep shady woods in low to moderate elevations.</h1>
            </main>
        );
    }
} else {
    return (
        <main>
            <h1>We're sorry, The state you entered ({stateData.state}) does not exist. Please try again.</h1>
            <input type="text" value={stateData.state} onChange={(e) => stateData.changeState(e.target.value)} />
            <Link href={`/biome/${stateData.state}`}><button>Submit</button></Link>
        </main>
    );
}
    
}