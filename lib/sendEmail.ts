// /lib/sendEmail.ts
"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail({
  ime,
  email,
  telefon,
  poruka,
}: {
  ime: string;
  email: string;
  telefon: string;
  poruka: string;
}) {
  try {
    const result = await resend.emails.send({
      from: "Tipsy <tipsy@quaiweazor.resend.app>",
      to: "adrian.palcic@gmail.com",
      subject: `Nova poruka od ${ime}`,
      html: `
        <p><strong>Ime:</strong> ${ime}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Telefon:</strong> ${telefon}</p>
        <p><strong>Poruka:</strong> ${poruka}</p>
      `,
    });

    console.log(result);
    return { ok: true, result };
  } catch (error) {
    console.error("Resend error:", error);
    return { ok: false, error };
  }
}
