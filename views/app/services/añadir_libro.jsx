

export const nuevoLibro=(titulo,autorId)=>{


    var arreglo = {titulo,autorId}
    var arregloJson = JSON.stringify(arreglo)

    fetch("https://localhost:7154/api/libros/nuevoLibro",{

        method:'POST',
        body:arregloJson,
        headers: {

            'Content-Type':'application/json'
        }
    }).then((data)=>{

        return data.json();

    }).then((response)=>{

        if(response.resultado){

            window.alert(response.resultado);
            window.location.reload();
        }else{

            window.alert("Error añadiendo el libro")
        }

    }).catch((error)=> console.error({"Sucedio un error":error}))
    
    
    
}