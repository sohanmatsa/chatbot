
// === SmartGenie Standalone Chatbot Embed ===

// Inject CSS
(function() {
    const style = document.createElement('style');
    style.innerHTML = "body {     margin: 0;     padding: 0;     background: #eef4fa;     font-family: \'Inter\', \'Segoe UI\', Arial, sans-serif;     min-height: 100vh; } .main-header {     text-align: center;     padding: 60px 24px;     background: linear-gradient(135deg, #0BC0DF 60%, #eef4fa 100%);     color: #fff; } .header-logo {     height: 38px;     width: auto;     margin-right: 12px;     border-radius: 50%;     object-fit: contain;     background: #fff;     border: 1.5px solid #e0f1ff; }  /* --- LAMP BUTTON: ONLY LAMP ICON, NO SHAPE/NO CIRCLE/NO BG/NO BORDER --- */ .chatbot-trigger-btn {     width: 128px;     height: 128px;     position: fixed;     bottom: 72px;  /* raises lamp higher (was e.g. 26px or 70px) */     right: 56px;      background: transparent;     border: none;     outline: none;     box-shadow: none;     padding: 0;     margin: 0;     z-index: 9998;     display: flex;     flex-direction: column;     align-items: center;     justify-content: flex-end;     width: auto;     height: auto;     cursor: pointer;     pointer-events: auto;     transition: none;     overflow: visible; } .smoke-holder {     left: 50%;     bottom: 94px;      /* position so smoke sits just above lamp */     width: 88px;     height: 74px;     transform: translateX(-50%);     z-index: 3;     pointer-events: none; } .lamp-img {     width: 106px;     height: 106px;      /* As per image dimensions, no crop! */     background: none;     border: none;     display: block;     box-shadow: none;     margin: 0;     padding: 0;     object-fit: contain;     border-radius: 0;     animation: lamp-pulse 2.5s infinite;     transition: filter .19s, transform .17s;     cursor: pointer;     z-index: 2; } .lamp-img.shaking {     animation: lamp-shake 0.43s cubic-bezier(.36,.07,.19,.97) 1 !important; } @keyframes lamp-pulse {     0%,100% { filter: drop-shadow(0 0 3px #0acdea92) brightness(1.16);}     48% { filter: drop-shadow(0 0 9px #38f9ffc1) brightness(1.23);} } @keyframes lamp-shake {     0%, 100% { transform: rotate(0deg);}     20% { transform: rotate(-13deg);}     45% { transform: rotate(12deg);}     60% { transform: rotate(-7deg);}     80% { transform: rotate(4deg);} } .lamp-tooltip {     visibility: hidden;     position: absolute;     left: 50%;     bottom: 104%;     transform: translateX(-50%);     background: #242942f1;     color: #fff;     padding: 8px 16px;     font-size: 1em;     border-radius: 13px;     white-space: nowrap;     opacity: 0;     transition: opacity 0.18s;     z-index: 99999;     pointer-events: none;     box-shadow: 0 1px 5px #2eeefd2d;     text-align: center; } .chatbot-trigger-btn:hover .lamp-tooltip, .chatbot-trigger-btn:focus .lamp-tooltip {     visibility: visible;     opacity: 1; } @media (max-width: 600px) {     .chatbot-trigger-btn { bottom: 20px; right: 10px; }     .lamp-img { width: 46px; }     .smoke-holder { bottom: 44px; height: 24px; width: 33px;}     .lamp-tooltip { font-size: .92em; min-width: 100px; padding: 4px 7px;} }  /* ============= THE REST OF YOUR CHATBOT/MODAL CSS (UNCHANGED) ============= */ .chatbot-container {     position: fixed !important;     top: 0; left: 0; right: 0; bottom: 0;     width: 100vw;     height: 100vh;     max-width: 100vw;     max-height: 100vh;     min-width: 0;     min-height: 0;     margin: 0 !important;     border-radius: 0 !important;     box-shadow: none !important;     background: #fff;     z-index: 9999;     display: none;     flex-direction: column;     overflow: hidden; } body.chatbot-open .chatbot-container { display: flex !important; } body.chatbot-open .chatbot-trigger-btn { display: none !important; }  .chatbot-header {     display: flex;     align-items: center;     background: #0BC0DF;     color: #fff;     padding: 24px 32px;     border-radius: 0;     box-shadow: 0 2px 6px 0 rgba(0,140,255,0.12); } .avatar {     width: 104px;     height: 104px;     border-radius: 50%;     margin-right: 18px;     background: #fff;     object-fit: cover;     border: 2px solid #EEFAFF; } .chatbot-title {     flex: 1;     font-weight: 700;     font-size: 2em;     margin-left: 7px; } .close-btn {     background: none;     border: none;     color: #fff;     font-size: 2em;     cursor: pointer;     margin-left: auto;     transition: color 0.2s; } .close-btn:hover { color: #87e2ff; }  .chatbot-messages {     padding: 36px 28px 28px 28px;     flex: 1 1 0%;     min-height: 0;     overflow-y: auto;     overflow-x: hidden;     background: #F7FBFD;     display: flex;     flex-direction: column;     gap: 18px;     box-sizing: border-box; } .message-row { display: flex; align-items: flex-end; margin-bottom: 2px !important; animation: fadeInUp 0.18s;} @keyframes fadeInUp { from { opacity: 0; transform: translateY(18px);} to {opacity: 1; transform: translateY(0);}} .bot-row { flex-direction: row; } .user-row { flex-direction: row; }  .message-bubble {     width: 100%;     max-width: 100%;     padding: 16px 18px;     font-size: 1.2em;     background: #e0f1ff;     border-radius: 18px;     margin: 2px 0 4px 0;     white-space: pre-line;     box-shadow: 0 1px 4px 0 #c8e8ff44;     text-align: left;     word-break: break-word;     overflow-x: auto; } .bot-bubble { background: #fff; color: #171b28; border-bottom-left-radius: 3.2px; border-top-left-radius: 5px; } .user-bubble { background: #0BC0DF; color: #fff; border-bottom-right-radius: 3.2px; border-top-right-radius: 5px; text-align: left; } .message-bubble table { border-collapse: collapse; width: 100%; font-size: 1em; margin-top: 8px;} .message-bubble th, .message-bubble td { border: 1.2px solid #a7d8fb; padding: 8px 8px; } .message-bubble th { background: #bae1ff; font-weight: bold; } .message-bubble ul, .message-bubble ol { margin: 4px 0 4px 20px; padding-left: 18px; } .message-bubble li { margin-bottom: 2px; margin-top: 0;} .message-bubble p { margin: 7px 0; padding: 0; line-height: 1.44;} .message-bubble h1, .message-bubble h2, .message-bubble h3, .message-bubble h4, .message-bubble h5, .message-bubble h6 {     margin: 9px 0 3px 0;     font-weight: bold;     line-height: 1.14; } .time-stamp { font-size: 1em; color: #bbb; margin: 0 10px; user-select: none; z-index: 1; } .typing-indicator { display: flex; align-items: center; height: 32px; margin-bottom: 20px; margin-left: 22px;} .typing-indicator span { display: inline-block; width: 10px; height: 10px; background: #0BC0DF; border-radius: 50%; margin: 0 4px; animation: typing 1.2s infinite;} .typing-indicator span:nth-child(2) { animation-delay: .2s;} .typing-indicator span:nth-child(3) { animation-delay: .4s;} @keyframes typing { 0%, 80%, 100% {transform: scale(1);} 40% { transform: scale(1.45);} } .quick-replies {     display: flex;     gap: 12px;     padding: 10px 32px 8px 32px;     background: transparent;     flex-wrap: wrap; } .quick-replies button {     background: #e4f2ff;     color: #0BC0DF;     border: none;     border-radius: 14px;     padding: 10px 24px;     font-size: 1.1em;     cursor: pointer;     margin-bottom: 4px;     transition: background 0.18s; } .quick-replies button:hover { background: #bae1ff; } .chatbot-input-area {     display: flex;     padding: 22px 32px 22px 32px;     border-top: 1.5px solid #e2effa;     background: #fafbfc; } #chat-input {     border: none;     border-radius: 18px;     padding: 14px 20px;     font-size: 1.14em;     outline: none;     flex: 1;     background: #e9f7ff;     margin-right: 16px;     color: #20212c;     width: 100%; } #chat-input:focus { outline: 2px solid #008CFF33; background: #e0f3ff; } #send-btn { background: #0BC0DF; color: #fff; border: none; border-radius: 100%; width: 48px; height: 48px; } .export-btn {     background: #F7FBFD;     border: 1.5px solid #87e2ff;     border-radius: 9px;     font-size: 1em;     color: #0BC0DF;     margin-right: 14px;     padding: 8px 15px;     cursor: pointer;     transition: background 0.13s;     height: 42px; } .export-btn:hover { background: #bae1ff; }  @media (max-width: 1024px) {     .chatbot-container {         width: 100vw;         height: 100vh;         border-radius: 0 !important;         box-shadow: none !important;     }     .chatbot-header { padding: 14px 4vw; border-radius: 0; }     .chatbot-title { font-size: 1.3em; }     .chatbot-messages, .chatbot-input-area, .quick-replies { padding-left: 4vw; padding-right: 4vw; }     .message-bubble { font-size: 1em; max-width: 100%; padding: 10px 4vw;}     .avatar, .header-logo { width: 36px; height: 36px; }     .export-btn, .close-btn { font-size: 1.1em; height: 38px; } } @media (max-width: 600px) {     .chatbot-header { padding: 10px 2vw;}     .chatbot-title { font-size: 1.1em;}     .chatbot-messages, .chatbot-input-area, .quick-replies { padding-left: 2vw; padding-right: 2vw;}     .message-bubble { font-size: .98em; padding: 7px 2vw;}     .avatar, .header-logo { width: 30px; height: 30px; }     .export-btn, .close-btn { font-size: 1em; height: 34px; padding: 4px 8px;} } .chatbot-messages::-webkit-scrollbar { width: 8px;} .chatbot-messages::-webkit-scrollbar-thumb {background: #d2e8fa;} ";
    document.head.appendChild(style);
})();

