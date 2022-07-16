import heroImg from '../../img/image.svg';

const Hero = () => {
    return (
        <section className="hero-section">
            <div className="container">
                <div className="hero-column">
                    <img  className="image" src={heroImg} alt="image-description"/>
                </div>
                <div className="hero-column">
                    <h1 className="hero-title">The Design Thinking superpowers</h1>
                    <div className="text-holder"> 
                        <p>Tools, tutorials, design and innovation experts, all in one place!
                            The most intuitive way to imagine your next user experience.</p>
                    </div>
                    <ul className="hero-btn-list">
                        <li className="btn-item"><a className="btn btn-xl" href="#">Get Started</a></li>
                        <li className="btn-item"><a className="video-link" href="#">Watch the Video</a></li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Hero;