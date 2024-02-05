import React from 'react'
import { useRef } from 'react'
import { FaChevronRight } from 'react-icons/fa6'
import { useNavigate } from 'react-router'

const ListAside = ({ title, items, icon, statusShow, openNewLists, hrefs = false, closeAside }) => {
    const navigate = useNavigate()
    const refList = useRef(null)
    const refItemShowAll = useRef(null)
    const handlerToggleList = () => {
        if (refList.current.style.height === "119px") {
            refList.current.style.height = refList.current.scrollHeight + "px"
            refItemShowAll.current.innerText = "see less"
            refItemShowAll.current.parentElement.classList.add("open")
            refItemShowAll.current.parentElement.classList.remove("close")

        } else {
            refList.current.style.height = "119px"
            refItemShowAll.current.innerText = "see all"
            refItemShowAll.current.parentElement.classList.add("close")
            refItemShowAll.current.parentElement.classList.remove("open")
        }
    }
    const openNestedNewList = (item) => {
        closeAside()
        if (hrefs) {
            navigate(item)
        }
        if (openNewLists) {
            document.querySelector(".Header .swiper-button-next").click()
        }
    }
    return (
        <div className='ListAside'>
            <p className="title">{title}</p>
            <ul ref={refList} className="list" style={{ height: `${items.length > 3 && statusShow ? "119px" : ""}` }}>
                {
                    items.map(item => (
                        <li
                            className="item"
                            id={item.toString().match(/\w+/ig).join("_")}
                            key={Math.random()}
                            onClick={() => openNestedNewList('filterProduct/' + item)}
                        >
                            {item}
                            <i className='icon'>{icon}</i>
                        </li>
                    ))
                }
            </ul>
            {
                items.length > 3 && statusShow ? (
                    <li
                        className='item close'
                        onClick={handlerToggleList}
                    >
                        <span ref={refItemShowAll}>see all</span>
                        <i className='icon'><FaChevronRight /></i>
                    </li>
                ) : ""
            }
        </div>
    )
}
export default ListAside