import React from 'react';
import "./Trailer.css";

// Declare global YT namespace
declare global {
  interface Window {
    YT: any;
  }
}

export const Trailer = (props:any) => {
  // Declare player variable
  let player: any = null;
const url:string = props.trailer;
console.log(url)
let videoId="";
if (url!==null)
    {
        videoId = url.split("v=")[1];
    }
    
    
console.log(videoId); 
  // Function to initialize the YouTube Player API
  function initializeYouTubePlayer() {
    if ((window as any).YT && typeof (window as any).YT.Player === 'function') {
      // If the YouTube Player API is available, create a new player instance
      player = new (window as any).YT.Player('trailer', {
        height: '315',
        width: '560',
        videoId:  videoId , // Replace with your video ID
        events: {
          'onReady': onPlayerReady
        }
      });
    }
  }

  // Function called when the player is ready
  function onPlayerReady(event: YT.PlayerEvent) {
    // Autoplay the video
    if (event.target && event.target.playVideo) {
      event.target.playVideo();
    }
  }

  function showTrailer(event: React.MouseEvent<HTMLAnchorElement>) {
    // Prevent default link behavior
    event.preventDefault();
  
    // Get the trailer element
    const trailer = document.getElementById('trailer') as HTMLDivElement;
  
    // Show the trailer
    trailer.style.display = 'block';
  
    // Reinitialize the YouTube player
    if(!player)
    initializeYouTubePlayer();
  
    // Reset player state
    if (player) {
      player.seekTo(0); // Reset the player to the beginning
      player.playVideo();
    }
  }
// Function to hide the trailer
function hideTrailer(player: any) {
    // Get the trailer element
    const trailer = document.getElementById('trailer') as HTMLDivElement;
    
    // Pause the video
    if (player && player.pauseVideo) {
      player.pauseVideo();
    }
  
    // Hide the trailer
    trailer.style.display = 'none';
  }


    // Function to handle double click event
function handleClicks(event: React.MouseEvent<HTMLImageElement>) {
  // Prevent default behavior
  event.preventDefault();

  // Construct the video URL
  const videoUrl = url;

  // Open the video URL in a new tab
  window.open(videoUrl, '_blank');
}
  return (
    <div className="movie">
<a href="#" className="movie-link" onMouseOver={showTrailer} onMouseOut={() => hideTrailer(player)}>
        
        <img src={props.src} alt={props.alt} className="mb-1" height={"183px"} width={"240px"} onClick={handleClicks} />
      </a>
      <div className="trailer" id="trailer"></div>
    </div>
  );}
