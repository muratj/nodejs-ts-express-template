export const helloWorld = () => {
	return { greetings: 'Hello, World!!!' };
};

export const greetUser = (name: string) => {
	return { greetings: `Hello, ${name}!!!` };
};
