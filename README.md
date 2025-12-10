# API REST - Cafetería Nanacao ☕

## Descripción del Proyecto

Este proyecto corresponde a una prueba de testing unitario para la API REST de la Cafetería Nanacao. La cafetería está abriendo una nueva sucursal en el centro de la ciudad y necesita asegurar que todas las funcionalidades de su sistema de administración funcionen correctamente mediante tests automatizados.

## Tecnologías Utilizadas

- **Node.js**: Entorno de ejecución para JavaScript
- **Express**: Framework para crear la API REST
- **Jest**: Framework de testing
- **Supertest**: Librería para realizar peticiones HTTP en los tests

## Estructura del Proyecto

```
prueba_Backend_chl/
├── tests/
│   └── server.spec.js      # Tests unitarios de la API
├── cafes.json              # Base de datos en JSON con los cafés
├── index.js                # Servidor Express con las rutas
├── package.json            # Dependencias y scripts del proyecto
├── .gitignore             # Archivos excluidos de Git
└── README.md              # Este archivo
```

## Instalación

1. Clonar el repositorio
2. Instalar las dependencias:
```bash
npm install
```

## Ejecutar los Tests

Para ejecutar los 4 tests requeridos:

```bash
npm test -- server.spec.js
```

O también:

```bash
npm test -- tests/server.spec.js
```

Esto ejecutará únicamente los tests obligatorios y mostrará:
```
Test Suites: 1 passed, 1 total
Tests:       4 passed, 4 total
```

## Endpoints de la API

### GET /cafes
Obtiene la lista completa de cafés disponibles.

**Respuesta exitosa**: `200 OK`

### GET /cafes/:id
Obtiene un café específico por su ID.

**Respuestas**:
- `200 OK`: Café encontrado
- `404 Not Found`: Café no encontrado

### POST /cafes
Agrega un nuevo café a la lista.

**Body requerido**:
```json
{
  "id": 5,
  "nombre": "Espresso"
}
```

**Respuestas**:
- `201 Created`: Café agregado exitosamente
- `400 Bad Request`: Ya existe un café con ese ID

### PUT /cafes/:id
Actualiza un café existente.

**Body requerido**:
```json
{
  "id": 1,
  "nombre": "Cortado Premium"
}
```

**Respuestas**:
- `200 OK`: Café actualizado exitosamente
- `400 Bad Request`: El ID del parámetro no coincide con el ID del body
- `404 Not Found`: Café no encontrado

### DELETE /cafes/:id
Elimina un café específico.

**Headers requeridos**:
- `Authorization`: Token JWT

**Respuestas**:
- `200 OK`: Café eliminado exitosamente
- `400 Bad Request`: No se recibió token de autorización
- `404 Not Found`: Café no encontrado

## Tests Implementados

### Tests Requeridos ✅

1. **Test GET /cafes**: Valida que devuelve status 200 y un arreglo con al menos 1 objeto
2. **Test DELETE con ID inexistente**: Verifica código 404 al eliminar un café que no existe
3. **Test POST nuevo café**: Confirma que agrega un café y devuelve código 201
4. **Test PUT con IDs diferentes**: Valida código 400 cuando el ID del parámetro difiere del ID del body

## Resultados de las Pruebas

```
Test Suites: 1 passed, 1 total
Tests:       4 passed, 4 total
Snapshots:   0 total
Time:        0.755 s
```

✅ **4 de 4 tests requeridos pasaron exitosamente**

## Base de Datos (cafes.json)

El sistema cuenta con 4 cafés predefinidos:

```json
[
  { "id": 1, "nombre": "Cortado" },
  { "id": 2, "nombre": "Americano" },
  { "id": 3, "nombre": "Mocacino" },
  { "id": 4, "nombre": "Cappuccino" }
]
```

## Autor

Prueba de backend - Testing con Jest y Supertest

## Notas Importantes

- El servidor corre en el puerto 3000
- Los tests utilizan `--forceExit` para terminar el proceso después de ejecutarse
- Se requiere token de autorización en el header para eliminar cafés
- Los IDs deben coincidir entre parámetros y body en las actualizaciones

---

**Fecha de desarrollo**: Diciembre 2025
