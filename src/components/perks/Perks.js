//styles
import "./Perks.css";

const perks = [
  "Upto 50% Discounts",
  "International Shipping",
  "24/7 Online Support",
];

export default function Perks() {
  return (
    <section className="perks">
      {perks.map((perk) => {
        return (
          <h2 key={perk} className="perks__perk">
            {perk}
          </h2>
        );
      })}
    </section>
  );
}
