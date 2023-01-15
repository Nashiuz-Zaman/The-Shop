//component
import LinkGroup from "../linkGroup/LinkGroup";
import ImageButton from "../imageButton/ImageButton";
import CollapsibleLinks from "../collapsibleLinks/CollapsibleLinks";

//styles
import styles from "./MobileFooter.module.css";

const currentYear = new Date().getFullYear();

export default function MobileFooter({
  organizationName = "",
  optionsArray = [],
  logoButtonsArray = [],
  extraClass = [],
  bottomOptionsArray = [],
  firstOptionsList = undefined,
  restOptionsList = undefined,
}) {
  return (
    <footer className={styles["mobile-footer"]}>
      <div className={styles["mobile-footer__top"]}>
        <div className={styles["mobile-footer__top__links"]}>
          <div className={styles["mobile-footer__top__links__normal-part"]}>
            {firstOptionsList &&
              firstOptionsList.map((option) => {
                return <LinkGroup key={option.id} singleListObject={option} />;
              })}
          </div>

          <div
            className={styles["mobile-footer__top__links__collapsible-part"]}
          >
            {restOptionsList &&
              restOptionsList.map((option) => {
                return (
                  <CollapsibleLinks key={option.id} singleListObject={option} />
                );
              })}
          </div>
        </div>

        {logoButtonsArray.length > 0 && (
          <div className={styles["mobile-footer__top__image-buttons"]}>
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

      <div className={styles["mobile-footer__bottom"]}>
        <div className={styles["mobile-footer__bottom__copyright-info"]}>
          <p
            className={styles["mobile-footer__bottom__copyright-info--details"]}
          >
            &#169;{" "}
            {`${currentYear} ${organizationName}, Inc. All Rights Reserved`}
          </p>
        </div>

        {bottomOptionsArray.length > 0 && (
          <div className={styles["mobile-footer__bottom__buttons"]}>
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
