import { connectToDB } from "@utils/database";
import Prompt from "@models/prompt";

export const POST = async (req) => {
    const { prompt, userId, tag } = await req.json();

    try{
        await connectToDB();

        const newPrompt = new Prompt({
            creator : userId,
            prompt,
            tag,
        });

        await newPrompt.save();


        return new Response(JSON.stringify({ message: 'Prompt created successfully' }), {
            status: 201
        });

    } catch(error){
        return new Response(JSON.stringify({ message: 'Error creating prompt' }), {
            status: 500
        });
    }
}