const select = document.querySelector(".form-select");
const vade = document.querySelector("#vade");
const tutar = document.querySelector("#tutar");
const hesaplaBtn = document.querySelector(".btn-dark");
let oran = 0;

hesaplaBtn.addEventListener("click", (e)=>{
    e.preventDefault();  //? eventin default davranısını engeller
    if(select.value === "Konut Kredisi") {
        oran = 1.29;
    } else if(select.value === "Ihtiyac Kredisi") {
        oran = 1.99;   
    } else if(select.value === "Arac Kredisi") {
        oran = 1.79 ;   
    }
    if(!select.value || !vade.value || !tutar.value){
        alert("Lutfen Kredi Turu, Vade Ve Tutarı giriniz");
    }

});