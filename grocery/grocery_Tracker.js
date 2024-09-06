let g1;
let g2;
let g3;

function groceryTracker(){
    g1 = parseFloat(document.getElementById('grocery1').value);
    g2 = parseFloat(document.getElementById('grocery2').value);
    g3 = parseFloat(document.getElementById('grocery3').value);

    let totalAmount = g1 + g2 + g3;
    document.getElementById('result').innerText = `The total amount is:$ ${totalAmount}`;
}