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
exports.UserController = void 0;
const user_service_1 = require("./user.service");
const addUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield user_service_1.UserService.addUser(req.body);
        res.send({
            success: true,
            message: "User created Successfully",
            data: result
        });
    }
    catch (err) {
        res.send(err);
    }
});
const insertOrUpdateProfile = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield user_service_1.UserService.insertOrUpdateProfile(req.body);
        res.send({
            success: true,
            message: "User created/updated Successfully",
            data: result
        });
    }
    catch (err) {
        res.send(err);
    }
});
const getUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield user_service_1.UserService.getUser();
        res.send({
            success: true,
            message: "User retrived Successfully",
            data: result
        });
    }
    catch (err) {
        res.send(err);
    }
});
const getSingleUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const result = yield user_service_1.UserService.getSingleUser(parseInt((_a = req === null || req === void 0 ? void 0 : req.params) === null || _a === void 0 ? void 0 : _a.id));
        res.send({
            success: true,
            message: "User retrived Successfully",
            data: result
        });
    }
    catch (err) {
        res.send(err);
    }
});
exports.UserController = {
    addUser,
    insertOrUpdateProfile,
    getUser,
    getSingleUser
};
