import { response } from "express";
import { Request, Response } from 'express';
import CreateUser from './services/createUser';
import createUser from "./services/createUser";

export function helloWorld(request: Request, response: Response) {
	const user = createUser({
			name: 'Zeno', 
			email: 'zeno@zeno.com', 
			password: '123123',
			techs: [
				'Node.js',
				'React.js',
				{ title: 'Javascript' , experience: 100 },
			],
	});
	return response.json({ message: 'Hy Friend' });
}
