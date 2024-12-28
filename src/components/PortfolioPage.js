import './PortfolioPage.css';
import image1 from '../imgs/image1.jpg';
import image2 from '../imgs/image2.jpg';
import image3 from '../imgs/image3.jpeg';
import image4 from '../imgs/image4.webp';
import image5 from '../imgs/image5.jpg';
import image6 from '../imgs/image6.jpg';
import image7 from '../imgs/image7.jpg';
import image8 from '../imgs/image8.jpg';
import image9 from '../imgs/image9.jpg';
import image10 from '../imgs/image10.jpg';
import image11 from '../imgs/image11.jpg';
import logo from '../imgs/logotype.jpg';
import { Link } from 'react-router-dom';

function PortfolioPage() {
  return (
    <div className="page-container">
      <header className="header">
        <img src={logo} alt="logo" />
        <hr />
        <nav className="nav-bar">
          <ul>
            <li><a href="/">Домой</a></li>
            <li><Link to="/about">О нас</Link></li>
            <li><Link to="/service">Услуги</Link></li>
            <li><Link to="/portfolio">Портфолио</Link></li>
            <li><Link to="/contact">Контакты</Link></li>
          </ul>
        </nav>
      </header>
      <div className="main-content">
        <section id="portfolio" className="portfolio-page">
          <h1>Наши работы</h1>
          <div className="portfolio-gallery">
            <div className="portfolio-item">
              <img src={image1} alt="Проект 1" />
              <p>Проект 1</p>
            </div>
            <div className="portfolio-item">
              <img src={image2} alt="Проект 2" />
              <p>Проект 2</p>
            </div>
            <div className="portfolio-item">
              <img src={image3} alt="Проект 3" />
              <p>Проект 3</p>
            </div>
            <div className="portfolio-item">
              <img src={image4} alt="Проект 4" />
              <p>Проект 4</p>
            </div>
            <div className="portfolio-item">
              <img src={image5} alt="Проект 5" />
              <p>Проект 5</p>
            </div>
            <div className="portfolio-item">
              <img src={image6} alt="Проект 6" />
              <p>Проект 6</p>
            </div>
            <div className="portfolio-item">
              <img src={image7} alt="Проект 7" />
              <p>Проект 7</p>
            </div>
            <div className="portfolio-item">
              <img src={image8} alt="Проект 8" />
              <p>Проект 8</p>
            </div>
            <div className="portfolio-item">
              <img src={image9} alt="Проект 9" />
              <p>Проект 9</p>
            </div>
            <div className="portfolio-item">
              <img src={image10} alt="Проект 10" />
              <p>Проект 10</p>
            </div>
            <div className="portfolio-item">
              <img src={image11} alt="Проект 11" />
              <p>Проект 11</p>
            </div>
          </div>
        </section>
      </div>
      <footer className="footer">
        <nav className="nav-bar">
          <ul>
            <li><a href="#home">Домой</a></li>
            <li><Link to="/about">О нас</Link></li>
            <li><Link to="/service">Услуги</Link></li>
            <li><Link to="/portfolio">Портфолио</Link></li>
            <li><Link to="/contact">Контакты</Link></li>
          </ul>
        </nav>
      </footer>
    </div>
  );
}

export default PortfolioPage;