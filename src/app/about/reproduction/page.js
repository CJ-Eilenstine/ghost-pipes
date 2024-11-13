import repStyles from "./reproduction.module.css";

export default function Reproduction() {
  return (
    <main className={repStyles.repMain}>
      <h1>Reproduction</h1>
      <p>
        Ghost pipes might be weird when it comes to getting nutrients; however,
        they are really just normal when it comes to reproducing.
      </p>
      <p>
        Each stem that comes out of the ground has one bud that needs to be
        pollinated. Until pollination, the plant is bent but when pollinated,
        the flower sticks upright like {`it's`} rising from the dead. All the
        plant needs now is a gust of wind to spread the seeds about.
      </p>
      <img src="/ghost-flower.jpg" />
    </main>
  );
}
