import connect from "../../../util/db";
import Order from "../../../models/Order";
import { NextResponse } from "next/server";

export const GET = async (request) => {


    try {
        await connect();
        const orders = await Order.find();
        return new NextResponse(JSON.stringify(orders), { status: 200 });

    } catch (err) {
        console.log(err)
        return new NextResponse("Database Error ", { status: 500 });

    }

};



export const POST = async (request) => {
    const body = await request.json();

    const orders = new Order(body);

    try {
        await connect();

        await orders.save();

        return new NextResponse("Post has been created", { status: 201 });
    } catch (err) {
        console.log(err);
        return new NextResponse("not good, Database Error ", { status: 500 });

    }
};

