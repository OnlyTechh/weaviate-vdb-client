import weaviate, { ApiKey } from "weaviate-ts-client";
import 'dotenv/config'

const client = weaviate.client({
  scheme: "https",
  host: process.env.HOST,
  apiKey: new ApiKey(process.env.API_KEY),
});
const response = await client.schema.getter().do();
console.log(response.classes);
