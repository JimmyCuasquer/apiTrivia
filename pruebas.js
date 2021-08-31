function desordenar(unArray){
    var t = unArray.sort(function(a,b){
        return (Math.random()-0.9)
    });
    return [...t];
  } // esta función me desordena un array
  
  var numeros= [ "Ringo Starr","Stuart Sutcliffe","Pete Best"]; //este es mi array
  
  numerosDesordenados= []; // array vacio
  
  for (i=0;i<6;i++){ //creo bucle para llenar array vacío
    x = desordenar(numeros);
    numerosDesordenados[i] = x;
    console.log(i,x);
  }
  
  console.log(numerosDesordenados);