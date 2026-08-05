const request = require("supertest");
const app = require("./servidor");

describe("Testando API DevOps", () => {

    test("Deve retornar mensagem inicial da API", async () => {
        const resposta = await request(app).get("/");

        expect(resposta.statusCode).toBe(200);
        expect(resposta.body.mensagem)
            .toBe("API DevOps funcionando corretamente");
    });


    test("Deve retornar status online da aplicação", async () => {
        const resposta = await request(app).get("/saude");

        expect(resposta.statusCode).toBe(200);
        expect(resposta.body.status)
            .toBe("online");
    });

});
