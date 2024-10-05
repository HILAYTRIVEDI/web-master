import { connectToDB } from "@utils/database";
import Prompt from "@models/prompt";

// GET /api/prompt/:id
export const GET = async (req, { params }) =>
{
    try
    {
        await connectToDB();
        const prompt = await Prompt.findById(params.id);

        if (!prompt)
        {
            return new Response(JSON.stringify({ message: 'Prompt not found' }), {
                status: 404
            });
        }

        return new Response(JSON.stringify(prompt), {
            status: 200
        });

    } catch (error)
    {
        return new Response(JSON.stringify({ message: 'Error retrieving prompts' }), {
            status: 500
        });
    }
}

// PATCH /api/prompt/:id
export const PATCH = async (req, { params }) =>
{
    const { prompt, tag } = await req.json();
    try
    {
        await connectToDB();
        const existingPrompt = await Prompt.findById(params.id);

        if (!existingPrompt)
        {
            return new Response(JSON.stringify({ message: 'Prompt not found' }), {
                status: 404
            });
        }
        existingPrompt.prompt = prompt;
        existingPrompt.tag = tag;

        await existingPrompt.save();

        return new Response(JSON.stringify({ message: 'Prompt updated successfully' }), {
            status: 200
        });

    } catch (error)
    {
        return new Response(JSON.stringify({ message: 'Error updating prompt' }), {
            status: 500
        });
    }
}

// DELETE /api/prompt/:id
export const DELETE = async (req, { params }) =>
{
    try
    {
        await connectToDB();
        const prompt = await Prompt.findById(params.id);

        if (!prompt)
        {
            return new Response(JSON.stringify({ message: 'Prompt not found' }), {
                status: 404
            });
        }

        await prompt.remove();

        return new Response(JSON.stringify({ message: 'Prompt deleted successfully' }), {
            status: 200
        });

    } catch (error)
    {
        return new Response(JSON.stringify({ message: 'Error deleting prompt' }), {
            status: 500
        });
    }
}