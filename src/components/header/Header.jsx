import "./Header.scss"
import React, { useEffect, useRef, useState } from 'react'
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
// Icons
import { IoSearchSharp } from "react-icons/io5";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { IoMdArrowDropdown } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";

// Images
import imgEgypt from "../../assest/EgyptIcon.jpg"
import adsImg from "../../assest/ads.png"

// Component
import { Nav } from '../index'
import { useDispatch, useSelector } from "react-redux";
import { fetchCategoriesProducts } from "../../redux/categoriesSlice";
import { fetchProduct } from "../../redux/produtsSlice";
import { handleGetInpValue, handleSearchProducts, handleSearchWithCategory } from "../../redux/resultSearchSlice";

const dataSingListRight = [
    {
        id: 10,
        text: "your account"
    },
    {
        id: 20,
        text: "your orders"
    },
    {
        id: 30,
        text: "your addresses"
    },
    {
        id: 40,
        text: "your lists"
    },
    {
        id: 50,
        text: "your recommendations"
    },
    {
        id: 60,
        text: "your prime membership"
    },
    {
        id: 70,
        text: "your seller account"
    },
]

const Header = () => {
    const navigate = useNavigate()
    const refSearchBox = useRef(null)
    const refInputSearch = useRef(null)
    const refChangeCurrensy = useRef(null)
    const refPopupSignIn = useRef(null)
    const refAllEle = useRef(null)
    const [overlay, setOverlay] = useState(false)
    const [catSearchBox, setCatSearchBox] = useState(false)
    const [aside, setAside] = useState(false)
    const [typeCategory, setTpeCategory] = useState('all')
    const products = useSelector(state => state.cartSlice.listDataCart)
    const categories = useSelector(state => state.categoriesSlice);
    const productsSearch = useSelector(state => state.produtsSlice.productsData)
    const location = useLocation();
    const dispatch = useDispatch()
    const { category } = useParams()
    const handlerActiveSearch = () => {
        if (refSearchBox.current.classList.contains("active")) {
            setOverlay(false)
            return refSearchBox.current.classList.remove("active")
        } else {
            setOverlay(true)
            return refSearchBox.current.classList.add("active")
        }
    }
    const handlerPopupBox = (ref) => {
        if (ref.current.classList.contains("active")) {
            setOverlay(false)
            return ref.current.classList.remove("active")
        } else {
            setOverlay(true)
            return ref.current.classList.add("active")
        }
    }
    const handlerCatSearch = (e) => {
        let val = e.target.innerText;
        setCatSearchBox(!catSearchBox)
        setTpeCategory(val)
        refAllEle.current.innerText = val
    }
    const handlerOpenAside = () => {
        setAside(true)
        setOverlay(true)
    }
    const handlerColseWindows = () => {
        setAside(false)
        setOverlay(false)
    }
    const handleResultSearch = () => {
        navigate('/resultSearch')
        dispatch(fetchProduct())
        dispatch(handleGetInpValue(refInputSearch.current.value.trim()))
        dispatch(handleSearchWithCategory(typeCategory))
        dispatch(handleSearchProducts(productsSearch))
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }
    const handlePutInpValInRedux = (e) => {
        if (e.key === "Enter") {
            handleResultSearch()
        }
    }
    useEffect(() => {
        document.body.addEventListener("click", (e) => {
            if (!e.target.contains(refAllEle.current)) {
                setCatSearchBox(false)
            }
        })
    }, [])
    useEffect(() => {
        dispatch(fetchCategoriesProducts(category))

    }, [category, dispatch])
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }, [location.pathname]);
    return (
        <div className='Header'>
            <div className={`overlayStrong  ${aside ? "active" : ""}`} onClick={handlerColseWindows}></div>
            <div className={`overlay ${overlay ? "active" : ""}`} onClick={handlerColseWindows}></div>
            <section className="headerTop">
                <div className="container">
                    <div className='logo' onClick={() => navigate('/')}>
                        <img src="./amzonLogo.png" alt="lodding.." />
                    </div>
                    <div className="grow"></div>
                    <div className='deliverBox'>
                        <i> <HiOutlineLocationMarker /></i>
                        <div>
                            <span className="title">deliver to</span>
                            <span className="subtitle">egypt</span>
                        </div>
                    </div>
                    <div className="searchBox" ref={refSearchBox}>
                        <div className="all" onClick={() => setCatSearchBox(!catSearchBox)}>
                            <p ref={refAllEle}>all</p>
                            <i><IoMdArrowDropdown /></i>
                        </div>
                        <input
                            ref={refInputSearch}
                            onKeyUp={handlePutInpValInRedux}
                            onFocus={handlerActiveSearch}
                            onBlur={handlerActiveSearch}
                            type="text"
                            placeholder="search product here..."
                        />
                        <i onClick={handleResultSearch} className="iconSearch">
                            <IoSearchSharp />
                        </i>
                        <ul className={`selectSearchBox ${catSearchBox ? "active" : ""}`}>
                            {
                                [...categories.categoriesProduct, 'all']
                                    .slice().reverse()
                                    .map(item => <li
                                        key={Math.random()}
                                        className="option"
                                        onClick={handlerCatSearch}
                                    >{item}</li>)
                            }
                        </ul>
                    </div>
                    <div className="currensy"
                        onMouseEnter={() => handlerPopupBox(refChangeCurrensy)}
                        onMouseLeave={() => handlerPopupBox(refChangeCurrensy)}>
                        <img src={imgEgypt} alt="icon" />
                        <span className="arrow">
                            <span>EN</span>
                            <IoMdArrowDropdown />
                        </span>
                        <div ref={refChangeCurrensy} className="changeCurrensy">
                            <div className="select">
                                <div className="option">
                                    <input type="radio" name="cuntrey" id="ar" />
                                    <label htmlFor="ar">العربيه-ar</label>
                                </div>
                                <div className="option">
                                    <input defaultChecked={true} type="radio" name="cuntrey" id="en" />
                                    <label htmlFor="en">english-en</label>
                                </div>
                                <Link to={"/"}>learn more</Link>
                            </div>
                            <div className="currenCountry">
                                <img src={imgEgypt} alt="icon" />
                                <span>you are shopping on amzone.eg</span>
                            </div>
                            <Link to={"/"}>change country/region</Link>
                        </div>
                    </div>
                    <div className="signIn box"
                        onMouseEnter={() => handlerPopupBox(refPopupSignIn)}
                        onMouseLeave={() => handlerPopupBox(refPopupSignIn)}>
                        <span className="title">hello, sign in</span>
                        <span className="subtitle">account & list <i className="arrow"><IoMdArrowDropdown /></i></span>
                        <div ref={refPopupSignIn} className="popupSignIn">
                            <div className="head">
                                <button>
                                    <Link to={"/"}>sign in</Link>
                                </button>
                                <p>new customer? <Link to={"/"}>start here</Link></p>
                            </div>
                            <section>
                                <div className="left">
                                    <p className="title">your lists</p>
                                    <Link to={"/"} className="createList">create a list</Link>
                                </div>
                                <div className="right">
                                    <p className="title">your account</p>
                                    <ul>
                                        {
                                            dataSingListRight.map(({ id, text }) => (
                                                <li key={id}><Link to={"/"}>{text}</Link></li>
                                            ))
                                        }
                                    </ul>
                                </div>
                            </section>
                        </div>
                    </div>
                    <div className="orders box">
                        <span className="title">returns</span>
                        <span className="subtitle">& orders</span>
                    </div>
                    <div className="cart" onClick={() => navigate('/cart')}>
                        <div>
                            <small>{products.length > 9 ? '9+' : products.length}</small>
                            <div>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </div>
                        <span>basket</span>
                    </div>
                </div>
            </section>
            <section className="headerBottom">
                <div className="container">
                    <ul className="list">
                        <li className="item all" onClick={handlerOpenAside}>
                            <div className="itemBtn">
                                <i><GiHamburgerMenu /></i>
                                <span>all</span>
                            </div>
                        </li>
                        {
                            categories.categoriesProduct.map((item) => (
                                <li
                                    key={Math.random()}
                                    className="item"
                                    onClick={() => navigate('filterProduct/' + item)}
                                >
                                    <Link className="itemBtn" to={"/"}>{categories.lodding ? <span style={{ color: "#00ff0a" }}>lodding...</span> : categories.error ? <span style={{ color: "#ff0000" }}>failed</span> : item}</Link>
                                </li>
                            ))
                        }
                    </ul>
                    <div className="ads">
                        <div className="ad">
                            <img src={adsImg} alt="ads" />
                        </div>
                    </div>
                </div>
            </section>
            <Nav aside={aside} handlerColseWindows={handlerColseWindows} />
        </div>
    )
}
export default Header