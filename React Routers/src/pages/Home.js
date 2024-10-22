import { Link, useNavigate } from "react-router-dom"
const Home = () => {
    const navigate = useNavigate();
    function navigateHandler() {
        navigate('/products')
    }
  return (
    <div>
        <h1>Home page</h1>
        <Link to='/products' >Go to products page</Link>
        <p>
            <button onClick={navigateHandler}>Navigate</button>
        </p>
    </div>
  )
}

export default Home;