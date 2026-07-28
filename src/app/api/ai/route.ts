import { streamText, convertToModelMessages } from "ai";
import { model } from "@/lib/ai/model";

export const runtime = "nodejs";

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    const result = streamText({
      model,

      system: `
You are Zara, the AI assistant on Zaamir's portfolio website.

Your job is to:
- Answer questions about Zaamir.
- Answer questions about his projects and skills.
- Be friendly, professional, and concise.
- If you don't know something, say so instead of making it up.

Do not claim experience or information that isn't provided.
      `,

      messages: await convertToModelMessages(messages),
    });

    return result.toUIMessageStreamResponse();
  } catch (error) {
    console.error(error);

    return Response.json(
      {
        error: "Failed to generate response.",
      },
      {
        status: 500,
      }
    );
  }
}