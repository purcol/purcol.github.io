let radius = 30;
let angel = 0;

function spin(){
    //console.log("!");
    
    requestAnimationFrame(spin);
};

requestAnimationFrame(spin);

//let zero;
//requestAnimationFrame(firstFrame);
//function firstFrame(timestamp) {
//  zero = timestamp;
//  animate(timestamp);
//}
//function animate(timestamp) {
//  const value = (timestamp - zero) / duration;
//  if (value < 1) {
//    element.style.opacity = value;
//    requestAnimationFrame((t) => animate(t));
//  } else element.style.opacity = 1;
//}
