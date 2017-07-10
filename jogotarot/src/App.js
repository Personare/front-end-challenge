import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(){
    super();
    this.state = { cartas:[] };
  }

  giraImagem(index){
    console.log("Click");
    // this.setState({});
    console.log(this.state.cartas[index].state); console.log(index);
    this.state.cartas[index].state = !this.state.cartas[index].state;
  }

  componentDidMount(){
    fetch('tarot.json')
    .then(response => response.json())
    .then(cartas =>{
        this.setState({cartas: cartas.cards});
    });
  }

  render() {
    return (
      <section id="wrapper">
          <ul>
            {
              this.state.cartas.map(function(carta, index){ 
                carta.image = 'https://dkw5ssdvaqf8l.cloudfront.net/static/psr/br/framework/yii/images/content/pt-br/product/tarot/marselha/162x341/' + carta.image;
                return(
                  <li key={index}>
                    <div className="card" onClick={() => this.giraImagem(index)}>
                      <div className="face side1">
                        <img src="http://www.adrianparr.com/images/card_back.png" />
                      </div>
                      <div className="{carta.state ? 'face side2 abre-carta' : 'face side2'}">
                          <img src={carta.image} />
                      </div>  
                    </div>    
                  </li>
                  );
              }.bind(this))
            }
          </ul>
      </section>
    );
  }
}

export default App;
