import weaviate, { ApiKey } from "weaviate-ts-client";
import 'dotenv/config'

const client = weaviate.client({
  scheme: "https",
  host: process.env.HOST,
  apiKey: new ApiKey(process.env.API_KEY),
});


const response = await client.graphql
  .aggregate()
  .withClassName('Test69')
  .withFields('meta { count }')
  .do();
console.log(JSON.stringify(response, null, 2));

// ----- weaviate
// You can use this:
// https://weaviate.keosapp.com
// Api user: weaviate@keosapp.com
// Api key: keos-secret-key
