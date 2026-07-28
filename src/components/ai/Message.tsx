"use client";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface Props {
    role: "user" | "assistant";
    content: string;
}

export default function Message({
    role,
    content,
}: Props) {
    const isUser = role === "user";

    return (
        <div
            className={`max-w-[90%] rounded-2xl px-4 py-3 text-sm ${isUser
                    ? "ml-auto bg-violet-600 text-white"
                    : "bg-zinc-900 text-zinc-200"
                }`}
        >
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {content}
            </ReactMarkdown>
        </div>
    );
}