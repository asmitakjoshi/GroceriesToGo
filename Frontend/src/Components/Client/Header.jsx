import React from "react";

export default function Header (props){
    return(

    
    <section className="inner-section">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="center-content slider-sec">
                        <div className=" text-center w-100">
                            <h2 className="diff-text">{props.header_title}</h2>
                            <p className="heading">{props.header_para}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}