import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  const { ime, email, telefon, poruka } = await req.json();

  try {
    console.log("Stigla Poruka: ", ime, email, telefon, poruka);
    await resend.emails.send({
      from: "tipsy@quaiweazor.resend.app",
      to: "adrian.palcic@gmail.com",
      subject: `nova poruka sa web stranice od ${ime}`,
      html: `<p><strong>Ime:</strong> ${ime}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Telefon:</strong> ${telefon}</p>
             <p><strong>Poruka:</strong> ${poruka}</p>`,
    });
    return NextResponse.json({ ok: true });
  } catch (error) {
    return NextResponse.json(
      { error: "Greška pri slanju poruke" },
      { status: 500 }
    );
  }
}
