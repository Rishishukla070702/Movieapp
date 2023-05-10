import React from 'react';
import "./Trailer.css"

function Trailer() {
  return (
    <div className="trailer">
      <h1>Trailer</h1>
      <div className="video-container">
        <iframe 
          src="https://www.youtube.com/embed/5NYt1qirBWg" 
          title="Movie Trailer" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen 
        />
        
      </div>
      
    </div>
  );
}

export default Trailer;
