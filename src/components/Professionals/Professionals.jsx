import professionalsImg from '../../img/professionals.svg';

const Professionals = () => {
    return (
        <section className="professionals">
            <div className="container">
                <div className="hero-column">
                    <img  className="image" src={professionalsImg} alt="image-description"/>
                </div>
                <div className="hero-column">
                   <div className="validation">
                        <p>Effortless Validation for</p>
                   </div>
                   <div className="profesionals-title">
                        <h2 className="new-title">Design Professionals</h2>
                   </div>
                   <div className="text-holder myspace">
                        <p>The Myspace page defines the individual, his or her
                             characteristics, traits, personal choices and the overall personality of the person. </p>
                   </div>
                   <div className="text-holder strong">
                        <p>Accessory makers</p>
                   </div>
                   <div className="text-holder profi">
                        <p>While most people enjoy casino gambling, sports betting, lottery and bingo playing for the fun</p>
                   </div>
                   <div className="text-holder strong">
                        <p>Alterationists</p>
                   </div>
                   <div className="text-holder profi">
                        <p>If you are looking for a new way to promote your business that won’t cost you more money, </p>
                   </div>
                   <div className="text-holder strong">
                        <p>Custom Design designers</p>
                   </div>
                   <div className="text-holder profi">
                        <p>If you are looking for a new way to promote your business that won’t cost you more money, </p>
                   </div>
                </div>
            </div>
        </section>
    )
}

export default Professionals;