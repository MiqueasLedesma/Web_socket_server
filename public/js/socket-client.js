// Referencias HTML;
const lblOnline = document.querySelector("#lblOnline");
const lblOffline = document.querySelector("#lblOffline");
const txtMessage = document.querySelector("#txtMessage");
const btnSend = document.querySelector("#btnSend");

// Socket
const socket = io();

socket.on("connect", () => {
  lblOffline.style.display = "none";
  lblOnline.style.display = "";
});

socket.on("disconnect", () => {
  lblOffline.style.display = "";
  lblOnline.style.display = "none";
});

socket.on("sendMessage", (payload) => console.log(payload));

btnSend.addEventListener("click", () => {
  const message = txtMessage.value;
  const payload = {
    message,
    date: new Date(),
  };
  socket.emit("sendMessage", payload, (res) => console.log(res));
});
