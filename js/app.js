function mostrarMenu(){    
    document.getElementById('menumovil').style.transition ='all 1s';
    document.getElementById('menumovil').style.display ='block';
    document.getElementById('menumovil').style.left='0%';
}

function salirMenu (){
    document.getElementById('menumovil').style.transition ='all 1s'; 
    document.getElementById('menumovil').style.left='100%'; 
}

const fondo = document.querySelector('.container__sobremi-porfile')
fondo.addEventListener('click', () => {
  fondo.classList.remove('animate')
    setTimeout(()=>{
        fondo.classList.add('animate')
    },100)
});  
const proyectos = document.querySelector('.container__proyecto-fondo')
proyectos.addEventListener('click', () => {
  proyectos.classList.remove('animacion')
    setTimeout(()=>{
        proyectos.classList.add('animacion')
    },100)
});  
  
const botonpestaña = document.getElementById("boton_historia"); 
botonpestaña.addEventListener("click", ()=>{
    document.querySelector(".container__principal-historia").style.display = "none";
});

const botonabrirH = document.getElementById("boton-abrirHistoria"); 

botonabrirH.addEventListener("click", ()=>{ 
    document.querySelector(".container__principal-historia").style.display ="flex";
})