// Inject HTML
(function() {
    const wrapper = document.createElement('div');
    wrapper.innerHTML = "<!DOCTYPE html><html lang=\"en\"><head>    <meta charset=\"UTF-8\">    <title>StartGenie Assistant</title>    <link rel=\"stylesheet\" href=\"style.css\">    <script src=\"https://cdn.jsdelivr.net/npm/marked/marked.min.js\"></script>    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\"></head><body>    <button id=\"chatbot-trigger\" class=\"chatbot-trigger-btn\" type=\"button\" aria-label=\"Open GenieBot\">    <span class=\"lamp-stack\">        <span class=\"smoke-holder\">            <svg id=\"genie-smoke\" width=\"70\" height=\"50\" viewBox=\"0 0 70 50\" xmlns=\"http://www.w3.org/2000/svg\">                <g>                    <ellipse cx=\"35\" cy=\"24\" rx=\"16\" ry=\"8\" fill=\"#00def7\" opacity=\"0.49\">                        <animate attributeName=\"cy\" values=\"24;10;24\" dur=\"2.5s\" repeatCount=\"indefinite\"/>                        <animate attributeName=\"opacity\" values=\"0.49;0.75;0.39\" dur=\"2.5s\" repeatCount=\"indefinite\"/>                    </ellipse>                    <ellipse cx=\"35\" cy=\"18\" rx=\"9\" ry=\"4\" fill=\"#fff\" opacity=\"0.31\">                        <animate attributeName=\"cy\" values=\"18;5;18\" dur=\"2.4s\" repeatCount=\"indefinite\"/>                        <animate attributeName=\"opacity\" values=\"0.27;0.41;0.27\" dur=\"2.4s\" repeatCount=\"indefinite\"/>                    </ellipse>                </g>            </svg>        </span>        <img src=\"lamp.png\" alt=\"Chatbot\" class=\"lamp-img\" draggable=\"false\">    </span>    <span class=\"lamp-tooltip\">Rub your lamp to summon Genie</span>    <audio id=\"genie-sound\" src=\"genie.mp3\" preload=\"auto\"></audio></button>    <div class=\"chatbot-container\" id=\"chatbot-container\" style=\"display:none;\">        <div class=\"chatbot-header\">            <img src=\"Sg_logo.png\" alt=\"StartGenie Logo\" class=\"header-logo\">            <span class=\"chatbot-title\">GenieBot🧞‍♂️</span>            <button class=\"export-btn\" id=\"exportChatBtn\" title=\"Export chat to Word\">📄 Export Chat</button>            <button class=\"close-btn\" id=\"closeChatbot\" title=\"Close Chatbot\">&times;</button>        </div>        <div class=\"chatbot-messages\" id=\"chatbot-messages\"></div>        <div id=\"typing-indicator\" class=\"typing-indicator\" style=\"display:none;\">            <span></span><span></span><span></span>        </div>        <div class=\"quick-replies\" id=\"quick-replies\">            <button onclick=\"quickReply(\'What can you do?\')\">What can you do?</button>            <button onclick=\"quickReply(\'Give me a startup idea!\')\">Give me a startup idea!</button>            <button onclick=\"quickReply(\'Show me a product roadmap example.\')\">Show me a product roadmap example.</button>        </div>        <form id=\"chat-form\" class=\"chatbot-input-area\" autocomplete=\"off\">            <input type=\"text\" id=\"chat-input\" placeholder=\"Type your message...\" required>            <button type=\"submit\" id=\"send-btn\">&#9658;</button>        </form>    </div>    <script src=\"script.js\"></script></body></html>";
    document.body.appendChild(wrapper);
})();

