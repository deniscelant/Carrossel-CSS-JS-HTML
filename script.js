let images = ["red", "blue", "white", "yellow", "green"];
let active = images[2];

// const last = images.pop()
// images.unshift(last)

// console.log(last)
// console.log(images)

let index = 0;

const card = document.getElementsByClassName("card");
const arrowLeft = document.getElementById("arrowLeft");
const arrowRight = document.getElementById("arrowRight");

Array.from(card).forEach((c) => {
  c.style.backgroundColor = images[index++];

});
arrowLeft.onclick = () => {
    if(index >= 5){
        index = 0;
    }
  const last = images.pop();
  images.unshift(last);

  Array.from(card).forEach((c) => {
    c.style.backgroundColor = images[index++];
  
  });
  // Array.from(card).forEach(() => {
  //   c.style.backgroundColor = images[index++];
  // });
  console.log(images);
};

arrowRight.onclick = () => {
    if(index >= 5){
        index = 0;
    }
  const first = images.shift();
  images.push(first);

  Array.from(card).forEach((c) => {
    c.style.backgroundColor = images[index++];
  
  });
  // Array.from(card).forEach(() => {
  //   c.style.backgroundColor = images[index++];
  // });
  console.log(images);
};
