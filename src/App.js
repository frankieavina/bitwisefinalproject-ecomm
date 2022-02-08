
import './App.css';
import getProductList from '../src/utils/utils'; 
import { useState, useEffect } from 'react'; 
import ProductsPage from './components/products/ProductsPage';
import { Col, Container, Row } from 'react-bootstrap';

function App() {

  const [itemsList, setItemsList] = useState([]); 

  useEffect(() => {
        getProductList().then((data)=>{
          setItemsList(data);
        });
  }, []); 


  setTimeout(() => {
    console.log(itemsList); 
  }, 4000);


  return (
    <Container>
      <Row>
          { itemsList.map((items)=>(
            <Col md={4}>
                <ProductsPage 
                title={items.title}
                image={items.image}
                price={items.price}
              />
            </Col>
          ))}
        </Row>
    </Container>
  );
}

export default App;
