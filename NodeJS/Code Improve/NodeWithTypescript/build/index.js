"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require("dotenv/config");
const home_routes_1 = require("./routes/home.routes");
const app = (0, express_1.default)();
const PORT = process.env.PORT;
app.use(home_routes_1.homeRouter);
app.get('/users', (req, res) => {
    res.status(200).json({
        message: 'User details',
    });
});
app.listen(PORT, () => {
    console.log(`Server is running on ${PORT} - http:localhost:${PORT}`);
});
