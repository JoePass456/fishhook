import React, { useState } from 'react';
import './App.css';
import Nav from './Nav.js';
import Header from './Header.js';
import Form from './Form.js';
import { Container } from 'reactstrap';

function App() {
  const [currentTab, setCurrentTab] = useState(0);
  const [data, setData] = useState([
    {
      tabName: 'Poles',
      items: [
        {
          name: 'Ugly Stick',
          price: 49.99,
          qty: 1
        }, {
          name: 'Toadfish',
          price: 99.99,
          qty: 2
        }, {
          name: 'DepthMaster',
          price: 69.99,
          qty: 5
        }
      ]
    }, {
      tabName: 'Lures',
      items: [
        {
          name: 'Whopper Plopper',
          price: 15.49,
          qty: 0
        }, {
          name: 'Trashmaster',
          price: 9.99,
          qty: 0
        }, {
          name: 'Jack Hammer',
          price: 12.79,
          qty: 0
        }, {
          name: 'Blue Fox',
          price: 5.49,
          qty: 0
        }, {
          name: 'Husky Jerk',
          price: 5.49,
          qty: 0
        }
      ]
    }, {
      tabName: 'Boats',
      items: [
        {
          name: 'Boat',
          price: 599.99,
          qty: 0
        }, {
          name: 'Bigger Boat - You\'ll know if you need it',
          price: 59999.99,
          qty: 0
        }
      ]
    }, {
      tabName: 'Delivery',
      items: [
        {
          name: 'Snail Mail',
          price: 0,
          qty: 0
        },
        {
          name: 'EPS',
          price: 25,
          qty: 0
        }, {
          name: 'Drone Strike',
          price: 99.99,
          qty: 0
        }
      ]
    }, {
      tabName: 'Place Order',
    }
  ]);

  const title = "Joe's Tackle Shop";

  const submitQty = (newQty) => {
    newQty.preventDefault();
    console.log('inside submitQty', newQty);
  }

  const adjustQty = (e) => {
    console.log('inside adjustQty', e.target.value, e.target.dataset.index);
    let i = parseInt(e.target.dataset.index);
    let newData = data;
    newData[currentTab].items[i].qty = parseInt(e.target.value);
    console.log(newData[currentTab].items[i]) 
    setData(newData);
    
  }

  const tabChanger = (newTab) => {
    //console.log('in tabChanger', newTab);
    setCurrentTab(newTab);
  }

  return (
    <Container>
      <Header title={title} />
      <Nav tabChanger={tabChanger} data={data} currentTab={currentTab} />
      <Form submitQty={submitQty} adjustQty={adjustQty} tabData={data[currentTab]} />
    </Container>
  );
}

export default App;
