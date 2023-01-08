//components
import LinkGroup from "../linkGroup/LinkGroup";
import ImageButton from "../imageButton/ImageButton";

//styles
import styles from "./Footer.module.css";

export default function Footer({
  organizationName = "",
  optionsArray = [],
  logoButtonsArray = [],
  extraClass = [],
  bottomOptionsArray = [],
}) {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className={`${styles["footer"]} ${
        extraClass.length > 0 ? extraClass.join(" ") : "default class"
      }`}
    >
      <div className={`${styles["footer__top"]} grid-2`}>
        {optionsArray.length > 0 && (
          <div className={styles["footer__links"]}>
            {optionsArray.map((singleListObject) => {
              return (
                <LinkGroup
                  key={singleListObject.id}
                  singleListObject={singleListObject}
                />
              );
            })}
          </div>
        )}

        {logoButtonsArray.length > 0 && (
          <div className={styles["footer__image-buttons"]}>
            {logoButtonsArray.map((buttonInfo) => {
              return (
                <ImageButton
                  externalLink={true}
                  key={buttonInfo.id}
                  imageSource={buttonInfo}
                />
              );
            })}
          </div>
        )}
      </div>

      <div className={`${styles["footer__bottom"]} grid-2`}>
        <div className={styles["footer__bottom__copyright-info"]}>
          <p className={styles["footer__bottom__copyright-info--details"]}>
            &#169;{" "}
            {`${currentYear} ${organizationName}, Inc. All Rights Reserved`}
          </p>
        </div>

        {bottomOptionsArray.length > 0 && (
          <div className={styles["footer__bottom__buttons"]}>
            {bottomOptionsArray.map((singleListObject) => {
              return (
                <LinkGroup
                  key={singleListObject.id}
                  singleListObject={singleListObject}
                />
              );
            })}
          </div>
        )}
      </div>
    </footer>
  );
}
