const { get_response } = require("./response");

async function get_details() {
    let base_addr = "http://ifconfig.me/all.json";

    return get_response(base_addr);
}

export { get_details as get_details_ifconfig };