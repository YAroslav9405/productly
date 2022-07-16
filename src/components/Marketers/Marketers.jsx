import marketers from '../../img/marketers.svg';

const Marketers = () => {
    return (
        <section className="marketers">
            <div className="container">
                <div className="hero-column">
                    <img  className="image" src={marketers} alt="image-description"/>
                </div>
                <div className="hero-column">
                    <div className="validation">
                        <p>Optimisation for</p>
                   </div>
                   <div className="profesionals-title">
                        <h2 className="new-title">Marketers</h2>
                   </div>
                   <div className="text-holder">
                        <p>Few would argue that, despite the advancements of feminism over the past three decades,
                             women still face a double standard when it comes to their behavior. </p>
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

export default Marketers;