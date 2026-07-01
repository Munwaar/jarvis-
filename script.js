function sendMessage(){

    let input =
    document.getElementById("userInput");

    let message =
    input.value.toLowerCase();

    let chat =
    document.getElementById("chat-box");

    chat.innerHTML +=
    `<div class="user">
    You: ${message}
    </div>`;

    let reply = "";

    if(message.includes("hello")){
        reply = "Hello Munwaar!";
    }

    else if(message.includes("time")){
        reply =
        new Date().toLocaleTimeString();
    }

    else if(message.includes("date")){
        reply =
        new Date().toDateString();
    }

    else if(message.includes("youtube")){
        window.open(
        "https://youtube.com",
        "_blank"
        );

        reply =
        "Opening YouTube boss...";
    }

    else if(message.includes("google")){
        window.open(
        "https://google.com",
        "_blank"
        );

        reply =
        "Opening Google...";
    }

    else if(message.includes("who are you")){
        reply =
        "I am Jarvis, your AI assistant.";
    }

    else if(message.include("github"){
        window.open(
            "https://github.com/Munwaar","_blank"
            );
        reply=
            "opening Github...,I guess time to lockin huh";
    }

    else{
        reply =
        "Sorry, I don't understand.";
    }

    chat.innerHTML +=
    `<div class="bot">
    Jarvis: ${reply}
    </div>`;

    input.value="";

    chat.scrollTop =
    chat.scrollHeight;
}
