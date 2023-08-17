"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostController = void 0;
const post_services_1 = require("./post.services");
const createPost = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield post_services_1.PostServices.createPost(req.body);
        res.send({
            success: true,
            message: "Post Created Successfully",
            data: result
        });
    }
    catch (error) {
        res.send(error);
    }
});
const getAllPost = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const options = req.query;
    try {
        const result = yield post_services_1.PostServices.getAllPost(options);
        res.send({
            success: true,
            message: "Post Retrived Successfully",
            total: result.total,
            data: result.data
        });
    }
    catch (error) {
        res.send(error);
    }
});
const getSinglePost = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const result = yield post_services_1.PostServices.getSinglePost(parseInt((_a = req === null || req === void 0 ? void 0 : req.params) === null || _a === void 0 ? void 0 : _a.id));
        res.send({
            success: true,
            message: "Post Retrived Successfully",
            data: result
        });
    }
    catch (error) {
        res.send(error);
    }
});
const updatePost = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _b;
    const id = parseInt((_b = req === null || req === void 0 ? void 0 : req.params) === null || _b === void 0 ? void 0 : _b.id);
    const payload = req.body;
    try {
        const result = yield post_services_1.PostServices.updatePost(id, payload);
        res.send({
            success: true,
            message: "Post Updated Successfully",
            data: result
        });
    }
    catch (error) {
        res.send(error);
    }
});
const deletePost = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _c;
    const id = parseInt((_c = req === null || req === void 0 ? void 0 : req.params) === null || _c === void 0 ? void 0 : _c.id);
    try {
        const result = yield post_services_1.PostServices.deletePost(id);
        res.send({
            success: true,
            message: "Post Deleted Successfully",
            data: result
        });
    }
    catch (error) {
        res.send(error);
    }
});
const learnAggregateAndGrouping = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield post_services_1.PostServices.learnAggregateAndGrouping();
        res.send({
            success: true,
            message: "Result!",
            data: result
        });
    }
    catch (err) {
        res.send(err);
    }
});
exports.PostController = {
    createPost,
    getAllPost,
    getSinglePost,
    updatePost,
    deletePost,
    learnAggregateAndGrouping
};
