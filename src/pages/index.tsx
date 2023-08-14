import { useNavigate } from 'react-router-dom';
const Home = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Hello Home</h1>
      <p onClick={() => navigate('/questions')}>Questions</p>
      <p onClick={() => navigate('/login')}>Login</p>
      <p onClick={() => navigate('/countdown')}>Countdown</p>
    </div>
  );
};

export default Home;
