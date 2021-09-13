import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function Election_Dance() {

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        appendDots: dots => (
          <div
            style={{
              backgroundColor: "transparent",
              borderRadius: "10px",
              paddingRight: "20px"
            }}
          >
            <ul style={{ margin: "0px" }}> {dots} </ul>
          </div>
        ),
        customPaging: i => (
          <div
            style={{
              color: "blue",
              borderBottomStyle: "solid",
              borderBottomColor: 'grey',
              borderBottomWidth: 3,
              marginTop: 10,
            }}
          >
            {" "}
          </div>
        )
      };

    return (
        <div className="stel-battlenews">
            <span>DANCE OF DEMOCRACY</span>
            <Slider {...settings}>
                    <div className='slider-st'>
                        <a href="#">
                        To Win Bengal Polls, BJP Pulls Out All Stops to Woo Women
                      Voters Away from Mamata
                        </a>
                    </div>
                    <div className='slider-st'>
                        <a href="#">
                        Carving Footprints: Leaders Who Have Helped BJP Expand Its
                      Dalit Vote Base in Bengal
                        </a>
                    </div>
                    <div className='slider-st'>
                        <a href="#">
                        As Bengal Poll Race Enters Last Lap, ‘Secular’ Left Front
                      Can Find it Hard to Explain Double Standards
                        </a>
                    </div>
                </Slider>
            <style jsx>{`
            .slider-st a{
                display: block;
                color: #001d42;
                font-size: 26px;
                line-height: 32px;
                font-style: italic;
                font-weight: 500;
                text-align: center;
              }
              .slider-st a:hover{
                color: #e1261c;
              }
            .stel-battlenews {
                padding: 10px 20px 20px 20px;
                border-top: 5px solid #001d42;
                text-align: center;
                margin-bottom: 20px;
                background: #f5f5f5;
                border-bottom: 1px solid #dddddd;
                box-sizing: border-box;
              }
              .stel-battlenews span {
                display: block;
                color: #e1261c;
                font-size: 15px;
                text-transform: uppercase;
                font-weight: 500;
                margin-bottom: 10px;
              }
              .stel-battlenews span:after {
                content: "";
                width: 40px;
                height: 1px;
                background: #e1261c;
                display: block;
                margin: 5px auto auto auto;
              }
              .stel-battlenews-slider {
                position: relative;
                overflow: hidden;
              }
              .stel-battlenews-slider ul {
                display: flex;
                margin-bottom: 20px;
              }
              .stel-battlenews-slider ul li a {
                display: block;
                color: #001d42;
                font-size: 26px;
                line-height: 32px;
                font-style: italic;
                font-weight: 500;
                text-align: center;
              }
              .stel-battlenews-slider ul li a:hover {
                color: #e1261c;
              }
              .stel-battlenews-bullets {
                display: flex;
                justify-content: center;
              }
              .stel-battlenews-bullets button {
                border: none;
                padding: 0px;
                background: #b0b0b0;
                width: 16px;
                height: 4px;
                border-radius: 20px;
                margin: 0 3px;
                cursor: pointer;
              }
              .stel-battlenews-bullets button.glide__bullet--active {
                background: #e1261c;
              }              
            `}</style>
          </div>
    )
}

export default Election_Dance
