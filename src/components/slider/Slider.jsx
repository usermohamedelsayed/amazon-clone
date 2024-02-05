import React from 'react'
import "./Slider.scss"

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules"
import "swiper/css";
import "swiper/css/navigation";

// Images
import banner1 from "../../assest/banner1.jpg"
import banner2 from "../../assest/banner2.jpg"
import banner3 from "../../assest/banner3.jpg"
import banner4 from "../../assest/banner4.jpg"
import banner5 from "../../assest/banner5.jpg"
import banner6 from "../../assest/banner6.jpg"

const sliderHomeArra = [
    banner1,
    banner4,
    banner6,
    banner3,
    banner2,
    banner5,
]
const Slider = () => {
    return (
        <div className="Slider">
            <div className="container">
                <Swiper
                    navigation={true}
                    loop={true}
                    // autoplay={{
                    //     delay: 3500,
                    //     disableOnInteraction: false,
                    // }}
                    modules={[Navigation, Autoplay]}
                    className="mySwiper">

                    {
                        sliderHomeArra.map((img) => (
                            <SwiperSlide key={Math.random()}><img src={img} alt="Img_Ads" /></SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
        </div>
    )
}

export default Slider