"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const user_route_1 = require("./modules/user/user.route");
const category_route_1 = require("./modules/category/category.route");
const post_route_1 = require("./modules/post/post.route");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use(express_1.default.urlencoded({ extended: true }));
app.use("/api/v1/user", user_route_1.UserRoutes);
app.use("/api/v1/category", category_route_1.CategoryRoutes);
app.use("/api/v1/post", post_route_1.PostRoutes);
exports.default = app;
