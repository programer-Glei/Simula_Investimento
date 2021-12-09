
function somar(){
    let valor = document.querySelector(".input-valor input").value

    document.querySelector("table .date").innerHTML = `R$ ${valor},00`
}
