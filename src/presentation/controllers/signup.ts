/* eslint-disable @typescript-eslint/indent */
import { HttpRequest, HttpResponse } from '../protocols/http'
import { MissingParamError } from '../errors/missing-param-error'
import { badRequest } from '../helpers/http-helper'
export class SignUpController {
    handle(httpRequest: HttpRequest): HttpResponse {
        const requiredFields = ['email', 'name', 'password']
        for (const field of requiredFields) {
            if (!httpRequest.body[field]) {
                return badRequest(new MissingParamError(field))
            }
        }
    }
}
