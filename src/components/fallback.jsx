import React from 'react'
import './css/fallback.css'
<><script src="/gg_bd_ad_720x90.js" type="text/javascript"></script><script src="/follow.js" type="text/javascript"></script></>
export default function fallback() {
    return (
        <div className='BoS' id='BOX'>
            <meta charSet="utf-8" />
            <title>花瓣样式的Loading加载动画</title>
            <link type="text/css" href="css/zzsc.css" rel="stylesheet" />
            <div style={{ textAlign: "center", clear: "both" }}></div>
            <div className="out">
                <div className="fade-in">
                    <div className="container">
                        <div className="one common" />
                        <div className="two common" />
                        <div className="three common" />
                        <div className="four common" />
                        <div className="five common" />
                        <div className="six common" />
                        <div className="seven common" />
                        <div className="eight common" />
                    </div>
                    <div className='Loding'>
                        <h2 >Loding...</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

