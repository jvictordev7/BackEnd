import prismaClient from "../prisma";

class CreateCustomerService{
    async execute(){

        console.log("ROTA FOI CHAMADA")

        return { OK: true}
    }
}

export { CreateCustomerService}