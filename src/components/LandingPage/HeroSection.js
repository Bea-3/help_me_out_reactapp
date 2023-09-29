import './landingPage.css';

const HeroSection = () => {
    return (  
        <div className="hero-content">
            <section className="install-text">
                <article className="information">
                    <h1>Show Them Don't Just Tell</h1>
                    <p>Help your friends and loved ones by creating and sending videos on how to get things done on a website.</p>
                </article>
                <button className='install-helpmeout-btn'><span>Install HelpMeOut</span>
                <i>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
                <path d="M12.0254 5.44165L17.0837 10.5L12.0254 15.5583" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M2.91699 10.5H16.942" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                </i></button>
            </section>
            <section className="hero-imgs">
                <div className="img-oldwoman"></div>
                <div className="img-males"></div>
                <div className="img-lady"></div>
                <div className="dotted-blue"></div>
                <div className="dotted-grey"></div>
            </section>
        </div>
    );
}
 
export default HeroSection;