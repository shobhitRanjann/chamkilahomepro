// app/api/submit/route.ts

import { google } from "googleapis";
import { NextResponse } from "next/server";

type SheetForm = {
    firstname: string;
    lastname: string;
    servicetype: string;
    emailid: string;
    phonenumber: string;
    message: string;
};

export async function POST(req: Request) {
  const body = await req.json() as SheetForm;
  console.log('bodydata   > ' ,body , ' {} time  {}  ',new Date(Date.now()).toLocaleString());

  //console.log('formdata  >  ',await req.json());
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
      spreadsheetId: process.env.GOOGLE_CONTACT_SHEET_ID,
      range: 'A1:G1',
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [
          [
            body.firstname,
            body.lastname,
            body.servicetype,
            body.emailid,
            body.phonenumber,
            body.message,
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
