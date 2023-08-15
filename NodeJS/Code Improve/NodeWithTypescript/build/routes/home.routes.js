"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.homeRouter = void 0;
const express_1 = __importDefault(require("express"));
const home_controller_1 = require("../controllers/home.controller");
const homeRouter = express_1.default.Router();
exports.homeRouter = homeRouter;
homeRouter.get('/home', home_controller_1.getHome);
