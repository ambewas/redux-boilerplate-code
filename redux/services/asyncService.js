import { axiosAPI } from "../../helpers";

function timeout(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
}

const getAsyncExample = async() => {
	// fake timeout for example purposes, to demonstrate loading states
	await timeout(1000);
	const result = await axiosAPI.get("https://jsonplaceholder.typicode.com/posts/1");

	return result;
};

export default {
	getAsyncExample,
};
