// eslint-disable-next-line no-undef
const contactsRouter = require("./app/routes/contact.route");
// eslint-disable-next-line no-undef
const express = require("express");
// eslint-disable-next-line no-undef
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.json({ message: "Welcome to contact book application."});
});
app.use("/api/contacts", contactsRouter);

// eslint-disable-next-line no-undef
module.exports = app;

