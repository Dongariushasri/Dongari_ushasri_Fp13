function average(){
    // Get the data from id1 and assign to n1 variable
    var n1=(document.getElementById('id1').value)
    // Get the data from id2 and assign to n2 variable
    if(n1=="")
    {
        //alert('n1 should not be empty')
        document.getElementById('span1').innerHTML='* n1 should not be empty'
        return false
    }
    var n2=(document.getElementById('id2').value)
    if(n2=="")
    {
        //alert('n1 should not be empty')
        document.getElementById('span2').innerHTML='* n2 should not be empty'
        return false
    }
    
    else{
        var area=n1*n1
    alert(area)
    return true
    }
    
}
function erasedata(){
    var res=confirm('are you sure to delete?')
    if(res== true){
    return true
}
else{
    return false
}}

