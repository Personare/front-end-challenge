import React, { Component }from 'react';
import $ from 'jquery';

export default class Header extends Component {

      jogo() {
        var texto = $(".iniciar").text();
        if (texto == "Inicio"){
          $(".content-cartas").css("display", "none");
          $(".content-jogo").css("display", "inline-block");
          $(".iniciar").text("Voltar");
        } else {
          $(".content-cartas").css("display", "inline-block");
          $(".content-jogo").css("display", "none");
          $(".iniciar").text("Inicio");
        }
      }

      render() {
        this.jogo;
        return (
          <div className="container">
            <div id="titulo" className="jumbotron">
              <h3>Front-end Challenge</h3> 
              <button type="button" className="btn btn-default iniciar" onClick={this.jogo}>
                Iniciar
              </button>
            </div>
          </div>

        );
    }

}