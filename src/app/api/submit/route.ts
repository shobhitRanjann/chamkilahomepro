// app/api/submit/route.ts

import { google } from "googleapis";
import { NextResponse } from "next/server";

type SheetForm = {
  servicetype: string;
  email: string;
  phone: string;
  address: string;
  serviceDate: string;
  betweentimeone: string;
  betweentimetwo: string;
  extracomment: string;
};

export async function POST(req: Request) {
  const body = await req.json() as SheetForm;

  if (!body) {
    return NextResponse.json({ message: "Invalid data" }, { status: 400 });
  }

  try {
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
      },
      scopes: [
        'https://www.googleapis.com/auth/drive',
        'https://www.googleapis.com/auth/drive.file',
        'https://www.googleapis.com/auth/spreadsheets',
      ],
    });

    const sheets = google.sheets({
      auth,
      version: 'v4',
    });

    const response = await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: 'A1:H1',
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [
          [
            body.servicetype,
            body.email,
            body.phone,
            body.address,
            body.serviceDate,
            body.betweentimeone,
            body.betweentimetwo,
            body.extracomment,
            new Date(Date.now()).toLocaleString()
          ],
        ],
      },
    });

    return NextResponse.json({ data: response.data });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ message: "Something went wrong" }, { status: 500 });
  }
}
