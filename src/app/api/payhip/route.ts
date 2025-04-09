import { NextResponse } from 'next/server';
import { z } from 'zod';

const schema = z.object({
  planId: z.string().min(1),
});

export async function POST(request: Request) {
  const PAYHIP_API_KEY = process.env.PAYHIP_API_KEY;
  if (!PAYHIP_API_KEY) {
    console.error('Payhip API Key is missing');
    return NextResponse.json(
      { error: 'Server configuration error' },
      { status: 500 }
    );
  }
  console.log('Payhip API Key found');

  try {
    const body = await request.json();
    const validation = schema.safeParse(body);
    if (!validation.success) {
      console.error('Request validation failed:', validation.error);
      return NextResponse.json(
        { error: 'Invalid request data' },
        { status: 400 }
      );
    }
    console.log('Request validation successful');

    const { planId } = validation.data;
    const response = await fetch(`https://payhip.com/api/v1/checkout`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${PAYHIP_API_KEY}`,
      },
      body: JSON.stringify({
        product_id: planId,
        return_url: `${process.env.NEXT_PUBLIC_BASE_URL}/pricing`,
        cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/pricing`,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('Payhip API error:', {
        status: response.status,
        error: errorData
      });
      console.log('Payhip API request details:', {
        url: `https://payhip.com/api/v1/checkout`,
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${PAYHIP_API_KEY}`
        }
      });
      throw new Error(`Payment processing failed: ${errorData.message || 'Unknown error'}`);
    }
    console.log('Payhip API request successful');

    const data = await response.json();
    console.log('Payhip API response:', data);
    return NextResponse.json({ checkoutUrl: data.url });
  } catch (error) {
    console.error('Payhip error:', error);
    return NextResponse.json(
      { error: 'Payment processing failed' },
      { status: 500 }
    );
  }
}