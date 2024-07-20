

let left = document.querySelector('.left');
let right = document.querySelector('.right');
let slider = document.querySelector('.slider');
let num = document.querySelector('.num');
let num2 = document.querySelector('.num2');
let mnum = document.querySelector('.mnum')
let mnum2 = document.querySelector('.mnum2')
let sliders = document.querySelectorAll('.sliders');
let client_left = document.querySelector('.client_left');
let client_right = document.querySelector('.client_right');
let client_slid = document.querySelector('.client_slid');
let trusted = document.querySelectorAll('.trusted');
let main = document.querySelector('.animation_one');
let sections = document.querySelectorAll('.sections');
let navigation = document.querySelector('.navigation');
let bar = document.querySelector('.bar');
let closeIcon = document.querySelector('.close-icon');

let index = 1;
num2.textContent = sliders.length;
const first = ()=>{
  slider.style.transform = `translateX(-${index * 100}%)`
  index++;
  num.textContent = index; 
}
const second = ()=>{
  slider.style.transform = `translateX(0)`
  index = 1
  num.textContent = index;
}
const third = ()=>{
  slider.style.transform = `translateX(-${(index-2) * 100}%)`
  index--;
  num.textContent = index;
}
const fourth = ()=>{
  slider.style.transform = `translateX(-${(sliders.length-1) * 100}%)`
  index = sliders.length;
  num.textContent = index;
}

const firstClient = ()=>{
  client_slid.style.transform = `translateX(-${index * 100}%)`
  index++;
  mnum.textContent = index; 
}
const secondClient = ()=>{
  client_slid.style.transform = `translateX(0)`
  index = 1
  mnum.textContent = index;
}
const thirdClient = ()=>{
  client_slid.style.transform = `translateX(-${(index-2) * 100}%)`
  index--;
  mnum.textContent = index;
}
const fourthClient = ()=>{
  client_slid.style.transform = `translateX(-${(trusted.length-1) * 100}%)`
  index = trusted.length;
  mnum.textContent = index;
}
right.addEventListener('click', ()=>(index < sliders.length) ? first():second())
left.addEventListener('click', ()=> (index > 1) ? third():fourth())

client_right.addEventListener('click', ()=>(index < trusted.length) ? firstClient():secondClient())
client_left.addEventListener('click', ()=>(index > 1) ? thirdClient():fourthClient())

// const animation = (entries, observer)=>{

//   const [entry] = entries
//   if(entry.isIntersecting) entry.target.classList.remove('animation_one')

// }

// const observerFunction = new IntersectionObserver(animation, {
//   root: null,
//   threshold: 0.4,
// })

// observerFunction.observe(main)

const gallery = (entries, observer)=>{

  const [entry] = entries
  console.log(entry);
  if(entry.isIntersecting){
    entry.target.classList.remove('gal')
  }

}

const observergal = new IntersectionObserver(gallery, {
  root: null,
  threshold: 0.15
})
sections.forEach((e)=>{
  observergal.observe(e)
  e.classList.add('gal')
})


bar.addEventListener('click', ()=> navigation.style.left = 0)
closeIcon.addEventListener('click', ()=> navigation.style.left = '-100%')