import React from 'react'
import imgCross from "../images/cross1.jpg";

export default function Cross() {
    return (
        <div className='container' style={{ outline: "20px solid #034103"}}>
            {/* <img src="../../public/cross1.jpg" alt="" sizes="" srcset="" /> */}
            <img src={imgCross} className="img-thumbnail mb-4" style={{marginLeft : "10px",marginTop: "10px"}}></img>
        </div>
    )
}
