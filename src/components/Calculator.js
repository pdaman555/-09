import React, { useState } from 'react';
import './Calculator.css';


function Calculator() {
  const [area, setArea] = useState('');
  const [floors, setFloors] = useState('');
  const [foundation, setFoundation] = useState('ленточный');
  const [walls, setWalls] = useState('кирпич');
  const [roof, setRoof] = useState('плоская');
  const [options, setOptions] = useState([]);
  const [cost, setCost] = useState(null);
  const [email, setEmail] = useState('');

  const handleOptionChange = (option) => {
    setOptions((prevOptions) =>
      prevOptions.includes(option)
        ? prevOptions.filter((item) => item !== option)
        : [...prevOptions, option]
    );
  };

  const calculateCost = () => {
    let baseCost = area * floors * 1000;
    if (foundation === 'плитный') baseCost *= 1.2;
    if (foundation === 'столбчатый') baseCost *= 0.9;
    if (walls === 'дерево') baseCost *= 0.8;
    if (walls === 'газобетон') baseCost *= 0.7;
    if (roof === 'скатная') baseCost *= 1.1;

    const optionsCost = options.length * 5000;
    const totalCost = baseCost + optionsCost;

    setCost({
      base: baseCost.toFixed(2),
      options: optionsCost.toFixed(2),
      total: totalCost.toFixed(2),
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    calculateCost();
  };

  return (
    <div className="Calculator">
      <h2>Калькулятор стоимости строительства</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Площадь (кв. м.):
          <input
            type="number"
            value={area}
            onChange={(e) => setArea(e.target.value)}
            required
          />
        </label>
        <label>
          Количество этажей:
          <input
            type="number"
            value={floors}
            onChange={(e) => setFloors(e.target.value)}
            required
          />
        </label>
        <label>
          Тип фундамента:
          <select
            value={foundation}
            onChange={(e) => setFoundation(e.target.value)}
          >
            <option value="ленточный">Ленточный</option>
            <option value="плитный">Плитный</option>
            <option value="столбчатый">Столбчатый</option>
          </select>
        </label>
        <label>
          Материал стен:
          <select value={walls} onChange={(e) => setWalls(e.target.value)}>
            <option value="кирпич">Кирпич</option>
            <option value="дерево">Дерево</option>
            <option value="газобетон">Газобетон</option>
          </select>
        </label>
        <label>
          Тип крыши:
          <select value={roof} onChange={(e) => setRoof(e.target.value)}>
            <option value="плоская">Плоская</option>
            <option value="скатная">Скатная</option>
          </select>
        </label>
        <fieldset>
          <legend>Дополнительные опции:</legend>
          <label>
            <input
              type="checkbox"
              value="балкон"
              checked={options.includes('балкон')}
              onChange={() => handleOptionChange('балкон')}
            />
            Балкон
          </label>
          <label>
            <input
              type="checkbox"
              value="терраса"
              checked={options.includes('терраса')}
              onChange={() => handleOptionChange('терраса')}
            />
            Терраса
          </label>
          <label>
            <input
              type="checkbox"
              value="гараж"
              checked={options.includes('гараж')}
              onChange={() => handleOptionChange('гараж')}
            />
            Гараж
          </label>
        </fieldset>
        <button type="submit">Рассчитать стоимость</button>
      </form>
      {cost && (
        <div className="cost-result">
          <h3>Итоговая стоимость:</h3>
          <p>Базовая стоимость: {cost.base} руб.</p>
          <p>Дополнительные опции: {cost.options} руб.</p>
          <p>Общая стоимость: {cost.total} руб.</p>
          <label>
            Введите email для отправки:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="example@mail.com"
            />
          </label>
          <button
            onClick={() => alert(`Расчет отправлен на email: ${email}`)}
          >
            Отправить
          </button>
        </div>
      )}
    </div>
  );
}

export default Calculator;
