import cultureStyles from "./culture.module.css";
import Card from "@/components/Card";
export default function Culture() {
  return (
    <main className={cultureStyles.main}>
      <div className={cultureStyles.intro}>
      <h1>Culture</h1>
      <p>Ghost pipes have a presence in both indigenous and contemporary cultures throughout the United States. Click on the cards below to learn more!</p>
      </div>
      <div className={cultureStyles.cards}>
      <Card href={"/culture/literature"} title={"In Literature"} description={"Ghost pipes have a presence in literature, such as the works of Emily Dickenson."}/>
      <Card href={"/culture/folklore"} title={"In Folklore"} description={"Ghost pipes have history in folklore, such as the Cherokee's creation story."}/>      </div>
      {/* <div className={cultureStyles.story}>
      <p>Before selfishness came into the world, which was a long time ago, the Cherokee happily shared the same hunting and fishing lands with their neighbors. However, everything changed when selfishness arrived. The men began to quarrel with their neighbors.<br/> <br/>The Cherokee began fighting with a tribe from the east and would not share the hunting area. The chiefs of the two tribes met in council to settle the quarrel. They smoked the tobacco pipe but continued to argue for seven days and seven nights.<br/> <br/>The Great Spirit watched the people and was displeased by their behavior. They should have smoked the pipe after they made peace. The pipe is sacred and must be treated with respect. He looked down upon the old chiefs, with their heads bowed, and decided to send reminders to the people. <br/><br/>The Great Spirit transformed the chiefs into white-gray flowers that we now call “Indian Pipe.” The plant grows only four to ten inches tall and the small flowers droop towards the ground, like bowed heads. Indian Pipe grows wherever friends and relatives have quarreled. <br/><br/>Next the Great Spirit placed a ring of smoke over the mountains. The smoke rests on the mountains to this day and will last until the people of the world learn to live together in peace. That is how the Great Smoky Mountains came to be.</p>
      </div> */}
    </main>
  );
}
