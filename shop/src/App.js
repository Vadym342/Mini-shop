import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Items from "./components/Items";

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
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
  }
  render() {
    return (
      <div className="wrapper">
        <Header />
        <Items items={this.state.items} />
        <Footer />
      </div>
    );
  }
}

export default App;
