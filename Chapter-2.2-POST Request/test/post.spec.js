//Ahora vamos a estar haciendo post, en la app.js nos deja el profesor los siguientes endpoints para hacer post.
//post es un metodo que nos permite enviar datos al servidor.

const app = require('../src/app');
const request = require('supertest');
const expect = require("chai").expect;

//Hay diferentes formas de interactuar con post request,

//tenemos la tipica interaccion con la api que recibimos una respuesa json y
//toma una solicitud json.

//La otra es que toma un framework php por ejemplo;
//que envie un formulario que se pasara como un formulario url, vamos a ver ambas opciones.

describe("Post Request", function(){
    it(`json response`, function(){
        request(app)
        //Aqui usamos el endopoint que queremos enviar el json.
        .post('/course')
        //En este caso, supertest usa send para enviar los datos
        //Enviaremos nuestros datos como un objeto json
        //Enviaremos el nombre del curso como name: supertest course.
        .send({name: `supertest course`})
        //Al hacerlo queremos establecer tambien un encabezado de aceptacion.
        //el encabeza de aceptacion, cuando enviamos un objeto json, debe ser
        //application/json.
        .set('Accept', 'application/json')
        //Una vezs que hayamos verificado la respuesta, queremos verificar que el
        // body sea como esperamos.....
        .end((err, res) => {
            //...Para eso vaos a usar expect sobre el response, que contiene el body y el nombre del curso
            expect(res.body.name).to.equal(`supertest course`)
        })
    })

    //Nuestra siguiente prueba que haremos sera acerca de los forms, formularios
    //verifiquemos una respuesta de un formulario.
    //los formularios se envian de forma un poco diferente, en la parte de send

    it(`form response`, function(done){
        request(app)
        .post('/course')
        //En este caso, send aceptara string,
        //usa la sintaxis de HTTP, value=key. en un string.
        //Si quisieramos agregar multiples, tenemos que agregar el simbolo de %.
        //Por ejemplo, key1=value1&key2=value2&key3=value3&...
        .send("name=supertest course")
        //En este caso, la applicacion usará el formato form urlencoded.
        .set('Accept', 'application/x-www-form-urlencoded')
        //Aqui haremos una verificacion profunda del objeto 
        //pasando la respuesta completa.
        .expect(200,{"id": "2", "name": "supertest course"}, done)
        })
    })