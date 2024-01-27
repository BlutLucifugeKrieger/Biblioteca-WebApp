
[![Node.js Version](https://img.shields.io/badge/Node.js-18.17.0-brightgreen)](https://nodejs.org/)
[![.NET](https://img.shields.io/badge/.NET-C%23-blue)](https://dotnet.microsoft.com/)
[![Next.js Version](https://img.shields.io/badge/Next.js-14.1.0-blueviolet)](https://nextjs.org/)


# Biblioteca - Web Application
_____________________________________
## Informacion de contacto
### Desarrollador: Juan Camilo Castro Velasquez
### Email: juan.leviathan@outlook.com
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

Al importar el script, debemos crear una nueva base de datos.

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

