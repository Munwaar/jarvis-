```javascript
function sendMessage() {

    const input = document.getElementById("userInput");
    const chat = document.getElementById("chat-box");

    const originalMessage = input.value.trim();

    if (!originalMessage) return;

    const message = originalMessage.toLowerCase();

    // Escape user input to prevent HTML injection
    const safeMessage = originalMessage
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");

    // Show user message
    chat.innerHTML += `
        <div class="user">
            You: ${safeMessage}
        </div>
    `;

    let reply = "";

    // =========================
    // GREETINGS
    // =========================

    if (
        message.includes("hello") ||
        message.includes("hi") ||
        message.includes("hey") ||
        message.includes("yo")
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

    // =========================
    // HOW ARE YOU
    // =========================

    else if (
        message.includes("how are you") ||
        message.includes("how r u")
    ) {
        reply = "I'm running perfectly, boss. Systems are online ⚡";
    }

    // =========================
    // TIME
    // =========================

    else if (
        message.includes("time") ||
        message.includes("current time")
    ) {
        reply = `🕐 Current time: ${new Date().toLocaleTimeString()}`;
    }

    // =========================
    // DATE
    // =========================

    else if (
        message.includes("date") ||
        message.includes("today")
    ) {
        reply = `📅 Today is ${new Date().toDateString()}`;
    }

    // =========================
    // DAY
    // =========================

    else if (message.includes("day")) {
        reply = `Today is ${new Date().toLocaleDateString("en-US", {
            weekday: "long"
        })}.`;
    }

    // =========================
    // WHO ARE YOU
    // =========================

    else if (
        message.includes("who are you") ||
        message.includes("what are you")
    ) {
        reply = "🤖 I am Jarvis, your personal AI assistant.";
    }

    // =========================
    // WHO CREATED YOU
    // =========================

    else if (
        message.includes("who created you") ||
        message.includes("who made you")
    ) {
        reply = "I was created by my master. 😎";
    }

    // =========================
    // GOOGLE
    // =========================

    else if (message.includes("open google")) {
        window.open("https://www.google.com", "_blank");
        reply = "🔎 Opening Google...";
    }

    // =========================
    // YOUTUBE
    // =========================

    else if (message.includes("open youtube")) {
        window.open("https://www.youtube.com", "_blank");
        reply = "▶️ Opening YouTube...";
    }

    // =========================
    // GITHUB
    // =========================

    else if (message.includes("open github")) {
        window.open("https://github.com/Munwaar", "_blank");
        reply = "💻 Opening your GitHub. Time to lock in!";
    }

    // =========================
    // PORTFOLIO
    // =========================

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

    // =========================
    // CHATGPT
    // =========================

    else if (
        message.includes("open chatgpt") ||
        message.includes("chatgpt")
    ) {
        window.open("https://chatgpt.com/", "_blank");
        reply = "🧠 Opening ChatGPT...";
    }

    // =========================
    // SEARCH GOOGLE
    // =========================

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

    // =========================
    // YOUTUBE SEARCH
    // =========================

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

    // =========================
    // WIKIPEDIA
    // =========================

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

    // =========================
    // WEATHER
    // =========================

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

    // =========================
    // JOKES
    // =========================

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

    // =========================
    // MOTIVATION
    // =========================

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

        reply =
            motivation[Math.floor(Math.random() * motivation.length)];
    }

    // =========================
    // THANK YOU
    // =========================

    else if (
        message.includes("thank you") ||
        message.includes("thanks")
    ) {
        reply = "😎 Anytime, boss.";
    }

    // =========================
    // LOVE
    // =========================

    else if (
        message.includes("i love you") ||
        message.includes("love you")
    ) {
        reply = "❤️ I appreciate that, boss.";
    }

    // =========================
    // CALCULATOR
    // =========================

    else if (message.startsWith("calculate ")) {

        const expression = originalMessage
            .substring(10)
            .trim();

        try {

            // Allow only numbers and basic operators
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

    // =========================
    // CLEAR CHAT
    // =========================

    else if (
        message === "clear" ||
        message === "clear chat"
    ) {
        chat.innerHTML = "";
        return;
    }

    // =========================
    // HELP
    // =========================

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
        🧹 Clear chat<br><br>

        Try: <b>"search Java tutorials"</b>
        `;
    }

    // =========================
    // DEFAULT
    // =========================

    else {

        reply = `
            🤔 I don't understand that yet.<br>
            Try saying <b>"help"</b> to see what I can do.
        `;
    }

    // =========================
    // SHOW BOT RESPONSE
    // =========================

    chat.innerHTML += `
        <div class="bot">
            Jarvis: ${reply}
        </div>
    `;

    // Clear input
    input.value = "";

    // Scroll to bottom
    chat.scrollTop = chat.scrollHeight;
}
```

### 🔥 Add Enter-key support too

Put this **outside** the function:

```javascript
document.getElementById("userInput").addEventListener("keydown", function(event) {

    if (event.key === "Enter") {
        sendMessage();
    }

});
```

Now the user doesn't have to click the Send button every time.

### 🧠 Commands you can test

```text
hello
what time is it
what is today's date
who are you
open youtube
open google
open github
open portfolio
open chatgpt
search Java tutorials
play lofi music
wiki Elon Musk
weather Chennai
tell me a joke
motivate me
calculate 25 * 8
what can you do
clear chat
```

**Next level:** the biggest upgrade would be making Jarvis understand **natural sentences instead of exact keywords** — e.g. `"Can you find me some Java tutorials on YouTube?"` and automatically figure out that it should perform a YouTube search.
