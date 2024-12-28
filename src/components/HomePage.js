import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';
import './AboutUs.css';
import './ContactPage.css';
import image1 from '../imgs/image1.jpg';
import image2 from '../imgs/image2.jpg';
import image3 from '../imgs/image3.jpeg';
import logo from '../imgs/logotype.jpg';
import Calculator from './Calculator';

function HomePage() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [image1, image2, image3];

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const reviews = [
    {
      name: 'Анна и Сергей Петровы',
      text: `"Мы обратились в Архитектура Комфорта для строительства нашего первого дома, и остались в полном восторге! С самого начала команда проявила высокий уровень профессионализма и внимательности к нашим пожеланиям. Проект был разработан быстро и с учетом всех наших требований. Строительство прошло в срок, а качество работ превзошло наши ожидания. Теперь у нас есть уютный дом, в котором мы счастливо живем. Рекомендуем всем!"`,
    },
    {
      name: 'Игорь Сидоров',
      text: `"Хочу выразить благодарность Архитектура Комфорта за отличную работу! Я долго искал надежного подрядчика для строительства дачи, и, наконец, нашел. Команда профессионалов помогла мне на каждом этапе — от проектирования до отделки. Особенно понравился калькулятор стоимости, который позволил заранее понять, какие расходы нас ожидают. Все было сделано качественно и в срок. Обязательно буду рекомендовать вас своим друзьям!"`,
    },
    {
      name: 'Елена Кузнецова',
      text: `"С Архитектура Комфорта мы строили дом для нашей семьи. В целом, мы довольны результатом. Работы были выполнены качественно, и команда всегда была на связи, что очень важно. Единственное, что хотелось бы улучшить — это скорость выполнения некоторых этапов. Но в целом, мы получили именно тот дом, о котором мечтали. Спасибо за вашу работу!"`,
    },
  ];

  return (
    <div className="HomePage">
      <header className="header">
        <img src={logo} alt="logo" />
        <hr />
        <nav className="nav-bar">
          <ul>
            <li><a href="#home">Главная страница</a></li>
            <li><Link to="/about">О нас</Link></li>
            <li><Link to="/service">Услуги</Link></li>
            <li><Link to="/portfolio">Портфолио</Link></li>
            <li><Link to="/contact">Контакты</Link></li>
          </ul>
        </nav>
      </header>

      <section id="home" className="home-page">
        <div className="carousel">
          <button className="carousel-button prev" onClick={handlePrev}>←</button>
          <div className="carousel-track">
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Картинка ${index + 1}`}
                className={`carousel-image ${index === currentIndex ? "active" : ""}`}
              />
            ))}
          </div>
          <button className="carousel-button next" onClick={handleNext}>→</button>
        </div>

        <section className="about-page">
          <h1>О нас</h1>
          <p>
            "Свой Дом" — надежный партнер в сфере строительства домов, предлагающий полный спектр услуг по проектированию и возведению жилых и коммерческих объектов. Мы обеспечиваем высокое качество работы и индивидуальный подход к каждому клиенту. Основанная в 2010 году, компания быстро зарекомендовала себя на рынке благодаря надежности и инновациям.

            Наша команда включает архитекторов, инженеров и строителей с многолетним опытом. Мы предлагаем услуги по строительству домов под ключ, проектированию, отделке и ремонту, а также консультируем на всех этапах проекта. Также доступен онлайн-калькулятор для расчета стоимости строительства. Мы гарантируем качественные и долговечные объекты, а также прозрачность на всех этапах работы.
          </p>
        </section>
      </section>

      <section className="services-page">
        <h1>Наши услуги</h1>
        <div className="services-list">
          <div className="service-item">
            <h2>Строительство и проектирование</h2>
            <p>Мы предлагаем полный цикл услуг по строительству домов под ключ, включая проектирование, возведение фундамента, стен, крыши и отделку.</p>
          </div>
          <div className="service-item">
            <h2>Отделка и ремонт</h2>
            <p>Внутренняя и внешняя отделка, включая штукатурку, покраску и укладку плитки для создания комфортного пространства.</p>
          </div>
          <div className="service-item">
            <h2>Консультации и калькулятор стоимости</h2>
            <p>Профессиональные консультации и удобный онлайн-калькулятор для расчета стоимости строительства вашего дома.</p>
          </div>
        </div>
      </section>
      <section id='calculator'>
        <Calculator />
      </section>

      {/* Блок отзывов */}
      <section className="reviews">
        <h1>Отзывы наших клиентов</h1>
        <div className="reviews-list">
          {reviews.map((review, index) => (
            <div key={index} className="review-item">
              <h3>{review.name}</h3>
              <p>{review.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="contact-page">
        <h1>Контакты</h1>
        <form>
          <label>Ваше имя:</label><br />
          <input type="text" name="name" /><br /><br />
          <label>Ваш email:</label><br />
          <input type="email" name="email" /><br /><br />
          <button type="submit">Отправить</button>
        </form>
      </section>
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

export default HomePage;



