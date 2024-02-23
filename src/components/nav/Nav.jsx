import React, { useEffect } from 'react'
import './Nav.scss'
// Icons
import { FaArrowLeft, FaChevronRight, FaCircleUser } from "react-icons/fa6";
import { TbWorld } from "react-icons/tb";
import ListAside from "../header/ListAside";
// Swiper
import "swiper/css";
import { SwiperSlide, Swiper } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css/navigation";
import { Player } from "@lottiefiles/react-lottie-player";
// Motion
import emptycontainer from "../../animation/emptycontainer.json"
import { IoMdClose } from 'react-icons/io';
// Images
import imgEgypt from "../../assest/EgyptIcon.jpg"
import imgUser from "../../assest/favicon.jpg"
// Redux
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategoriesProducts } from '../../redux/categoriesSlice';
const Nav = ({ aside, handlerColseWindows }) => {
    const categoriesProducts = useSelector(state => state.categoriesSlice)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchCategoriesProducts())
    }, [dispatch])
    const closeNestedNewList = () => {
        document.querySelector(".Header .swiper-button-prev").click()
    }
    return (
        <div className='Nav'>
            <aside className={aside ? "open" : "close"}>
                <i className="btnCloseAside" onClick={handlerColseWindows}><IoMdClose /></i>
                <div className="head">
                    <img src={imgUser} alt="user_img" />
                    <span>hello, sign in</span>
                </div>
                <Swiper
                    navigation={true}
                    modules={[Navigation]}
                    className="mySwiper"
                    cssMode={true}
                >
                    <SwiperSlide>
                        <div className="lists">
                            <ListAside
                                title={"trending"}
                                items={["best sellers", "new releases", "movers & shakers"]}
                                hrefs={false}
                                closeAside={handlerColseWindows}
                            />
                            <ListAside
                                title={"Digital Content And Devices"}
                                items={["amazon kindle e-readers"]}
                                icon={<FaChevronRight />}
                                openNewLists={true}
                                hrefs={false}
                                closeAside={handlerColseWindows}
                            />
                            <ListAside
                                title={"Shop By Category"}
                                items={[...categoriesProducts.categoriesProduct.flatMap(item => (item))]}
                                statusShow={true}
                                hrefs={true}
                                closeAside={handlerColseWindows}
                            />

                            <ListAside
                                title={"Programs & Features"}
                                items={["today's deals", "amazon outlet"]}
                                hrefs={false}
                                closeAside={handlerColseWindows}
                            />

                            <ListAside
                                title={"Help & Settings"}
                                items={[
                                    "your account",
                                    <span> <i><TbWorld /></i> english</span>,
                                    <span><img src={imgEgypt} alt="banner" /> egypt</span>,
                                    "help",
                                    "sign in",
                                ]}
                                hrefs={false}
                                closeAside={handlerColseWindows}
                            />

                        </div>
                    </SwiperSlide>
                    <SwiperSlide >
                        <div className="lists">
                            <li onClick={closeNestedNewList} className="item btnCloseMenuOld">
                                <span>
                                    <i> <FaArrowLeft /></i>
                                    main menu
                                </span>
                            </li>
                            <Player
                                loop
                                autoplay
                                src={emptycontainer}
                            />
                        </div>
                    </SwiperSlide>
                </Swiper>
            </aside>
        </div>
    )
}

export default Nav