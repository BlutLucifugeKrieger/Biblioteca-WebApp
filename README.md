
[![Node.js Version](https://img.shields.io/badge/Node.js-18.17.0-brightgreen)](https://nodejs.org/)
[![.NET](https://img.shields.io/badge/.NET-C%23-blue)](https://dotnet.microsoft.com/)
[![Next.js Version](https://img.shields.io/badge/Next.js-14.1.0-blueviolet)](https://nextjs.org/)


# Biblioteca - Web Application
_____________________________________
## Informacion de contacto
_____________________________________

## Descripcion

### Objetivo

Desarrollar una aplicación web simplificada de gestión de biblioteca utilizando ASP.NET MVC que permita a los usuarios ver, agregar libros y autores.

### Tecnologias a utilizar:

  **1. API:** Utilizar ASP.NET MVC con C#.
  
  **2. Base de datos:** SQL Server.
  
  **3. UI:** React NextJS 
_____________________________________

### Versiones de las tecnologias

**-> ASP.NET MVC:** version 6.0 de .NET 

**-> NodeJS:** version 18.17.0

**-> NPM:** version 10.2.5

**-> React NextJS:** version 14.1.0

**Nota:** Para cambiar entre versiones de NodeJS,
          se recomienda usa NVM. Para mayor informacion 
          entra al siguiente enlace: https://github.com/coreybutler/nvm-windows
_____________________________________

## Patron de diseño (API)

Como se indica en la documentacion de la prueba tecnica, 
el patron de diseño a implementar sera el MVC (MODELO VISTA CONTROLADOR)

_____________________________________

## Configuracion del proyecto y ejecucion del mismo

## Primer paso: Clonacion del repositorio (GitHub)

![image](https://github.com/BlutLucifugeKrieger/Biblioteca-WebApp/assets/130005378/36f3f0b6-d8e6-4990-9465-4af0298e4dee)

### -> Abre el GitBash donde desees generar la carpeta del repositorio

En mi caso, voy a alojar la carpeta del repositorio dentro de otra carpeta vacia localizada en Documentos.
Despues, procedo a abrir la terminar de Git (GitBash)

### Clonamos el repositorio atraves del siguiente comando: git clone "https://github.com/BlutLucifugeKrieger/Biblioteca-WebApp.git"


![image](https://github.com/BlutLucifugeKrieger/Biblioteca-WebApp/assets/130005378/2a6a7452-7189-4a0b-a175-44aed4eeda9c)

Al finalizar, se observara la carpeta del repositorio en cuestion.

![image](https://github.com/BlutLucifugeKrieger/Biblioteca-WebApp/assets/130005378/8ba34ee0-e723-42db-a57e-99c120fbe1d3)

____________________________________________________________________


## Segundo paso: Configuracion del servidor y base de datos (SQLServer)

### Enlace del script para creacion de tablas
  **Dropbox:** https://www.dropbox.com/scl/fi/nbus19oqcm9zpapjoydhm/BibliotecaScript.sql?rlkey=vw29wq3b2j6q1tlwt7qwgskga&dl=0 
  
Deberas acceder al anterior enlace de Dropbox para descargar o copiar las sentencias SQL que se utilizaran 
posteriormente en el entorno SQL Server Management studio.

### -> Abre el entorno SQL Server Management studio y importa el archivo descargado con las sentencias SQL.

![2-2](https://github.com/BlutLucifugeKrieger/Biblioteca-WebApp/assets/130005378/3e2a1eff-03f5-4a8a-95b2-1aceb9fd7249)

Al importar el script, el siguiente paso es crear la base de datos.

![5-5](https://github.com/BlutLucifugeKrieger/Biblioteca-WebApp/assets/130005378/73b431c5-c314-4f9b-a96b-f0e8afbbfa7f)

Despues, debemos modificar la sentencia "USE", para indicarle que utilice la base de datos que recien creamos (biblioteca_web_app),
una vez se realice esta modificacion al script lo ejecutamos.

![6-6](https://github.com/BlutLucifugeKrieger/Biblioteca-WebApp/assets/130005378/0bb5d07a-7858-44e5-9352-0883bb38ce5c)

Al ejecutar el script, se obtendra como resultado, cada una de las tablas creadas (Libros y Autores) y ademas, una ultima visualizacion 
de una tabla atraves de una sentencia INNER JOIN, para juntar en una sola tabla el nombre de los libros y el nombre 
de los autores que los escribieron.

![7-7](https://github.com/BlutLucifugeKrieger/Biblioteca-WebApp/assets/130005378/88db000c-5e28-46d4-b0b0-467c7cefa582)

Ya en este punto, la base de datos quedo configurada, ahora solo resta establecer la conexion entre dicha base de datos y la API en ASP.NET MVC

________________________________________________________________________________________________

## Tercer paso: Configuracion de la API en ASP .NET MVC

### -> En primer lugar, abrimos el proyecto de .NET haciendo doble click en la solucion.

![8](https://github.com/BlutLucifugeKrieger/Biblioteca-WebApp/assets/130005378/9c7ffc1a-cc42-4dfe-8de3-068280258883)

Una vez, el proyecto haya finalizado de cargar, se debe dirigir al archivo "appsettings.json", esto, para configurar la conexion a su servidor local
que esta alojando la base de datos que recientemente se creo.

![9](https://github.com/BlutLucifugeKrieger/Biblioteca-WebApp/assets/130005378/6df48129-098a-444e-a85c-28c653a77085)

Como se alcanza a observar, debemos modificar el valor de la subseccion "BibliotecaAPPContext", ya que, la conexion en este caso se realiza atraves de un servidor local.
Asi que, debemos dirigirnos al "Server Explorer" para establecer la conexion con el servidor y la base de datos que nos interesa. 

![10](https://github.com/BlutLucifugeKrieger/Biblioteca-WebApp/assets/130005378/7c6111ae-7655-4f77-a1d8-fdfe3141937e)

Poco despues, aparecera un recuadro en donde debes de agregar el nombre del servidor local en tu maquina y la base de datos con la que queremos establecer una conexion.
En mi caso particular, las propiedades se establecieron de la siguiente manera:

![12-12](https://github.com/BlutLucifugeKrieger/Biblioteca-WebApp/assets/130005378/f6ec6ba3-e14b-4d56-8b83-c864fa06e569)

En este punto, podriamos probar la conexion a la base de datos al clickear el boton de "Test Connection", si realizaste todos los pasos adecuamente hasta ahora, te deberia salir
un mensaje como este que te muestro a continuacion.

![13-13](https://github.com/BlutLucifugeKrieger/Biblioteca-WebApp/assets/130005378/cdd3ade7-4d63-44b6-9624-43acfc195f0b)

Finalizamos, dandole al boton de "OK", y en este punto podremos visualizar la base de datos desde el menu del "Server Explorer".

![14](https://github.com/BlutLucifugeKrieger/Biblioteca-WebApp/assets/130005378/504d29f1-d315-40eb-9c7a-ff657d3b51de)

Ahora bien, para obtener el "Connection String", se debe dar click derecho sobre la base de datos y seleccionar la opcion de propiedades.

![15](https://github.com/BlutLucifugeKrieger/Biblioteca-WebApp/assets/130005378/9759cf59-846a-4c3b-a64a-74d57a82744c)

Se desplegara otra ventana, con las siguiente caracteristicas, de todas ellas, fijate en la celda que indica "Connection String" y copia su valor.

![16](https://github.com/BlutLucifugeKrieger/Biblioteca-WebApp/assets/130005378/45d451e7-fee6-466b-9606-a321213e4b57)

Una vez copiado, deberas regresar al archivo "appsettings.json" y pegar dicho valor que copiaste en la subseccion llamada "BibliotecaAPPContext".

En mi caso particular, mi configuracion final queda de la siguiente forma.

![17](https://github.com/BlutLucifugeKrieger/Biblioteca-WebApp/assets/130005378/dc8e30e5-3559-4cf6-88a1-2ccc064d43e3)

Como puedes apreciar, basicamente el "Connection String" esta compuesto del nombre del servidor en donde estan alojadas las bases de datos (Data Source),
en segundo punto tenemos la base de datos exacta a la cual queremos conectarnos, es decir se definio con "Initial Catalog", finalmente tendriamos las credenciales 
del usuario, no obstante al establecer o indicar "Integrated Security = True", estamos diciendo que se omita el identificador de usuario y contraseña, y en lugar de ello,
se emplee la seguridad integrada.

Bien, con esto se finalizaria la configuracion de la API en ASP .NET MVC y pasariamos a ejecutar el dicha solucion.

![image](https://github.com/BlutLucifugeKrieger/Biblioteca-WebApp/assets/130005378/5d0675a7-e6a8-4479-8540-f5534b7364ff)

Al ejecutar el proyecto, observaremos que se inicializara la herramienta Swagger, en donde podremos probar cada uno de los endpoints definidos en los controladores de la API

![image](https://github.com/BlutLucifugeKrieger/Biblioteca-WebApp/assets/130005378/5a5f7c84-3523-4969-9809-d347ef2ee552)

En mi caso, suelo trabajar mas con Postman o Insomnia, asi que, usando Postman podemos tambien probar cada endpoint.
Si nos dirigimos a la parte izquierda, podemos observar cada uno de los enpoints que tambien se vieron con la herramieta Swagger.
_____________________________________________________________________________
## Descripcion de los Endpoints de la API (ASP.NET MVC)

## Metodos GET

### -> Todos los autores: https://localhost:7154/api/autores 

### Descripcion: Al ejecutar un metodo GET en dicho endpoint obtendremos todos los registros de la tabla "Autores" en formato JSON.

#### Prueba usando Postman:

![21](https://github.com/BlutLucifugeKrieger/Biblioteca-WebApp/assets/130005378/8c9c1ae2-0c3c-4727-b4da-aba1fc35a4a3)

### -> Todos los libros: https://localhost:7154/api/libros 

### Descripcion: Al ejecutar un metodo GET en dicho endpoint obtendremos todos los registros de la tabla "Libros" en formato JSON.

#### Prueba usando Postman:

![22](https://github.com/BlutLucifugeKrieger/Biblioteca-WebApp/assets/130005378/98ff9c94-08b4-4b17-b51f-c7da0c17f8fc)

### -> Todos los libros con sus autores: https://localhost:7154/api/libros/autoresYLibros 

### Descripcion: Al ejecutar un metodo GET en dicho endpoint obtendremos todos los registros resultantes de un INNER JOIN entre la tabla "Libros" y "Autores" en formato JSON.

#### Prueba usando Postman:

![23](https://github.com/BlutLucifugeKrieger/Biblioteca-WebApp/assets/130005378/9aa933f9-f9d1-4b8d-8964-7e8b5c172fdf)

## Metodos POST

### -> Añadir un nuevo autor: https://localhost:7154/api/autores/nuevoAutor

### Descripcion: Al ejecutar un metodo POST en dicho endpoint obtendremos una respuesta a la solicitud mediante un objeto JSON.

#### Prueba usando Postman:

![24](https://github.com/BlutLucifugeKrieger/Biblioteca-WebApp/assets/130005378/54d03f35-9e54-475b-b08d-182610be40e7)

### Nota: En dado caso que, el autor ya exista en la base de datos, se obtendra como respues el siguiente objeto JSON:

![26](https://github.com/BlutLucifugeKrieger/Biblioteca-WebApp/assets/130005378/69e63d28-a652-40db-95cf-4713a2550851)

_____________________________________________________________________________

### -> Añadir un nuevo libro: https://localhost:7154/api/libros/nuevoLibro

### Descripcion: Al ejecutar un metodo POST en dicho endpoint obtendremos una respuesta a la solicitud mediante un objeto JSON.

#### Prueba usando Postman:

![25](https://github.com/BlutLucifugeKrieger/Biblioteca-WebApp/assets/130005378/40df87c3-663d-4ea7-91ad-1c6669cf4c77)

### Nota: En dado caso que, el libro ya exista en la base de datos asociado al mismo autor, se obtendra como respues el siguiente objeto JSON:

![27](https://github.com/BlutLucifugeKrieger/Biblioteca-WebApp/assets/130005378/8187e0f3-c794-421c-bebe-85e98eb3511e)

____________________________________________________________________________

## Cuarto paso: Compilacion y generacion de los paquetes de modulos de NodeJS y NextJs para la vista desarrollada con React NextJS.

### -> Nos dirigimos al proyecto, y entramos a la carpeta llamada "views"

![28](https://github.com/BlutLucifugeKrieger/Biblioteca-WebApp/assets/130005378/af828455-0c8e-40d2-a230-d883dba52748)

Abrimos el GitBash en la raiz del directorio "views"

![29](https://github.com/BlutLucifugeKrieger/Biblioteca-WebApp/assets/130005378/e52dddfb-2889-4a04-95ac-5124e5731f1f)

A continuacion, procedemos a descargar / generar los modulos de NodeJS utilizados en la vista.

![30](https://github.com/BlutLucifugeKrieger/Biblioteca-WebApp/assets/130005378/d5dca102-1c22-4efd-b46b-121c4ea090bf)

Al finalizar, obtendriamos algo como esto, como vemos, se creo la carpeta "node_modules" la cual contiene los modulos mencionados previamente:

![31](https://github.com/BlutLucifugeKrieger/Biblioteca-WebApp/assets/130005378/af67f576-5b62-4a62-bf23-cb4ec1657866)

No obstante, aun se deben de descargar/generar los modulos del framework de React (NextJS), esto lo hacemos atraves del siguiente comando:

![32](https://github.com/BlutLucifugeKrieger/Biblioteca-WebApp/assets/130005378/5e2d1a04-d349-4c88-8355-96af0412a721)

Finalmente, como resultado obtendremos la carpeta ".next", la cual tiene la estructura , construccion y optimizacion de la vista o aplicativo web en este caso en concreto:

![33](https://github.com/BlutLucifugeKrieger/Biblioteca-WebApp/assets/130005378/932d6f5f-9745-4824-83b6-6105be4593f5)

Al ejecutar el proyecto en React NextJS, mediante el siguiente comando, se obtiene que la aplicacion web esta corriendo en el puerto 3000 mediante un servidor local.

![34](https://github.com/BlutLucifugeKrieger/Biblioteca-WebApp/assets/130005378/e399d013-849f-49f1-8dbe-770e4d38e157)
___________________________________________________________________________

### Aplicacion Web desplegada en un servidor local en el puerto 3000 (Vista - UI) 

Accedemos a la direccion mediante cualquier navegador.

![35](https://github.com/BlutLucifugeKrieger/Biblioteca-WebApp/assets/130005378/df3cc0f9-3227-42a3-b518-c4c103f20956)


Como se observa, en la pagina principal se listan todos los libros y sus respectivos autores, y hacemos scroll down, veremos lo siguiente:

![36](https://github.com/BlutLucifugeKrieger/Biblioteca-WebApp/assets/130005378/15bb77cc-2a81-4a1d-bdee-10d8161b59a9)

Tenemos dos botones, para añadir tanto autores como libros, si accedemos en primer lugar a la opcion de autores,
se despliega una ventana modal (opte por una ventana modal en lugar de otra pagina, simplemente por versatilidad y comodidad para el usuario).

![37](https://github.com/BlutLucifugeKrieger/Biblioteca-WebApp/assets/130005378/af1985d8-549a-45ad-bcb7-2774ec6cbac8)

En este punto, se puede colocar un titulo de un libro y se puede seleccionar como autor a alguno de los ya existentes autores en la base de datos.

![38](https://github.com/BlutLucifugeKrieger/Biblioteca-WebApp/assets/130005378/699d64c1-3010-4ee2-89d9-bbf4a2d5c9dd)

____________________________________________________________________

### Ejemplo de funcionamiento (Añadir un nuevo libro)

Como ejemplo, agregaremos un libro llamada "Holly" del autor Stephen King, asi que clickeamos el boton de "Añadir libro".

Al agregar la informacion (escribiendo un titulo y seleccionando un autor) y despues clickear en el boton "Guardar Libro", 
se despliega una alerta sencilla, indicando que el libro "Holly" fue almacenado correctamente.

![39](https://github.com/BlutLucifugeKrieger/Biblioteca-WebApp/assets/130005378/f0419b51-9d22-43ad-88f8-801db73c84b4)

Despues, al clickear aceptar se recargara la pagina y el libro deberia aparecer en la tabla de la pagina principal.

![40](https://github.com/BlutLucifugeKrieger/Biblioteca-WebApp/assets/130005378/ac32d99e-0bcd-4ad1-a420-3030e41e6bfe)

________________________________________________________________________
### Validacion (añadir un libro nuevo)

En caso, de que no proporcione informacion a la hora de añadir un nuevo libro, saltara una alerta indicando que porfavor, añada dicha informacion.

![41](https://github.com/BlutLucifugeKrieger/Biblioteca-WebApp/assets/130005378/2468f553-4959-4b5b-ac92-c988d7e52513)

Por otro lado, si se desea agregar un nuevo libro, pero este ya esta registrado en la base de datos, saltara el siguiente mensaje en forma de alerta.

![42](https://github.com/BlutLucifugeKrieger/Biblioteca-WebApp/assets/130005378/caab6bbf-2dd0-43c8-b941-2d04dba294c3)

________________________________________________________________________

### Ejemplo de funcionamiento (Añadir un nuevo autor)

Para empezar, clickeamos el boton "Añadir Autor", y se desplagara una ventana modal, con la siguiente informacion.

![43](https://github.com/BlutLucifugeKrieger/Biblioteca-WebApp/assets/130005378/e62bc01c-b003-4a00-b6c7-4630a4317f08)

Para corroborar el funcionamiento, vamos a ingresar un autor llamado "Camilo Castro" y despues clickeamos en el boton "Guardar Autor".

![44](https://github.com/BlutLucifugeKrieger/Biblioteca-WebApp/assets/130005378/40314f1f-f944-43eb-ab91-6511dc119ed6)

Como vemos, el autor se añadio correctamente a la base de datos, igualmente, podemos corroborarlo en el menu de añadir un nuevo libro, 
para revisar si efectivamente el nuevo autor se añadio.

![45](https://github.com/BlutLucifugeKrieger/Biblioteca-WebApp/assets/130005378/94d1324a-d0fe-4330-9604-a14f2021b74f)

_______________________________________________________________________

### Validacion (añadir un nuevo autor)

En caso, de que no proporcione informacion a la hora de añadir un nuevo autor, saltara una alerta indicando que porfavor, añada dicha informacion.

![46](https://github.com/BlutLucifugeKrieger/Biblioteca-WebApp/assets/130005378/e74034ea-1925-4209-a0e4-31145938342e)

Por otro lado, si se desea agregar un autor, pero este ya esta registrado en la base de datos, saltara el siguiente mensaje en forma de alerta.

![47](https://github.com/BlutLucifugeKrieger/Biblioteca-WebApp/assets/130005378/9110ae21-5f77-4bfc-ba6d-bcedd8a2e1ae)

______________________________________________________________________

## Diagrama entidad relacion (Generado en SQLServer Management Studio)

![49](https://github.com/BlutLucifugeKrieger/Biblioteca-WebApp/assets/130005378/547a0264-6f41-4a0a-8abf-5758b4d8680a)

______________________________________________________________________

