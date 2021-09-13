import React from 'react'

function Election_p() {
    return (
        <>
        <div className="stel-btmphtvdlist-d">
        <a href="#">
          <div className="stel-figure">
            <div className="ls-count">
              +6 <span> Photo</span>
            </div>
            <img
              className="stel-img"
              // height={119}
              // width={260}
              // objectFit="cover"
              // layout='fill'
              alt=""
              src="https://images.news18.com/ibnlive/uploads/2021/05/1620038959_assembly-elections.jpg"
            />
          </div>
          <div className='ls_news_date'>03 May,2021</div>
          <h2>
            Election Results 2021: Seats Won by Political Parties in Last Five
            Years | In GFX
          </h2>
        </a>
      </div>
      <style jsx>{`
      .stel-btmphtvdlist-d {
        width: calc(25% - 20px);
        background: #f5f5f5;
        border-bottom: 1px solid #d3d3d3;
        margin-bottom: 10px;
      }
      .stel-img {
        width: 100%;
        height: 119px;
        object-fit: cover;
      }
      .stel-figure {
        line-height: 0;
        position: relative;
      }
      .stel-btmphtvdlist-d a h2{
        font-size: 15px;
        color: #282828;
        font-weight: bold;
        line-height: 20px;
        padding: 0px 10px 40px;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        overflow: hidden;
        height: 78px;
      }
      .stel-btmphtvdlist-d a h2:hover{
        color: #e1261c;
      }
      .ls_news_date {
        float: left;
        font-size: 12px;
        color: #949494;
        text-transform: uppercase;
        width: 100%;
        margin-bottom: 5px;
        padding: 10px 10px 0;
      }
      .ls-count {
        position: absolute;
        top: 0;
        right: 0;
        background: #0000008a;
        color: #fff;
        opacity: 0.9;
        padding: 15px 10px 10px 10px;
        font-weight: bold;
        font-size: 20px;
        text-align: center;
        line-height: 20px;
      }
      .ls-count span {
        font-size: 10px;
        text-transform: uppercase;
        display: block;
      }
      `}</style>
      </>
    )
}

export default Election_p
