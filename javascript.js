function calcular() {
    var n1 = document.getElementById('n1').value;
    var n2 = document.getElementById('n2').value;
    var n3 = document.getElementById('n3').value;

    var media = ((Number(n1) + Number(n2)+ Number(n3)) / 3).toFixed(1);
    
    if (n1, n2 , n3 == 0) {
        alert('Digite um valor válido.')
    }else{
        alert(`A média entre os três números é ${media}.`);
    }
   
    

    document.getElementById(('n1')).value = '';
    document.getElementById(('n2')).value = '';
    document.getElementById(('n3')).value = '';

}

