"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostRoutes = void 0;
const express_1 = __importDefault(require("express"));
const post_controller_1 = require("./post.controller");
const router = express_1.default.Router();
router.get("/learn-query", post_controller_1.PostController.learnAggregateAndGrouping);
router.post("/create-post", post_controller_1.PostController.createPost);
router.get("/", post_controller_1.PostController.getAllPost);
router.get("/:id", post_controller_1.PostController.getSinglePost);
router.patch("/:id", post_controller_1.PostController.updatePost);
router.delete("/:id", post_controller_1.PostController.deletePost);
exports.PostRoutes = router;
