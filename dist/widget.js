(() => {
  const n = document.createElement("style");
  (n.textContent =
    '\n    .chat-btn{\n        position: fixed;\n        right: 50px;\n        bottom: 50px;\n        background: dodgerblue;\n        color: white;\n        width: 60px;\n        height: 60px;\n        border-radius: 50%;\n        opacity: 0.8;\n        transition: opacity 0.3s;\n        box-shadow: 0 5px 5px rgba(0,0,0,0.4);\n    }\n\n    .chat-popup{\n        display: none;\n        position: fixed;\n        bottom: 80px;\n        right: 120px;\n        height: 400px;\n        width: 300px;\n        background-color: white;\n        flex-direction: column;\n        justify-content: space-between;\n        padding: 0.75rem;\n        box-shadow: 5px 5px 5px rgba(0,0,0,0.4);\n        border-radius: 10px;\n    }\n\n    .show{\n        display: flex;\n    }\n\n    .chat-area{\n        height: 80%;\n        overflow-y: auto;\n        overflow-x: hidden;\n    }\n\n    .income-msg{\n        display: flex;\n        align-items: center;\n    }\n\n    .income-msg .msg{\n        background-color: dodgerblue;\n        color: white;\n        padding: 0.5rem;\n        border-radius: 25px;\n        margin-left: 1rem;\n        box-shadow: 0 2px 5px rgba(0,0,0,0.4);\n    }\n\n    .avatar{\n        width: 45px;\n        height: 45px;\n        border-radius: 50%;\n        object-fit: cover;\n    }\n\n    .input-area{\n        position: relative;\n        display: flex;\n        justify-content: center;\n    }\n\n    input[type="text"]{\n        width: 100%;\n        border: 1px solid #ccc;\n        font-size: 1rem;\n        border-radius: 5px;\n        height: 2.2rem;\n    }\n\n    .submit{\n        padding: 0.25rem 0.5rem;\n        margin-left: 0.5rem;\n        background-color: green;\n        color: white;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        border-radius: 5px;\n        opacity: 0.7;\n    }\n\n    .out-msg{\n        display: flex;\n        justify-content: flex-end;\n        align-items: center;\n    }\n    .my-msg{\n        display: flex;\n        justify-content: flex-end;\n        margin: 0.75rem;\n        padding: 0.5rem;\n        background-color: #ddd;\n        border-radius: 25px;\n        box-shadow: 0 2px 5px rgba(0,0,0,0.4);\n        word-break: break-all;\n    }\n'),
    document.head.appendChild(n),
    document.body.appendChild(
      (function () {
        const n = document.createElement("script");
        return (
          (n.innerHTML = document.write(
            '<section><button class="chat-btn"><i class="material-icons">comment</i></button><div class="chat-popup"><div class="chat-area"><div class="income-msg"><span class="msg">Hi, how can I help you?</span></div></div><div class="input-area"><input type="text" id="myInput"><button class="submit"><i class="material-icons">send</i></button></div></div></section>'
          )),
          n
        );
      })()
    );
  var e = document.createElement("img");
  (e.src = "./img/bot-icon.jpg"),
    e.setAttribute(
      "style",
      "width: 45px; height: 45px; border-radius: 50%; object-fit: cover;"
    ),
    document
      .querySelector(".income-msg")
      .insertAdjacentElement("afterbegin", e);
  const t = document.querySelector(".chat-popup"),
    i = document.querySelector(".chat-btn"),
    o = document.querySelector(".submit"),
    r = document.querySelector(".chat-area"),
    a = document.querySelector("input"),
    c = document.getElementById("myInput");
  function d() {
    let n = `\n    <div class="out-msg">\n        <span class="my-msg">${a.value}</span>\n        <img src="img/user-icon.png" class="avatar">\n    </div>`;
    r.insertAdjacentHTML("beforeend", n), (a.value = "");
  }
  i.addEventListener("click", () => {
    t.classList.toggle("show");
  }),
    c.addEventListener("keypress", function (n) {
      "Enter" === n.key && d();
    }),
    o.addEventListener("click", () => {
      d();
    });
})();
