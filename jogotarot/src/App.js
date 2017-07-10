import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(){
    super();
    this.state = { cartas:[] };
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
              this.state.cartas.map(function(carta, i){ 
                carta.image = 'https://dkw5ssdvaqf8l.cloudfront.net/static/psr/br/framework/yii/images/content/pt-br/product/tarot/marselha/162x341/' + carta.image
                return(
                    <div className="card" key={i}>
                      <div className="face side1">
                        <img src="http://www.adrianparr.com/images/card_back.png" />
                      </div>
                      <div className="face side2">
                          <img src={carta.image} />
                      </div>  
                    </div>    
                  );
              })
            }
          </ul>
      </section>
    );
  }
}

export default App;
