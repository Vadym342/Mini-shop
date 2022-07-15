import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Items from "./components/Items";

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      orders: [],
      items: [
        {
          id: 1,
          title: "Стіл",
          img: "table.jpeg",
          desc: "sometext",
          category: "1",
          price: "49.99"
        },
        {
          id: 2,
          title: "Диван",
          img: "sofa.jpeg",
          desc: "sometext",
          category: "2",
          price: "51.99"
        },
        {
          id: 3,
          title: "Тумба",
          img: "stone.jpeg",
          desc: "sometext",
          category: "3",
          price: "53.99"
        }
      ]
    }
    this.addToOrder = this.addToOrder.bind(this)
  }
  render() {
    return (
      <div className="wrapper">
        <Header orders={this.state.orders} />
        <Items items={this.state.items} onAdd={this.addToOrder} />
        <Footer />
      </div>
    );
  }

  addToOrder(item) {
    this.setState({ orders: [...this.state.orders, item] })
  }

}

export default App;
