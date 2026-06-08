import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
    try {
        const { name, email, subject, message } =
            await request.json();

        if (!name || !email || !subject || !message) {
            return NextResponse.json(
                { error: "All fields are required" },
                { status: 400 }
            );
        }

        await resend.emails.send({
            from: "Portfolio Contact <onboarding@resend.dev>",
            to: ["shaikhzaamir04@gmail.com"],
            replyTo: email,
            subject: `Portfolio Inquiry • ${subject}`,
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 700px;">
                    <h2>New Portfolio Inquiry</h2>

                    <p><strong>Name:</strong> ${name}</p>
                    <p><strong>Email:</strong> ${email}</p>
                    <p><strong>Subject:</strong> ${subject}</p>

                    <hr />

                    <p style="white-space: pre-wrap;">
                        ${message}
                    </p>
                </div>
            `,
        });

        return NextResponse.json({
            success: true,
        });
    } catch (error) {
        console.error(error);

        return NextResponse.json(
            {
                success: false,
                error: "Failed to send email",
            },
            { status: 500 }
        );
    }
}