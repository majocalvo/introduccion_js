/* Crea una lista con los siguientes elementos:

- Tu nombre (string)
- Tu apellido (string)
- Tu edad (number)
- ¿Eres desarrollador de aplicaciones web? (boolean)
- Tu fecha de nacimiento (Date)
- Tu libro favorito (Objeto con propiedades: titulo, autor, fecha, url)
- Tu pasatiempos favoritos (Array)
- Declara una funcion miActividadFavorita la cual retorne un string con la accion que mas te guste realizar */

var nombre = 'Maria Jose',
  apellido = 'Calvo',
  edad = 38,
  desarrollador = 'true',
  fechaDeNacimiento = new Date("1984,03,13"),
  miLibroFavorito ={
    título: "La casa de los espíritus",
    autor: "Isabel Allende",
    fecha: 1982,
    url:"https://es.wikipedia.org/wiki/La_casa_de_los_espíritus"
    },
    misPasatiempos=['dibujar','ver series','regalonear a mis mascotas',"dibujar de nuevo"],
    miActividadFavorita = function() {
      console.log('tatuar');
    };
    



