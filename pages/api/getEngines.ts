import type { NextApiRequest, NextApiResponse } from "next";
import openai from "../../lib/chatgpt";

type Option = {
    value: string;
    label: string;
};

type Data = {
    modelOptions?: Option[];
    error?: string; 
};

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    try {
        const response = await openai.models.list();
        const models = response.data; // Adjust based on the actual response structure

        const modelOptions: Option[] = models.map((model: any) => ({
            value: model.id, // Assuming 'id' is the correct field
            label: model.id,
        }));

        res.status(200).json({ modelOptions });
    } catch (error) {
        console.error("Error fetching models:", error);
        res.status(500).json({ error: 'An unkown error occured' });
    }
}
