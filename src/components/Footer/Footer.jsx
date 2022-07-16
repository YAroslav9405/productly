import logoFooter from '../../img/logo.png';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <hr className="line"/>
                <div className="logo-holder">
                    <a href="#" className="logo"> 
                        <img  className="img-logo" src={logoFooter} alt="productly" width="185"/>
                    </a>
                </div>
                <div className="footer-holder">
                    <div className="contact">
                        <ul className="contact-list first-one">
                            <li className="footer-item">
                                <a href="#" className="footer-link">About Us</a>
                            </li>
                            <li className="footer-item">
                                <a href="#" className="footer-link">Blog</a>
                            </li>
                            <li className="footer-item">
                                <a href="#" className="footer-link">Contact</a>
                            </li>
                            <li className="footer-item">
                                <a href="#" className="footer-link">FAQ</a>
                            </li>
                        </ul>
                        <ul className="contact-list">
                            <li className="footer-item">
                                <a href="#" className="footer-link">Disclaimer</a>
                            </li>
                            <li className="footer-item">
                                <a href="#" className="footer-link">Financing</a>
                            </li>
                            <li className="footer-item">
                                <a href="#" className="footer-link">Privacy Policy</a>
                            </li>
                            <li className="footer-item">
                                <a href="#" className="footer-link">Teams of Service</a>
                            </li>
                        </ul>
                    </div>
                    <div className="input-holder">
                        <input type="text" className="input-text"/>
                        <input type="submit" value="Sing up Now" className="btn submit"/>
                    </div>
                </div>

            </div>
        </footer>
    )
}

export default Footer;