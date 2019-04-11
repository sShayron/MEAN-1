var io = require('socket.io');

const socketIo = {
  con: undefined,
  init: function (http) {
    this.con = io(http);
    return this.con;
  }
}

module.exports = socketIo;