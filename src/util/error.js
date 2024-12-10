async function custom_error(status_code, status_text, message) {
    let content_type = "text/plain";

    if (typeof message == "object" && message != null) {
        message = JSON.stringify(message);
        content_type = "application/json";
    }

    return new Response(message || null, {
        "headers": {
            "Content-Type": content_type,
            "headers": {
                "Access-Control-Allow-Origin": "*",
            },
        },
        "status": status_code,
        "statusText": status_text?.toUpperCase(),
    });
}

export { custom_error };