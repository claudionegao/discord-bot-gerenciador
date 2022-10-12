import { Api } from "./api.js";
const body = {
	"username":"minerva",
	"password":"gih"
}
console.log(await Api.reqBody(body,"login"))