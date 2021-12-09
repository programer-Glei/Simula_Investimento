
function somar(){
    let valor = document.querySelector(".input-valor input").value

    document.querySelector("table .date").innerHTML = `R$ ${valor}`
}

String.prototype.reverse = function(){
    return this.split('').reverse().join(''); 
  };

function mascaraMoeda(campo,evento){
    let tecla = (!evento) ? window.event.keyCode : evento.which;
    let valor  =  campo.value.replace(/[^\d]+/gi,'').reverse();
    let resultado  = "";
    let mascara = "##.###.###,##".reverse();
    for (var x=0, y=0; x<mascara.length && y<valor.length;) {
      if (mascara.charAt(x) != '#') {
        resultado += mascara.charAt(x);
        x++;
      } else {
        resultado += valor.charAt(y);
        y++;
        x++;
      }
    }
    campo.value = resultado.reverse();
  }