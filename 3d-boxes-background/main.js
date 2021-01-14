// establish variable boxesContainer from class boxes

const boxesContainer = document.getElementById("boxes")

// establish variable btn from class btn

const btn = document.getElementById("btn")

// add click to btn - function to toggle classList on boxesContainer - class named  "big"

btn.addEventListener("click", () => boxesContainer.classList.toggle("big"))

// create a function to createBoxes

function createBoxes() {
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      const box = document.createElement("div")
      box.classList.add("box")
      box.style.backgroundPosition = `${-j * 125}px ${-i * 125}px`
      boxesContainer.appendChild(box)
    }
  }
}

createBoxes()

// 2 for loops using i and j (nested)

// incrementers set to <4

// store create element of 'div " in variable "box" (document.createElement)

// add class of "box" to box

// add backgroundPoisiton to box - it's weird `${}px ${}px` one using -j, the other using -i ...

// they are each mulitplied by 125

// appendchild of box to boxesContainer

// call the function
