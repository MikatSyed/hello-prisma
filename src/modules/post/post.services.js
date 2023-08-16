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
exports.PostServices = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const createPost = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma.post.create({
        data,
        include: {
            author: true,
            category: true
        }
    });
    return result;
});
const getAllPost = (options) => __awaiter(void 0, void 0, void 0, function* () {
    const { sortBy, sortOrder, searchTerm, page, limit } = options;
    const newPage = parseInt(page);
    const newLimit = parseInt(limit);
    const skip = newLimit * newPage - newLimit || 0;
    const take = newLimit || 10;
    return yield prisma.$transaction((tx) => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield tx.post.findMany({
            skip,
            take,
            include: {
                author: true,
                category: true
            },
            orderBy: sortBy && sortOrder ? {
                [sortBy]: sortOrder
            } : { createdAt: 'asc' },
            where: {
                OR: [
                    {
                        title: {
                            contains: searchTerm,
                            mode: 'insensitive'
                        }
                    },
                    {
                        author: {
                            name: {
                                contains: searchTerm,
                                mode: 'insensitive'
                            }
                        }
                    }
                ]
            }
        });
        const total = yield tx.post.count();
        return { data: result, total };
    }));
});
const getSinglePost = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma.post.findUnique({
        where: { id },
        include: {
            author: true,
            category: true
        }
    });
    return result;
});
const updatePost = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma.post.update({
        where: { id },
        data: payload
    });
    return result;
});
const deletePost = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma.post.delete({
        where: { id }
    });
    return result;
});
const learnAggregateAndGrouping = () => __awaiter(void 0, void 0, void 0, function* () {
    // const result = await prisma.post.aggregate({
    //     _avg:{
    //         authorId: true,
    //         categoryId: true
    //     },
    //     _count:{
    //         authorId: true
    //     },
    //     _sum:{
    //         authorId: true
    //     }
    // });
    // return result;
    const result = yield prisma.post.groupBy({
        by: ['title'],
        _count: {
            title: true
        }
    });
    return result;
});
exports.PostServices = {
    createPost,
    getAllPost,
    getSinglePost,
    updatePost,
    deletePost,
    learnAggregateAndGrouping
};
