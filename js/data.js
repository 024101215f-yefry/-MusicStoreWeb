// ============================================================
// MusicStore Web - Datos Mock con Alma Latina
// ============================================================

// ---- ARTISTAS ----
const artistas = [
  { id: 1, nombre: "Bad Bunny", genero: "Reggaeton", pais: "Puerto Rico", imagen: "🎧", biografia: "El conejo malo. Ícono global del reggaeton y trap latino." },
  { id: 2, nombre: "Shakira", genero: "Pop Latino", pais: "Colombia", imagen: "🎤", biografia: "La reina del pop latino. 3 Grammy y 13 Grammy Latinos." },
  { id: 3, nombre: "Daddy Yankee", genero: "Reggaeton", pais: "Puerto Rico", imagen: "👑", biografia: "El Big Boss. Rey del reggaeton con más de 30 años de carrera." },
  { id: 4, nombre: "Karol G", genero: "Reggaeton", pais: "Colombia", imagen: "💜", biografia: "La Bichota. Máxima exponente femenina del reggaeton actual." },
  { id: 5, nombre: "J Balvin", genero: "Reggaeton", pais: "Colombia", imagen: "😎", biografia: "El Príncipe del Reggaeton. Embajador de la música latina." },
  { id: 6, nombre: "Romeo Santos", genero: "Bachata", pais: "Estados Unidos", imagen: "🎙️", biografia: "El Rey de la Bachata. Líder de Aventura y solista." },
  { id: 7, nombre: "Carlos Vives", genero: "Vallenato", pais: "Colombia", imagen: "🎸", biografia: "Ícono del vallenato y pop latino. Múltiples Grammy." },
  { id: 8, nombre: "Maluma", genero: "Reggaeton", pais: "Colombia", imagen: "🌟", biografia: "Pretty Boy. Reggaeton con estilo urbano y romántico." },
  { id: 9, nombre: "Marc Anthony", genero: "Salsa", pais: "Estados Unidos", imagen: "🔥", biografia: "El rey de la salsa. Voz inconfundible de la música latina." },
  { id: 10, nombre: "Soda Stereo", genero: "Rock en Español", pais: "Argentina", imagen: "🎸", biografia: "La banda de rock latino más importante de la historia." },
  { id: 11, nombre: "Los Bukis", genero: "Regional Mexicano", pais: "México", imagen: "🎶", biografia: "Leyenda de la música grupera y romántica mexicana." }
];

// ---- GÉNEROS ----
const generos = ["Reggaeton", "Salsa", "Rock en Español", "Cumbia", "Bachata", "Pop Latino", "Vallenato", "Regional Mexicano", "Trap Latino"];

