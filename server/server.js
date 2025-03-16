import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import OpenAI from "openai";

const app = express();
app.use(cors());
app.use(express.json());
dotenv.config();


const openai = new OpenAI({apiKey: process.env.OPENAI_API_KEY})

app.get("/", function (request, response) {
response.json({message:"Nothing to see here. Please move along"});    
});

app.post("/chat", async function (request, response) {
const userPrompt = request.body.userPrompt;
console.log("the user prompt is:", userPrompt);

if (!userPrompt) {
    console.log("there is no user prompt");
        response.json("No prompt given");
}
const completion = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
        {role: "system", content:"You are a very helpful assistant"},
        {role: "user", content: userPrompt},
    ],
    store: true,
});

console.log('completion', completion)

console.log('the GPT response', completion.choices[0].message.content)

        response.json(completion.choices[0].message.content);

});

app.listen(8080, function () {
console.log("Running on port 8080"); 
});
