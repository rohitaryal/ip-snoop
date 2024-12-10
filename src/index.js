const { custom_error } = require("./util/error");
const { get_details_nord } = require("./util/nord");
const { get_details_ipapi } = require("./util/ipapi");
const { get_details_ipinfo } = require("./util/ipinfo");
const { get_details_ifconfig } = require("./util/ifconfig");
const { get_details_cloudflare } = require("./util/cloudflare");

const ALLOWED_METHODS = ["GET", "OPTIONS"];

export default {
	async fetch(request) {
		if (!ALLOWED_METHODS.includes(request.method)) {
			return custom_error(
				405,
				"METHOD NOT ALLOWED: " + request.method,
			);
		}

		if (request.method == "OPTIONS") {
			return new Response(null, {
				"headers": {
					"Access-Control-Allow-Origin": "*",
					"Access-Control-Allow-Methods": ALLOWED_METHODS.join(", "),
				},
				"status": 200,
				"statusText": "OK",
			});
		}

		let url = new URL(request.url);
		let { pathname, searchParams } = url;

		let param_ip = searchParams.get("ip");
		let header_ip = request.headers.get("CF-Connecting-IP");

		// If no IP is provided in parameter 
		// then use ip from request origin
		let ip_addr = param_ip ?? header_ip;

		switch (pathname) {
			case "/":
				return new Response("PLEASE DO NOT REDEEM");

			case "/nord":
				return get_details_nord(ip_addr);

			case "/ipapi":
				return get_details_ipapi(ip_addr);

			case "/ipinfo":
				return get_details_ipinfo(ip_addr);

			case "/ifconfig":
				if (param_ip)
					return custom_error(404, "CUSTOM IP NOT SUPPORTED FOR IFCONFIG",)
				else
					return get_details_ifconfig();

			case "/cloudflare":
			case "/cf":
				if (param_ip)
					return custom_error(404, "CUSTOM IP NOT SUPPORTED FOR CLOUDFLARE",)
				else
					return get_details_cloudflare(request.cf);

			default:
				return custom_error(
					404,
					"NOT FOUND: " + pathname
				);

		}
	}
}