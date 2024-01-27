

export const  info_panel = ()=>{

    const t_body = document.getElementById("t_body_tb1");

    const row = document.createElement("tr");

    if(t_body && t_body.getElementsByTagName("td").length === 0){

        const hecho_por = document.createElement("td");
        hecho_por.textContent = "Juan Camilo Castro";
        row.appendChild(hecho_por);


        const tecnologias = document.createElement("td");
        tecnologias.textContent = ".NET/REACT NextJS - Bootstrap";
        row.appendChild(tecnologias);

        const usuarioGitHub = document.createElement("td");
        usuarioGitHub.textContent = "BlutLucifugeKrieger (Camilo Castro)"
        row.appendChild(usuarioGitHub)


        t_body.append(row)

    }

}