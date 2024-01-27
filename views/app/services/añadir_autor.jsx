

export const crearNuevoAutor = (nombre)=>{


    var arreglo = {nombre};
    var arregloJson = JSON.stringify(arreglo);

    fetch("https://localhost:7154/api/autores/nuevoAutor",{

        method:'POST',
        body: arregloJson,  
        headers:{

            'Content-Type':'application/json'
        }


    }).then((data)=>{

        return data.json();

    }).then((response)=>{

        if(response.respuesta){

            window.alert(response.respuesta);
            window.location.reload();

        }else{
            
            window.alert("Error añadiendo un nuevo autor")
        }
        
    }).catch((error)=> console.error({"Sucedio un error":error}))

}