// ---- ÁLBUMES ----
const albumes = [
  { id: 1, titulo: "Un Verano Sin Ti", artistaId: 1, año: 2022, genero: "Reggaeton", precio: 42.00, imagen: "🏖️", portadaColor: "#1a1a3e", esNuevo: false, esTendencia: true, descripcion: "El álbum más escuchado del mundo en 2022. 23 pistas que marcaron época." },
  { id: 2, titulo: "YHLQMDLG", artistaId: 1, año: 2020, genero: "Reggaeton", precio: 38.00, imagen: "🐺", portadaColor: "#2d1b4e", esNuevo: false, esTendencia: true, descripcion: "Álbum que rompió récords. Bad Bunny en su máxima expresión." },
  { id: 3, titulo: "El Dorado", artistaId: 2, año: 2017, genero: "Pop Latino", precio: 35.00, imagen: "💎", portadaColor: "#1a3a2a", esNuevo: false, esTendencia: false, descripcion: "Álbum ganador del Grammy. Hits como 'Chantaje' y 'Me Enamoré'." },
  { id: 4, titulo: "Barrio Fino", artistaId: 3, año: 2004, genero: "Reggaeton", precio: 28.00, imagen: "🏙️", portadaColor: "#3a1a1a", esNuevo: false, esTendencia: false, descripcion: "El álbum que llevó el reggaeton al mundo. Incluye 'Gasolina'." },
  { id: 5, titulo: "KG0516", artistaId: 4, año: 2021, genero: "Reggaeton", precio: 36.00, imagen: "💜", portadaColor: "#4a1a3a", esNuevo: false, esTendencia: true, descripcion: "Álbum más vendido de Karol G. Colaboraciones de lujo." },
  { id: 6, titulo: "Mañana Será Bonito", artistaId: 4, año: 2023, genero: "Reggaeton", precio: 40.00, imagen: "🌸", portadaColor: "#2a3a4a", esNuevo: true, esTendencia: true, descripcion: "El álbum que hizo historia. Karol G en la cima del mundo." },
  { id: 7, titulo: "Vibras", artistaId: 5, año: 2018, genero: "Reggaeton", precio: 32.00, imagen: "✨", portadaColor: "#1a2a4a", esNuevo: false, esTendencia: false, descripcion: "Éxitos como 'Mi Gente' y 'Machika'. J Balvin en su mejor momento." },
  { id: 8, titulo: "Fórmula Vol. 3", artistaId: 6, año: 2022, genero: "Bachata", precio: 34.00, imagen: "💔", portadaColor: "#3a2a1a", esNuevo: false, esTendencia: false, descripcion: "Romeo Santos continúa reinando la bachata con colaboraciones estelares." },
  { id: 9, titulo: "Clásicos de la Provincia", artistaId: 7, año: 1993, genero: "Vallenato", precio: 25.00, imagen: "🌴", portadaColor: "#2a4a2a", esNuevo: false, esTendencia: false, descripcion: "Álbum icónico de Carlos Vives que revolucionó el vallenato." },
  { id: 10, titulo: "11:11", artistaId: 8, año: 2019, genero: "Reggaeton", precio: 33.00, imagen: "🕚", portadaColor: "#1a3a3a", esNuevo: false, esTendencia: false, descripcion: "Maluma en modo romántico con hits como 'HP' y '11 PM'." },
  { id: 11, titulo: "Opus", artistaId: 9, año: 2019, genero: "Salsa", precio: 30.00, imagen: "🎺", portadaColor: "#3a1a2a", esNuevo: false, esTendencia: false, descripcion: "Marc Anthony regresa a la salsa con un álbum magistral." },
  { id: 12, titulo: "Canción Animal", artistaId: 10, año: 1992, genero: "Rock en Español", precio: 27.00, imagen: "🐒", portadaColor: "#4a3a1a", esNuevo: false, esTendencia: false, descripcion: "El álbum más emblemático del rock latino. Himnos generacionales." },
  { id: 13, titulo: "Rock Latino: Lo Mejor", artistaId: 10, año: 2000, genero: "Rock en Español", precio: 22.00, imagen: "🎸", portadaColor: "#2a1a3a", esNuevo: false, esTendencia: false, descripcion: "Compilación de los mejores temas de Soda Stereo." },
  { id: 14, titulo: "Casas de Cartón", artistaId: 11, año: 1975, genero: "Regional Mexicano", precio: 20.00, imagen: "🏠", portadaColor: "#3a2a2a", esNuevo: false, esTendencia: false, descripcion: "Clásico eterno de Los Bukis. Música con el alma mexicana." },
  { id: 15, titulo: "Peligro", artistaId: 2, año: 2023, genero: "Pop Latino", precio: 39.00, imagen: "⚡", portadaColor: "#1a1a4a", esNuevo: true, esTendencia: true, descripcion: "Shakira renace con un álbum poderoso lleno de desamor y empoderamiento." }
];

