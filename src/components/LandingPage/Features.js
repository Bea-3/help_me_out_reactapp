const Features = () => {
    return ( 
        <div className="features-content">
            <div className="features-header">
                <h1 id="features">Features</h1>
                <p>Key Highlights of Our Extension</p>
            </div>
            <div className="features-article">
                <div className="features-text">
                    <div className="features-text-item">
                        <div className="features-icon">
                            <span className="features-icon-circle"></span>
                        </div>
                        <article className="features-icon-info">
                            <h3>Simple Screen Recording</h3>
                            <p>Effortless screen recording for everyone. Record with ease, no tech expertise required.</p>
                        </article>
                    </div>
                    <div className="features-text-item">
                        <div className="features-icon">
                        <span className="features-icon-send"></span>
                        </div>
                        <article className="features-icon-info">
                            <h3>Easy-to-Share URL</h3>
                            <p>Share your recordings instantly with a single link. No attachments, no downloads.</p>
                        </article>
                    </div>
                    <div className="features-text-item">
                        <div className="features-icon">
                        <span className="features-icon-square"></span>
                        </div>
                        <article className="features-icon-info">
                            <h3>Revisit Recordings</h3>
                            <p>Access and review your past content effortlessly. Your recordings, always at your fingertips.</p>
                        </article>
                    </div>
                    
                </div>
                <div className="features-img"></div>
            </div>
        </div>
     );
}
 
export default Features;