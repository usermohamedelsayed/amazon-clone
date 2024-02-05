import React from 'react'
import "./Footer.scss"
import { Link } from 'react-router-dom'
import EgyptIcon from "../../assest/EgyptIcon.jpg"
const dataFooterTop = [
    {
        id: 100,
        title: "Get to Know Us",
        lis: [
            "about amazon",
            "carees",
            "amazon science",
        ]
    },
    {
        id: 200,
        title: "shop with us",
        lis: [
            "your account",
            "your orders",
            "your address",
            "your lists",
        ]
    },
    {
        id: 300,
        title: "Make Money with Us",
        lis: [
            "product and build your brans",
            "advertise your products",
            "sell on amazon",
            "fulfillment by amazon",
        ]
    },
    {
        id: 400,
        title: "let us help you",
        lis: [
            "help",
            "shipping and delivery",
            "returns & replacement",
            "amazon app download",
        ]
    },
]
const dataFooterBottom = [
    {
        path: "/",
        title: "Amazon Advertising",
        links: [
            "Find, attract, and",
            "engage customers"
        ]
    },
    {
        path: "/",
        title: "Amazon Audible",
        links: [
            "Download",
            "Audio Books"
        ]
    },
    {
        path: "/",
        title: "sell on amazon.ae",
        links: [
            "sell globally, start with UAE"
        ]
    },
    {
        path: "/",
        title: "amazone web services",
        links: [
            "scalable cloud",
            "computing services"
        ]
    },
    {
        path: "/",
        title: "goodreads",
        links: [
            "book reviews",
            "& recommendation"
        ]
    },
    {
        path: "/",
        title: "alexa",
        links: [
            "actionable analytics",
            "for the web"
        ]
    },
    {
        path: "/",
        title: "IMDb",
        links: [
            "movies, Tv",
            "& celebrities"
        ]
    },
    {
        path: "/",
        title: "shopbop",
        links: [
            "designer",
            "fashion brands"
        ]
    },
    {
        path: "/",
        title: "sell on amazon.sa",
        links: [
            "sell  globally, start with saudi arabia",
        ]
    },
]
const Footer = () => {
    const handleGoTopPage = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }
    return (
        <div className='Footer'>
            <section className='signIn'>
                <p>See personalized recommendations</p>
                <button className='btn'>
                    <Link to="/">sign in</Link>
                </button>
                <div>
                    <span>New customer?</span>
                    <Link to="/">start here.</Link>
                </div>
            </section>
            <section className='footerTop'>
                <div className="barBack" onClick={handleGoTopPage}>back to top</div>
                <div className='list'>
                    <div className="container">
                        {
                            dataFooterTop.map(item => (
                                <div className="box" key={Math.random()}>
                                    <p className="title">{item.title}</p>
                                    {
                                        item.lis.map(val => (
                                            <span className="item" key={Math.random()}>
                                                <Link to={"/"}>{val}</Link>
                                            </span>
                                        ))
                                    }
                                </div>
                            ))
                        }
                    </div>
                </div>
            </section>
            <section className='footerMiddle'>
                <div className="logo">
                    <img src="./amzonLogo.png" alt="logo_amazon" />
                </div>
                <div className="selectLang">
                    <div className="option">english</div>
                </div>
                <div className="selectCountry">
                    <div className="option">
                        <img src={EgyptIcon} alt="banner_country" />
                        <span>egypt</span>
                    </div>
                </div>
            </section>
            <section className='footerBottom'>
                <div className="list">
                    <div className="container">
                        {
                            dataFooterBottom.map(item => (
                                <div className="box" key={Math.random()}>
                                    <span className="title">{item.title}</span>
                                    {
                                        item.links.map(link => (
                                            <Link key={Math.random()} to={item.path}>{link}</Link>
                                        ))
                                    }
                                </div>
                            ))
                        }
                    </div>
                </div>
                <p>
                    Conditions of Use & Sale
                    Privacy Notice
                    Interest-Based Ads
                </p>
                <p>
                    ©1996-2023, Amazon.com, Inc. or its affiliates
                </p>
            </section>
        </div>
    )
}

export default Footer