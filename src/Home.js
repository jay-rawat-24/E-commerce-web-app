import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home_container">
        <img className="home_image"
          src="https://www.slashgear.com/wp-content/uploads/2016/10/image003-2-1280x673.jpg"
          alt=""/>
          <div className="home_row">
              <Product
                title="automatic and less time consuming brand new godrej washing machine ,stylish and mettalic finish with low washing time"
                price={28000}
                image="https://www.birite.com.au/wp-content/uploads/Haier-HWF70BW1-7KG-Front-Load-Washing-Machine-Left-Angle.jpg"
                rating={4}
              />
              <Product title="brand new boat rockerz 650 with bluetooth connectivity and battery 2000 mah"
                price={2000}
                image="https://tse2.mm.bing.net/th?id=OIP.FawY8xvYQTug8MJJvIe-PAHaJR&pid=Api&P=0&w=137&h=172"
                rating={4}
               />         
          </div>
          <div className="home_row">
          <Product
            title="furniture"
                price={22000}
                image="https://i5.walmartimages.com/asr/260557b8-1480-433b-a37f-1f17ec36fb25_1.11f2f5718d06471fbd6f9b96af8cb4ed.jpeg"
                rating={3}
          />
          <Product
            title="iphone 13 pro max"
                price={128000}
                image="https://specs-tech.com/wp-content/uploads/2021/04/Apple-iPhone-13-Pro-4-1024x664.jpg"
                rating={4}
          />
          <Product
            title="panasonic"
                price={28000}
                image="https://i.gadgets360cdn.com/products/televisions/large/1548154656_832_panasonic_55-inch-led-full-hd-tv-th-55es500d.jpg"
                rating={3}
          />
          </div>
          <div className="home_row">
          <Product
            title="alexa"
                price={6500}
                image="https://tse3.mm.bing.net/th?id=OIP.k8E3gXwR0VLCiNJdY9Cm2gHaHa&pid=Api&P=0&w=161&h=161"
                rating={4}
          />
          <Product
            title="hp"
                price={48000}
                image="https://fullhousesales.com/media/images/products/2019/09/81HIFYd5e3L._SL1500_.jpg"
                rating={4}
          />
          </div>
      </div>
    </div>
  );
}

export default Home;
