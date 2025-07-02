// Select the elements
const textInput = document.getElementById("textInput")
const charCount = document.getElementById("charCount")
const  warning =document.getElementById("warning")

const maxLimit=20;

 const updateCharCount =  ()  => {
    const length = textInput.value.length
    
     charCount.textContent = length === 0
     ? "Characters : 0"
     : `Characters : ${length}/${maxLimit}`

     length > maxLimit 
     ? warning.classList.remove("hidden")
     : warning.classList.add("hidden")
  }

  textInput.addEventListener("input", updateCharCount);