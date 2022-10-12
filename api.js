export class Api{
    static baseUrl = "http://rpgapi.vercel.app/api/"
    static token = localStorage.getItem('token')
    static header = {"Content-Type": "application/json",}
    static async reqBody(body, request){
        const response = await fetch(`${this.baseUrl}${request}`,{
            method: "POST",
            headers:this.header,
            body: JSON.stringify(body)
        })
        .then(resp => resp)
        .then(resp => resp.json())
        .catch(err => err)
        return response
    }
    static async reqGet(request){
        const response = await fetch(`${this.baseUrl}/${request}`,{
            method: "GET",
            headers:this.header
        })
        .then(resp => resp)
        .then(resp => resp.json())
        .catch(err => err)
        return response
    }
}