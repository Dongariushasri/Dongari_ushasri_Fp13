function average(){
    // Get the data from id1 and assign to n1 variable
    var n1=eval(document.getElementById('id1').value)
    // Get the data from id2 and assign to n2 variable
    var n2=eval(document.getElementById('id2').value)
    // Get the data from id3 and assign to n3 variable
    var n3=eval(document.getElementById('id3').value)
    var avg=(n1+n2+n3)/3
    alert(avg)
}
function erasedata(){
    //set the data to id1 as empty string
    document.getElementById('id1').value= ""
     //set the data to id2 as empty string
     document.getElementById('id2').value= ""
     //set the data to id3 as empty string
     document.getElementById('id3').value= ""
}
