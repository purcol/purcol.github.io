let scale = 100;
//console.log("!");
//console.log(`scale: ${scale}`)

let ofsetX = 1000000;
let ofsetY = 0;

var node = document.getElementById('in_body');

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
    node.style.scale = scale*0.01;
    console.log("!");
};

