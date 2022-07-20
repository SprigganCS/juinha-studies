var dados = document.getElementById("submit");

dados.addEventListener('click' , function(event){
    var total = document.getElementById("total").value;
    var acertos = document.getElementById("acertos").value;
    var data = document.getElementById("data").value;
    data=data.replace('T',' ');

    if(acertos>total){
        alert("Não é possível ter mais acertos que questões");
        event.preventDefault(); //nao sei o que é isso mas deve funcionar
    }
    console.log("Dados de entrada");
    console.log("Total de questões: " + total);
    console.log("Total de acertos: " + acertos);
    console.log("Data: ", data);
});



document.addEventListener('DOMContentLoaded', function() {
    
    loadHTMLTable([]);
});

function loadHTMLTable(data){
    const table = document.querySelector('table tbody');

    if(data.lenght ===0 ){
        table.innerHTML = "<tr><td class='no-data' colspan='5'>No Data</td></tr>";
    }
}