// ---- PISTAS (por álbum) ----
const pistasPorAlbum = {
  1: [
    { id: 101, titulo: "Moscow Mule", duracion: "4:05", precio: 2.50, albumId: 1 },
    { id: 102, titulo: "Tití Me Preguntó", duracion: "4:03", precio: 2.50, albumId: 1 },
    { id: 103, titulo: "Después de la Playa", duracion: "3:50", precio: 2.50, albumId: 1 },
    { id: 104, titulo: "Me Porto Bonito", duracion: "3:38", precio: 2.50, albumId: 1 },
    { id: 105, titulo: "Ojitos Lindos", duracion: "4:18", precio: 2.50, albumId: 1 },
    { id: 106, titulo: "Neverita", duracion: "3:53", precio: 2.50, albumId: 1 },
    { id: 107, titulo: "Efecto", duracion: "3:33", precio: 2.50, albumId: 1 },
    { id: 108, titulo: "Party", duracion: "3:47", precio: 2.50, albumId: 1 }
  ],
  2: [
    { id: 201, titulo: "Si Veo a Tu Mamá", duracion: "3:51", precio: 2.50, albumId: 2 },
    { id: 202, titulo: "La Difícil", duracion: "3:40", precio: 2.50, albumId: 2 },
    { id: 203, titulo: "Yo Perreo Sola", duracion: "3:52", precio: 2.50, albumId: 2 },
    { id: 204, titulo: "Safaera", duracion: "4:55", precio: 2.50, albumId: 2 },
    { id: 205, titulo: "Vete", duracion: "3:32", precio: 2.50, albumId: 2 },
    { id: 206, titulo: "Bichiyal", duracion: "3:16", precio: 2.50, albumId: 2 }
  ],
  3: [
    { id: 301, titulo: "Chantaje", duracion: "3:15", precio: 2.50, albumId: 3 },
    { id: 302, titulo: "Me Enamoré", duracion: "3:46", precio: 2.50, albumId: 3 },
    { id: 303, titulo: "Perro Fiel", duracion: "3:15", precio: 2.50, albumId: 3 },
    { id: 304, titulo: "Deja Vu", duracion: "3:31", precio: 2.50, albumId: 3 },
    { id: 305, titulo: "Comme Moi", duracion: "3:08", precio: 2.50, albumId: 3 },
    { id: 306, titulo: "Toneladas", duracion: "3:19", precio: 2.50, albumId: 3 }
  ],
  4: [
    { id: 401, titulo: "Gasolina", duracion: "3:12", precio: 2.50, albumId: 4 },
    { id: 402, titulo: "Lo Que Pasó, Pasó", duracion: "3:30", precio: 2.50, albumId: 4 },
    { id: 403, titulo: "King Daddy", duracion: "2:31", precio: 2.50, albumId: 4 },
    { id: 404, titulo: "Dale Caliente", duracion: "3:15", precio: 2.50, albumId: 4 },
    { id: 405, titulo: "No Me Dejes Solo", duracion: "3:41", precio: 2.50, albumId: 4 },
    { id: 406, titulo: "Fuera del Planeta", duracion: "3:35", precio: 2.50, albumId: 4 }
  ],
  5: [
    { id: 501, titulo: "Bichota", duracion: "3:11", precio: 2.50, albumId: 5 },
    { id: 502, titulo: "El Makinón", duracion: "3:30", precio: 2.50, albumId: 5 },
    { id: 503, titulo: "200 Copas", duracion: "3:38", precio: 2.50, albumId: 5 },
    { id: 504, titulo: "Location", duracion: "3:40", precio: 2.50, albumId: 5 },
    { id: 505, titulo: "Ay, Dios mío", duracion: "3:11", precio: 2.50, albumId: 5 },
    { id: 506, titulo: "Beautiful Boy", duracion: "3:17", precio: 2.50, albumId: 5 }
  ],
  6: [
    { id: 601, titulo: "TQG", duracion: "3:17", precio: 2.99, albumId: 6 },
    { id: 602, titulo: "Provenza", duracion: "3:30", precio: 2.99, albumId: 6 },
    { id: 603, titulo: "Gatúbela", duracion: "3:17", precio: 2.99, albumId: 6 },
    { id: 604, titulo: "Cairo", duracion: "3:18", precio: 2.99, albumId: 6 },
    { id: 605, titulo: "Mañana Será Bonito", duracion: "3:12", precio: 2.99, albumId: 6 },
    { id: 606, titulo: "Gucci los Paños", duracion: "3:06", precio: 2.99, albumId: 6 }
  ],
  7: [
    { id: 701, titulo: "Mi Gente", duracion: "3:09", precio: 2.50, albumId: 7 },
    { id: 702, titulo: "Machika", duracion: "3:28", precio: 2.50, albumId: 7 },
    { id: 703, titulo: "Ahora", duracion: "3:55", precio: 2.50, albumId: 7 },
    { id: 704, titulo: "Brillo", duracion: "3:32", precio: 2.50, albumId: 7 },
    { id: 705, titulo: "En Mí", duracion: "3:20", precio: 2.50, albumId: 7 }
  ],
  8: [
    { id: 801, titulo: "Bebo", duracion: "3:50", precio: 2.50, albumId: 8 },
    { id: 802, titulo: "Propuesta Indecente", duracion: "3:55", precio: 2.50, albumId: 8 },
    { id: 803, titulo: "Sobredosis", duracion: "3:47", precio: 2.50, albumId: 8 },
    { id: 804, titulo: "Odio", duracion: "3:41", precio: 2.50, albumId: 8 },
    { id: 805, titulo: "Eres Mía", duracion: "4:07", precio: 2.50, albumId: 8 }
  ],
  9: [
    { id: 901, titulo: "La Gota Fría", duracion: "4:23", precio: 1.99, albumId: 9 },
    { id: 902, titulo: "Alicia Adorada", duracion: "4:15", precio: 1.99, albumId: 9 },
    { id: 903, titulo: "Déjame Entrar", duracion: "4:00", precio: 1.99, albumId: 9 },
    { id: 904, titulo: "La Casa en el Aire", duracion: "4:32", precio: 1.99, albumId: 9 },
    { id: 905, titulo: "Historia de Taxi", duracion: "4:08", precio: 1.99, albumId: 9 }
  ],
  10: [
    { id: 1001, titulo: "HP", duracion: "3:04", precio: 2.50, albumId: 10 },
    { id: 1002, titulo: "11 PM", duracion: "3:55", precio: 2.50, albumId: 10 },
    { id: 1003, titulo: "Instinto Natural", duracion: "3:25", precio: 2.50, albumId: 10 },
    { id: 1004, titulo: "No Sé Me Quita", duracion: "3:40", precio: 2.50, albumId: 10 },
    { id: 1005, titulo: "Dispuesto", duracion: "3:42", precio: 2.50, albumId: 10 },
    { id: 1006, titulo: "Puesto Pa Ti", duracion: "3:14", precio: 2.50, albumId: 10 }
  ],
  11: [
    { id: 1101, titulo: "Parecen Viernes", duracion: "4:28", precio: 2.50, albumId: 11 },
    { id: 1102, titulo: "Tu Vida en la Mía", duracion: "4:14", precio: 2.50, albumId: 11 },
    { id: 1103, titulo: "Uno Pa'l Otro", duracion: "4:00", precio: 2.50, albumId: 11 },
    { id: 1104, titulo: "Y Hubo Alguien", duracion: "4:18", precio: 2.50, albumId: 11 },
    { id: 1105, titulo: "Adicto", duracion: "3:55", precio: 2.50, albumId: 11 }
  ],
  12: [
    { id: 1201, titulo: "De Música Ligera", duracion: "3:34", precio: 1.99, albumId: 12 },
    { id: 1202, titulo: "Canción Animal", duracion: "3:55", precio: 1.99, albumId: 12 },
    { id: 1203, titulo: "En la Ciudad de la Furia", duracion: "4:22", precio: 1.99, albumId: 12 },
    { id: 1204, titulo: "Un Millón de Años Luz", duracion: "4:00", precio: 1.99, albumId: 12 },
    { id: 1205, titulo: "El Rito", duracion: "4:15", precio: 1.99, albumId: 12 },
    { id: 1206, titulo: "Cae el Sol", duracion: "4:23", precio: 1.99, albumId: 12 }
  ],
  13: [
    { id: 1301, titulo: "Persiguenos", duracion: "4:18", precio: 1.99, albumId: 13 },
    { id: 1302, titulo: "El Rito", duracion: "4:15", precio: 1.99, albumId: 13 },
    { id: 1303, titulo: "Primavera 0", duracion: "3:42", precio: 1.99, albumId: 13 },
    { id: 1304, titulo: "Zoom", duracion: "3:55", precio: 1.99, albumId: 13 },
    { id: 1305, titulo: "Te Para Tres", duracion: "4:10", precio: 1.99, albumId: 13 }
  ],
  14: [
    { id: 1401, titulo: "Casas de Cartón", duracion: "4:08", precio: 1.50, albumId: 14 },
    { id: 1402, titulo: "Tu Carcel", duracion: "3:45", precio: 1.50, albumId: 14 },
    { id: 1403, titulo: "Me Siento Solo", duracion: "3:55", precio: 1.50, albumId: 14 },
    { id: 1404, titulo: "Mi Princesa", duracion: "3:55", precio: 1.50, albumId: 14 },
    { id: 1405, titulo: "Te Esperaba", duracion: "3:30", precio: 1.50, albumId: 14 },
    { id: 1406, titulo: "Necesito una Compañera", duracion: "3:40", precio: 1.50, albumId: 14 }
  ],
  15: [
    { id: 1501, titulo: "Te Felicito", duracion: "3:16", precio: 2.99, albumId: 15 },
    { id: 1502, titulo: "Monotonía", duracion: "3:11", precio: 2.99, albumId: 15 },
    { id: 1503, titulo: "Shakira: BZRP Music Sessions #53", duracion: "3:34", precio: 2.99, albumId: 15 },
    { id: 1504, titulo: "TQG", duracion: "3:17", precio: 2.99, albumId: 15 },
    { id: 1505, titulo: "Acróstico", duracion: "3:40", precio: 2.99, albumId: 15 },
    { id: 1506, titulo: "Copa Vacía", duracion: "3:22", precio: 2.99, albumId: 15 },
    { id: 1507, titulo: "El Jefe", duracion: "3:44", precio: 2.99, albumId: 15 }
  ]
};

