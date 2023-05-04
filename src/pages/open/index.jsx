import React,{useState} from "react"
import { useNavigate } from "react-router-dom"
import { Tooltip } from "antd"
import './index.css'
import Background from '../../imgs/background.png'
import One from '../../imgs/one.png'
import Two from '../../imgs/two.png'
import Three from '../../imgs/three.png'
import Four from '../../imgs/four.png'


export default function Open(){
    const navigate = useNavigate()
    const images = [
        {src:Four,tooltip:'保护措施',link:'/visitor/protect'},
        {src:One,tooltip:'地区分布',link:'/visitor/distribution'},
        {src:Two,tooltip:'详情展示',link:'/visitor/display'},
        {src:Three,tooltip:'影响因素',link:'/visitor/influence'},  
    ]

    const handleClick = (linkto) => {
        navigate(linkto)
    }
    
    return (
        <div className="open-contain">
            <div className="open-main">
                <svg width="600" height="300" className="ellipse">
                    <ellipse cx="300" cy="150" rx="297" ry="147" fill="none" stroke="#662500" strokeWidth="3" strokeDasharray="20 10 5 10 10 5 15 5 5 10" />
                </svg>
                {images.map((item,index)=>(
                    <div 
                        className={`openimg-container image-${index}`}
                        key={index}
                        onClick={()=>handleClick(item.link)}
                    >
                    <Tooltip title={item.tooltip}>
                        <img src={item.src} alt="" />
                    </Tooltip>
                    </div>
                ))}
            </div>
        </div>
    )
}