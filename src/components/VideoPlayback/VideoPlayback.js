import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../LandingPage/Footer";
import './videoPlayback.css'


const VideoPlayback = () => {
    return ( 
        <div className="playback-home">
            <div className="nav">
               <Navbar/>
             </div>
            <div className="playback-content">
                <div className="content-text">
                    <div className="context-text-desc">
                        <div className="desc-heading">
                            <h1>Your video is ready!</h1>
                        </div>
                        <div className="desc-share-video">
                            <div className="share-video-name">
                                <span>Name</span>
                                <p>Untitled_Video_20232509  <i></i></p>
                            </div>
                            <div className="share-video-name-email">
                                <input type="text" placeholder='enter email of receiver'/>
                                <button>Send</button>
                            </div>
                            <div className="share-video-url">
                                <p>Video Url</p>
                                <div className="url-vid">
                                    <span></span>
                                    <button><i></i> Copy</button>
                                </div>  
                            </div>
                            <div className="share-links">
                                <p>Share your video</p>
                                <div className="content-video-share-btn">
                                <button><i className='fb'></i> Facebook</button>
                                <button><i className='whats'></i> WhatsApp</button>
                                <button><i className='tel'></i> Telegram</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="content-video">
                    <div className="content-video-container">
                        <div className="content-video-frame"></div>
                        <div className="content-video-actions">
                            <div className="vid-duration"> <span>0:30 / 3:00</span></div>
                            <div className="settings-controls">
                                <span className="play-btn"> <i></i>Play</span>
                                <span className="volume-btn"> <i></i> Volume</span>
                                <span className="settings-btn">  <i></i>Settings</span>
                            </div>
                        </div>
                    </div>
                    <div className="transcript-container">
                        <div className="transcript-container-heading">
                            <p>Transcript</p>
                            <button>English <i></i></button>
                        </div>
                        <div className="transcript-container-body">
                            <div className="timestamp"></div>
                            <div className="transcribed-content"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="save-video">
                <div className="save-video-card">
                    <p>To ensure the availability and privacy of your video, we recommend saving it to your account.</p>
                    <button>Save video</button>
                    <p className="account">Don't have an account? <span>Create account</span> </p>
                </div>
            </div>
            <div className="footer">
               <Footer/>
             </div>
        </div>
     );
}
 
export default VideoPlayback;