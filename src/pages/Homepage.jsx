import React from "react";
import HomeImage from "../images/Homimage.png";
import categoryImage from "../images/Categorie-image.png";
import giftImage from "../images/gifts-images.png";
import gleamsLogo from "../images/Gleams-Logo.png";
import "../css/Homepage.css";
import { useWindow } from "../customHooks/BrowserWindow";
import { useNavigate } from "react-router-dom";

const Homepage = () => {
  const { width } = useWindow();
  const navigate = useNavigate();

  return (
    <>
      <div>
        <img src={HomeImage} alt="gleams" />
        <div>
          <div className="flex flex-wrap gap-10 justify-between p-10 w-11/12 m-auto">
            <div>
              <h1 className="text-xl font-bold">New Collections</h1>
              <p>Check out the New Collections of Famous Brands</p>
            </div>
            <p
              className="cursor-pointer hover:underline uppercase tracking-widest"
              onClick={() => navigate("/jwelery")}
            >
              All Collections
            </p>
          </div>
          <div className="grid grid-cols-4 gap-10 w-4/5 m-auto new-collection-wrapper">
            <div className="p-4">
              <img
                src="https://image.reliancejewels.com/Jewels/images/productImages/433/floral-design-14-kt-gold-diamond-ring-for-women-large_9751174153fd168d0c00f5ea83ab204b.jpg"
                alt="product"
              />
              <p>Messica</p>
              <p>Move Uno Collections</p>
            </div>
            <div className="p-4">
              <img
                src="https://i5.walmartimages.com/asr/131869a1-56fd-400d-9d58-0d66e66908af.bbb9438766e8cd292c5ffa8a0a1bc1a6.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF"
                alt="product"
              />
              <p>Messica</p>
              <p>Dazzling Divisha Gold Band</p>
            </div>
            <div className="p-4">
              <img
                src="https://m.media-amazon.com/images/I/41ybXozFBPL.jpg"
                alt="product"
              />
              <p>Carter</p>
              <p>Dazzling Divisha Gold Band</p>
            </div>
            <div className="p-4">
              <img
                src="https://cdn.shopify.com/s/files/1/0096/8966/1540/products/1_c69828bb-c033-439b-9444-afe2e3c3d86d.png?v=1682271044"
                alt="product"
                className="w-80 p-5"
              />
              <p>Mikimoto</p>
              <p>Dazzling Divisha Gold Band</p>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap justify-between gap-5 p-10 w-11/12 m-auto items-center">
          <div>
            <div>
              <h1 className="text-xl font-bold">Categories</h1>
              <p>Discover Our Collection of Jwelery by Categories </p>
            </div>
            <div className="my-20 text-xl">
              <p className="my-10 cursor-pointer w-14 pb-1 font-medium hover:border-b-2 border-b-black">
                Rings
              </p>
              <p className="my-10 cursor-pointer w-24 pb-1 font-medium hover:border-b-2 border-b-black">
                Bracelets
              </p>
              <p className="my-10 cursor-pointer w-20 pb-1 font-medium hover:border-b-2 border-b-black">
                Earrings
              </p>
              <p className="my-10 cursor-pointer w-52 pb-1 font-medium hover:border-b-2 border-b-black">
                Neclaces & Pendants
              </p>
              <p className="my-10 cursor-pointer w-20 pb-1 font-medium hover:border-b-2 border-b-black">
                Watches
              </p>
              <p className="my-10 cursor-pointer w-36 pb-1 font-medium hover:border-b-2 border-b-black">
                Men's Jwelery
              </p>
            </div>
            <p className="cursor-pointer hover:underline uppercase tracking-widest">
              All Collections
            </p>
          </div>
          <img src={categoryImage} alt="categories" />
        </div>
        <div>
          <div className="flex flex-wrap gap-10 justify-between p-10 w-11/12 m-auto">
            <div>
              <h1 className="text-xl font-bold">Best Sellers</h1>
              <p>Top Rated Watches from Our Collections</p>
            </div>
            <p className="cursor-pointer hover:underline uppercase tracking-widest">
              View All
            </p>
          </div>
          <div className="grid grid-cols-4 gap-10 w-4/5 m-auto best-seller-wrapper">
            <div className="p-4">
              <img
                src="https://www.worldofwatches.com/media/catalog/product/cache/6275b0637049ab4262e9abf2e63a6f54/m/e/mens-promaster-diver-polyurethane-dark-blue-dial-watch-citizen-czbn0151-09l_1.jpg"
                alt="product"
              />
              <p className="my-2">Citizen</p>
              <p className="text-sm">
                Men's Promaster Diver Polyurethane Dark Blue Dial Watch
              </p>
            </div>
            <div className="p-4">
              <img
                src="https://www.worldofwatches.com/media/catalog/product/cache/6275b0637049ab4262e9abf2e63a6f54/m/e/mens-classic-leather-black-dial-watch-emporio-armani-ar1732_1.jpg"
                alt="product"
              />
              <p className="my-2">Emporio Armani</p>
              <p className="text-sm">Men's Classic Leather Black Dial</p>
            </div>
            <div className="p-4">
              <img
                src="https://www.worldofwatches.com/media/catalog/product/cache/6275b0637049ab4262e9abf2e63a6f54/m/e/mens-pro-diver-stainless-steel-black-dial-watch-invicta-in8932_1.jpg"
                alt="product"
              />
              <p className="my-2">Invicta</p>
              <p className="text-sm">
                Men's Pro Diver Stainless Steel Black Dial
              </p>
            </div>
            <div className="p-4">
              <img
                src="https://www.worldofwatches.com/media/catalog/product/cache/6275b0637049ab4262e9abf2e63a6f54/m/e/mens-mercury-chronograph-leather-black-dial-watch-ben-and-sons-bns10013gm01rgwa_1.jpg"
                alt="product"
              />
              <p className="my-2">Ben and Sons</p>
              <p className="text-sm">
                Mercury Chronograph Black Genuine Leather and Dial Black IP SS
              </p>
            </div>
          </div>
        </div>
        <div className="w-fit m-auto my-5">
          <img src={giftImage} alt="gifts" />
        </div>
        <div className="flex flex-row justify-between gap-5 p-10 w-11/12 m-auto items-center about-div">
          <div>
            <div>
              <h1 className="text-xl font-bold">About</h1>
              <p>Gleams is More Than Just Gliding</p>
            </div>
            <div className="my-20 text-lg">
              <p
                className={width < 1000 ? "my-10 w-full" : "my-10 w-11/12 pb-1"}
              >
                Our Company is an exclusive supplier of jwelery from the world
                best brands. We take pride in offering our customers only the
                highest quality product created from precious metals and stones
                by the most experienced master jwelers.
              </p>
              <p
                className={width < 1000 ? "my-10 w-full" : "my-10 w-11/12 pb-1"}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Reiciendis, doloremque totam consequatur odit minima et sunt
                tempore veniam temporibus officiis dolorum tempora quia quod
                distinctio corporis velit a, commodi dicta!
              </p>
            </div>
            <p className="cursor-pointer hover:underline uppercase tracking-widest">
              Our Stores
            </p>
          </div>
          <img width={"50%"} src={gleamsLogo} alt="gleamsLogo" />
        </div>
        <div className="flex flex-row gap-28 p-10 w-11/12 m-auto mb-20 consultant-wrapper">
          <img
            src="https://leadwayconsult.com/wp-content/uploads/2020/09/business-consultant.jpg"
            alt="consoltant"
            width={width < 800 ? "100%" : "50%"}
          />
          <div>
            <div className="my-10">
              <h1 className="font-extrabold text-4xl my-2">
                Arrange a Meeting with Personal Consoltant
              </h1>
              <p>Find a Boutique Near You and Visit Our Flagship Store</p>
            </div>
            <p className="cursor-pointer hover:underline uppercase tracking-widest">
              Learn More
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Homepage;
