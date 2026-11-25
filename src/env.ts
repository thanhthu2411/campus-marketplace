import { defineEnvVars } from '@sveltejs/kit/env';

export const variables = defineEnvVars({
	MONGO_URI: {},
    MONGO_DATABASE: {}
});