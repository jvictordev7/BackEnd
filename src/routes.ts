import { FastifyInstance, FastifyRequest, FastifyReply, FastifyPluginOptions } from "fastify";
import { request } from "http";

export async function routes(fastify:FastifyInstance, options: FastifyPluginOptions) {
    
    fastify.get("/teste", async (request: FastifyRequest, replay: FastifyReply) =>{
        return { ok: true }
    })
}