API Rest de pruebas 
Aplicación compilada con JDK 21.n

Requiere el JRE versión 21.n o superior, instalado en su sistema operativo

NO use doble clic para ejecutar la aplicación, abra una terminal (CMD) sobre la carpeta:
   ./api-envios/

Estando dentro de la carpeta ./api-envios/, ejecute uno de los siguientes comandos:
   java -jar envios.jar (con la traza de errores habilitada y en el puerto por defecto)
   java -jar envios.jar false (con la traza de errores deshabilitada y por el puerto por defecto)
   java -jar envios.jar true 6060 (con la traza de errores habilitada y por el puerto 6060)
   java -jar envios.jar false 5050 (con la traza de errores deshabilitada y por el puerto 5050)

Los usuarios de Window pueden crear un archivo BAT para automatizar la ejecución (si tiene privilegios de admin):

@echo off
rem las siguientes líneas seleccionar la unidad y la ruta de ejecución
cd c:
cd "c:/ruta completa de la carpeta que contiene el JAR"
java -jar apiRestVentas.jar true 7070
pause
exit 0


Si su sistema operativo es Linux puede crear un archivo .sh con las siguientes instrucciones:

#!/bin/bash
echo "Activando API Rest de envíos..."
cd /pathX/subpathY/…/api-envios
java -jar envios.jar [true|false] [port]

Luego hay que dar permisos de ejecución. 

En Linux Mint basta con dar clic derecho sobre el archivo creado > Permisos > seleccionar la casilla "Permitir ejecutar este archivo como un programa".
Hecho lo anterior, si da doble clic sobre el archivo creado, se mostrará un ventana en donde deberá elegir “Ejecutar en una terminal”.


