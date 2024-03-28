const app = require('../src/app');
const request = require('supertest');
const expect = require("chai").expect;

/**
 Usando supertest hay un par de formatos que podemos usar
 para la respuesta, como el texto y el obejto json.
 Tambien podemos hacer un asssertion del texto directamente.

 */

 describe("response", function(){
    //En nuestro primer test vamos a verificar el body del response
    //como vimos anteriormente, podemos usar el body por que
    //El body es pasado directamente usando supertest 
    it("response", function(){
         request(app)
         .get(`/course`)
         .end((err, res) => {
            //El body esta habiilitado a cambiar directamente
            //desde el response, y asi podemos verificar 
            //que el id sea igual a 1
             expect(res.body.id).to.be.equal(`1`)
         })
     })

     //Ahora, en este ejemplo, vamos a ver el texto.
     //Cuando estamos asserting nuestra respuesta, no nos tenemos
     //que preocupar por la estructura del objecto como en el json response
     //Vamos a querer chequear que la respuesta tenga el valor correcto
     // o el correcto contenido.
     it("text response", function(){
        
        request(app)
        .get(`/course`)
        .end((err, res) => {
            //en la repsuesta en si, podemos tener la respuesta.text
            //Alli podemos verificar si la respuesta contiene el valor 1
            expect(res.text).to.contain(`1`)
        })
     })

     //En este test vamos a verificar el status directo de la respuesta
     it("status response", function(){
        request(app)
        .get(`/course`)
        //vamos a verificar que nos devuelva un estado ok de respeusta
        .end((err, res) => {
            //Esto devuelve uin valor boolenao podemos hacer 2 opciones
            //expect(res.ok).to.be.equal(true);
            expect(res.ok).to.true

            //Esto suele ser mejor que pasar un status(200), porque alguien
            //que quiere leer el test, puede entender que es una respuesta ok, en vez
            //de tener que entender el codigo http.

            //En el proximo modulo vamos a estar haciendo un mocking out the las respuestas
            //usando nock.
            //Aprendimos a que el objeto directamente pasado usando supertest
            //Que podemos interactuar con el objeto text, no solo the json.
            //tambien el codigo de repsuesta es devuelto en formato leible y
            //podemos hacer aserciones contra el booleano del status code
        })
     })
 })

