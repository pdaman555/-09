import React from 'react';
import './ContactPage.css';
import { Link } from 'react-router-dom';
import mapImage from '../imgs/map.png';
import logo from '../imgs/logotype.jpg';

function ContactPage() {
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
        <section id="contact" className="contact-page">
          <h1>Форма обратной связи</h1>
          <form>
            <label>Ваше имя:</label><br />
            <input type="text" name="name" /><br /><br />
            <label>Ваш email:</label><br />
            <input type="email" name="email" /><br /><br />
            <button type="submit">Отправить</button>
          </form>
        </section>
        <br />
      </div>
      <p>
        Адрес:<br />
        г. Москва, ул. Примерная д. 10<br /><br />
        Телефон:<br />
        8 (999) 177-17-17<br /><br />
        Электронная почта:<br />
        info@architecturecomfort.ru<br /><br />
        Часы работы:<br />
        Пн - Пт: 10:00 - 19:00<br />
        Сб: 10:00 - 16:00<br />
        Вс: выходной
      </p>
      <hr />
      <img src={mapImage} alt="Карта" />
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

export default ContactPage;
