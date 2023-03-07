function calHt(){
    var nh = parseFloat(document.getElementById("hc").value);
//var cf = parseFloat(document.getElementById("codFunc").value);
e=0;
if (nh>50){
    e=nh-50;
    sal = 50*10;
    sale = sal + (e*20);
    alert ("O Salário do funcionário com código "+ sale)
}
else{
    if (nh<=50 ){
        sal = 50*10;
    alert("Não houve registro de horas extras, o salário é \n"+ sal)
}
}
}
