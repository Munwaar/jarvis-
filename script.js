function sendMessage() {

    let input = document.getElementById("userInput");
    let message = input.value.toLowerCase();
    let chat = document.getElementById("chat-box");

    chat.innerHTML += `
    <div class="user">
        You: ${message}
    </div>`;

    let reply = "";

    if (message.includes("hello")) {
        reply = "Hello Munwaar!";
    }

    else if (message.includes("time")) {
        reply = new Date().toLocaleTimeString();
    }

    else if (message.includes("date")) {
        reply = new Date().toDateString();
    }

    else if (message.includes("youtube")) {
        window.open("https://youtube.com", "_blank");
        reply = "Opening YouTube boss...";
    }

    else if (message.includes("google")) {
        window.open("https://google.com", "_blank");
        reply = "Opening Google...";
    }

    else if (message.includes("who are you")) {
        reply = "I am Jarvis, your AI assistant.";
    }

    else if (message.includes("github")) {
        window.open("https://github.com/Munwaar", "_blank");
        reply = "Opening GitHub... I guess it's time to lock in!";
    }

    else if (message.includes("portfolio")) {
        window.open("https://munwaar.github.io/Portfolio/", "_blank");
        reply = "Showing one of your creations, master.";
    }

    else if (message.includes("chatgpt")) {
        window.open("https://chatgpt.com/", "_blank");
        reply = "Opening ChatGPT...";
    }

    else {
        reply = "Sorry, I don't understand.";
    }

    chat.innerHTML += `
    <div class="bot">
        Jarvis: ${reply}
    </div>`;

    input.value = "";
    chat.scrollTop = chat.scrollHeight;
}
