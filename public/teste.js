function sortear() {
        var numero = Math.floor(Math.random() * 78);
        $(".pop-up").css("display", "inline-block");
        var baralho = this.state.baralho;
        console.log(baralho);
        var img = baralho.imagesUrl;
        $(".amostra img").src(img+baralho.cards[numero].image);
      }

    function fechar() {
      $(".pop-up").css("display", "none");
    }