const express = requier("express");

const server = express();

server.use(express.json());

module.exports = server;
