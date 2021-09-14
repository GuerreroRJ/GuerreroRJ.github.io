
var check=document.querySelector('.check');
check.addEventListener('click',idioma);

function idioma(){
    
    let archivo = document.getElementById("chkIdioma").checked;
    if(archivo==true){
        location.href="../en/index.htm";       
    }else{
        location.href="../index.htm";      
    }
}