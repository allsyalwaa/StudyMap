import illustrationComingSoon from "../../assets/illustration-about.svg";

export default function SecComingSoon() {
  return (
    <section className="container my-12">
      <h1 className="text-center text-5xl font-bold italic text-secondary">
        Coming Soon
      </h1>
      <img src={illustrationComingSoon} className="mx-auto mt-16 h-80" />
    </section>
  );
}
