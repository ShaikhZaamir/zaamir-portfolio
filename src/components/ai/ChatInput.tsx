"use client";

import { Send } from "lucide-react";

interface Props {
    input: string;
    onChange: (
        e: React.ChangeEvent<HTMLInputElement>
    ) => void;
    onSubmit: () => void;
    loading: boolean;
}

export default function ChatInput({
    input,
    onChange,
    onSubmit,
    loading,
}: Props) {
    return (
        <form
            onSubmit={(e) => {
                e.preventDefault();
                onSubmit();
            }}
            className="border-t border-zinc-800 p-4"
        >
            <div className="flex gap-2">
                <input
                    value={input}
                    onChange={onChange}
                    placeholder="Ask Zara..."
                    className="flex-1 rounded-xl border border-zinc-700 bg-zinc-900 px-4 py-3 text-sm text-white outline-none focus:border-violet-500"
                />

                <button
                    type="submit"
                    disabled={loading || !input.trim()}
                    className="rounded-xl bg-violet-600 px-4 text-white transition hover:bg-violet-700 disabled:opacity-50"
                >
                    <Send size={18} />
                </button>
            </div>
        </form>
    );
}