// ---- USUARIOS (Clientes) ----
const clientes = [
  { id: 1, nombre: "Carlos Quispe Huamán", email: "carlos.q@email.com", password: "123456", pais: "Perú", avatar: "👤", fechaRegistro: "2024-01-15", saldoGastado: 247.50 },
  { id: 2, nombre: "María Rodríguez López", email: "maria.r@email.com", password: "123456", pais: "Colombia", avatar: "👩", fechaRegistro: "2024-02-20", saldoGastado: 189.00 },
  { id: 3, nombre: "José García Méndez", email: "jose.g@email.com", password: "123456", pais: "México", avatar: "🧔", fechaRegistro: "2024-03-10", saldoGastado: 312.75 },
  { id: 4, nombre: "Lucía Fernández Paz", email: "lucia.f@email.com", password: "123456", pais: "Argentina", avatar: "👩‍🦰", fechaRegistro: "2024-04-05", saldoGastado: 156.25 },
  { id: 5, nombre: "Diego Sánchez Torres", email: "diego.s@email.com", password: "123456", pais: "Chile", avatar: "👨", fechaRegistro: "2024-05-12", saldoGastado: 423.00 },
  { id: 6, nombre: "Valentina Muñoz Ríos", email: "valentina.m@email.com", password: "123456", pais: "Perú", avatar: "👧", fechaRegistro: "2024-06-18", saldoGastado: 98.50 },
  { id: 7, nombre: "Pedro Castillo Vargas", email: "pedro.c@email.com", password: "123456", pais: "Perú", avatar: "👨‍🌾", fechaRegistro: "2024-07-22", saldoGastado: 267.00 }
];

