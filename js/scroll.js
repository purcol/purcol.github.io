let scale = 100;
//console.log("!");
//console.log(`scale: ${scale}`)

let ofsetX = 1000000;
let ofsetY = 0;

var node = document.getElementById('body');

let coll = {};

//изменет размек при прокрутке
window.onwheel=({deltaY})=>{
    const newdown = (deltaY > 0);
    console.log(coll, newdown);
    if(coll.down === newdown) coll.sum += deltaY;
    else coll.sum = deltaY;
    coll.down = newdown;
        
        //console.log(`down: ${coll.down} sum: ${coll.sum}`);
        
    if (scale => 50) {
        coll.down = coll.down * 0.0000001
    };

    scale = scale + (coll.down * 0.1);
    scale = scale + (coll.sum * 0.1);
    if (scale < 0) {
        scale = 0;
    };

    coll.down = 0;
    coll.sum = 0;

    //магия с изменением html
    node.innerHTML =`<div style="width: 99%;
    background-color: #040013ff;
    height: 98%;
    position: absolute;
    align-self: center;
    background-image: url('img/planets/all.svg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    background-size: ${scale}%;
    background-position: calc(width*0.5) calc(height*0.5);">
    </div> `;
};

