# API REST de Gestión de Estudiantes con Express.js

## Descripción

Este proyecto consiste en el desarrollo de una API REST utilizando Node.js y Express.js para la gestión de estudiantes. La aplicación permite realizar operaciones CRUD (Crear, Leer, Actualizar y Eliminar) sobre una colección de estudiantes almacenada en un arreglo de objetos JavaScript.

El objetivo principal es comprender el funcionamiento de las peticiones HTTP y la construcción de servicios backend antes de integrar una base de datos.

> Nota: Los datos son almacenados temporalmente en memoria (hardcoded), por lo que al reiniciar el servidor se restablece la información inicial.

---

## Tecnologías utilizadas

- Node.js
- Express.js
- Dotenv
- JavaScript (ES Modules)

---

## Instalación

### 1. Clonar el repositorio

```bash
git clone https://github.com/douglaslopezpublicos868-creator/Modulo6_Tarea1
```

### 2. Ingresar al directorio del proyecto

```bash
cd modulo6_tarea1
```

### 3. Instalar dependencias

```bash
npm install
```

---

## Ejecución del proyecto

Iniciar el servidor en modo desarrollo:

```bash
npm run dev
```

El servidor estará disponible en:

```text
http://localhost:3000
```

---

## Estructura del proyecto

```text
modulo6_tarea1/
│
├── index.js
├── package.json
├── package-lock.json
├── .gitignore
└── README.md
```

---

## Modelo de datos

Cada estudiante posee la siguiente estructura:

```json
{
  "id": 1,
  "nombre": "Alejandro García",
  "correo": "alejandro.garcia@email.com",
  "nota": 8.5
}
```

---

## Endpoints disponibles

| Método | Endpoint | Descripción |
|---------|----------|-------------|
| GET | /estudiantes | Obtener todos los estudiantes |
| GET | /estudiantes/:id | Obtener un estudiante por ID |
| POST | /estudiantes | Crear un nuevo estudiante |
| PUT | /estudiantes/:id | Actualizar un estudiante existente |
| DELETE | /estudiantes/:id | Eliminar un estudiante |

---

## Ejemplos de uso

### Obtener todos los estudiantes

```http
GET /estudiantes
```

Respuesta:

```json
[
  {
    "id": 1,
    "nombre": "Alejandro García",
    "correo": "alejandro.garcia@email.com",
    "nota": 8.5
  }
]
```

---

### Obtener un estudiante por ID

```http
GET /estudiantes/1
```

Respuesta:

```json
{
  "id": 1,
  "nombre": "Alejandro García",
  "correo": "alejandro.garcia@email.com",
  "nota": 8.5
}
```

---

### Crear un estudiante

```http
POST /estudiantes
```

Body:

```json
{
  "nombre": "Juan Pérez",
  "correo": "juan@email.com",
  "nota": 8.7
}
```

---

### Actualizar un estudiante

```http
PUT /estudiantes/1
```

Body:

```json
{
  "nombre": "Juan Pérez Actualizado",
  "nota": 9.5
}
```

---

### Eliminar un estudiante

```http
DELETE /estudiantes/1
```

---

## Códigos de respuesta HTTP

| Código | Significado |
|----------|-------------|
| 200 | Operación realizada correctamente |
| 201 | Recurso creado exitosamente |
| 400 | Solicitud incorrecta |
| 404 | Recurso no encontrado |

---

## Pruebas

Las pruebas de funcionamiento fueron realizadas utilizando Thunder Client en Visual Studio Code, verificando correctamente las operaciones:

- GET
- POST
- PUT
- DELETE

---

## Autor

Douglas Alexander Recinos López

---

## Licencia

Proyecto desarrollado con fines académicos para el módulo Backend con Node.js de Kodigo.