// Inject chatbot logic
(function() {
    const chatForm = document.getElementById('chat-form');
const chatInput = document.getElementById('chat-input');
const chatMessages = document.getElementById('chatbot-messages');
const typingIndicator = document.getElementById('typing-indicator');
const quickReplies = document.getElementById('quick-replies');
const BOT_AVATAR = "genie_avatar.png";
const GENIE_AVATAR = "genie_avatar.png";
const USER_AVATAR = "user_avatar.png";
const chatbotContainer = document.getElementById('chatbot-container');
const chatbotTrigger = document.getElementById('chatbot-trigger');
const chatbotClose = document.getElementById('closeChatbot');
const lampImg = document.querySelector('.lamp-img');
const genieSound = document.getElementById('genie-sound');
const chatHistory = [];

// --- SOUND and VIBRATION logic ---
function playGenieSound() {
    try {
        genieSound.currentTime = 0;
        genieSound.play();
    } catch(_) {}
}
function shakeLamp() {
    lampImg.classList.add('shaking');
    setTimeout(()=>lampImg.classList.remove('shaking'), 500);
}

// Citation removal & rendering logic unchanged...
function removeCitations(content) {
    return content.replace(/\s*\[\d+\]/g, "");
}

function appendMessage(content, sender = 'bot', time = null) {
    if (sender === 'bot') content = removeCitations(content);
    const htmlContent = marked.parse(content);
    chatHistory.push({
        sender,
        content: htmlContent,
        time: time || (new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}))
    });
    const row = document.createElement('div');
    row.classList.add('message-row', sender === 'bot' ? 'bot-row' : 'user-row');
    const avatar = document.createElement('img');
    avatar.src = sender === 'bot' ? BOT_AVATAR : USER_AVATAR;
    avatar.className = 'avatar';
    const bubble = document.createElement('div');
    bubble.classList.add('message-bubble', sender === 'bot' ? 'bot-bubble' : 'user-bubble');
    bubble.innerHTML = htmlContent;
    const stamp = document.createElement('div');
    stamp.className = "time-stamp";
    stamp.textContent = time || (new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}));
    if (sender === 'bot') {
        row.appendChild(avatar); row.appendChild(bubble); row.appendChild(stamp);
    } else {
        row.appendChild(stamp); row.appendChild(bubble); row.appendChild(avatar);
    }
    chatMessages.appendChild(row);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Export to Word
