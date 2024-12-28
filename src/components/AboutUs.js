import './AboutUs.css';
import { Link } from 'react-router-dom';
import logo from '../imgs/logotype.jpg';

function AboutUs() {
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
        <div className="about-page">
          <h1>О нашем сайте</h1>
          <p>
            О компании
            "Свой Дом" — это надежный партнер в сфере строительства домов, который предлагает полный спектр услуг по проектированию и возведению жилых и коммерческих объектов. Наша команда состоит из опытных специалистов, которые обладают глубокими знаниями и навыками в области строительства, архитектуры и дизайна. Мы стремимся к высокому качеству работы и индивидуальному подходу к каждому клиенту, что позволяет нам успешно реализовывать проекты любой сложности.
            <br />
            С момента своего основания, "Свой Дом" зарекомендовал себя как надежный и ответственный подрядчик, который ценит доверие своих клиентов. Мы используем только современные технологии и качественные материалы, что гарантирует долговечность и надежность построенных объектов.
            <br />
            История компании
            Основана в 2010 году, компания "Свой Дом" быстро зарекомендовала себя на рынке строительства благодаря качеству и надежности своих услуг.
            За годы работы компания реализовала множество успешных проектов, включая жилые комплексы, загородные дома и коммерческие объекты.
            В 2015 году "Свой Дом" получила несколько наград за инновации в строительстве и дизайне.
            <br />
            Команда
            В команде компании работают высококвалифицированные специалисты, включая архитекторов, инженеров и строителей с многолетним опытом.
            Компания активно инвестирует в обучение и развитие своих сотрудников, что позволяет поддерживать высокий уровень профессионализма.
            Руководство компании состоит из опытных менеджеров, которые имеют успешный опыт работы в строительной отрасли и управлении проектами.
            <br />
            Услуги
            Строительство домов под ключ: Мы предлагаем полный цикл услуг по строительству жилых домов, включая проектирование, возведение фундамента, стен, крыши и отделку. Мы работаем с различными материалами, такими как кирпич, газобетон, дерево и другие.
            <br />
            Проектирование: Наша команда архитекторов и дизайнеров разработает индивидуальный проект вашего дома, учитывая все ваши пожелания и требования. Мы создаем функциональные и эстетически привлекательные решения, которые соответствуют современным стандартам.
            <br />
            Отделка и ремонт: Мы предлагаем услуги по внутренней и внешней отделке, включая штукатурку, покраску, укладку плитки и другие работы. Наша цель — создать комфортное и стильное пространство для жизни.
            <br />
            Консультации и поддержка: Мы предоставляем консультации по всем вопросам, связанным со строительством и проектированием. Наша команда готова ответить на ваши вопросы и помочь вам на каждом этапе реализации проекта.
            <br />
            Калькулятор стоимости строительства: Мы разработали удобный онлайн-калькулятор, который позволяет вам самостоятельно рассчитать стоимость строительства вашего дома, исходя из выбранных параметров и опций.
            <br />
            "Свой Дом" — это ваш надежный партнер в строительстве, который поможет вам осуществить мечту о собственном доме с минимальными затратами времени и усилий. Мы гарантируем высокое качество, прозрачность и ответственность на всех этапах работы.
          </p>
          <p>
            Миссия компании "Свой Дом" заключается в создании комфортных и безопасных пространств для жизни и работы, где каждый клиент чувствует заботу и внимание к своим потребностям.

            Ценности компании включают: высокое качество услуг, индивидуальный подход к каждому клиенту, инновации в строительстве, устойчивое развитие и заботу об экологии.

            Основные ценности:

            Качество: Мы стремимся предоставлять услуги наивысшего качества, используя только лучшие материалы и технологии.

            Индивидуальный подход: Каждый проект уникален, и мы учитываем все пожелания и требования наших клиентов.

            Инновации: Мы постоянно ищем новые решения и технологии, чтобы улучшить наши услуги и повысить эффективность работы.

            Устойчивое развитие: Мы заботимся о будущем планеты, используя экологически чистые материалы и практики.

            Командная работа: Мы верим в силу команды и ценим вклад каждого сотрудника, создавая атмосферу сотрудничества и поддержки.
          </p>
          <p>
            Адрес:
            г. Москва, ул. Примерная д. 10

            Телефон:
            8 (999) 177-17-17

            Электронная почта:
            info@architecturecomfort.ru)

            Часы работы:
            Пн - Пт: 10:00 - 19:00
            Сб: 10:00 - 16:00
            Вс: выходной
          </p>
        </div>
      </div>
      <footer className="footer">
        <nav className="nav-bar">
          <ul>
            <li><a href="/">Домой</a></li>
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

export default AboutUs;
