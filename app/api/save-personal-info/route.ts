import { NextRequest, NextResponse } from 'next/server';
import { google } from 'googleapis';

export async function POST(request: NextRequest) {
  try {
    // 환경변수 값 콘솔 출력 (디버깅용)
    console.log('GOOGLE_SERVICE_ACCOUNT_EMAIL:', process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL);
    console.log('GOOGLE_PRIVATE_KEY:', process.env.GOOGLE_PRIVATE_KEY ? '[HIDDEN]' : undefined);
    console.log('GOOGLE_SHEET_ID:', process.env.GOOGLE_SHEET_ID);

    // 환경변수 누락 시 에러 반환
    if (!process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL || !process.env.GOOGLE_PRIVATE_KEY || !process.env.GOOGLE_SHEET_ID) {
      return NextResponse.json(
        { error: '서버 환경변수가 누락되었습니다. 관리자에게 문의하세요.' },
        { status: 500 }
      );
    }

    const body = await request.json();
    const { name, birthDate, phone, medications, medicalHistory, currentConditions } = body;

    // 필수 필드 검증
    if (!name || !birthDate || !phone) {
      return NextResponse.json(
        { error: '필수 정보가 누락되었습니다.' },
        { status: 400 }
      );
    }

    // 구글 시트 인증
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
      },
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    const sheets = google.sheets({ version: 'v4', auth });
    const spreadsheetId = process.env.GOOGLE_SHEET_ID;

    // 시트에 저장할 데이터
    const values = [
      [
        name,
        birthDate,
        phone,
        medications || '',
        medicalHistory || '',
        currentConditions || '',
        new Date().toISOString(),
        request.headers.get('x-forwarded-for') || request.ip || 'unknown',
        request.headers.get('user-agent') || 'unknown',
      ],
    ];

    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: 'HHBTI!A1', // 시트 이름 고정
      valueInputOption: 'USER_ENTERED',
      requestBody: { values },
    });

    return NextResponse.json({ success: true }); // 응답 필드 수정
  } catch (error) {
    console.error('구글 시트 저장 중 오류:', error);
    return NextResponse.json(
      { error: '서버 오류가 발생했습니다. 잠시 후 다시 시도해주세요.' },
      { status: 500 }
    );
  }
} 