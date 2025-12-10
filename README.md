Este proyecto corresponde a una prueba de testing unitario para la API REST de la Cafetería Nanacao. La cafetería está abriendo una nueva sucursal en el centro de la ciudad y necesita asegurar que todas las funcionalidades de su sistema de administración funcionen correctamente mediante tests automatizados.

## Instalación
1. Clonar el repositorio
2. Instalar las dependencias:
npm install

## Ejecutar los Tests
npm test -- tests/server.spec.js

1) Obtiene la lista de cafés disponibles.
**Respuesta exitosa**: `200 OK`

2) Obtiene un café específico por su ID.
**Respuestas**:
- `200 OK`: Café encontrado
- `404 Not Found`: Café no encontrado

3) Agrega un nuevo café a la lista.
json
{
  "id": 5,
  "nombre": "Espresso"
}
- `201 Created`: Café agregado exitosamente
- `400 Bad Request`: Ya existe un café con ese ID

4) Actualiza un café existente.
**Body requerido**:
json
{
  "id": 1,
  "nombre": "Cortado Premium"
}
- `200 OK`: Café actualizado exitosamente
- `400 Bad Request`: El ID del parámetro no coincide con el ID del body
- `404 Not Found`: Café no encontrado



