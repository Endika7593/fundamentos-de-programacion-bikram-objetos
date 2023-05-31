// 1
const Coche = {
    marca: "",
    modelo: "",
    matricula: ""
  };
  
  // 2
  const Casa = {
    codPostal: "",
    calle: "",
    portal: "",
    piso: ""
  };
  
  // 3
  const FullStackDeveloper = {
    lenguajes: [],
    proyectos: []
  };
  
  // 4
  const Perro = {
    nombre: "",
    raza: "",
    color: "",
    edad: "",
    ladrar: function() {
      console.log("¡Woof woof!");
    },
    popo: function() {
      return Math.random() * 3;
    }
  };
  
  // 5
  let marcaPortatil = Portatil.marca;
  
  // 6
  let marcaPortatil2 = Portatil["marca"];
  
  // 7
  let grupos = Concierto.grupos;


  // 8
  let arrayRGB = [];
arrayRGB.push(Led.rojo);
arrayRGB.push(Led.verde);
arrayRGB.push(Led.azul);

  
  // 9
  
  // 10
  Concierto.cartelera.push("Guns N' Roses");
  
  // 11
  Concierto.fecha = new Date();
  
  // 12
  Impresora.imprimiendo = {
    nombreArchivo: "",
    copias: 0,
    numPaginas: 0
  };
  
  // 13
  const Noticia = {
    titular: "",
    cuerpo: ""
  };
  
  // 14
  const Persona = {
    nombre: "",
    apellidos: "",
    edad: ""
  };
  
  // 15
  const Avion = {
    numPasajeros: "",
    despegar: function() {
      console.log("despegando");
    },
    volar: function() {
      console.log("llegando al destino");
    },
    aterrizar: function() {
      console.log("aterrizando");
    }
  };
  
  // 16
  const Paquete = {
    contenido: []
  };
  
  // 17
  const Pais = {
    numHabitantes: "",
    continente: "",
    gentilicio: ""
  };
  
  // 18
  const codError = O_Error.codigo;
  
  // 19
  const integrantes = Grupo["array integrantes"];


  
  // 20
  const nivelesTinta = Impresora["objeto tinta"];
  
  // 21
  const pixeles = Pantalla["array bidimensional pixeles"];
  
  // 22. 
  const especificaciones = Movil["especificaciones"];
  
  // 23
  Grupo.numIntegrantes = 5;
  
  // 24
  Pantalla.dimensiones = "1920x1080";
  
  // 25
  Led.encendido = !Led.encendido;
  
  // 26
  Movil.temperatura = "20º";
  