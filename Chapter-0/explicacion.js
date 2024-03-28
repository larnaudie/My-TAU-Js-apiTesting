/*
Debemos instalar mocha, chai, express, nock y supertest
una vez que estamos bien ubicados en la terminal
de Visual studio Code, en la carpeta del capitulo, ejecutar el comando

npm install mocha chai supertest nock express

En cada carpeta deberemos correr ese codgio, 
tambien debemos descargar la libreria de github del docente 
para que nuestra aplicacion y nuestro servidor funcionen.
Esa libreria es algo que viene con el curso, ya que es la base para nuestra aplicacion.

El package.json deberia de estar creado con esta informacion:
*/

{
  "name": "tau-api-testing",
  "version": "1.0.0",
  "description": "API testing with supertest & nock",
  "main": "index.js",
  "scripts": {
   // "test": "mocha '**/*.spec.js'"
},
"repository": {
  "type": "git",
  "url": "git+https://github.com/lewisPrescott707/tau-api-testing.git"
},
"author": "lewis prescott",
"license": "MIT",
"bugs": {
  "url": "https://github.com/lewisPrescott707/tau-api-testing/issues"
},
"homepage": "https://github.com/lewisPrescott707/tau-api-testing#readme",
"dependencies": {
  "chai": "^4.4.1",
  "express": "^4.18.2",
  "mocha": "^7.2.0",
  "nock": "^12.0.3",
  "supertest": "^4.0.2"
}
}

/*
 En esta carpeta encontraran 2 zips, esos zips fueron descargados cuando
 vimos el capitulo 0

 */
