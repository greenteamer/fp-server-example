import * as http from "http";
import { resolveCars } from "./resolvers/car-resolvers.js";

const hostname = "127.0.0.1";
const port = 3000;

const server = http.createServer(async (_, res) => {
  const cars = await resolveCars();
  console.log(cars);
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end(JSON.stringify(cars));
});

server.listen(port, hostname, () => {
  console.log(`Server running now at http://${hostname}:${port}`);
});
