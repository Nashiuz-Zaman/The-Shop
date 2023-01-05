import footballEssentials from "../assets/footballEssentials.webp";
import tennisEssentials from "../assets/tennisEssentials.webp";

export default function useImportGridShowcaseHome() {
  const gridShowcaseHome = [
    {
      url: footballEssentials,
      title: "football",
      id: 0,
      subheading: "Supercharge your game with engineered equipments.",
    },
    {
      url: tennisEssentials,
      title: "tennis",
      id: 1,
      subheading: "Rule the court with equipments designed to perform.",
    },
  ];

  return {
    gridShowcaseHome,
  };
}
