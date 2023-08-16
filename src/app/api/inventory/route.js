
import { NextResponse } from "next/server";
import connect from "../../../util/db";
import Inventory from "../../../models/Inventory";



export const GET = async (request) => {
    const url = new URL(request.url);

    const username = url.searchParams.get("username");

    try {
        await connect();

        const inventory = await Inventory.find();

        return new NextResponse(JSON.stringify(inventory), { status: 200 });

    } catch (err) {
        console.log(err)
        return new NextResponse("Database Error ", { status: 500 });

    }

};


export const POST = async (request) => {
    const body = await request.json();

    const newInventory = new Inventory(body);

    try {
        await connect();

        await newInventory.save();

        return new NextResponse("Post has been created", { status: 201 });
    } catch (err) {
        console.log(err);
        return new NextResponse("Oh no!, Database Error ", { status: 500 });

    }
};

