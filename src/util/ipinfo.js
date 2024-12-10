const { get_response } = require("./response");

async function get_details(ip_addr) {
    const base_url = `https://ipinfo.info/ip_api.php?ip=${ip_addr}`;

    return get_response(base_url);
}

export { get_details as get_details_ipinfo }