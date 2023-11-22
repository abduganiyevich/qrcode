const text=document.getElementById('text');
const btn=document.getElementById('btn');
const clear=document.getElementById('clear');
const img=document.getElementById('img');
const qrImage=document.getElementById('qrImage');
const span=document.getElementById('error');

function createQr() {
    if(text.value){
        qrImage.src=`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${text.value}`;
        text.value=""
    }else{
        span.classList.add('show');;
        setTimeout(()=>{
            span.classList.remove('show');
        },2000);
    }
}
btn.addEventListener('click',()=>{
  createQr();
});

document.addEventListener('keydown',(el)=>{
if (el.key=="Enter") {
    createQr();
    img.style.transform='scale(1)'
}
});

clear.addEventListener('click',()=>{
    qrImage.src=''
})


    
