import React, {useState, useEffect} from 'react'
import {Row, Col} from 'react-bootstrap';
import Product from '../components/Product';
import axios from 'axios';

function HomeScreen() {
  //setting the state product and updating the state product using setProduct. 
  const [products, setProducts] = useState([]);
  //useEfect gets loaded every single time the component loads or state gets updated
  useEffect(() => {

    async function fetchProducts(){

      const { data } = await axios.get('/api/products/')
      setProducts(data)
      
    }
    fetchProducts()
  }, [])

  return (
    <div>
        <h1>LATEST PRODUCTS</h1>
        <Row>
          {products.map(product => (
            <Col key={product._id}  sm={12} md={6} lg={4} xl={3}>
                <Product product={product}/>
            </Col>
          ))}

        </Row>
    </div>
  )
}

export default HomeScreen