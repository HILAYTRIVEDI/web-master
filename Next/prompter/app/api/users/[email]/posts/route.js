import { connectToDB } from "@utils/database";
import Prompt from "@models/prompt";


export const GET = async (req, { params }) =>
{
    console.log(params);
    
    try
    {
        await connectToDB();
        const prompts = await Prompt.find({ creator: params.email });

        return new Response(JSON.stringify(prompts), {
            status: 200
        });

    } catch (error)
    {
        return new Response(JSON.stringify({ message: 'Error retrieving prompts' }), {
            status: 500
        });
    }
}