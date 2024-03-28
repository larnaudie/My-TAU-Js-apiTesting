/*//////////////////////    APUNTES //////////////////////////

    //          ROOT PARAMETERS
    // Vamos a comenzar con los parametros de raiz o root params
    // Los parametros de reiz son nombrados "segmentos URL", que son usados para
    // capturar valores especificos en su posicion en la URL, los valores capturados se
    // llenan en el objeto req.params, con el nombre del parametro de ruta especificado
    // en el camino como sus respectivas llaves. 

    Route path: /users/:userid/books/:bookId
    Request URL: http://localhost:3000/users/123/books/456
    req.params: { userid: '123', bookId: '456' }


    //Para definir rutas con parametros de ruta, simplemente especificamos el
    //parametro de ruta en el path o endpoint de la ruta.

    app.get('/users/:userid/books/:bookId', (req, res) => {
        res.send(req.params)
    })

-----------------------------------

En la siguiente seccion, vammos a chquerear query parametros
para eso vamos a estar utilizando Techopedia Explains Query Strings.

En la world wide web, todos los URL pueden dividirse en tres partes: 

1) el protocolo,
El protocolo que ves en un navegador es casi siempre HTTP; típica del nombre de host.

2) la ubicación del archivo (o programa)
la ubicación es la forma el nombre de archivo (por ejemplo, 
www.techopedia.com/somefile.html),

3) la cadena de consulta. 
Es todo lo que sigue al signo de interrogación ("?").

Por ejemplo, en el URL a continuación, el área entre parentesis es la cadena de consulta 
que se generó cuando se buscó el término "database" en el sitio web de Techopedia.

//www.techopedia.com/search.aspx?(q=database§ion=all)

La cadena original seria sin parentesis
//www.techopedia.com/search.aspx?q=database§ion=all



////////////////////////////////////////////////////////////////////////
*/
//Repasar chapter 1 para entender que es lo que hace cada linea.
const express = require('express');
const request = require('supertest');
const expect = require("chai").expect;

//La diferencia, es que aca estamos importando la aplicacion desde la carpeta src y
//luego accediendo al archivo app.js
const app = require('../src/app');

//Ahora en la aplicacion, si entramos al archivo app.js
// tenemos mas endpoints, si entramos vamos a ver que tenemos
// otros endpoints como /course, o course/:id, o /courses

describe("GET Request", function(){
    //          ROOT PARAMETERS -> mirar apuntes arriba.
    // Vamos a estar testeando /courses con ids.
    it(`Get course id`, function(){
        //Accedemos a nuestra app mediante supertest para hacer solicitudes HTTP.
        request(app)
        //Accedemos al path o endpoin /course/1, el 1 es el id.
        .get(`/course/1`)
        //Cuando testeemos el parametro raiz, vamos a querer testear la response.....
        .end((err, res) => {
            //....Entonces, vamos a cceder al id del body que devuelve la respuesta.
            //Para ello, vamos a decirle que esperamos la respuesta del body
            //que sea gual a 1, el id es 1.
            //La api nos estara devolviendo el valor que estamos colocando en el "1".
            expect(res.body.id).to.be.equal(`1`);
        })
    })

    it("get query param name", function(){
        //Aca vamos a pasar el nombre del curso soalmente
        //estaremos aplicando el resumen de la linea 24

        //localhost/course?name=mocha
        //mocha tiene un id 1, en este server
        //query params vienen despues del sirgno ?
        //name es la key y mocha es el valor.
        request(app)
        .get(`/course`)
        //Aqui es donde aplicamos los conveptos, vemoes pasale
        //el key y el valor.
        .query({name: `mocha`})
        //le decimos que esperamos un resultado 200 que este todo bien.
        //Como segundo parametro vamos a pasar un objecto, que es el body
        //Vamos a decirle que esperamos que el body sea id: "1" y el name "mocha".
        .expect(200, {id: `1`, name: `mocha`});
    })
})
