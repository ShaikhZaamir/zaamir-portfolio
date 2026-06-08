interface ContainerProps {
    children: React.ReactNode;
    className?: string;
}

export default function Container({
    children,
    className = "",
}: ContainerProps) {
    return (
        <div
            className={`mx-auto w-full border border-white px-6 lg:px-8 ${className}`}
        >
            {children}
        </div>
    );
}