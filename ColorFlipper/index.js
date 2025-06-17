

const body = document.getElementsByTagName("body")[0]

function setColor(name){
body.style.backgroundColor = name;
}

// function randomColor(){

//     let rand = Math.floor(Math.random() * 10) + 1;

//     const button = document.getElementById("random")

//     if(rand==1){
//         body.style.backgroundColor="red";
//     }

//     else if(rand==2){
//         body.style.backgroundColor="green";
//     }

//       else if(rand==3){
//         body.style.backgroundColor="blue";
//     }
//       else if(rand==4){
//        body.style.backgroundColor="yellow";
//     }

//       else if(rand==5){
//        body.style.backgroundColor="grey";
//     }
//       else if(rand==6){
//         body.style.backgroundColor="white";
//     }
//       else if(rand==7){
//         body.style.backgroundColor="pink";
//     }
//       else if(rand==8){
//         body.style.backgroundColor="violet";
//     }
//       else if(rand==9){
//        body.style.backgroundColor="purple";
//     }
//       else if(rand==10){
//         body.style.backgroundColor="orange";
//     }

// }

function randColor(){

    const red = Math.floor(Math.random()*255);
    const green = Math.floor(Math.random()*255);;
    const blue= Math.floor(Math.random()*255);

    const color = `rgb(${red},${green},${blue})`
    body.style.backgroundColor=color;
}

// randColor()