// ---- EMPLEADOS ----
const empleados = [
  { id: 1, nombre: "Miguel Ángel Rojas", email: "miguel.r@musicstore.com", rol: "Gerente General", pais: "Perú", salario: 4500, fechaContratacion: "2023-01-10" },
  { id: 2, nombre: "Ana Lucía Torres", email: "ana.t@musicstore.com", rol: "Supervisor de Ventas", pais: "Colombia", salario: 3200, fechaContratacion: "2023-03-15" },
  { id: 3, nombre: "Roberto Martínez Silva", email: "roberto.m@musicstore.com", rol: "Desarrollador Senior", pais: "México", salario: 5500, fechaContratacion: "2023-02-01" },
  { id: 4, nombre: "Carmen Flores Núñez", email: "carmen.f@musicstore.com", rol: "Community Manager", pais: "Perú", salario: 2500, fechaContratacion: "2023-04-20" },
  { id: 5, nombre: "Jorge Luis Campos", email: "jorge.c@musicstore.com", rol: "Atención al Cliente", pais: "Argentina", salario: 1800, fechaContratacion: "2023-05-10" },
  { id: 6, nombre: "Laura González Paredes", email: "laura.g@musicstore.com", rol: "Diseñadora UX", pais: "Chile", salario: 3800, fechaContratacion: "2023-06-01" },
  { id: 7, nombre: "Fernando Castillo Meza", email: "fernando.c@musicstore.com", rol: "Analista de Datos", pais: "Perú", salario: 3500, fechaContratacion: "2023-07-15" },
  { id: 8, nombre: "Patricia Vargas Llosa", email: "patricia.v@musicstore.com", rol: "Ejecutiva de Ventas", pais: "Perú", salario: 2200, fechaContratacion: "2023-08-01" },
  { id: 9, nombre: "Sofía Mendoza Rivas", email: "sofia.m@musicstore.com", rol: "Contadora", pais: "Colombia", salario: 3000, fechaContratacion: "2023-09-10" },
  { id: 10, nombre: "Andrés López Camacho", email: "andres.l@musicstore.com", rol: "Soporte Técnico", pais: "México", salario: 2000, fechaContratacion: "2023-10-05" }
];

