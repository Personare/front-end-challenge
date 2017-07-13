import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(){
    super();
    this.state = { cartas:[] };
  }

  giraImagem(index){
    var stateCopy = Object.assign({}, this.state);
    var testa=0;
    stateCopy.cartas.map( (cartas) => { 
      if(cartas.estado==0){ testa++ }
     });
    if(testa==0){
      stateCopy.cartas[index].estado = (this.state.cartas[index].estado==1) ? 0 : 1;
      this.setState({state: stateCopy});  
    } else{
      alert("É preciso iniciar o jogo para escolher uma carta.");
    }
  }

  iniciarJogo(){
    var stateCopy2 = Object.assign({}, this.state); console.log(stateCopy2);
    stateCopy2.cartas.map( cartas => cartas.estado = 1 );
    for(var i=0; i < 100; i++){
      var number = Math.floor(Math.random() * this.state.cartas.length);
      console.log(number);
      var pegaPrimeiro = stateCopy2.cartas[0];
      stateCopy2.cartas.splice(0, 1);
      stateCopy2.cartas.splice(number, 0,  pegaPrimeiro);
    }

    this.setState({state: stateCopy2});
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
          <input className="inicio-btn" type="button" value="Iniciar Jogo" onClick={this.iniciarJogo.bind(this)} />
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
                          <span>Lorem Ipsum, Mussun Ipsum</span>
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
