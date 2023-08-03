
import { NextResponse } from "next/server";
import connect from "../../../util/db";
import Inventory from "../../../models/Inventory";



export const GET = async (request) => {


    try {
        await connect();
        const inventory = await Inventory.find();
        console.log(inventory);
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
        return new NextResponse("not good, Database Error ", { status: 500 });

    }
};

