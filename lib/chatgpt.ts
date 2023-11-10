import OpenAIApi from "openai";

const openai: any = new OpenAIApi({ apiKey: process.env.OPENAI_API_KEY });



export default openai;
