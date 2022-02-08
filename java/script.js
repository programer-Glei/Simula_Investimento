const elem = (el) => document.querySelector(el)

function ret(taxa,valor,ano){
  let resut = valor * (1 + taxa/100)**ano
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
    let taxap = 6.8
    let taxapi = 11.71
    let taxanu = 10.65
    let ts24 = 10.65
    let ts27 = 10.67
    let pay = 20.13
    

    elem("table .p-1").innerHTML = `${ret(taxap,conver,1).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}`
    elem("table .p-2").innerHTML = `${ret(taxap,conver,2).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}`
    elem("table .p-5").innerHTML = `${ret(taxap,conver,5).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}`
    elem("table .p-10").innerHTML = `${ret(taxap,conver,10).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}`
    elem("table .p-20").innerHTML = `${ret(taxap,conver,20).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}`

    elem("table .pi-1").innerHTML = `${ret(taxapi,conver,1).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}`
    elem("table .pi-2").innerHTML = `${ret(taxapi,conver,2).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}`
    elem("table .pi-5").innerHTML = `${ret(taxapi,conver,5).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}`
    elem("table .pi-10").innerHTML = `${ret(taxapi,conver,10).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}`
    elem("table .pi-20").innerHTML = `${ret(taxapi,conver,20).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}`

    elem("table .nu-1").innerHTML = `${ret(taxanu,conver,1).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}`
    elem("table .nu-2").innerHTML = `${ret(taxanu,conver,2).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}`
    elem("table .nu-5").innerHTML = `${ret(taxanu,conver,5).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}`
    elem("table .nu-10").innerHTML = `${ret(taxanu,conver,10).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}`
    elem("table .nu-20").innerHTML = `${ret(taxanu,conver,20).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}`

    elem("table .ts24-1").innerHTML = `${ret(ts24,conver,1).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}`
    elem("table .ts24-2").innerHTML = `${ret(ts24,conver,2).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}`
    elem("table .ts24-5").innerHTML = `${ret(ts24,conver,5).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}`
    elem("table .ts24-10").innerHTML = `${ret(ts24,conver,10).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}`
    elem("table .ts24-20").innerHTML = `${ret(ts24,conver,20).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}`

    elem("table .ts27-1").innerHTML = `${ret(ts27,conver,1).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}`
    elem("table .ts27-2").innerHTML = `${ret(ts27,conver,2).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}`
    elem("table .ts27-5").innerHTML = `${ret(ts27,conver,5).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}`
    elem("table .ts27-10").innerHTML = `${ret(ts27,conver,10).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}`
    elem("table .ts27-20").innerHTML = `${ret(ts27,conver,20).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}`

    if(conver > 5000){
      console.log("entrou")
      conver = 5000
      elem("table .pay-1").innerHTML = `${ret(pay,conver,1).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}`
      elem("table .pay-2").innerHTML = `${ret(pay,conver,2).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}`
      elem("table .pay-5").innerHTML = `${ret(pay,conver,5).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}`
      elem("table .pay-10").innerHTML = `${ret(pay,conver,10).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}`
      elem("table .pay-20").innerHTML = `${ret(pay,conver,20).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}`
    }else{
      console.log("não entrou")
      elem("table .pay-1").innerHTML = `${ret(pay,conver,1).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}`
      elem("table .pay-2").innerHTML = `${ret(pay,conver,2).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}`
      elem("table .pay-5").innerHTML = `${ret(pay,conver,5).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}`
      elem("table .pay-10").innerHTML = `${ret(pay,conver,10).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}`
      elem("table .pay-20").innerHTML = `${ret(pay,conver,20).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}`
    }
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