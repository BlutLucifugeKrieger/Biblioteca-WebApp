

export const coleccion = ()=>{

    fetch("https://localhost:7154/api/libros/autoresYLibros",{

            method: 'GET',
            headers:{

                'Content-Type':'application/json'
            }
    }).then((data)=>{

        
        return data.json();

    }).then((response=>{

        
        response.resultado.forEach(element => {
            
            const t_body = document.getElementById("t_body_tb2");
            const row = document.createElement("tr");

            const titulos = document.createElement("td");
            titulos.textContent = element.titulo;
            row.appendChild(titulos);

            const autores = document.createElement("td");
            autores.textContent = element.autor;
            row.appendChild(autores);

            t_body.append(row)


        });
        

    }))


}