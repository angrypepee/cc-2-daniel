// pages/api/getUserData.ts

import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        const response = await fetch('https://randomuser.me/api/?results=5', {
        method: 'GET',
        });

        if (!response.ok) {
        throw new Error(`Failed to fetch data: ${response.statusText}`);
        }

        const data = await response.json();
        res.status(200).json(data); // Send fetched data as JSON
    } catch (error) {
        if (error instanceof Error) {
        res.status(500).json({ error: error.message }); // Send more detailed error
        } else {
        res.status(500).json({ error: 'An unknown error occurred' });
        }
    }
}