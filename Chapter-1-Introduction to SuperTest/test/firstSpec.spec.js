///////////////////////////////  apuntes ////////////////////////////////

//Cuando interactuamos con el servidor, express, lo que vamos a tener que decirle es que queremos hacer un get, post, put, delete.

//Si hacemos un get, vamos a decirle el endpoint que queremos probar, luego le diremos como segundo parametro que podemos obtener un error o un response.
//Luego la interaccion sera asi;
//  -Le solicitamos al servidor que nos devuelva el endpoint                                                -> Nos devuelve una respuesta
//  -Accedemos a la respuesta y le solicituamos que nos devuelva el status de la respuesta con valor 200    -> Nos devuelve un err si no es 200 y nos devuelve una respuesta si es 200
//  -Le solicitamos al servidor que nos devuelva un json -> Nos devuelve un 



/////////////////////////////////////////////////////////////////////////

//Lo primero que vamos a hacer sera crear una variable express
//explica que express es un server de node.js creado para generar solicitudes http.
const express = require('express');

//Luego creamos una instancia de express llamada app para crear nuestra aplicacion.
//Con esto estamos mejorando la facilidad de uso de express y la capacidad de pasar
//la aplicacion al comando de superTest, para no preocuparnos por pasar la app en 
//local host
const app = express();

//Para hacer una request debemos importar la libreria supertest
//Es una biblioteca de prueba para Node.js que se utiliza comúnmente
//en pruebas de integración para aplicaciones web.
//Permite realizar solicitudes HTTP y aserciones sobre las respuestas 
//obtenidas. Es particularmente útil para probar API RESTful y otras aplicaciones
// que se comunican a través de HTTP
const request = require('supertest');

//Vamos a importar expect de la libreria chai, para hacer asersiones.
const expect = require("chai").expect;



//Vamos a configurar ahora nuestra primera solicitud.
//Vamos a estar apuntando en el primer parametro al endpoint que queremos probar
//luego como segundo parametro, va a recibir un error o una respouesta.
app.get(`/first`, (err, res) => {

    //Cuando recibimos una respuesta, vamos a acceder al status de esa respuesta.
    //Luegop vamos a devolver un status code de 200 para ver que este todo bien.
    //Una vez que tengmos el status, vamos a volver a devolver un json como respuesta para notificar que todo este bien.
        //eso lo hacemos pasando un body ok: response.
    res.status(200).json({"ok": "response"});
})


//describe y it son palabras claves de mocha, se usan para designar un test suite (describe) y un test case (it).
describe("First Test",function(){
    it(`Ok response`, function(){

        //Vamos a hacer una solicitud, request es la palabra que tenemos reservada para hacer solicitudes al servidor http
        //podemos mirar en la linea 31, que estamos accediendo a supertest, y le dieramos que esa solicitud va a ser
        //al servidor express.
        request(app)

        //vamos a hacerle una peticion del tipo GET
        .get(`/first`)

        //Al terminar la solicitud, queremos retornar una funcion callback, que almacene 
        //la respuesta en una variable err si es error o res si es exitoso.
        .end((err, res) => {
            //Aca decidmos que esperamos que res.statusCode sea igual a estado 200.
            expect(res.statusCode).to.be.equal(200)
        })
    })
})

//Generalmente cuando estamos probando nuestras API, accederemos a un servidor http y nuestra api se alojara alli
//Ahora vamos a probar una pagina que se llama mocky.io
//mocky nos permite configurar la respuesta y nos generara una respuesta http
//vamos a hacerlo a continuacion:
describe("Ok mocky", function(){
    it("Mocky OK Response", function(){
    //Le diremos que queremos acceder a la url mocky.io
    request(`http://mocky.io`)
    //Vamos a obtener una url aleatoria generada por mocky.
    .get(`v3/a4d7cb7d-8a6c-4d36-aa2a-d96e54f825af`)
    //Usnado suértest directamente, podemos encadenar el expect al get
    //y ver si el status code es igual a 200.
    .expect(200)
    })
//Ahora vamos a saltar a la pagina, vamos a acceder a la pagina webmocky y a generar una solicitud get.
//Al entrar, vemos que el campo Status Code esta en "200 - OK", el tipo de contenido es JSON.
//En el body vamos a escribir nuestra respuesta esperada, que es un {"first": "test"}.
//Luego le damos en el boton para generrar la respuesta o response http.
//Luego, arriba, mocky nos generará una url, esa url la pasamos en la linea de codigo 80.
// https://run.mocky.io/v3/a4d7cb7d-8a6c-4d36-aa2a-d96e54f825af -> a esa url hay que quitarle solo el http://run.mocky.io ya que es nuestro root, raiz o base.
//Bien... Ahora cuando ejecutemos todo el codigo, la respuesta que estamos esperando del get, es {"first": "test"}.
//Si ejecutamos el npm test, nos tiene que devolver como respuesta que todo corrio bien.

})
