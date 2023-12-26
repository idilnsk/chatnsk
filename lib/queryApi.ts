import openai from "./chatgpt";

const query = async (prompt: string, chatId: string, model: string = "gpt-3.5-turbo") => {
  try {
    const res = await openai.chat.completions.create({
      model: model,
      messages: [{ role: "user", content: prompt }],
    });

    if (res && res.choices && res.choices.length > 0 && res.choices[0].message) {
      return { success: true, text: res.choices[0].message.content };
    } else {
      console.error("Unexpected response structure:", res);
      return { success: false, error: "Unexpected response structure" };
    }
  } catch (err: any) {
    console.error("Error in OpenAI API call:", err);
    return { success: false, error: `OpenAI Error: ${err.message}` };
  }
};


 export default query;