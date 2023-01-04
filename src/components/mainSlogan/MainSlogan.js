//styles
import "./MainSlogan.css";

export default function MainSlogan({ children }) {
  return (
    <div className="main-slogan">
      <div className="main-slogan__text-part">
        <h1 className="main-slogan__heading">
          New Year
          <br /> New Gear.
        </h1>
        <p className="main-slogan__sub-heading">
          Give yourself a treat in
          {` ${new Date().getFullYear() + 1}`}
        </p>
      </div>

      <div className="main-slogan__carousel-part">{children}</div>
    </div>
  );
}
