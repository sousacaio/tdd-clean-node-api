/* eslint-disable @typescript-eslint/indent */
export class SignUpController {
    handle (httpRequest: any): any {
        if (!httpRequest.body.name) {
            return {
                statusCode: 400,
                body: new Error('Missing param: name')
            }
        }
        if (!httpRequest.body.email) {
            return {
                statusCode: 400,
                email: new Error('Missing param: name')
            }
        }
    }
}
