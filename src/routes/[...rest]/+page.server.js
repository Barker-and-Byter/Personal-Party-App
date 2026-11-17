import { redirect } from '@sveltejs/kit';

export function load({ url }) {
	//allow for font loads
	if (url.pathname.startsWith('/fonts') || url.pathname.endsWith('.otf')) {
		return;
	}

	//redirect back to the home page in all other cases
	redirect(307, '/Home');
}
