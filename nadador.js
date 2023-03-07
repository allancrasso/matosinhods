function calculaId(){
    var idade = parseFloat(document.getElementById("idade").value);

    if ((idade>=5)&&(idade<=7)){
        alert("Infantil A")
    }
    else {
        if ((idade>=8)&&(idade<=10)){
            alert("Infantil B")
        }
    }
}