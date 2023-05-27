let ar = Array.from(document.getElementsByClassName("li"));
ar.forEach((elem)=>
  {
  elem.addEventListener('click', () => {
    elem.classList.add("active")
    for (let j = 0; j < ar.length; j++) {
      if (ar[j] != elem) {
        ar[j].classList.remove("active")
      }
    }
  })
})

let b =Array.from(document.getElementsByClassName("btn"));
b.forEach((btn)=>
  {
    btn.addEventListener('click', () => {
    btn.classList.add("btn-primary")
    btn.classList.remove("btn-light")
    btn.classList.remove("text-dark")
    let j = b.length -b.indexOf(btn)- 1;
    b[j].classList.remove("btn-primary")
    b[j].classList.add("btn-light")
    b[j].classList.add("text-dark")
  })
})
