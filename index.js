import 'dotenv/config';
import express from 'express';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.listen(PORT, () => {
    console.info(`El servidor esta corriendo en http://localhost:${PORT}`);
})

export const estudiantes = [
    {
        nombre: "Alejandro García",
        correo: "alejandro.garcia@email.com",
        nota: 8.5
    },
    {
        nombre: "Beatriz López",
        correo: "b.lopez99@email.com",
        nota: 9.2
    },
    {
        nombre: "Carlos Mendoza",
        correo: "mendoza.carlos@email.com",
        nota: 7.8
    },
    {
        nombre: "Diana Martínez",
        correo: "diana.mtz@email.com",
        nota: 9.5
    },
    {
        nombre: "Eduardo Torres",
        correo: "e.torres.edu@email.com",
        nota: 6.4
    },
    {
        nombre: "Fernanda Ruiz",
        correo: "fer.ruiz.v@email.com",
        nota: 8.8
    },
    {
        nombre: "Gabriel Soto",
        correo: "g.soto_prof@email.com",
        nota: 7.3
    },
    {
        nombre: "Helena Castro",
        correo: "helena.castro@email.com",
        nota: 4.1
    },
    {
        nombre: "Iván Delgado",
        correo: "delgado.ivan@email.com",
        nota: 8.2
    },
    {
        nombre: "Julia Ortega",
        correo: "j.ortega.msn@email.com",
        nota: 9.7
    },
    {
        nombre: "Kevin Blanca",
        correo: "k.blanca88@email.com",
        nota: 5.0
    },
    {
        nombre: "Laura Méndez",
        correo: "laura.mendez@email.com",
        nota: 8.9
    },
    {
        nombre: "Mario Silva",
        correo: "silva.mario@email.com",
        nota: 7.5
    },
    {
        nombre: "Natalia Ríos",
        correo: "n.rios.academia@email.com",
        nota: 9.3
    },
    {
        nombre: "Oscar Peña",
        correo: "oscar.pena@email.com",
        nota: 3.5
    },
    {
        nombre: "Patricia Luna",
        correo: "p.luna.vance@email.com",
        nota: 8.6
    },
    {
        nombre: "Quique Jara",
        correo: "quique.jara@email.com",
        nota: 7.0
    },
    {
        nombre: "Rosa Valdés",
        correo: "r.valdes.g@email.com",
        nota: 9.4
    },
    {
        nombre: "Sergio Pardo",
        correo: "sergio.pardo@email.com",
        nota: 6.8
    },
    {
        nombre: "Teresa Vega",
        correo: "t.vega.solis@email.com",
        nota: 9.0
    }
];
//GET

//POST

//PUT

//DELETE