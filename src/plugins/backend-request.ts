import { API_URL } from '../utils/constants'
import axios, { AxiosResponse } from 'axios'
import http from 'http'

export const AXIOS_CONFIG = {
	baseURL: API_URL,
	timeout: 0,
	httpAgent: new http.Agent({keepAlive: true}),
}

const BackendRequest = function ({
	method,
	url,
	data = undefined,
	params = undefined,
}) {
	this.config = {
		method,
		data,
		params,
		url,
		...AXIOS_CONFIG,
	}
	this.handler = axios.create()
}

BackendRequest.prototype.exec = function (): Promise<AxiosResponse> {
	return this.handler.request(this.config)
}

export default BackendRequest