let menu = document.querySelector('.menu')
let sidebar = document.querySelector('.sidebar')
let cross = document.querySelector('.cross')

menu.addEventListener('click', ()=>{
   sidebar.classList.add('active');
})
cross.addEventListener('click', ()=>{
    sidebar.classList.remove('active');
 })

 sidebar.addEventListener('click', (event)=>{
   if (event.target == sidebar) {
   sidebar.classList.remove('active');
   }
})