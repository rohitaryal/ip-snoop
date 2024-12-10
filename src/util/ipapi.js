const { get_response } = require("./response");

async function get_details(ip_addr) {
    const base_url = `https://ipapi.co/${ip_addr}/json/?key=6tfpqRLu069K1yVtQOH7tzuingBfeXg4YTbF6orN9CVu6ec9v4`;

    let response = await get_response(base_url);

    return response;
}

export { get_details as get_details_ipapi };