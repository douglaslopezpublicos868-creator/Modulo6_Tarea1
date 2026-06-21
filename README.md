# API REST de Gestión de Estudiantes con Express.js

## Descripción

Este proyecto consiste en el desarrollo de una API REST utilizando Node.js y Express.js para la gestión de estudiantes.

La aplicación implementa las operaciones CRUD (Crear, Leer, Actualizar y Eliminar) mediante peticiones HTTP y respuestas en formato JSON.

Los datos se almacenan en un arreglo de objetos JavaScript dentro del archivo `index.js`, por lo que no se utiliza ninguna base de datos.

El sistema inicia con 20 estudiantes precargados y permite:

- Consultar todos los estudiantes.
- Consultar un estudiante por ID.
- Agregar nuevos estudiantes.
- Actualizar estudiantes existentes.
- Eliminar estudiantes.

> Nota: Los datos se almacenan únicamente en memoria. Cada vez que el servidor se reinicia, los cambios realizados se pierden y la lista vuelve a su estado inicial.

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
git clone https://github.com/douglaslopezpublicos868-creator/Modulo6_Tarea1.git
```

### 2. Ingresar al directorio del proyecto

```bash
cd Modulo6_Tarea1
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
Modulo6_Tarea1/
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
|----------|----------|-------------|
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

Respuesta:

```json
{
  "mensaje": "Estudiante agregado correctamente",
  "estudiante": {
    "id": 21,
    "nombre": "Juan Pérez",
    "correo": "juan@email.com",
    "nota": 8.7
  }
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
  "nombre": "Alejandro García Actualizado",
  "nota": 10
}
```

Respuesta:

```json
{
  "mensaje": "Estudiante actualizado correctamente"
}
```

---

### Eliminar un estudiante

```http
DELETE /estudiantes/1
```

Respuesta:

```json
{
  "mensaje": "Estudiante eliminado correctamente"
}
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

## Pruebas realizadas

Las pruebas de funcionamiento fueron realizadas utilizando Thunder Client para Visual Studio Code.

Se verificó el correcto funcionamiento de:

- GET
- POST
- PUT
- DELETE

Además, se validaron los códigos de estado HTTP correspondientes para cada operación.

---

## Autor

Douglas Alexander Recinos López

---

## Licencia

Proyecto desarrollado con fines académicos para el módulo Backend con Node.js de Kodigo.