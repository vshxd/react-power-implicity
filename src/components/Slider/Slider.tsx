import "./slider.scss";
import dots from "../../assets/icons/dots.png";
import dotsActive from "../../assets/icons/dots-active.png";
export const Slider = () => {
  return (
    <div className="slider">
      <div className="slider__container">
        <div className="slider__title--wrapper">
          <h1 className="slider__title">The Power of Simplicity</h1>
        </div>

        <div className="slider__subtitle--wrapper">
          <h3 className="slider__subtitle">
            Instead of spending time searching for the right app, our AI will
            bring the right app to you.
          </h3>
        </div>

        <button className="btn slider__btn">Learn</button>

        <div className="slider__list">
          <div className="slider__item--wrapper">
            <img className="slider__item" src={dots} alt="" />
          </div>
          <div className="slider__item--wrapper">
            <img className="slider__item" src={dots} alt="" />
          </div>
          <div className="slider__item--wrapper">
            <img className="slider__item" src={dotsActive} alt="" />
          </div>
          <div className="slider__item--wrapper">
            <img className="slider__item" src={dots} alt="" />
          </div>
          <div className="slider__item--wrapper">
            <img className="slider__item" src={dots} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};
