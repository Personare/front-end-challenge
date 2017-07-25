import axios from 'axios';
import $ from 'jquery';
import React, { Component }from 'react';

export default class Jogo extends Component {

     constructor(props) {
        super(props);

        this.state = {
          verso: "https://dkw5ssdvaqf8l.cloudfront.net/static/psr/br/framework/yii/images/content/pt-br/product/tarot/marselha/back-blue-card.png"
        };
      }
    
      render() {
        var verso = this.state.verso;
          var baralho = [];
          var carta = [];
          for(var i=0; i<78; i++) {
            carta.push(
              <div id={i} className="carta">
                <img src={verso} />
              </div>
            );
          }

         $('body').on('click','.carta', function(){
            var id = $(this).attr('id');
            var numero = Math.floor(Math.random() * 78);
            var url = "";
            var titulo = "";

            if (baralho[id] == null){
              baralho[id]= numero;

            }
            url = $("#"+baralho[id]+" img").attr('src');
            $(".amostra img").attr('src', url);
            titulo = $("#"+baralho[id]).attr('value');
            $(".conteudo").css("display", "inline-block");
            $(".descricao h4").text(titulo);
          });
        return (
          <div>
          <div className="conteudo" onClick={this.fechar}>
            <div className="pop-up">
              <div className="fechar" onClick={this.fechar}>X</div>
              <div className="amostra">
                <img src="" />
              </div>
              <div className="descricao">
                <h4></h4>
                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed massa enim, euismod sit amet ultrices a, sodales id metus. Pellentesque dui odio, iaculis quis lobortis a, accumsan ut metus. Ut lacinia at diam eget fermentum. Quisque tristique posuere velit. Nunc viverra nulla quis erat feugiat, id dictum lacus pulvinar. Vivamus dapibus in massa in aliquam. Duis pellentesque diam quis aliquet efficitur. Suspendisse egestas odio in auctor dignissim. Sed sollicitudin ut metus non viverra. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Etiam tempus maximus nulla, vitae elementum lacus venenatis non. Morbi ac finibus diam, ut auctor est. Vivamus quis aliquet magna.
                Integer commodo dolor id arcu posuere sodales. Mauris facilisis metus rutrum vehicula consequat. Aenean posuere augue nulla, id varius sapien efficitur eget. Nulla facilisi. Curabitur non condimentum orci. Integer mauris ex, ornare ut bibendum at, sollicitudin at urna. Cras rhoncus velit a lacus tristique luctus. Ut at condimentum tellus
                </p>
              </div>
              </div>
            </div>

           <div id="grid-content-box" className="content content-jogo">
            {carta}
            </div>

          </div>
        );
    }

    fechar() {
      $(".conteudo").css("display", "none");
    }
}