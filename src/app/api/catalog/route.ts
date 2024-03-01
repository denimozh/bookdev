import { NextResponse } from 'next/server';
import { prisma } from '@/utils/connect';

// fetch all of the catalog
export const GET = async () => {
    try {
        const catalog = await prisma.category.findMany();

        return new NextResponse(JSON.stringify(catalog), { status: 200 });
    } catch (error) {
        console.log(error);
        return new NextResponse(
            JSON.stringify({ message: 'Something went wrong!' }),
            { status: 500 },
        );
    }
};

export const POST = () => {
    return new NextResponse('Hello', { status: 200 });
};
