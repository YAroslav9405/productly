import managers from '../../img/managers.svg';

const Managers = () => {
    return (
        <section className="managers">
        <div className="container">
            <div className="hero-column">
                <img  className="image" src={managers} alt="image-description"/>
            </div>
            <div className="hero-column">
                <div className="wrap">
                    <div className="validation">
                        <p>Easier decision making for</p>
                   </div>
                   <div className="profesionals-title">
                        <h2 className="new-title">Product Managers</h2>
                   </div>
                   <div className="text-holder personal-choise">
                       <p>The Myspace page defines the individual, his or her characteristics,
                            traits, personal choices and the overall personality of the person. </p>
                   </div>
                   <div className="text-holder personal">
                       <p>Never worry about overpaying for your energy again. </p>
                   </div>
                   <div className="text-holder personal">
                       <p>We will only switch you to energy companies that we trust and will treat you right</p>
                   </div>
                   <div className="text-holder personal">
                       <p>We track the markets daily and know where the savings are.</p>
                   </div>
                </div>
            </div>
        </div>
    </section>
    )
}

export default Managers;