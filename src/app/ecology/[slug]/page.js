import ecoStyles from "./eco.module.css";

export default function ObservationSuccess({ params }) {
  const { slug } = params;

  return (
    <div className={ecoStyles.mainDiv}>
      <h1>Congratulations!</h1>
      <p>Your observation has been recorded with the following details:</p>

      <p>
        <strong>Details:</strong> {decodeURIComponent(slug)}
      </p>

      <p>Thank you for contributing to our knowledge of ghost plants!</p>
    </div>
  );
}
