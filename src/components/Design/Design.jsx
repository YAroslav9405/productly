import click from '../../img/click .png';
import snake from '../../img/snake.png';
import heart from '../../img/heart.png';
import tower from '../../img/tower.png';

const Design = () => {
    return (
        <section className="design-tools">
            <div className="container">
                <div className="title">
                    <h2 className="design-title">We design tools to unveil your superpowers</h2>
                </div>
                <ul className="tools-list">
                    <li className="tools-item">
                        <div className="tools-img">
                            <img src={click} alt="image-description" className="img" width="50"/>
                        </div>
                        <div>
                            <h3 className="tools-title">First click tests</h3>
                        </div>
                        <div className="text-holder">
                            <p>While most people enjoy casino gambling.</p>
                        </div>
                    </li>
                    <li className="tools-item">
                        <div className="tools-img">
                            <img src={snake} alt="image-description" className="img" width="50"/>
                        </div>
                        <div>
                            <h3 className="tools-title">Design surveys</h3>
                        </div>
                        <div className="text-holder">
                            <p>Sports betting, lottery and bingo playing for the fun</p>
                        </div>
                    </li>
                    <li className="tools-item">
                        <div className="tools-img">
                            <img src={heart} alt="image-description" className="img" width="50"/>
                        </div>
                        <div>
                            <h3 className="tools-title">Preference tests</h3>
                        </div>
                        <div className="text-holder">
                            <p>The Myspace page defines the individual.</p>
                        </div>
                    </li>
                    <li className="tools-item">
                        <div className="tools-img">
                            <img src={tower} alt="image-description" className="img" width="50"/>
                        </div>
                        <div>
                            <h3 className="tools-title">Five second tests</h3>
                        </div>
                        <div className="text-holder">
                            <p>Personal choices and the overall personality of the person. </p>
                        </div>
                    </li>
                </ul>
                <div className="btn-item tools">
                    <a className="btn btn-tools" href="#">SING UP NOW</a>
                </div>
            </div>
        </section>
    )
}

export default Design;
