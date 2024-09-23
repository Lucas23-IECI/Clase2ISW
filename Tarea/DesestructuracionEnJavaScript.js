// 1. Utiliza desestructuración para extraer las propiedades `nombre`, `apellido` y `ciudad` del objeto `usuario`.

const usuario = {
    nombre: 'Lucas',
    apellido: 'Méndez',
    edad: 21,
    direccion: {
        calle: 'Las Heras',
        numero: 275,
        ciudad: 'Hualqui',
        pais: 'Chile'
    },
    contactos: {
        telefono: '123456789',
        email: 'lucasmendezrisopatron@gmail.com',
        redesSociales: {
            instagram: '@lucas23_._',
        }
    },
    intereses: ['Programación', 'Música', 'Futbol']
};

const { nombre, apellido, ciudad } = usuario;
console.log(nombre);
console.log(apellido);
console.log(ciudad);

// 2. Extrae el primer interés del arreglo `intereses` en una variable llamada `primerInteres`.

const { intereses } = usuario;
const [primerInteres] = intereses;
console.log(primerInteres);

// 3. Extrae el `email` y `instagram` de los contactos del usuario.

const { email, redesSociales: { instagram } } = usuario.contactos;
console.log(email);
console.log(instagram);

// 4. Extrae `calle` y `numero` de la dirección, pero renómbralos como `calleUsuario` y `numeroUsuario`.

const { calle: calleUsuario, numero: numeroUsuario } = usuario.direccion;
console.log(calleUsuario);
console.log(numeroUsuario);
