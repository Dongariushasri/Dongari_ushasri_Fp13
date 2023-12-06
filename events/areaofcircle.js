function area(){
    // Get the data from id1 and assign to n1 variable
    var r=eval(document.getElementById('id1').value)
    var area=3.14*r*r;
    alert(area)
}
function erasedata(){
    //set the data to id1 as empty string
    document.getElementById('id1').value= ""
}
