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
exports.UserService = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const addUser = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma.user.create({ data });
    return result;
});
const insertOrUpdateProfile = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const isExist = yield prisma.profile.findUnique({ where: { userId: data.userId } });
    if (isExist) {
        const result = yield prisma.profile.update({
            where: {
                userId: data.userId
            },
            data: {
                bio: data.bio
            }
        });
        return result;
    }
    const result = yield prisma.profile.create({ data });
    return result;
});
const getUser = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma.user.findMany({
        // select:{email:true,name:true}
        include: {
            profile: true
        }
    });
    return result;
});
const getSingleUser = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma.user.findUnique({
        where: { id },
        include: {
            profile: true
        }
    });
    return result;
});
exports.UserService = {
    addUser,
    insertOrUpdateProfile,
    getUser,
    getSingleUser
};
