"use client";
import storyStyles from "./slug.module.css";
import useGetStates from "@/hooks/getStates";
import Image from "next/image";
export default function Slug({ params }) {
    const stateData = useGetStates();
    let title = ['folklore', 'literature'];
    let intro = ['Ghost pipes have a presence in folklore all around the United States, particularly in the Cherokee Tribe. The story below is from a creation story involving Ghost pipes!','Ghost pipes are involved in literature from around the world, Like the work of Emily Dickenson. Her favorite flower was actually Ghost pipes! Read this poem written by her below!']
    let description = ['Before selfishness came into the world, which was a long time ago, the Cherokee happily shared the same hunting and fishing lands with their neighbors. However, everything changed when selfishness arrived. The men began to quarrel with their neighbors. The Cherokee began fighting with a tribe from the east and would not share the hunting area. The chiefs of the two tribes met in council to settle the quarrel. They smoked the tobacco pipe but continued to argue for seven days and seven nights. The Great Spirit watched the people and was displeased by their behavior. They should have smoked the pipe after they made peace. The pipe is sacred and must be treated with respect. He looked down upon the old chiefs, with their heads bowed, and decided to send reminders to the people. The Great Spirit transformed the chiefs into white-gray flowers that we now call “Indian Pipe.” The plant grows only four to ten inches tall and the small flowers droop towards the ground, like bowed heads. Indian Pipe grows wherever friends and relatives have quarreled. Next the Great Spirit placed a ring of smoke over the mountains. The smoke rests on the mountains to this day and will last until the people of the world learn to live together in peace. That is how the Great Smoky Mountains came to be.',"'Tis whiter than an Indian Pipe – \n'Tis dimmer than a Lace – \n  No stature has it, like a Fog \n When you approach the place – \nNot any voice imply it here –\nOr intimate it there –\nA spirit – how doth it accost –\nWhat function hath the Air?\nThis limitless Hyperbole\nEach one of us shall be –\n'Tis Drama – if Hypothesis\nIt be not Tragedy –"]
    let images = []
    let slug = params.slug
    let indexOf = title.indexOf(slug);
    let desc = description[indexOf];
    slug = slug.replace('-', ' ');
    slug = stateData.capitalizeFirstLetter(slug);
    return (
        <main className={storyStyles.main}>
            <div className={storyStyles.container}>
            <h1>Ghost pipes in {slug}</h1>
            <p>{intro[indexOf]}</p>
            <p>{desc}</p>
            </div>
        </main>
    );
}