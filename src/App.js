import "./index.scss";
import React, { useEffect } from "react";
import { Outlet, RouterProvider } from "react-router";
import { createBrowserRouter } from "react-router-dom";
// Conmponents
import { Footer, Header } from "./components";
// Pages
import {
  Home,
  FilterProduct,
  Cart,
  ProductDetails,
  ResultSearch,
} from "./pages";
const handleScrollHeader = () => {
  let prevScrollY = window.scrollY;
  let refHeader = document.querySelector(".Header"),
    refHeaderTop = refHeader.querySelector(".headerTop").clientHeight;
  window.addEventListener("scroll", () => {
    let currScrollY = window.scrollY;
    if (window.scrollY >= 130) {
      if (prevScrollY > currScrollY) {
        refHeader.style.top = 0;
      } else {
        refHeader.style.top = -refHeaderTop + "px";
      }
      prevScrollY = currScrollY;
    }
  });
};
const App = () => {
  useEffect(() => {
    handleScrollHeader();
  }, []);
  const layout = () => {
    return (
      <>
        <Header />
        <Outlet />
        <Footer />
      </>
    );
  };
  const rote = createBrowserRouter([
    {
      path: "/",
      element: layout(),
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/filterProduct/:category",
          element: <FilterProduct />,
        },
        {
          path: "/cart",
          element: <Cart />,
        },
        {
          path: "/products/:idProduct",
          element: <ProductDetails />,
        },
        {
          path: "/resultSearch",
          element: <ResultSearch />,
        },
      ],
    },
  ]);
  return (
    <div className="app">
      <RouterProvider router={rote} />
    </div>
  );
};
export default App;
