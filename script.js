
let images = ["imgs/Card01.png",
              "imgs/Card02.png",
              "imgs/Card03.png",
              "imgs/Card04.png",
              "imgs/Card05.png"];

const active = images[2];


// const last = images.pop()
// images.unshift(last)

// console.log(last)
// console.log(images)

let index = 0;

const card = document.getElementsByClassName("card");
const arrowLeft = document.getElementById("arrowLeft");
const arrowRight = document.getElementById("arrowRight");

Array.from(card).forEach((c) => {
  c.src = images[index++];

});
arrowLeft.onclick = () => {
    if(index >= 5){
        index = 0;
    }
  const last = images.pop();
  images.unshift(last);

  Array.from(card).forEach((c) => {
    c.src = images[index++];
  
  });
  // Array.from(card).forEach(() => {
  //   c.style.backgroundColor = images[index++];
  // });
};

arrowRight.onclick = () => {
    if(index >= 5){
        index = 0;
    }
  const first = images.shift();
  images.push(first);

  Array.from(card).forEach((c) => {
    c.src = images[index++];
  
  });
  // Array.from(card).forEach(() => {
  //   c.style.backgroundColor = images[index++];
  // });
};
