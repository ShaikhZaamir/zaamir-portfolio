export default function TypingIndicator() {
    return (
        <div className="w-fit rounded-2xl bg-zinc-900 px-4 py-3">
            <div className="flex gap-1">
                <span className="h-2 w-2 animate-bounce rounded-full bg-zinc-400" />
                <span className="h-2 w-2 animate-bounce rounded-full bg-zinc-400 [animation-delay:150ms]" />
                <span className="h-2 w-2 animate-bounce rounded-full bg-zinc-400 [animation-delay:300ms]" />
            </div>
        </div>
    );
}