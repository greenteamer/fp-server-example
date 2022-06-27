import { pipe } from "fp-ts/lib/function";
import * as RTE from "fp-ts/ReaderTaskEither";
import { resolvers } from "./resolvers";
import { CarService } from "./services/cars/car-service";
import fastify from "fastify";

const port = 3000;

const server = fastify();

server.get("/api/vehicles/makes", async (request, reply) => {
  return pipe(
    resolvers.vehicles.makes,
    RTE.match(
      (error) => {
        throw error;
      },
      (success) => {
        return success;
      }
    ),
    (passDeps) => passDeps(CarService),
    (invoke) => invoke()
  );
});

server.listen({ port }, (err, address) => {
  if (err) {
    server.log.error(err);
    process.exit(1);
  }
  console.log(`Server listening at ${address}`);
});
