"use client";

import { useState } from "react";
import { Bot } from "lucide-react";
import { useChat } from "@ai-sdk/react";
import { DefaultChatTransport } from "ai";

import ZaraButton from "./ZaraButton";
import MessageList from "./MessageList";
import ChatInput from "./ChatInput";

export default function ZaraChat() {
    const [open, setOpen] = useState(false);
    const [input, setInput] = useState("");

    const {
        messages,
        sendMessage,
        status,
        error,
    } = useChat({
        transport: new DefaultChatTransport({
            api: "/api/ai",
        }),
    });

    const loading =
        status === "submitted" ||
        status === "streaming";

    const handleSend = async () => {
        if (!input.trim()) return;

        await sendMessage({
            text: input,
        });

        setInput("");
    };

    return (
        <>
            <ZaraButton
                open={open}
                onToggle={() => setOpen((prev) => !prev)}
            />

            {open && (
                <div className="fixed bottom-28 right-6 z-[9998] flex h-[650px] w-[380px] flex-col overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-950 shadow-2xl">
                    {/* Header */}
                    <div className="flex items-center gap-3 border-b border-zinc-800 p-5">
                        <div className="rounded-xl bg-violet-600 p-2">
                            <Bot className="h-5 w-5 text-white" />
                        </div>

                        <div>
                            <h2 className="font-semibold text-white">
                                Zara AI
                            </h2>

                            <p className="text-xs text-zinc-400">
                                Your Portfolio Assistant
                            </p>
                        </div>
                    </div>

                    <MessageList
                        messages={messages
                            .filter((message) => message.role !== "system")
                            .map((message) => ({
                                id: message.id,
                                role: message.role as "user" | "assistant",
                                content:
                                    message.parts
                                        ?.filter((part) => part.type === "text")
                                        .map((part) => part.text)
                                        .join("") ?? "",
                            }))}
                        loading={loading}
                    />

                    <ChatInput
                        input={input}
                        onChange={(e) => setInput(e.target.value)}
                        onSubmit={handleSend}
                        loading={loading}
                    />
                </div>
            )}

            {error && (
                <div className="fixed bottom-6 left-6 rounded-lg bg-red-600 px-3 py-2 text-sm text-white">
                    {error.message}
                </div>
            )}
        </>
    );
}