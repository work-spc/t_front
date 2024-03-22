import { useNavigate } from 'react-router-dom';
import './App.css';

function HomePage() {
  const navigate = useNavigate();
  return (
    <>
    
      <div className='greet_container'>
        <div className='greet_text'>
          <a>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto quidem ea minus ipsum dolore, culpa neque exercitationem alias officiis quis pariatur, voluptatum cupiditate sit totam reiciendis quod quisquam iure rem! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto quidem ea minus ipsum dolore, culpa neque exercitationem alias officiis quis pariatur, voluptatum cupiditate sit totam reiciendis quod quisquam iure rem!</a>
        </div>
        <div className='greet_start_container'>
        <h1>Пройти тестирование онлайн</h1>
        <button onClick={() => navigate("/test")}>Начать тестирование</button>
        <a>Нажимая на кнопку "Начать тестирование", вы даете согласие на <a href='#footer'>обработку персональных данных </a> </a>
        </div>
      </div>
    </>
  );
}

export default HomePage;