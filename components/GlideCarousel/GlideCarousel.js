import React, { useEffect, Fragment } from "react";
import Glide from "@glidejs/glide";

const GlideCarousel = ({
  className,
  children,
  options,
  controls,
  prevButton,
  nextButton,
  bullets,
  numberOfBullets,
  carouselSelector,
}) => {
  // Add all classs to an array.
  const addAllClasses = ["glide"];

  // className prop checking.
  if (className) {
    addAllClasses.push(className);
  }

  // number of bullets loop.
  const totalBullets = [];
  for (let i = 0; i < numberOfBullets; i++) {
    totalBullets.push(i);
  }

  // Load glide.
  useEffect(() => {
    const glide = new Glide(
      carouselSelector ? `#${carouselSelector}` : "#glide",
      {
        ...options,
      }
    );
    glide.mount();
  }, [carouselSelector, options]);

  return (
    <div className={addAllClasses.join(" ")} id={carouselSelector || "glide"}>
      <div className="glide__track" data-glide-el="track">
        <ul className="glide__slides">{children}</ul>
      </div>

      {/** if controls prop true then show controls nav. */}
      {controls && (
        <div className="glide__controls" data-glide-el="controls">
          <div className="glide__prev--area button-wrapper" data-glide-dir="<">
            {prevButton ? (
              prevButton
            ) : (
              <div className="default__button">Prev</div>
            )}
          </div>
          <div className="glide__next--area button-wrapper" data-glide-dir=">">
            {nextButton ? (
              nextButton
            ) : (
              <div className="default__button">Next</div>
            )}
          </div>
        </div>
      )}

      {/** if bullets prop true then show bullets nav. */}
      {bullets && (
        <div className="glide__bullets" data-glide-el="controls[nav]">
          <Fragment>
            {totalBullets.map((index) => (
              <div
                key={index}
                className="glide__bullet bullet__button"
                data-glide-dir={`=${index}`}
              />
            ))}
          </Fragment>
        </div>
      )}
    </div>
  );
};

// Glide Slide wrapper component.
const GlideSlide = ({ children }) => {
  return <div className="glide__slide glide__slide-wrapper">{children}</div>;
};

export { GlideSlide };

export default GlideCarousel;