function exportChatToWord() {
    let chatContent = "<html><head><meta charset='utf-8'><title>StartGenie Chat Export</title></head><body>";
    chatContent += "<h2>StartGenie Chat Conversation</h2>";
    chatHistory.forEach(msg => {
        let who = msg.sender === 'user' ? "You" : "StartGenie Bot";
        chatContent += `<p><strong>${who} [${msg.time}]:</strong></p>`;
        chatContent += msg.content;
    });
    chatContent += "</body></html>";
    let blob = new Blob([chatContent], { type: "application/msword" });
    let url = URL.createObjectURL(blob);
    let a = document.createElement("a");
    a.href = url;
    a.download = "startgenie_chat.doc";
    document.body.appendChild(a);
    a.click();
    setTimeout(() => {
        document.body.removeChild(a);
        window.URL.revokeObjectURL(url);
    }, 0);
}

// Toggle chatbot pop-up/modal
function openChatbot() {
    chatbotContainer.style.display = 'flex';
    document.body.classList.add('chatbot-open');
    chatbotTrigger.style.display = 'none';
    chatInput.focus();
}
function closeChatbot() {
    chatbotContainer.style.display = 'none';
    document.body.classList.remove('chatbot-open');
    chatbotTrigger.style.display = 'flex';
}

window.onload = () => {
    appendMessage("<strong>Welcome to Genie! ✨</strong><br>How can I assist you today?");
    chatInput.focus();
    document.getElementById('exportChatBtn').addEventListener('click', exportChatToWord);

    chatbotContainer.style.display = 'none';
    chatbotTrigger.style.display = 'flex';
    document.body.classList.remove('chatbot-open');

    chatbotTrigger.onclick = () => {
        shakeLamp(); // vibration/animation on open
        playGenieSound();
        setTimeout(openChatbot, 400);
    };
    chatbotClose.onclick = closeChatbot;

    // Lamp sound and shake on hover (works for mouse)
    lampImg.addEventListener('mouseenter', () => {
        shakeLamp();
        playGenieSound();
    });

    // Optional: play sound on touchstart for touchscreen
    lampImg.addEventListener('touchstart', playGenieSound);

    // Lamp shake & sound on tap/click (in addition to .chatbotTrigger.onclick)
    lampImg.addEventListener('click', () => {
        shakeLamp();
        playGenieSound();
    });
};
window.quickReply = (text) => {
    chatInput.value = text;
    chatForm.dispatchEvent(new Event('submit', {cancelable:true, bubbles:true}));
};

function showTyping() { typingIndicator.style.display = 'flex'; }
function hideTyping() { typingIndicator.style.display = 'none'; }

chatForm.addEventListener('submit', async function(e) {
    e.preventDefault();
    const msg = chatInput.value.trim();
    if (!msg) return;
    appendMessage(msg, 'user');
    chatInput.value = '';
    showTyping();

    try {
        const response = await fetch("https://smartgenie-3e9t.onrender.com/ask_ai", {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                prompt: msg,
                company_name: "TestCompany"
            }),
        });
        const data = await response.json();
        hideTyping();
        if (data && data.response) {
            appendMessage(data.response, 'bot');
        } else {
            appendMessage("Sorry, something went wrong.", 'bot');
        }
    } catch (err) {
        hideTyping();
        appendMessage("Network error. Please try again.", 'bot');
    }
});

})();
