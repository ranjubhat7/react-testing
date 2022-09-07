//From react version 17 importing React in all component is not necessary
type Greetprops = {
	name?: string;
};

export const Greet = (props: Greetprops) => {
	return <div>Hello {props.name}</div>;
};
