import connectMongoDB from "@/libs/mongodb"
import Topic from "@/models/topic"
import { NextResponse } from "next/server"

// insert method

export async function POST(request){

    const {title, description} = await request.json()
    await connectMongoDB()
    await Topic.create({title, description})


    return NextResponse.json({message: "Topic Created"}, {status: 201})
}


// get method

export async function GET (){
    await connectMongoDB();
    const topics = await Topic.find();
    return NextResponse.json({topics})

}


// delete method


export async function DELETE (request){
    const id = request.nextUrl.searchParams.get("id");
    await connectMongoDB();
    await Topic.findByIdAndDelete(id);

    return NextResponse.json({message: "Topic deleted"}, {status: 200})
}
