import fetch from "node-fetch";
import fs from "fs";
import FormData from "form-data";
import 'dotenv/config';

const url =
  "https://a056-2a01-4ff-f0-dc64-00-1.ngrok-free.app/api/v1/vector/upsert/b5ab5957-8d88-4774-9efe-13776f0f34c7";
const filePath = "/home/user1/Desktop/story.txt";
const openAIApiKey = process.env.OPENAI_API_KEY ;
const stripNewLines = true;
const batchSize = 1;

const formData = new FormData();
formData.append("files", fs.createReadStream(filePath));
formData.append("openAIApiKey", openAIApiKey);
formData.append("stripNewLines", stripNewLines);
formData.append("batchSize", batchSize);
console.log(formData);
fetch(url, {
  method: "POST",
  body: formData,
  headers: {
    "Content-Type": "multipart/form-data",
  },
})
  .then((response) => response.text())
  .then((data) => console.log(data))
  .catch((error) => console.error(error));

