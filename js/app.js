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

document.addEventListener('scroll' ,()=>{
    const barranavegacion = document.querySelector('.container__ul-principal scrolled'); 
    if(window.scrollY>0){
        barranavegacion.classList.add('.scrolled');
    }
    else{
        barranavegacion.classList.remove('.scrolled');
    }
});


