import React from 'react'
import LogoImg from './LogoImg.png'

export default function Logo() {
    return (
        <div style={{marginRight:"20px"}}>
            <img src={LogoImg} height="30px" style={{marginBottom:"-6px",paddingBottom:"0px",marginLeft:"10px"}}/>
        </div>
    )
}
