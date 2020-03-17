initSidebarItems({"enum":[["HTTPMethod","`HTTPMethod` is an enum containing all HTTP request methods."],["HTTPObject","Enum returned by `check_if_request_or_response` to return the `HTTPRequest` or `HTTPResponse`."]],"fn":[["check_if_request_or_response","Returns an `HTTPObject` containing either a `Request(HTTPRequest)` if the slice passed matches an `HTTPRequest`, `Response(HTTPResponse)` if the slice passed matches an `HTTPResponse`, or `Neither` if both checks fail. "],["string_to_hash_map","Allows you to convert a `String` into a `HashMap` with keys and values separated by colons (`:`) and sets separated by either a new line or a carriage return then a new line. This function should not panic. # Examples The call: `rust # use http_utils::string_to_hash_map; string_to_hash_map(\"Host: 127.0.0.1:8888\\nContent-Type: text/html\".to_string()); ` The return: `json HashMap {     Host: \"127.0.0.1:8888\",     Content-Type: \"text/html\" } `"]],"struct":[["HTTPRequest","`HTTPRequest` is a struct containing an HTTP request."],["HTTPResponse","`HTTPResponse` is a struct containing an HTTP response."],["MalformedHTTPRequestException","`MalformedHTTPRequestException` is used by `HTTPRequest` to return an error."],["MalformedHTTPResponseException","`MalformedHTTPResponseException` is used by `HTTPResponse` to return an error."]],"trait":[["ToHTTPMethod","`ToHTTPMethod` is a trait used to generalize objects that can be converted into an `HTTPMethod`."]]});