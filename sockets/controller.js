const socketController = (socket) => {
  socket.on("sendMessage", (payload, callback) => {
    const id = 123456;

    callback({ id, payload });

    socket.broadcast.emit("sendMessage", payload);
  });

  socket.on("disconnect", () => console.log("Cliente desconectado"));
};

module.exports = socketController;
