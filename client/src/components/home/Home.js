import React from 'react'
import './home.scss'
const Home = () => {
    return (
        <div className = "homepage">
            <div className = "directory-menu"> 
                <div className = "menu-item">
                    <h1 className = "title">HATS</h1>
                    <span className = "subtitle">SHOP NOW</span>
            </div>
            
                <div className = "menu-item">
                    <h1 className = "title">JACKETS</h1>
                    <span className = "subtitle">SHOP NOW</span>
                </div>

                <div className = "menu-item">
                    <h1 className = "title">SNEAKERS</h1>
                    <span className = "subtitle">SHOP NOW</span>
                </div>
      
     
                <div className = "menu-item">
                    <h1 className = "title">WOMEN</h1>
                    <span className = "subtitle">SHOP NOW</span>
                </div>
    
    
                <div className = "menu-item">
                    <h1 className = "title">MEN</h1>
                    <span className = "subtitle">SHOP NOW</span>
                </div>
            </div>
        </div>
    )
}

export default Home;
