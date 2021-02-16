const hex=document.querySelector('#hex-input');
const colorOutput=document.querySelector('#output-color');
const convertButton=document.querySelector('#convert-button');
const red=document.querySelector('#red');
const green=document.querySelector('#green');
const blue=document.querySelector('#blue');
const resetButton=document.querySelector('#reset-button');

resetButton.addEventListener('click',()=>{
  hex.value = "";
  red.value = "";
  green.value = "";
  blue.value = "";
  colorOutput.style.backgroundColor="#ffffff";
});

hex.addEventListener('input',()=>{
  colorOutput.style.backgroundColor=hex.value;

});
convertButton.addEventListener('click', () => {
  red.value = parseInt(hex.value[1]+hex.value[2],16);
  blue.value = parseInt(hex.value[5]+hex.value[6],16);
  green.value= parseInt(hex.value[3]+hex.value[4],16); 
     
});