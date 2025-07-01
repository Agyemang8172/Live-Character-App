// Select the elements
const textInput = document.getElementById( "textInput");
const  charCount = document.getElementById("charCount")


const updateCharCount = ()   =>  {
   const length = textInput.value.length;
 
   charCount.textContent = length === 0
   ? "Characters : 0"
   : `Characters : ${length}`;
}

textInput.addEventListener("input",updateCharCount)