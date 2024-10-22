import { Link } from "react-router-dom" 

const PRODUCTS = [
    { id: '1', title: 'product 1' },
    { id: '2', title: 'product 2' },
    { id: '3', title: 'product 3' },
    { id: '4', title: 'product 4' },
]

const Products = () => {
  return (
    <div>
        <h1>Products page</h1>
        <ul>
            {PRODUCTS.map(product => (
                <li key={product.id}>
                    <Link to={`${product.id}`}>{product.title}</Link>
                </li>
            ))}            
        </ul>
        {/* <Link to='/' >Go to home page</Link> */}
    </div>
  )
}

export default Products