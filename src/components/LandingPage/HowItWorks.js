const HowItWorks = () => {
    return ( 
        <div className="works-content">
            <div className="works-header">
                <h1 id="howItWorks">How it works</h1>
            </div>
            <div className="works-article">
                <div className="works-card">
                    <div className="works-card-head">
                        <h1>1</h1>
                    </div>
                    <div className="works-card-text">
                        <h3>Record Screen</h3>
                        <p>Click the "Start Recording" button in our extension.  choose which part of your screen to capture and who you want to send it to.</p>
                    </div>
                    <div className="works-card-img"></div>
                </div>
                <div className="works-card">
                    <div className="works-card-head">
                        <h1>2</h1>
                    </div>
                    <div className="works-card-text">
                        <h3>Share Your Recording</h3>
                        <p>We generate a shareable link for your video. Simply send it to your audience via email or copy the link to send via any platform.</p>
                    </div>
                    <div className="works-card-img"></div>
                </div>
                <div className="works-card">
                    <div className="works-card-head">
                        <h1>3</h1>
                    </div>
                    <div className="works-card-text">
                        <h3>Learn Effortlessly</h3>
                        <p>Recipients can access your video effortlessly through the provided link, with our user-friendly interface suitable for everyone.</p>
                    </div>
                    <div className="works-card-img"></div>
                </div>
            </div>
        </div>
     );
}
 
export default HowItWorks;