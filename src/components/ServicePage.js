import './ServicePage.css';
import { Link } from 'react-router-dom';
import logo from '../imgs/logotype.jpg';

function ServicePage() {
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
        <section className="services-page">
          <h1>Услуги компании</h1>
          <div className="services-list">
            <div className="service-item">
              <h2>Наши услуги</h2>
              <p><hr />1. Строительство домов под ключ
                Мы предлагаем полный цикл услуг по строительству жилых домов, включая:<br />
                <i>Фундамент</i>: Проектирование и возведение различных типов фундаментов (ленточный, плитный, столбчатый) в зависимости от особенностей участка и типа строения.<br />
                <i>Стены</i>: Строительство стен из различных материалов (кирпич, газобетон, дерево) с учетом тепло- и звукоизоляции.<br />
                <i>Крыша</i>: Монтаж кровли, включая выбор материалов (металлочерепица, черепица, профнастил) и конструктивных решений (скатная, плоская).<br />
                <i>Отделка</i>: Внутренняя и внешняя отделка, включая штукатурку, покраску, укладку плитки и другие работы.
                <hr />
                2. Проектирование
                Наша команда профессиональных архитекторов и дизайнеров предлагает услуги по проектированию:<br />
                Индивидуальные проекты: Разработка уникальных проектов домов с учетом пожеланий клиента и особенностей участка.<br />
                Готовые проекты: Предоставление готовых проектов, которые можно адаптировать под ваши нужды.<br />
                Ландшафтный дизайн: Проектирование благоустройства территории вокруг дома, включая озеленение, дорожки, освещение и другие элементы.
                <hr />
                3. Отделка и ремонт
                Мы предлагаем услуги по отделке и ремонту как новых, так и существующих объектов:<br />
                Внутренняя отделка: Штукатурка, покраска, укладка плитки, установка потолков и перегородок, а также монтаж сантехники и электрики.<br />
                Внешняя отделка: Фасадные работы, включая утепление, облицовку, покраску и другие виды отделки.<br />
                Капитальный и косметический ремонт: Полный спектр услуг по ремонту, включая замену коммуникаций, перепланировку и обновление интерьеров.
                <hr />
                4. Консультации и поддержка<br />
                Мы предоставляем профессиональные консультации по всем вопросам, связанным со строительством и проектированием:<br />
                Оценка стоимости: Помощь в расчете стоимости строительства и отделки, а также составление сметы.<br />
                Выбор материалов: Консультации по выбору строительных и отделочных материалов, их характеристикам и стоимости.<br />
                Сопровождение проекта: Поддержка на всех этапах строительства, включая контроль качества работ и соблюдение сроков.
                <hr />
                5. Калькулятор стоимости строительства
                Мы разработали удобный онлайн-калькулятор, который позволяет вам самостоятельно рассчитать стоимость строительства вашего дома, исходя из выбранных параметров и опций. <br />Калькулятор учитывает:
                Площадь (кв. м.)<br />
                Количество этажей<br />
                Тип фундамента (ленточный, плитный, столбчатый)<br />
                Материал стен (кирпич, дерево, газобетон и т.д.)<br />
                Тип крыши (плоская, скатная)<br />
                Дополнительные опции (балкон, терраса, гараж и т.д.)<hr /></p>
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

export default ServicePage;