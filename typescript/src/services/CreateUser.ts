
// To createUser need name, email, password
// to type a variable you need to initialize then or make a type or this

interface TechObject {
			 title: string,
	experience: number
}

interface CreateUserData {
		 name?: string;
		 email: string;
	password: string;
		 techs: Array<string | TechObject>
}


export default function createUser({name, email, password}: CreateUserData){
	const user = {
		name,
		email,
		password
	}
	return user;
}