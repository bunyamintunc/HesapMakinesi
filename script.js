let tiklananButton=document.getElementsByTagName("button");
let kacButonVar=tiklananButton.length;
let ekran=document.querySelector("#input");
let hesap=document.querySelector("#esit");
let temiz=document.querySelector("#temizle");

for(i=0;i<=kacButonVar;i++){
    
     if(i!=12&&i!=16){
         tiklananButton[i].addEventListener("click",yazdir);
     }

}

hesap.addEventListener("click",hesapla);
temiz.addEventListener("click",temizle);

function yazdir(){
    ekran.value=ekran.value+this.value;
    
}
function hesapla(){
    ekran.value=eval(ekran.value);
}
function temizle(){
    ekran.value="";
}

