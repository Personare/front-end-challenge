import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(){
    super();
    this.state = { cartas:[] };
  }

  giraImagem(index){
    var stateCopy = Object.assign({}, this.state);
    stateCopy.cartas[index].estado = (this.state.cartas[index].estado==1) ? 0 : 1;
    this.setState({state: stateCopy});
    
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
                carta.image = (carta.image.indexOf('https') == -1) ? 'https://dkw5ssdvaqf8l.cloudfront.net/static/psr/br/framework/yii/images/content/pt-br/product/tarot/marselha/162x341/' + carta.image : carta.image;
                return(
                  <li key={index}>
                    <div className="card" onClick={() => this.giraImagem(index)}>
                      <div className="face side1">
                        <img src="http://www.adrianparr.com/images/card_back.png" />
                      </div>
                      <div className={carta.estado == 1 ? 'face side2' : 'face side2 abre-carta'}>
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
