import { Container, Group, Text, useMantineTheme } from "@mantine/core"

import { BgHome1, BgHome2 } from "../../components/assets"
import { useStyles } from "./home.styles"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper'
import "swiper/css";
import { useState } from "react";
import { useMediaQuery } from "@mantine/hooks";

const Home = () => {
    const theme = useMantineTheme()
    const isMobile = useMediaQuery(`(max-width: ${theme.breakpoints.md}px)`);
    const titles = ['PENTHOUSE LA', 'MOD APARTMENT', 'PENTHOUSE VA', 'FAMILY APARTMENT']
    const { classes, cx } = useStyles()
    const [actIndex, setActIndex] = useState(0)
    return (
        <Container className={classes.container} style={{ transition: 'background 0.2s ease-in', backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)),url(${actIndex % 2 === 1 ? BgHome1.src : BgHome2.src})` }} fluid>
            <Swiper
                onSlideChange={(e) => { setActIndex(e.activeIndex) }}
                breakpoints={{
                    640: {
                        slidesPerView: 1,
                        spaceBetween: 100,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 200,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 400,
                    },
                }}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                // spaceBetween={isMobile ? 120 : 400}
                centeredSlides={true}
                className={classes.swiper}
                modules={[Autoplay]}
            >
                {titles.map((title, ind) => {
                    return (
                        <SwiperSlide key={ind} className={classes.slide}>
                            <Text className={cx(classes.slideText, { [classes.slideActText]: actIndex === ind })}>{title}</Text>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
            <Group pb={20} sx={{ height: 'max-content' }} px={60} position="apart">
                <Text component="a" className={classes.ahref} href="tel:+998 (94) 077 1601" size={11}>T: +998 (94) 077 1601</Text>
                <Text component="a" className={classes.ahref} href="mailto:kamolxoja.n@gmail.com" size={11}>E: {'kamolxoja.n@gmail.com'.toUpperCase()}</Text>
            </Group>
        </Container> 
    )
}

export default Home