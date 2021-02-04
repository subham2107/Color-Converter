function utilrgbToHex(color)
{
   let hex;
   color=parseInt(color);
   if (color <= 9)
     hex = '0'+color;
   else
     hex = color.toString(16);
   
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

convertButton.addEventListener('click', () => {
hex.value=rgbToHex(red.value,green.value,blue.value);
colorOutput.style.backgroundColor=hex.value;      
});