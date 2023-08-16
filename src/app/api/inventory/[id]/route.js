import { NextResponse } from "next/server";
import connect from "../../../../util/db";
import Inventory from "../../../../models/Inventory";

//GET SINGLE PRODUCT
export const GET = async (request, { params }) => {
    const { id } = params;

    try {
        await connect();

        const inventoryItem = await Inventory.findById(id);

        return new NextResponse(JSON.stringify(inventoryItem), { status: 200 });
    } catch (err) {
        return new NextResponse("Database Error", { status: 500 });
    }
};



export const PUT = async (request, { params }) => {

    const { id } = params;

    if (!token || token !== process.env.token) {
        return res.status(401).json("Not authenticated!")
    }

    try {
        await connect();

        await Inventory.findByIdAndUpdate(id, req.body, {
            new: true,
        });

        return new NextResponse("post has been updated", { status: 200 });
    } catch (err) {
        return new NextResponse("Database Error", { status: 500 });
    }

};


export const DELETE = async (request, { params }) => {
    const { id } = params;

    try {
        await connect();

        await Inventory.findByIdAndDelete(id);

        return new NextResponse("Post has been deleted", { status: 200 });
    } catch (err) {
        return new NextResponse("Database Error", { status: 500 });
    }

};

