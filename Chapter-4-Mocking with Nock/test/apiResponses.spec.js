/**
 -------------------------------------
 
 Conceptos: (SIMULACION O IMITAICION)
 MOCKING
Simulación o imitación (
    se refiere al acto de crear y usar objetos simulados o imitaciones
     en pruebas de software para reemplazar componentes reales y 
     controlar el comportamiento de estos componentes durante las pruebas).

 MOCK OUT: (SIMULAR O IMITAR)
 Simular o imitar (por lo general, se refiere a imitar una 
    función o comportamiento específico para propósitos de prueba o demostración).

------------------------

 En este modulo estaremos usando nock para imitar nuestra respuesta api,
Estaremos haciendo esta interaccion con nuestra API hasta el punto que enviemos
la solicitud o testeando los componentes de cuales depende la respuesta API

El servidor que vamos a estar usando es una API que retorna lista de usuarios.
y la lista de usuario devuelve usuarios, asique vamos a ir al server y veremos como
luce este servidor.

Para acceder al servidor debemos dirigirnos en nuestra terminal a la carpeta server
-> cd server

Una vez alli debemos instalar el servidor con 
-> npm install.

Luego debemos iniciar el servidor con
-> npm start

Una vez que inicie, tendremos que ver en la terminal en que puerto se ubicó,
pero generalmente es en el localhost 4000
Luego, vamos a ir al browser y navegar al http://localhost:4000/users

Vamos a obtener esta informacion por default una vez que abrimos esa pagina:
{
    "users": [
        {
            "_id": "123",
            "name": "lewis",
            "email": "lewis@myapp.com"
        }
    ]
}

Asi luce la API




 */