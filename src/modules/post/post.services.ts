import { Post, PrismaClient } from "@prisma/client";
import { title } from "process";

const prisma = new PrismaClient();

const createPost = async (data: Post): Promise<Post> => {
    const result = await prisma.post.create({
        data,
        include: {
            author: true,
            category: true
        }
    });

    return result;
}

const getAllPost = async (options: any) => {
    const { sortBy, sortOrder, searchTerm, page, limit } = options;
    const newPage = parseInt(page);
    const newLimit = parseInt(limit);
    const skip = newLimit * newPage - newLimit || 0;
    const take = newLimit || 10;

    return await prisma.$transaction(async (tx) => {
        const result = await tx.post.findMany({
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

        const total = await tx.post.count();
        return { data: result, total };
    })
}

const getSinglePost = async (id: number) => {
    const result = await prisma.post.findUnique({
        where: { id },
        include: {
            author: true,
            category: true
        }
    });

    return result;
}
const updatePost = async (id: number, payload: Partial<Post>): Promise<Post> => {
    const result = await prisma.post.update({
        where: { id },
        data: payload
    });

    return result;
}

const deletePost = async (id: number): Promise<Post> => {
    const result = await prisma.post.delete({
        where: { id }
    });

    return result;
}

const learnAggregateAndGrouping = async ()=> {
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

    const result = await prisma.post.groupBy({
        by: ['title'],
        _count: {
            title: true
        }
    })
    return result;
}

export const PostServices = {
    createPost,
    getAllPost,
    getSinglePost,
    updatePost,
    deletePost,
    learnAggregateAndGrouping
}