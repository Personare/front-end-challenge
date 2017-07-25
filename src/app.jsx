import axios from 'axios';
import $ from 'jquery';
import React, { Component }from 'react';

export default class Cartas extends Component {

     constructor(props) {
        super(props);

        this.state = {
          baralho: []
        };
      }
    
      componentDidMount() {
        axios.get('tarot.json')
              .then(function(results){
                  this.setState({
                    baralho: (results.data)
                  });
              }.bind(this));
          }


      render() {
        var baralho = this.state.baralho;
        if(baralho.cards != null) {
          console.log(baralho);

          var carta = [];
          var img = baralho.imagesUrl;
          for(var i=0; i<baralho.cards.length; i++) {
            carta.push(
              <div className="carta">
                <img src={img+baralho.cards[i].image} />
              </div>
            );
          }
        }
        return (
          <div id="grid-content-box" className="content">
            {carta}
          </div>
        );
    }

}