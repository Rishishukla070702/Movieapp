import React from 'react'
import "./topbar.css"

export default function TopBar() {
  const user=false;
  return (
    <div className='top'>
        <div className='topLeft'>
        <p>Favourite Movie App</p>
        <img src="https://banner2.cleanpng.com/20190730/shy/kisspng-photographic-film-movie-camera-cinema-website-and-mobile-application-development-service-5d3fc924ce3b33.8538265315644613488447.jpg"/>
        </div>
        
        <div className='topRight'>
          <p>From Harry potter world</p>
          <img src="https://res.cloudinary.com/zenbusiness/image/upload/v1670445040/logaster/logaster-2020-06-image5-2-1568x882-1-1024x576.jpg"></img>
        </div>
    </div>
  )
}