// ---- ADMIN ----
const admin = {
  id: 1,
  nombre: "Admin Principal",
  email: "admin@musicstore.com",
  password: "admin123"
};

// ---- PLAYLISTS ----
const playlists = [
  { id: 1, nombre: "Éxitos del Reggaeton 🔥", descripcion: "Los mejores temas del género urbano", usuarioId: 1, pistas: [101, 102, 201, 202, 401, 501, 601] },
  { id: 2, nombre: "Rock Latino 🎸", descripcion: "Clásicos del rock en español", usuarioId: 1, pistas: [1201, 1202, 1203, 1301, 1302] },
  { id: 3, nombre: "Bailando con Sabor 💃", descripcion: "Salsa y ritmos caribeños para alegrar el día", usuarioId: 2, pistas: [1101, 1102, 1103, 901, 902] },
  { id: 4, nombre: "Perreo Hasta el Amanecer 🌙", descripcion: "Reggaeton para la noche", usuarioId: 3, pistas: [101, 401, 501, 701, 801, 1001] },
  { id: 5, nombre: "Baladas para el Corazón 💕", descripcion: "Canciones románticas para dedicar", usuarioId: 4, pistas: [802, 803, 1401, 1402, 1505] },
  { id: 6, nombre: "Fiesta Latina 🥳", descripcion: "Éxitos latinos para cualquier celebración", usuarioId: 5, pistas: [103, 301, 402, 501, 601, 1002, 1104] }
];

