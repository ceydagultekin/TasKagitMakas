//Değişkenler ve Sabitler
const otoSecimGoruntule=document.getElementById('oto-secim')
 const kendiSecimGoruntule=document.getElementById('kendi-secim')
 const sonucGoruntule=document.getElementById('sonuc')
 const olasıSecimler=document.querySelectorAll('button')
 let kendiSecim
 let otoSecim
 let sonuc

olasıSecimler.forEach(olasıSecim=> olasıSecim.addEventListener('click',(e)=>{
kendiSecim=e.target.value
kendiSecimGoruntule.innerHTML=kendiSecim
otoSecimUretme()
Sonuc()


 }))

//Bilgisayarın otomatik seçimini kuran fonksiyon
 function otoSecimUretme(){
     const rastgeleSayi=Math.floor(Math.random()*3)+1
     if(rastgeleSayi ===1){
        otoSecim='TAŞ'
    }
    if(rastgeleSayi ===2){
        otoSecim='MAKAS'
    }
    if(rastgeleSayi ===3){
        otoSecim='KAĞIT'
    }
    otoSecimGoruntule.innerHTML=otoSecim
}

//Oyuncu kaybettiğinde ekrana gelecek gifi gösteren fonksiyon
function Kaybettin() {
    const img = document.createElement('img');
    img.src = 'gif/barney-stinson.gif';

    const div = document.getElementById('placehere2');
    div.appendChild(img);

    setTimeout(() => div.removeChild(img), 2500); //Gif'i ekranda 2.5 saniye tutmak için kurduğumuz metot
}

//Oyuncu kazandığında ekrana gelecek gifi gösteren fonksiyon
function Kazandın() {
    const img =document.createElement('img');
    img.src = 'gif/friends.gif';

    const div = document.getElementById('placehere1');
    div.appendChild(img);

    setTimeout(() => div.removeChild(img), 2500)
}
function Berabere(){
    const img =document.createElement('img');
    img.src = 'gif/deal.gif';

    const div = document.getElementById('placehere3');
    div.appendChild(img);

    setTimeout(() => div.removeChild(img), 2500)

}
 
 //Seçimler dahilinde sonucu ekrana yansıtan fonksiyon
function Sonuc(){
    if(otoSecim===kendiSecim){
        sonuc='Berabere!'
        Berabere();
    }
    if(otoSecim==='TAŞ'&& kendiSecim==="KAĞIT"){
        sonuc='KAZANDIN!'
        Kazandın();
       
    }
    if(otoSecim==='TAŞ'&& kendiSecim==="MAKAS"){
        sonuc='KAYBETTİN!'
        Kaybettin();
       
    }
    if(otoSecim==='KAĞIT'&& kendiSecim==="MAKAS"){
        sonuc='KAZANDIN!'
        Kazandın();
       
    }
    if(otoSecim==='KAĞIT'&& kendiSecim==="TAŞ"){
        sonuc='KAYBETTİN!'
        Kaybettin();
        
    }
    if(otoSecim==='MAKAS'&& kendiSecim==="TAŞ"){
        sonuc='KAZANDIN!'
        Kazandın();
        
    }
    if(otoSecim==='MAKAS'&& kendiSecim==="KAĞIT"){
        sonuc='KAYBETTİN!'
        Kaybettin(); 
        
    }
   sonucGoruntule.innerHTML=sonuc

 
}



