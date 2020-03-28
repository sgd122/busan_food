const homePort = "8000";
let dev_url = "http://13.209.3.103:8001/";
let url = ""
if (
    window.location.href.indexOf("localhost") > -1 ||
    window.location.href.indexOf("127.0.0.1") > -1
) {
    url = "http://localhost:8001/";
} else {
    url = dev_url;
}
export const BASE_URL = url;