// ---- FACTURAS ----
const facturas = [
  { id: 1001, usuarioId: 1, fecha: "2025-01-10", items: [{ tipo: "album", albumId: 1, precio: 42.00 }], total: 42.00, estado: "Completado" },
  { id: 1002, usuarioId: 1, fecha: "2025-02-15", items: [{ tipo: "pista", pistaId: 101, precio: 2.50 }, { tipo: "pista", pistaId: 102, precio: 2.50 }], total: 5.00, estado: "Completado" },
  { id: 1003, usuarioId: 1, fecha: "2025-03-20", items: [{ tipo: "album", albumId: 5, precio: 36.00 }], total: 36.00, estado: "Completado" },
  { id: 1004, usuarioId: 2, fecha: "2025-01-25", items: [{ tipo: "album", albumId: 3, precio: 35.00 }], total: 35.00, estado: "Completado" },
  { id: 1005, usuarioId: 2, fecha: "2025-04-05", items: [{ tipo: "pista", pistaId: 301, precio: 2.50 }, { tipo: "pista", pistaId: 302, precio: 2.50 }], total: 5.00, estado: "Completado" },
  { id: 1006, usuarioId: 3, fecha: "2025-02-28", items: [{ tipo: "album", albumId: 7, precio: 32.00 }, { tipo: "pista", pistaId: 401, precio: 2.50 }], total: 34.50, estado: "Completado" },
  { id: 1007, usuarioId: 3, fecha: "2025-05-10", items: [{ tipo: "album", albumId: 12, precio: 27.00 }], total: 27.00, estado: "Pendiente" },
  { id: 1008, usuarioId: 4, fecha: "2025-03-15", items: [{ tipo: "album", albumId: 8, precio: 34.00 }], total: 34.00, estado: "Completado" },
  { id: 1009, usuarioId: 5, fecha: "2025-01-05", items: [{ tipo: "album", albumId: 2, precio: 38.00 }, { tipo: "album", albumId: 6, precio: 40.00 }], total: 78.00, estado: "Completado" },
  { id: 1010, usuarioId: 5, fecha: "2025-04-20", items: [{ tipo: "pista", pistaId: 601, precio: 2.99 }, { tipo: "pista", pistaId: 602, precio: 2.99 }], total: 5.98, estado: "Completado" },
  { id: 1011, usuarioId: 6, fecha: "2025-05-01", items: [{ tipo: "album", albumId: 14, precio: 20.00 }], total: 20.00, estado: "Completado" },
  { id: 1012, usuarioId: 7, fecha: "2025-02-10", items: [{ tipo: "album", albumId: 4, precio: 28.00 }, { tipo: "album", albumId: 10, precio: 33.00 }], total: 61.00, estado: "Completado" },
  { id: 1013, usuarioId: 7, fecha: "2025-05-15", items: [{ tipo: "pista", pistaId: 1501, precio: 2.99 }, { tipo: "pista", pistaId: 1502, precio: 2.99 }], total: 5.98, estado: "Pendiente" }
];

// ---- VENTAS (para reportes) ----
const ventasPorMes = [
  { mes: "Enero", ingresos: 12580, cantidad: 320 },
  { mes: "Febrero", ingresos: 15230, cantidad: 410 },
  { mes: "Marzo", ingresos: 18940, cantidad: 525 },
  { mes: "Abril", ingresos: 16500, cantidad: 448 },
  { mes: "Mayo", ingresos: 22340, cantidad: 612 },
  { mes: "Junio", ingresos: 19800, cantidad: 540 },
  { mes: "Julio", ingresos: 24100, cantidad: 680 },
  { mes: "Agosto", ingresos: 21500, cantidad: 590 },
  { mes: "Septiembre", ingresos: 18760, cantidad: 510 },
  { mes: "Octubre", ingresos: 20340, cantidad: 565 },
  { mes: "Noviembre", ingresos: 25100, cantidad: 720 },
  { mes: "Diciembre", ingresos: 31200, cantidad: 890 }
];

