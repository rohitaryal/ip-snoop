const { get_response } = require("./response");

async function get_details(ip_addr) {
	const base_url = `https://nordvpn.com/wp-admin/admin-ajax.php?action=get_user_info_data&ip=${ip_addr}`;

	let response = await get_response(base_url);

	return response;
}

export { get_details as get_details_nord };