import { ChatMessage } from "./types";

export interface SendMessageResult {
    success: boolean;
    text?: string;
    error?: string;
}

export async function sendMessage(
    messages: ChatMessage[]
): Promise<SendMessageResult> {
    try {
        const response = await fetch("/api/ai", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                messages,
            }),
        });

        if (!response.ok) {
            return {
                success: false,
                error: "Request failed.",
            };
        }

        const text = await response.text();

        return {
            success: true,
            text,
        };
    } catch {
        return {
            success: false,
            error: "Unable to contact Zara AI.",
        };
    }
}