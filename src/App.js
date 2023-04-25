import logo from './logo.svg';
import './App.css';
import { useState} from 'react';


function App() {
  const [formData, setFormData] = useState({ name: '', price: '', message: '' });

  function handleChange(event) {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    const jsonData = JSON.stringify(formData);
    const blob = new Blob([jsonData], { type: 'application/json' });
    const href = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = href;
    link.download = 'form-data.json';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(href);
  }

  return (
    <div className="food">
     <form className="food__form" onSubmit={handleSubmit}>
      <h1>Ediena Karte</h1>
      <label className="food__label" htmlFor="name">Nosaukums:</label>
      <input className="food__input" type="text" id="name" name="name" value={formData.name} onChange={handleChange} />
      <label className="food__label" htmlFor="price">Cena:</label>
      <input className="food__input" type="text" id="price" name="price" value={formData.price} onChange={handleChange} />
      <label className="food__label" htmlFor="message">Apraksts:</label>
      <textarea id="message" name="message" value={formData.message} onChange={handleChange}></textarea>
      <button className="food__button" type="submit">Saglabat</button>
    </form>
    </div>

    
  );
}

export default App;
