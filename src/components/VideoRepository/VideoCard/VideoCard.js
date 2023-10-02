// import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import React from 'react';
import { Link } from "react-router-dom";
import './videoCard.css';
// import dummyVideos from '../../VideoData';
// import useFetch from '../../useFetch';
import { useEffect } from 'react';
import { useState } from 'react';

const VideoCard = () => {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        // Fetch video data from the endpoint
        fetch("https://chrome-ext-api.onrender.com/api/videos")
          .then((response) => response.json())
          .then((data) => {
            // Assuming the data is an array of video objects
            setVideos(data);
          })
          .catch((error) => {
            console.error("Error fetching video data:", error);
          });
      }, []);

    //   end point not functional.
    // const { id } = useParams();
    // const { data: videos, error, isPending  } = useFetch('https://ovidotvideo.onrender.com/get_video/' + id);
    

    return ( 
        // mapping over api results
        <div className="card-content">
            {videos.map((video) => (
                <Link to={`/singleVideo/${video.id}`}>
                <div className="video-card" key={video.id}>
                    <div className="video-frame">
                    <iframe
                        title="Screen Recording"
                        src={video.stream_url}
                        // allowFullScreen={video.allowFullScreen}
                        // width={video.width}
                        // height={video.height} 
                    ></iframe>
                    </div>
                    <div className="video-duration"><p>00:34</p></div>
                        <div className="video-info-wrap">
                            <div className="video-title-date">
                                <p className="video-title">Screen Recording</p>
                                <p className="video-date">SEPTEMBER 23, 2023</p>
                            </div>
                            <div className="video-action-controls">
                                <div className="share-link"></div>
                                <div className="more-actions"><span></span></div>
                            </div>
                        </div>
                </div>
                </Link>
            ))}
        </div>

        // trying to display from another endpoint.
        // <div className="card-content">
        // { videos &&  <Link to={`/singleVideo/${videos.video_id}`}>
        //     <div className="video-card" key={videos.video_id}>
        //         <div className="video-frame">
        //         {/* <iframe
        //             title="Screen Recording"
        //             src={`$videos.file_path`}
        //             // allowFullScreen={video.allowFullScreen}
        //             // width={video.width}
        //             // height={video.height} 
        //         ></iframe> */}
        //         <video width="100%" height="100%" controls >
        //         <source src={videos.file_path} type="video/webm"/>
        //         </video>
        //         </div>
        //         <div className="video-duration"><p>00:34</p></div>
        //             <div className="video-info-wrap">
        //                 <div className="video-title-date">
        //                     <p className="video-title">Screen Recording</p>
        //                     <p className="video-date">SEPTEMBER 23, 2023</p>
        //                 </div>
        //                 <div className="video-action-controls">
        //                     <div className="share-link"></div>
        //                     <div className="more-actions"><span></span></div>
        //                 </div>
        //             </div>
        //     </div>
        //     </Link>
        //     }
        // </div>
     );
}
 
export default VideoCard;