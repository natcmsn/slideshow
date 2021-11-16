document.querySelector('.banner button').addEventListener('click', () => {   //Disparador inicial atento a que ocurra un suceso determinado (escuchando a que se haga click) para desencadenar la función
    document.querySelector('.banner').style.display = 'none';   //Coje el banner y le dice que no se muestre, dejando ver el slidshow
    document.querySelector('.slideshow-wrapper').style.cssText = 'opacity: 1; visibility: visible'; //A slideshow le damos visibilidad
    document.querySelector('.slideshow').style.animation = 'slideshow 24s infinite';  //Al mismo tiempo desencadenamos la animación, que tardará 24s y luego se repetirá de manera infinita
})