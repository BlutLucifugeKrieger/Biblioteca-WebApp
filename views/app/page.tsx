
"use client"
import React, { useEffect, useMemo, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'next/image';
import libro_icon from '../app/images/libro-abierto.png';
import autor_icon from '../app/images/autor.png';
import {Modal,ModalBody,ModalHeader,ModalFooter} from 'reactstrap';
import '../app/styles/biblioteca.css';
import '../app/styles/añadir_libro.css';
import {info_panel} from '../app/services/relleno_tabla_presentacion';
import {coleccion} from '../app/services/relleno_tabla_coleccion_libros';
import {nuevoLibro} from '../app/services/añadir_libro';
import {crearNuevoAutor} from '../app/services/añadir_autor';

  interface Autor {
    autorId: number;
    nombre: string;
  }
const Page:React.FC= ()=>{


    useEffect(()=>{

        info_panel()
        coleccion()
        obtenerAutores();


    },[]);

    const obtenerAutores = async () => {
        try {
          const response = await fetch("https://localhost:7154/api/autores", {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json'
            }
          });
  
          if (!response.ok) {
            throw new Error('Error al obtener los autores');
          }
  
          const data = await response.json();
          setAutores(data);
        } catch (error) {
          console.error(error);
        }
      };


    const titulo_libro = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
    
        const autorSeleccionado = autores.find(autor => autor.nombre === selectedAutor);
    
        if (autorSeleccionado) {
          const autorId = Number(autorSeleccionado.autorId);
          console.log("Valor seleccionado del select:", selectedAutor, "ID:", autorId);
          nuevoLibro(titulo,autorId);

          
        }else{

            window.alert("Por favor, ingrese un titulo y seleccione un autor");
        }
      };


    const crearAutor = (e:React.MouseEvent<HTMLButtonElement>)=>{

        try {
            
            if(nuevoAutor !== ""){

                crearNuevoAutor(nuevoAutor);

            }else{

                window.alert("Por favor, ingrese el nombre del autor");
            }
            

        } catch (error) {
            
            console.error({errors:"Error, con la creacion de un autor",error})

        }

    }

    
    const [isModalOpen, setModalOpen] = useState(false);
    const [isautorModalOpen, setautorModalOpen] = useState(false);
    const [titulo, setTitulo] = useState<string>('');
    const [autores, setAutores] = useState<Autor[]>([]);
    const [selectedAutor, setSelectedAutor] = useState<string>('');
    const [nuevoAutor,setNuevoAutor] = useState<string>('');

    const toggleModal = () => {
        
        try {

            setModalOpen(!isModalOpen);
          

        } catch (error) {
            
            console.error({errors:"Error, con la apertura de la ventana de gestion de libros",error})
        }
    }

    const autorModal = () => {
        
        try {

            setautorModalOpen(!isautorModalOpen);
          

        } catch (error) {
            
            console.error({errors:"Error, con la apertura de la ventana de gestion de autores",error})
        }
    }

    const closeModal = (e:React.MouseEvent<HTMLButtonElement>)=>{

        try {
            
            setModalOpen(false);


        } catch (error) {
            
            console.error({errors:"No se pudo cerrar el modal",error});
        }
    }


    const closeAutorModal = (e:React.MouseEvent<HTMLButtonElement>)=>{

        try {
            
            setautorModalOpen(false);


        } catch (error) {
            
            console.error({errors:"No se pudo cerrar el modal",error});
        }
    }
    

    return(
        <div>
                
                <table className="table table-hover">

                    <thead className="table-active">
                        <tr><th colSpan={3} id="info_panel">Bienvenidos, a la biblioteca</th></tr>
                        <tr>
                            <th id="ths">Hecho Por</th>
                            <th id="ths">Tecnologias usadas</th>
                            <th id="ths">Usuario de GitHub</th>
                        </tr>
                    </thead>
                    
                    <tbody id="t_body_tb1"></tbody>
                </table>

                <table className="table table-hover">
                        <thead className="table-active">
                            <tr id="tr_head"> <th colSpan={2} id="th_head">Coleccion de libros</th></tr>
                            <tr>
                                <th id="ths">Titulo</th>
                                <th id="ths">Autor</th>
                            </tr>
                        </thead>
                        <tbody id="t_body_tb2"></tbody>
                </table>

                        <div className="container">
                            <button className="btn agregar_libros" onClick={toggleModal}>Añadir libro</button> 
                            <button className="btn" id="add_button" onClick={autorModal}>Añadir Autor</button>
                        </div>
                                          
                        <div>
                                <Modal isOpen={isModalOpen} toggle={toggleModal} id="modal_table">

                                        <ModalHeader id="modal_header"> 
                                            Gestion de libros 
                                        </ModalHeader>

                                        <ModalBody id="modal_body">

                                         <Image src={libro_icon} width={40} height={40} alt='libro_icon' style={{ display: 'block', margin: 'auto' }}></Image>
                                            <h1>  Añade un nuevo libro</h1>
                                                
                                            <form id="forms">
                                            <div>
                                            </div> 
                                            <div>
                                                <label className="titulo_libro">Titulo del libro</label>
                                                <input type="text" name="nombre"  id="cuenta" value={titulo} onChange={(e)=>setTitulo(e.target.value)}/>
                                            </div>
                                            <div>
                                                <label  className="autor_libro">Autor</label>
                                                <select name="autores" id="autores_select_list" value={selectedAutor} onChange={(e) => setSelectedAutor(e.target.value)}>
                                                <option value="" disabled>Seleccione un autor</option>
                                                {autores.map((autor) => (
                                                <option key={autor.autorId} value={autor.nombre}>{autor.nombre}</option>
                                                ))}
                                            </select>
                                            </div>
                                            <div>
                                                <button type="submit" className="create_button" id="save_button" onClick={(e)=>titulo_libro(e)}>Guardar libro</button>
                                            </div>
                                            
                                            
                                            </form>

                                        </ModalBody>

                                        <ModalFooter>
                                        
                                        <div>
                                                <button className="btn" onClick={(e)=>{closeModal(e)}}>Salir</button>
                                        </div>

                                        </ModalFooter>
                                </Modal>
                        </div>



                        <div>
                                <Modal isOpen={isautorModalOpen} toggle={autorModal} id="modal_table">

                                        <ModalHeader id="modal_header"> 
                                            Gestion de autores 
                                        </ModalHeader>

                                        <ModalBody id="modal_body">

                                         <Image src={autor_icon} width={40} height={40} alt='autor_icon' style={{ display: 'block', margin: 'auto' }}></Image>
                                            <h1>  Añade un nuevo autor</h1>
                                                
                                            <form id="forms">
                                            <div>
                                            </div> 
                                            <div>
                                                <label>Nombre del autor</label>
                                                <input type="text" name="nombre"  id="cuenta" value={nuevoAutor} onChange={(e)=>setNuevoAutor(e.target.value)}/>
                                            </div>
                                           
                                            <div>
                                                <button type="submit" className="create_button" id="save_button" onClick={(e)=>crearAutor(e)}>Guardar autor</button>
                                            </div>
                                            
                                            
                                            </form>

                                        </ModalBody>

                                        <ModalFooter>
                                        
                                        <div>
                                                <button className="btn" onClick={(e)=>{closeAutorModal(e)}}>Salir</button>
                                        </div>

                                        </ModalFooter>
                                </Modal>
                        </div>

                        


                       
        </div>
                
        
    )


    
}


export default Page;

