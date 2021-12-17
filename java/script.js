const elem = (el) => document.querySelector(el)

function ret(taxa,valor,ano){
  let resut = valor + ((valor * taxa)*ano)
  return resut
}

function somar(){
    let valor = document.querySelector(".input-valor input").value

    let lista = valor.split('')
    console.log(lista)

    let numero = ""

    for(let i in lista){
        if (lista[i] != "."){
            if(lista[i] == ","){
                numero += "."
            }else{
                numero += lista[i]
            }
        }
    }

    let conver = parseFloat(numero)
    let taxap = 0.068
    

    elem("table .p-1").innerHTML = `R$ ${ret(taxap,conver,1).toFixed(2)}`
    elem("table .p-2").innerHTML = `R$ ${ret(taxap,conver,2).toFixed(2)}`
    elem("table .p-5").innerHTML = `R$ ${ret(taxap,conver,5).toFixed(2)}`
    elem("table .p-10").innerHTML = `R$ ${ret(taxap,conver,10).toFixed(2)}`
    elem("table .p-20").innerHTML = `R$ ${ret(taxap,conver,20).toFixed(2)}`
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