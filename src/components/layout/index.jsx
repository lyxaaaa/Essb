import React,{useState} from "react"
import { Outlet, NavLink, useNavigate } from 'react-router-dom'
import { SaveOutlined, EnvironmentOutlined, ShareAltOutlined, LinkOutlined, PicCenterOutlined, FileSearchOutlined } from '@ant-design/icons'
import './index.css'
import LogoTitle from '../../imgs/logoTitle.png'

export default function Layout (){
    const navigate = useNavigate()

    const toOpenPage = () => {
        navigate('/open')
    }

     //依据navlink是否isActive 区分导航栏样式
    function computedName({isActive}){
        return isActive?'laynav-title  layouttit-active':'laynav-title ';
    }
    
    return (
        <div className="layout-contain">
            <div className="layout-top">
                <div className="layout-logo" onClick={toOpenPage}>                   
                    <img src={LogoTitle} alt="" className="layout-img"/>
                </div>
                <ul className="layout-nav">
                    <li className="layout-navitem">
                        <div className="nav-icon"><EnvironmentOutlined /></div>
                        <NavLink 
                            className={computedName}
                            to="/visitor/distribution">
                        地区分布
                        </NavLink>
                    </li>
                    <li className="layout-navitem">
                        <div className="nav-icon"><ShareAltOutlined /></div>
                        <NavLink 
                            className={computedName}
                            to="/visitor/display">
                        详情展示
                        </NavLink>
                    </li>
                    <li className="layout-navitem">
                        <div className="nav-icon"><LinkOutlined /></div>
                        <NavLink 
                            className={computedName}
                            to="/visitor/influence">
                        影响因素
                        </NavLink>
                    </li>
                    <li className="layout-navitem">
                        <div className="nav-icon"><PicCenterOutlined /></div>
                        <NavLink 
                            className={computedName}
                            to="/visitor/protect">
                        保护措施
                        </NavLink>
                    </li>
                    <li className="layout-navitem first-navitem">
                        <div className="nav-icon"><FileSearchOutlined /></div>
                        <NavLink 
                            className={computedName}
                            to="/sound">
                        寻音
                        </NavLink>
                    </li>
                </ul>
            </div>
            <div className="layout-content">
                <Outlet></Outlet>
            </div>
        </div>
    )
}