const ventasPorGenero = [
  { genero: "Reggaeton", porcentaje: 42, color: "#A855F7" },
  { genero: "Pop Latino", porcentaje: 18, color: "#EC4899" },
  { genero: "Salsa", porcentaje: 12, color: "#F59E0B" },
  { genero: "Rock en Español", porcentaje: 10, color: "#3B82F6" },
  { genero: "Bachata", porcentaje: 8, color: "#10B981" },
  { genero: "Otros", porcentaje: 10, color: "#6B7280" }
];

const rankingCanciones = [
  { pistaId: 101, titulo: "Moscow Mule", artista: "Bad Bunny", ventas: 2450, ingresos: 6125.00 },
  { pistaId: 601, titulo: "TQG", artista: "Karol G", ventas: 2100, ingresos: 6279.00 },
  { pistaId: 401, titulo: "Gasolina", artista: "Daddy Yankee", ventas: 1980, ingresos: 4950.00 },
  { pistaId: 1201, titulo: "De Música Ligera", artista: "Soda Stereo", ventas: 1850, ingresos: 3681.50 },
  { pistaId: 501, titulo: "Bichota", artista: "Karol G", ventas: 1720, ingresos: 4300.00 },
  { pistaId: 301, titulo: "Chantaje", artista: "Shakira", ventas: 1650, ingresos: 4125.00 },
  { pistaId: 102, titulo: "Tití Me Preguntó", artista: "Bad Bunny", ventas: 1580, ingresos: 3950.00 },
  { pistaId: 701, titulo: "Mi Gente", artista: "J Balvin", ventas: 1420, ingresos: 3550.00 },
  { pistaId: 1101, titulo: "Parecen Viernes", artista: "Marc Anthony", ventas: 1350, ingresos: 3375.00 },
  { pistaId: 1501, titulo: "Te Felicito", artista: "Shakira", ventas: 1280, ingresos: 3827.20 }
];

// ---- SESIÓN ACTIVA ----
let sesionActual = null;

// ---- FUNCIONES DE AYUDA ----
function formatearMoneda(valor) {
  return "S/. " + valor.toFixed(2);
}

function obtenerArtista(id) {
  return artistas.find(a => a.id === id);
}

function obtenerAlbum(id) {
  return albumes.find(a => a.id === id);
}

function obtenerPistasAlbum(albumId) {
  return pistasPorAlbum[albumId] || [];
}

function obtenerPista(id) {
  for (const albumId in pistasPorAlbum) {
    const pista = pistasPorAlbum[albumId].find(p => p.id === id);
    if (pista) return pista;
  }
  return null;
}

function obtenerCliente(id) {
  return clientes.find(c => c.id === id);
}

function obtenerPlaylistsCliente(usuarioId) {
  // Si no hay playlists para este usuario, devolver array vacío
  return playlists.filter(p => p.usuarioId === usuarioId);
}

function obtenerFacturasCliente(usuarioId) {
  return facturas.filter(f => f.usuarioId === usuarioId);
}

function obtenerCancionesCliente(usuarioId) {
  const facturasCliente = obtenerFacturasCliente(usuarioId);
  const pistasCompradas = [];
  facturasCliente.forEach(f => {
    f.items.forEach(item => {
      if (item.tipo === "pista") {
        const pista = obtenerPista(item.pistaId);
        if (pista) pistasCompradas.push(pista);
      }
    });
  });
  return pistasCompradas;
}

function totalGastadoCliente(usuarioId) {
  const facturasCliente = obtenerFacturasCliente(usuarioId);
  return facturasCliente.reduce((total, f) => total + f.total, 0);
}

function ultimaFacturaCliente(usuarioId) {
  const facturasCliente = obtenerFacturasCliente(usuarioId);
  if (facturasCliente.length === 0) return null;
  return facturasCliente.sort((a, b) => new Date(b.fecha) - new Date(a.fecha))[0];
}
