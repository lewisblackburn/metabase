import { Request, Response } from "express";

export default function handler(req: Request, res: Response) {
	try {
		return res.status(200).json({ status: 'ok' });
	} catch (error) {
		const message = error instanceof Error ? error.message : 'Unknown error';
		return res.status(500).json({ status: 'error', message });
	}
}
