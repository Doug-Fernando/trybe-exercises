import React from 'react';
import '../App.css';
import Order from './Order';

class AppForOrder extends React.Component {
  render() {
    
    const items = [{
      id: 102,
      user: "cena@gmail.com",
      product: "Razer Headphone",
      price: {
        value: 99.99,
        currency: "dollars"
      }
    },
    {
      id: 77,
      user: "cena@gmail.com",
      product: "Monster 500mL",
      price: {
        value: 9.99,
        currency: "dollars"
      }
    }];
    
    const ListItems = () => {
      return items.map(item => <Order order={item} key={item.id} />)
    };
    

    return (
      <div className="App">
        <h1> Orders recently created </h1>
          <ListItems /> 
      </div>
    );
  }
}

export default AppForOrder;
