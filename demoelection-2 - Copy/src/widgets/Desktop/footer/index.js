import React, { useContext, useEffect } from "react";
import axios from "axios";
import GlobalContext from "context";
//import "lazysizes";

const Footer = (props) => {
  let { news_type } = useContext(GlobalContext);

  useEffect(() => {
    let scrollCounter = 0;
    const func = () => {
      let pageYOffset = window.pageYOffset;
      //if (pageYOffset > 80 && scrollCounter == 0) {
      //Start Outbrain Script
      var script = document.createElement("script");
      script.src = "https://widgets.outbrain.com/outbrain.js";
      script.defer = true;
      document.body.appendChild(script);
      //End Outbrain Script
      load_footer();

      scrollCounter++;
      //}
    };

    func();
    // if (process.env.siteAd) {
    // 	window.addEventListener("scroll", func, {passive: true});
    // }

    // return () => window.removeEventListener("scroll", func);
  }, []);

  function load_footer() {
    // console.log(`${publicRuntimeConfig.siteUrl}footer_ajax.html`,"footer")
    let url = `https://www.news18.com/footer_ajax.html`;

    if (news_type == "hi") {
      url = `https://hindi.news18.com/footer_ajax.html`;
    } else if (news_type == "lk") {
      url = `https://lokmat.news18.com/footer_ajax.html`;
    }

    axios
      .get(url)
      .then((response) => {
        document.querySelector("#footer_ajax_div").innerHTML = "";
        document.querySelector("#footer_ajax_div").innerHTML =
          response.data +
          '<link rel="stylesheet" type="text/css" href="https://images.news18.com/static_news18/pix/ibnhome/news18/css/desktop/new_footer/common-footer-min.css?reset=11">';
      })
      .catch((err) => {
        console.log("footer api " + err);
      });
  }

  return (
    <React.Fragment>
      {/* Footer start here */}
      <div id="footer_ajax_div"></div>
      {/* Footer end here */}

      <style jsx global>{`
        /* Footer css start here */
        ${props.articleData && props.articleData.post_type == "text"
          ? "#footer_ajax_div {margin-bottom: 54px}"
          : ""}

        .logosldier ul {
          display: -webkit-box;
          display: -webkit-flex;
          display: -ms-flexbox;
          display: flex;
          border: 1px solid #eee;
          padding: 10px;
        }

        .carousel__inner-slide a {
          display: block;
        }

        footer#footer {
          background: #212121;
        }

        .livesite_title {
          font-size: 20px;
          color: #fff;
          font-weight: 400;
          border-right: 1px solid #818181;
          padding-right: 16px;
          text-transform: uppercase;
          width: 110px;
          height: 100%;
          line-height: 82px;
        }

        .logosldier {
          width: calc(100% - 110px);
          position: relative;
          padding-left: 20px;
        }

        .logosldier button.glide__arrow.glide__arrow--right:after {
          transform: rotate(135deg);
        }

        .logosldier .glide__slides li:first-child {
          border: 0;
        }

        .logosldier .glide__slides li {
          text-align: center;
          border-left: 1px solid #3e3e3e;
        }

        .logosldier .glide__arrows {
          position: absolute;
          display: flex;
          align-items: center;
          top: 50%;
          transform: translateY(-50%);
          width: 100%;
        }

        .footer_other_logo button.glide__arrow--left {
          left: 0;
        }

        .logosldier button.glide__arrow--right {
          right: 0;
          position: absolute;
        }

        .logosldier button.glide__arrow {
          position: absolute;
          font-size: 0;
          border: 0;
          background: transparent;
          outline: none;
          cursor: pointer;
        }

        .logosldier button.glide__arrow:after {
          content: "";
          position: absolute;
          top: 50%;
          width: 15px;
          height: 15px;
          border-top: 3px solid #393939;
          border-left: 3px solid #393939;
          transform: rotate(-45deg);
          display: block;
          left: 50%;
          margin: -7px 0 0 -7px;
        }

        .footer_other {
          width: 295px;
          padding-top: 20px;
        }

        .footer_center {
          width: 600px;
          border-left: 1px solid #313131;
          border-right: 1px solid #313131;
          padding: 20px;
        }

        .footer_right {
          margin-left: 25px;
          width: 280px;
          padding-top: 20px;
        }

        .footer_midd {
          background: #1a1a1a;
          border-bottom: 1px solid #313131;
          border-top: 1px solid #313131;
        }

        .footer_title {
          font-size: 20px;
          color: #fff;
          padding-bottom: 10px;
          font-weight: 400;
          text-transform: uppercase;
        }

        ul.footer_links li a {
          color: #818181;
        }

        ul.footer_links {
          display: flex;
          flex-wrap: wrap;
        }

        ul.footer_links li {
          width: 50%;
          padding-bottom: 12px;
        }

        ul.footer_links li {
          font-size: 13px;
        }

        ul.footer_links li a:hover {
          color: #fff;
        }

        ul.footer_news li a {
          display: block;
          background: #0c0c0c;
          font-size: 14px;
          color: #818181;
          border-left: 3px solid #ed1c24;
          padding: 10px;
          margin-bottom: 5px;
        }

        .network_title {
          font-size: 20px;
          color: #fff;
          line-height: 115px;
          border-right: 1px solid #818181;
          float: left;
          position: relative;
          height: 115px;
          font-weight: 400;
          text-transform: uppercase;
          width: 250px;
        }

        ul.network_site li {
          float: left;
          padding: 10px 15px;
          font-size: 16px;
        }

        ul.network_site li a {
          color: #818181;
        }

        ul.network_site {
          width: calc(100% - 280px);
        }

        .footer_network {
          width: 100%;
          padding: 20px 0 0;
        }

        ul.network_site li a:hover {
          color: #fff;
        }

        .footer_txt {
          background: #0c0c0c;
          padding: 10px 0;
          font-size: 11px;
          line-height: 22px;
          color: #8c8c8c;
          margin-top: 20px;
        }

        .logosldier .carousel__back-button {
          position: absolute;
          font-size: 0;
          border: 0;
          background: transparent;
          outline: none;
          cursor: pointer;
          top: 30px;
        }
        .logosldier .carousel__back-button:after {
          content: "";
          position: absolute;
          top: 50%;
          width: 15px;
          height: 15px;
          border-top: 3px solid #393939;
          border-left: 3px solid #393939;
          transform: rotate(-45deg);
          display: block;
          left: 50%;
          margin: -7px 0 0 -7px;
        }
        .carousel__next-button {
          position: absolute;
          font-size: 0;
          border: 0;
          background: transparent;
          outline: none;
          cursor: pointer;
          right: 0;
          top: 30px;
        }
        .logosldier .carousel__next-button:after {
          content: "";
          position: absolute;
          top: 50%;
          width: 15px;
          height: 15px;
          border-top: 3px solid #393939;
          border-left: 3px solid #393939;
          transform: rotate(135deg);
          display: block;
          left: 50%;
          margin: -7px 0 0 -7px;
        }
        .logosldier ul {
          border: 0;
          justify-content: end;
          justify-content: space-between;
        }
        .logosldier ul img {
          max-width: 100%;
          display: block;
        }
        .slideHorizontal___1NzNV {
          text-align: center;
          margin: auto;
        }
        .common-footer .bottom_footer .footer_pra {
          padding-right: 320px !important;
        }

        /* Footer css end here */
      `}</style>
    </React.Fragment>
  );
};

export default React.memo(Footer);
