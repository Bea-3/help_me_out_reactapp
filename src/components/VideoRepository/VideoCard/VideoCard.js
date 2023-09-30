// import React, { useEffect, useState } from "react";
import React from 'react';
import './videoCard.css'

const VideoCard = () => {
    // const [videos, setVideos] = useState([]);

    // useEffect(() => {
    //     // Fetch video data from the endpoint
    //     fetch("your_endpoint_url")
    //       .then((response) => response.json())
    //       .then((data) => {
    //         // Assuming the data is an array of video objects
    //         setVideos(data);
    //       })
    //       .catch((error) => {
    //         console.error("Error fetching video data:", error);
    //       });
    //   }, []);
    const dummyVideos = [
        {
          id: 1,
          title: "Video Title 1",
          dateRecorded: "September 1, 2023",
          thumbnailUrl: "https://media.cnn.com/api/v1/images/stellar/prod/170615135501-iconic-mountains-mount-fitz-roy.jpg",
          videoUrl: "https://www.youtube.com/watch?v=sj5mmSSKAgY",
        },
        {
          id: 2,
          title: "Video Title 2",
          dateRecorded: "September 5, 2023",
          thumbnailUrl: "https://media.cnn.com/api/v1/images/stellar/prod/170615135501-iconic-mountains-mount-fitz-roy.jpg",
          videoUrl: "https://www.youtube.com/watch?v=sj5mmSSKAgY",
        },
        {
          id: 3,
          title: "Video Title 3",
          dateRecorded: "September 10, 2023",
          thumbnailUrl: "https://media.cnn.com/api/v1/images/stellar/prod/170615135501-iconic-mountains-mount-fitz-roy.jpg",
          videoUrl: "https://www.youtube.com/watch?v=sj5mmSSKAgY",
        },
      ];

    return ( 
        // mapping over api results
        <div className="card-content">
            {dummyVideos.map((video) => (
                <div className="video-card" key={video.id}>
                    <div className="video-frame">
                    <iframe
                        title={video.title}
                        src={video.videoUrl}
                        frameBorder="0"
                        allowFullScreen
                    ></iframe>
                    </div>
                    <div className="video-duration"><p>00:34</p></div>
                    <div className="video-info">
                        <div className="video-info-wrap">
                            <div className="video-title-date">
                                <p className="video-title">{video.title}</p>
                                <p className="video-date">{video.dateRecorded}</p>
                            </div>
                            <div className="video-action-controls">
                                <div className="share-link"></div>
                                <div className="more-actions"></div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    //      <div className="card-content">
    //              <div className="video-frame"></div>
    //              <div className="video-duration"><p>00:34</p></div>
    //              <div className="video-info">
    //                  <div className="video-info-wrap">
    //                      <div className="video-title-date">
    //                          <p className="video-title">How to create Facebook Ad listing</p>
    //                          <p className="video-date">SEPTEMBER 23, 2023</p>
    //                      </div>
    //                      <div className="video-action-controls">
    //                          <div className="share-link"></div>
    //                          <div className="more-actions"></div>
    //                      </div>
    //                  </div>
    //              </div>
    //  </div>

     );
}
 
export default VideoCard;