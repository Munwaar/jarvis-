```javascript
function sendMessage() {

    const input = document.getElementById("userInput");
    const chat = document.getElementById("chat-box");

    const originalMessage = input.value.trim();

    if (!originalMessage) return;

    const message = originalMessage.toLowerCase();

    const safeMessage = originalMessage
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");

    chat.innerHTML += `
        <div class="user">
            You: ${safeMessage}
        </div>
    `;

    let reply = "";

    if (
        message.includes("hello") ||
        message.includes("hi") ||
        message.includes("hey") ||
        message.includes("yo") ||
        message.includes(("Gng")
    ) {
        const greetings = [
            "👋 Hey boss!",
            "What's up, master? 😎",
            "Yo! Jarvis online and ready. ⚡",
            "Hey! What can I do for you?",
            "Welcome back, boss."
        ];

        reply = greetings[Math.floor(Math.random() * greetings.length)];
    }

    else if (
        message.includes("how are you") ||
        message.includes("how r u")
    ) {
        reply = "I'm running perfectly, boss. Systems are online ⚡";
    }

    else if (
        message.includes("time") ||
        message.includes("current time")
    ) {
        reply = `🕐 Current time: ${new Date().toLocaleTimeString()}`;
    }

    else if (
        message.includes("date") ||
        message.includes("today")
    ) {
        reply = `📅 Today is ${new Date().toDateString()}`;
    }

    else if (message.includes("day")) {
        reply = `Today is ${new Date().toLocaleDateString("en-US", {
            weekday: "long"
        })}.`;
    }

    else if (
        message.includes("who are you") ||
        message.includes("what are you")
    ) {
        reply = "🤖 I am Jarvis, your personal AI assistant.";
    }

    else if (
        message.includes("who created you") ||
        message.includes("who made you")
    ) {
        reply = "I was created by my master. 😎";
    }

    else if (message.includes("open google")) {
        window.open("https://www.google.com", "_blank");
        reply = "🔎 Opening Google...";
    }

    else if (message.includes("open youtube")) {
        window.open("https://www.youtube.com", "_blank");
        reply = "▶️ Opening YouTube...";
    }

    else if (message.includes("open github")) {
        window.open("https://github.com/Munwaar", "_blank");
        reply = "💻 Opening your GitHub. Time to lock in!";
    }

    else if (
        message.includes("portfolio") ||
        message.includes("open portfolio")
    ) {
        window.open(
            "https://munwaar.github.io/Portfolio/",
            "_blank"
        );

        reply = "🚀 Showing one of your creations, master.";
    }

    else if (
        message.includes("open chatgpt") ||
        message.includes("chatgpt")
    ) {
        window.open("https://chatgpt.com/", "_blank");
        reply = "🧠 Opening ChatGPT...";
    }

    else if (message.startsWith("search ")) {

        const query = originalMessage.substring(7).trim();

        if (query) {
            window.open(
                `https://www.google.com/search?q=${encodeURIComponent(query)}`,
                "_blank"
            );

            reply = `🔎 Searching Google for "${query}"...`;
        } else {
            reply = "What should I search for?";
        }
    }

    else if (message.startsWith("play ")) {

        const query = originalMessage.substring(5).trim();

        if (query) {
            window.open(
                `https://www.youtube.com/results?search_query=${encodeURIComponent(query)}`,
                "_blank"
            );

            reply = `▶️ Searching YouTube for "${query}"...`;
        } else {
            reply = "Tell me what you want me to play.";
        }
    }

    else if (message.startsWith("wiki ")) {

        const query = originalMessage.substring(5).trim();

        if (query) {
            window.open(
                `https://en.wikipedia.org/wiki/Special:Search?search=${encodeURIComponent(query)}`,
                "_blank"
            );

            reply = `📚 Searching Wikipedia for "${query}"...`;
        } else {
            reply = "What should I look up?";
        }
    }

    else if (message.startsWith("weather")) {

        const city = originalMessage
            .replace(/weather/i, "")
            .trim();

        if (city) {
            window.open(
                `https://www.google.com/search?q=weather+${encodeURIComponent(city)}`,
                "_blank"
            );

            reply = `🌤️ Checking the weather for ${city}...`;
        } else {
            window.open(
                "https://www.google.com/search?q=weather",
                "_blank"
            );

            reply = "🌤️ Checking the weather...";
        }
    }

    else if (
        message.includes("joke") ||
        message.includes("make me laugh")
    ) {

        const jokes = [
            "😂 Why do programmers prefer dark mode? Because light attracts bugs.",
            "🤣 A programmer's favorite place? The cache.",
            "😎 Why did the developer go broke? Because he used up all his cache.",
            "💀 My code works. I have no idea why."
        ];

        reply = jokes[Math.floor(Math.random() * jokes.length)];
    }

    else if (
        message.includes("motivate me") ||
        message.includes("motivation")
    ) {

        const motivation = [
            "🔥 Stop waiting for motivation. Build discipline.",
            "⚡ One more rep. One more line of code. One more step.",
            "💪 You don't need to be perfect. You need to keep moving.",
            "🚀 Future you is watching what you do today.",
            "🗿 Lock in. No excuses."
        ];

        reply = motivation[Math.floor(Math.random() * motivation.length)];
    }

    else if (
        message.includes("thank you") ||
        message.includes("thanks")
    ) {
        reply = "😎 Anytime, boss.";
    }

    else if (
        message.includes("i love you") ||
        message.includes("love you")
    ) {
        reply = "❤️ I appreciate that, boss.";
    }

    else if (message.startsWith("calculate ")) {

        const expression = originalMessage
            .substring(10)
            .trim();

        try {

            if (!/^[0-9+\-*/().%\s]+$/.test(expression)) {
                throw new Error("Invalid expression");
            }

            const result = Function(
                `"use strict"; return (${expression})`
            )();

            reply = `🧮 Result: ${result}`;

        } catch {
            reply = "❌ I couldn't calculate that.";
        }
    }

    else if (
        message === "clear" ||
        message === "clear chat"
    ) {
        chat.innerHTML = "";
        return;
    }

    else if (
        message === "help" ||
        message.includes("what can you do")
    ) {

        reply = `
        🤖 Here's what I can do:<br><br>
        🕐 Tell time<br>
        📅 Tell date<br>
        🔎 Search Google<br>
        ▶️ Search YouTube<br>
        📚 Search Wikipedia<br>
        🌤️ Check weather<br>
        💻 Open GitHub<br>
        🚀 Open portfolio<br>
        🧠 Open ChatGPT<br>
        😂 Tell jokes<br>
        🔥 Give motivation<br>
        🧮 Calculate numbers<br>
        🧹 Clear chat
        `;
    }

    else {
        reply = `
            🤔 I don't understand that yet.<br>
            Try saying <b>"help"</b> to see what I can do.
        `;
    }

    chat.innerHTML += `
        <div class="bot">
            Jarvis: ${reply}
        </div>
    `;

    input.value = "";
    chat.scrollTop = chat.scrollHeight;
}

document.getElementById("userInput").addEventListener("keydown", function(event) {

    if (event.key === "Enter") {
        sendMessage();
    }

});
```
