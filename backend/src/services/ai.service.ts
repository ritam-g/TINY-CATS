import ai from "../config/ai.config.ts";

async function main(prompt: string) {
    const response = await ai.models.generateContent({
        model: "gemini-3.5-flash",
        contents: prompt,
    });
    return response.text;
}

export default main