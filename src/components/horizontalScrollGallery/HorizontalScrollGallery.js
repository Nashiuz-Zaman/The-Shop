//react
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

//custom hooks import
import useShuffleArr from "../../hooks/useShuffleArr.js";

//styles
import styles from "./HorizontalScrollGallery.module.css";

//slide image source import
import backpacks from "./assets/backpacks.webp";
import basketballshoes from "./assets/basketballshoes.webp";
import footballshoes from "./assets/footballshoes.webp";
import hoodies from "./assets/hoodies.webp";
import leggings from "./assets/leggings.webp";
import runningshoes from "./assets/runningshoes.webp";
import sportsbras from "./assets/sportsbras.webp";
import sweatshirts from "./assets/sweatshirts.webp";
import tennisskirts from "./assets/tennisskirts.webp";
import football from "./assets/football.webp";

const products = [
  { id: 0, productCategoryName: "Backpacks", url: backpacks },
  { id: 1, productCategoryName: "Basketball Shoes", url: basketballshoes },
  { id: 2, productCategoryName: "Football Shoes", url: footballshoes },
  { id: 3, productCategoryName: "Hoodies", url: hoodies },
  { id: 4, productCategoryName: "Leggings", url: leggings },
  { id: 5, productCategoryName: "Running Shoes", url: runningshoes },
  { id: 6, productCategoryName: "Sports Bras", url: sportsbras },
  { id: 7, productCategoryName: "Sweatshirts", url: sweatshirts },
  { id: 8, productCategoryName: "Tennis Skirts", url: tennisskirts },
  { id: 9, productCategoryName: "Accesories & Equipments", url: football },
];

export default function HorizontalScrollGallery({ galleryName }) {
  const [galleryItems, setGalleryItems] = useState([]);
  const { shuffleArr } = useShuffleArr();
  const title = galleryName;

  useEffect(() => {
    setGalleryItems(shuffleArr(products));
  }, [shuffleArr]);

  return (
    <section className={styles["horizontal-scroll-gallery"]}>
      <h2 className={styles["horizontal-scroll-gallery__title"]}>{title}</h2>

      <div className={styles["horizontal-scroll-gallery__scroller"]}>
        {galleryItems.map((item) => {
          return (
            <Link to="#" key={item.id}>
              <article className={styles["horizontal-scroll-gallery__item"]}>
                <div
                  className={styles["horizontal-scroll-gallery__item--img"]}
                  style={{
                    background: `url(${item.url})`,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                  }}
                ></div>
                <p className={styles["horizontal-scroll-gallery__item--name"]}>
                  {item.productCategoryName}
                </p>
              </article>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
