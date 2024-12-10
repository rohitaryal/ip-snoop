function get_details(request_cf) {
    request_cf = JSON.stringify(request_cf);

    return new Response(request_cf, {
        "headers": {
            "Content-Type": "application/json",
            "Response-From": "Ip-Snoop",
            "Access-Control-Allow-Origin": "*",
        }
    });
}

export { get_details as get_details_cloudflare }