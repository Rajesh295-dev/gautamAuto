import { NextResponse } from "next/server";

import connect from "../../../../util/db";
import Inventory from "@/models/Inventory";


export const GET = async (request, { params }) => {
    const { id } = params;

    try {
        await connect();

        const cartItem = await Inventory.findOne({ _id: id });

        return new NextResponse(JSON.stringify(cartItem), { status: 200 });
    } catch (err) {
        return new NextResponse("Database Error", { status: 500 });
    }
};