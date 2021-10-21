const form = document.getElementById("formulario");

form.addEventListener("submit", codigo);

function codigo(e){

  e.preventDefault();
  

  let numeros = "0123456789";
  let letras = "abcdefghijklmnopqrstuvwxyz";
  let todo = numeros + letras;
  
  let codigo = document.getElementById("codigo");
  
    const generarCodigo = (longitud) =>{
        let aleatorio = "";
        for(let i = 0; i < longitud; i++){
            let random = Math.floor(Math.random() * todo.length);
            aleatorio += todo.charAt(random);; 
        }
        return aleatorio
    }

    
    let = codigoJuego = "";
    for(let i = 0; i < 1; i++){
        codigoJuego= generarCodigo(6);
        
    }
  codigo.addEventListener("mousedown", function(){
      
      document.getElementById('codigo').value = codigoJuego;
});
   




};
