const canvas =document.getElementById('canvas');

const ctx=canvas.getContext('2d');

let{top:topOffSet}=canvas.getBoundingClientRect();

canvas.height=window.innerHeight-topOffSet;

canvas.width=window.innerWidth;

window.addEventListener("resize",function(){
    canvas.height=window.innerHeight-topOffSet;
    canvas.width=window.innerWidth;
})

let isPendown=false;

canvas.addEventListener("mousedown",function(e){

   isPendown=true;
    let x=e.clientX;
    let y=e.clientY-topOffSet;
    ctx.beginPath();
    ctx.moveTo(x,y);
    ctx.stroke();
})
canvas.addEventListener("mousemove",function(e){

    if(isPendown){
        let x=e.clientX;
        let y=e.clientY-topOffSet;
        ctx.lineTo(x,y);
        ctx.stroke();
    }
})
canvas.addEventListener("mouseup",function(e){
    isPendown=false;
})