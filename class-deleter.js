import weaviate, { ApiKey } from "weaviate-ts-client";
import 'dotenv/config'

const client = weaviate.client({
  scheme: "https",
  host: process.env.HOST,
  apiKey: new ApiKey(process.env.API_KEY),
});

const classNames = [
  'Index7134',
  'Index9255',
  'Index8837',
  'Index5397',
  'Index9739',
  'Index2329',
  'Index8434'
]


await client.schema.classDeleter().withClassName("Index1847").do();

async function deleteClasses() {
  for (const className of classNames) {
    await client.schema.classDeleter().withClassName(className).do();
    console.log(`Class ${className} deleted`);
  }
}

deleteClasses()
  .then(() => {
    console.log("All classes deleted");
  })
  .catch((error) => {
    console.error("Error deleting classes:", error);
  });
