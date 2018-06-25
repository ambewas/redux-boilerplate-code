const getAsyncActionTypes = (name) => {
	return Object.freeze({
		[name]: `${name}`,
		[`${name}_RESOLVED`]: `${name}_RESOLVED`,
		[`${name}_PENDING`]: `${name}_PENDING`,
		[`${name}_REJECTED`]: `${name}_REJECTED`,
	});
};

export default getAsyncActionTypes;
