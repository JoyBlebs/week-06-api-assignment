const myForm = document.getElementById("promptForm")

const responsesContainer = document.getElementById("responsesContainer")

myForm.addEventListener("submit", sendChatRequest);

async function sendChatRequest(event){
    event.preventDefault();
    const userPrompt = event.target.promptInput.value;
    console.log("the prompt is:", userPrompt);


    const response = await fetch("https://server-week-06-api-assignment.onrender.com/chat", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({userPrompt}),   
 });

    const data = await response.json();
    console.log("The data received is:", data);

    const responseP = document.createElement("p");
    responseP.textContent = data;
    responsesContainer.appendChild(responseP);

}

export const app = {
    myForm,
    responsesContainer,
    sendChatRequest,
};

myForm.addEventListener("submit", sendChatRequest);