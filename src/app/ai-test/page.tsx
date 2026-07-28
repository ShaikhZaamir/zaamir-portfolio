"use client";

import { useChat } from "@ai-sdk/react";
import { useState } from "react";

export default function AITestPage() {
  const [input, setInput] = useState("");

  const { messages, sendMessage, status } = useChat();

  return (
    <main className="mx-auto flex max-w-3xl flex-col gap-6 p-8">
      <h1 className="text-3xl font-bold">Zara AI Test</h1>

      <div className="border rounded-lg p-4 h-[500px] overflow-y-auto space-y-4">
        {messages.map((message) => (
          <div key={message.id}>
            <strong>
              {message.role === "user" ? "You" : "Zara"}
            </strong>

            <div>
              {message.parts.map((part, index) => {
                if (part.type === "text") {
                  return <p key={index}>{part.text}</p>;
                }

                return null;
              })}
            </div>
          </div>
        ))}
      </div>

      <form
        onSubmit={(e) => {
          e.preventDefault();

          if (!input.trim()) return;

          sendMessage({
            text: input,
          });

          setInput("");
        }}
        className="flex gap-3"
      >
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask Zara something..."
          className="flex-1 rounded-md border px-4 py-2"
        />

        <button
          disabled={status !== "ready"}
          className="rounded-md bg-black px-5 py-2 text-white disabled:opacity-50"
        >
          Send
        </button>
      </form>
    </main>
  );
}