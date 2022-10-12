import { Api } from "./api.js";
const body = {
	"username":"minerva",
	"password":"gih"
}
async function login(){
    const resp = await Api.reqBody(body,"login")
    console.log(resp)
}
login()