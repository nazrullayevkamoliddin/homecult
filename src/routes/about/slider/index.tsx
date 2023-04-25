import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { EffectFade, Navigation, Autoplay } from "swiper";
import { NavBtnNext, NavBtnPrev } from "./btn";
import { useStyles } from "./slider.styles";
import { FirstImg, SecondImg, ThirdImg } from "./image-links";

const AboutSlider = () => {
    const { classes } = useStyles()
    return (
        <>
            <Swiper
                spaceBetween={30}
                effect={"fade"}
                navigation={{
                    nextEl: ".nextBtn",
                    prevEl: ".prevBtn"
                }}
                autoplay={{
                    delay: 5000,
                    waitForTransition: true,
                    pauseOnMouseEnter: true
                }}
                modules={[EffectFade, Navigation, Autoplay]}
                className={`${classes.swiper} mySwiper`}
            >
                <SwiperSlide>
                    <img style={{ width: '100%', objectFit: 'cover', height: '100%' }} src={FirstImg} />
                </SwiperSlide>
                <SwiperSlide>
                    <img style={{ width: '100%', objectFit: 'cover', height: '100%' }} src={SecondImg} />
                </SwiperSlide>
                <SwiperSlide>
                    <img style={{ width: '100%', objectFit: 'cover', height: '100%' }} src={ThirdImg} />
                </SwiperSlide>
                <SwiperSlide>
                    <img style={{ width: '100%', objectFit: 'cover', height: '100%' }} src={SecondImg} />
                </SwiperSlide>
                <NavBtnPrev classname="prevBtn" />
                <NavBtnNext classname="nextBtn" />
            </Swiper>
        </>
    )
}

export default AboutSlider