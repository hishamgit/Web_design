function clicked(val){
    var a=[]
    {
        document.getElementById("display").value+=val

   }
}
function clearScr(){
    document.getElementById("display").value=""
}
function equalclick(){
    var text=document.getElementById("display").value
    var result=eval(text)
    document.getElementById("display").value=result
}