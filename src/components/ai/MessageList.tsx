"use client";

import { useEffect, useRef } from "react";
import Message from "./Message";
import TypingIndicator from "./TypingIndicator";
import { ChatMessage } from "@/lib/ai/types";

interface Props {
    messages: ChatMessage[];
    loading: boolean;
}

export default function MessageList({
    messages,
    loading,
}: Props) {
    const bottomRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        bottomRef.current?.scrollIntoView({
            behavior: "smooth",
        });
    }, [messages, loading]);

    return (
        <div className="flex-1 space-y-4 overflow-y-auto p-4">

            {messages.length === 0 && (
                <div className="rounded-2xl bg-zinc-900 p-4 text-sm text-zinc-300">
                    👋 Hi! I'm Zara.

                    <br />
                    <br />

                    Ask me anything about Zaamir, his projects,
                    experience, or technical skills.
                </div>
            )}

            {messages.map((message) => (
                <Message
                    key={message.id}
                    role={message.role}
                    content={message.content}
                />
            ))}

            {loading && <TypingIndicator />}

            <div ref={bottomRef} />

        </div>
    );
}