import { connectToDB } from "@utils/database";
import Prompt from "@models/prompt";


export const GET = async (req) =>
{
    try{
        await connectToDB();
        const prompts = await Prompt.find({});

        return new Response(JSON.stringify(prompts), {
            status: 200
        });

    } catch(error){
        return new Response(JSON.stringify({ message: 'Error retrieving prompts' }), {
            status: 500
        });
    }
}