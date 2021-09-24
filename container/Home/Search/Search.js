import React from "react"
import Image from "next/image";
import GlideCarousel, { GlideSlide} from "@/components/GlideCarousel/GlideCarousel"
const HomeSearch = () => {
    return (
      <div className="banner-wrapper">
        <GlideCarousel
          controls={false}
          options={{ gap: 0, autoplay: 5000, animationDuration: 1000 }}
          bullets={true}
          numberOfBullets={3}
        >
          <>
            <GlideSlide>
              <Image
                src="/assets/images/banner/1.jpg"
                alt="Home banner 1"
                layout="fill"
                objectFit="none"
              />
            </GlideSlide>
            <GlideSlide>
              <Image
                src="/assets/images/banner/2.jpg"
                alt="Home banner 2"
                layout="fill"
                objectFit="cover"
              />
            </GlideSlide>
            <GlideSlide>
              <Image
                src="/assets/images/banner/3.jpg"
                alt="Home banner 3"
                layout="fill"
                objectFit="cover"
              />
            </GlideSlide>
          </>
        </GlideCarousel>
      </div>
    );
}

export default HomeSearch;