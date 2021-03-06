function utilrgbToHex(color)
{
   let hex;
   color=parseInt(color);
   if (color <= 9)
     hex = '0'+color;
   else
     hex = color.toString(16);
  if(hex.length===1)
     hex='0'+hex; 
   return hex;
}

function rgbToHex(red,green,blue)
{
   return '#'+utilrgbToHex(red)+utilrgbToHex(green)+utilrgbToHex(blue);
}


const red=document.querySelector('#red-input');
const blue=document.querySelector('#blue-input');
const green=document.querySelector('#green-input');
const hex=document.querySelector('#hex-value');
const colorOutput=document.querySelector('#output-color');
const convertButton=document.querySelector('#convert-button');
const resetButton=document.querySelector('#reset-button');

resetButton.addEventListener('click',()=>{
   hex.value = "";
   red.value = "";
   green.value = "";
   blue.value = "";
   colorOutput.style.backgroundColor="#ffffff";
});

convertButton.addEventListener('click', () => {
hex.value=rgbToHex(red.value,green.value,blue.value);
colorOutput.style.backgroundColor=hex.value;      
});