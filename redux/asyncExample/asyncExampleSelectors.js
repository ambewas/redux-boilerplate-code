import { createSelector } from "reselect";
import { pathOr } from "ramda";

const dataSelector = state => {
	return pathOr("nothing", ["asyncExample", "exampleData", "data", "title"], state);
};

export const loadingSelector = state => state.asyncExample.isLoading;

// create memoized selector
export const getAsyncExample = createSelector(
	dataSelector,
	(data) => {
		// do things with the data here, such as transform things.
		// these operations will be memoized, so do all sorts of calculations here instead of in your component
		if (data === "nothing") {
			return data;
		}

		return data.toUpperCase();
	}
);
