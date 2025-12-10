const request = require("supertest");
const server = require("../index");

describe("Operaciones CRUD de cafes", () => {
    
    // 1. Testea que la ruta GET /cafes devuelve un status code 200 
    // y el tipo de dato recibido es un arreglo con por lo menos 1 objeto
    it("Obteniendo un 200 y un arreglo con al menos 1 objeto", async () => {
        const response = await request(server).get("/cafes");
        expect(response.statusCode).toBe(200);
        expect(response.body).toBeInstanceOf(Array);
        expect(response.body.length).toBeGreaterThanOrEqual(1);
    });

    // 2. Comprueba que se obtiene un código 404 al intentar eliminar 
    // un café con un id que no existe
    it("Obteniendo un 404 al intentar eliminar un café con un id que no existe", async () => {
        const idInexistente = 999;
        const jwt = "token-valido"; // Necesario para pasar la validación del token
        const response = await request(server)
            .delete(`/cafes/${idInexistente}`)
            .set("Authorization", jwt);
        expect(response.statusCode).toBe(404);
    });

    // 3. Prueba que la ruta POST /cafes agrega un nuevo café y devuelve un código 201
    it("Agregando un nuevo café con POST y recibiendo código 201", async () => {
        const nuevoCafe = { id: 5, nombre: "Espresso" };
        const response = await request(server)
            .post("/cafes")
            .send(nuevoCafe);
        expect(response.statusCode).toBe(201);
        expect(response.body).toBeInstanceOf(Array);
    });

    // 4. Prueba que la ruta PUT /cafes devuelve un status code 400 
    // si intentas actualizar un café enviando un id en los parámetros 
    // que sea diferente al id dentro del payload
    it("Obteniendo un 400 al intentar actualizar un café con id diferente en parámetros y payload", async () => {
        const cafeActualizado = { id: 2, nombre: "Café Actualizado" };
        const idParametro = 1; // Diferente al id del payload (2)
        const response = await request(server)
            .put(`/cafes/${idParametro}`)
            .send(cafeActualizado);
        expect(response.statusCode).toBe(400);
    });

});
