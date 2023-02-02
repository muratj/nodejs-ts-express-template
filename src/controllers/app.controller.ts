import { Request, Response } from 'express';
import { greetUser, helloWorld } from '../services/app.service';

export const greet = (req: Request, res: Response) => {
	const name = req.params.name;
	const greetings = !name ? helloWorld() : greetUser(name);

	res.json(greetings);
};
