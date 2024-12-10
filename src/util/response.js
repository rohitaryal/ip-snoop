import { custom_error } from "./error";

async function get_response(url) {
    let response = await fetch(url);
    let response_body = undefined;
    let content_type = undefined;

    if (!response.ok) {
        return custom_error(
            504,
            "GATEWAY TIMEOUT" // Server couldn't reach another server in time
        );
    }

    if (response.headers.get("Content-Type")?.includes("application/json")) {
        response_body = JSON.stringify(await response.json());
        content_type = "application/json";
    } else {
        response_body = await response.text();
        content_type = "text/plain";
    }

    let new_response = new Response(response_body, {
        headers: {
            "Response-From": "Ip-Snoop",
            "Content-Type": content_type,
            "Access-Control-Allow-Origin": "*"
        },
    });

    return new_response;
}



export { get_response };