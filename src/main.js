// -------------------CSS-------------------
const style = document.createElement("style");

style.textContent = `
    .chat-btn{
        position: fixed;
        right: 50px;
        bottom: 50px;
        background: dodgerblue;
        color: white;
        width: 60px;
        height: 60px;
        border-radius: 50%;
        opacity: 0.8;
        transition: opacity 0.3s;
        box-shadow: 0 5px 5px rgba(0,0,0,0.4);
    }

    .chat-popup{
        display: none;
        position: fixed;
        bottom: 80px;
        right: 120px;
        height: 400px;
        width: 300px;
        background-color: white;
        flex-direction: column;
        justify-content: space-between;
        padding: 0.75rem;
        box-shadow: 5px 5px 5px rgba(0,0,0,0.4);
        border-radius: 10px;
    }

    .show{
        display: flex;
    }

    .chat-area{
        height: 80%;
        overflow-y: auto;
        overflow-x: hidden;
    }

    .income-msg{
        display: flex;
        align-items: center;
    }

    .income-msg .msg{
        background-color: dodgerblue;
        color: white;
        padding: 0.5rem;
        border-radius: 25px;
        margin-left: 1rem;
        box-shadow: 0 2px 5px rgba(0,0,0,0.4);
    }

    .avatar{
        width: 45px;
        height: 45px;
        border-radius: 50%;
        object-fit: cover;
    }

    .input-area{
        position: relative;
        display: flex;
        justify-content: center;
    }

    input[type="text"]{
        width: 100%;
        border: 1px solid #ccc;
        font-size: 1rem;
        border-radius: 5px;
        height: 2.2rem;
    }

    .submit{
        padding: 0.25rem 0.5rem;
        margin-left: 0.5rem;
        background-color: green;
        color: white;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 5px;
        opacity: 0.7;
    }

    .out-msg{
        display: flex;
        justify-content: flex-end;
        align-items: center;
    }
    .my-msg{
        display: flex;
        justify-content: flex-end;
        margin: 0.75rem;
        padding: 0.5rem;
        background-color: #ddd;
        border-radius: 25px;
        box-shadow: 0 2px 5px rgba(0,0,0,0.4);
        word-break: break-all;
    }
    .material-icons.md-36 { font-size: 36px; }
    .material-symbols-outlined.md-36 { font-size: 36px; }
`;

document.head.appendChild(style);

// -------------------Chatbox welcome-------------------
function component() {
  const element = document.createElement("script");
  element.innerHTML = document.write(
    '<section><button class="chat-btn"><i class="material-icons">comment</i></button><div class="chat-popup"><div class="chat-area"><div class="income-msg"><i class="material-symbols-outlined md-36">support_agent</i><span class="msg">Hi, how can I help you?</span></div></div><div class="input-area"><input type="text" id="myInput"><button class="submit"><i class="material-icons">send</i></button></div></div></section>'
  );
  return element;
}

document.body.appendChild(component());

// -------------------Include bot image-------------------
/*
var bot_img = document.createElement("img");
bot_img.src = "./img/bot-icon.jpg";
bot_img.setAttribute(
  "style",
  "width: 45px; height: 45px; border-radius: 50%; object-fit: cover;"
);
document
  .querySelector(".income-msg")
  .insertAdjacentElement("afterbegin", bot_img);
  */

// -------------------Javascript handler for user interaction-------------------
const popup = document.querySelector(".chat-popup");
const chatButton = document.querySelector(".chat-btn");
const submitButton = document.querySelector(".submit");
const chatArea = document.querySelector(".chat-area");
const inputEle = document.querySelector("input");
const inputEnter = document.getElementById("myInput");

chatButton.addEventListener("click", () => {
  popup.classList.toggle("show");
});

function inputHandler() {
  let userInput = inputEle.value;
  let temp = `
    <div class="out-msg">
        <span class="my-msg">${userInput}</span>
        <i class="material-icons md-36">face</i>
    </div>`;
  chatArea.insertAdjacentHTML("beforeend", temp);
  inputEle.value = "";
}

inputEnter.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    inputHandler();
  }
});

submitButton.addEventListener("click", () => {
  inputHandler();
});
