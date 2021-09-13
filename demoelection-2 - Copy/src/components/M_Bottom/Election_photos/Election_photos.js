import React from "react";
import styles from "./Election_photos.module.css";
import Election_p1 from "../Election_p1/Election_p1";
import Election_Dance from "../Election_Dance/Election_Dance";
import Election_list from "../Election_list/Election_list";
import Election_p from "../Election_p/Election_p";

const arr = [1,2 ,3,4]

function Election_photos() {
  return (
    <div className='elec-left'>
    <Election_Dance />
      <div className="elec-glblhd">
        <a href="#">
          Election <span>Photo/Video</span>
        </a>
      </div>
      <div className='e-p'>
      {arr.map((data, index) => {
        return (
            <Election_p key={index} />
        )
      })}
      </div>
      <Election_p1 />
      <Election_list />
      <style jsx>{`
      .elec-left {
        float: left;
        width: calc(100% - 320px);
      }
      .e-p{
        display: flex;
        flex-direction: row;
        justify-content: space-between
      }
        .elec-glblhd {
          display: flex;
          justify-content: space-between;
          margin-bottom: 10px;
          font-size: 18px;
          color: #e1261c;
          font-weight: 500;
        }
        .elec-glblhd a {
          display: flex;
          color: #e1261c;
          text-transform: uppercase;
          align-items: center;
        }
        .elec-glblhd a span {
          margin-left: 5px;
          color: #001d42;
          position: relative;
        }
        .elec-glblhd a span:after {
          content: "";
          position: absolute;
          width: 100%;
          height: 3px;
          background: #e1261c;
          bottom: -3px;
          left: 0;
        }
      `}</style>
    </div>
  );
}

export default Election_photos;
