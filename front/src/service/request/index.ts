import { getServiceEnvConfig } from '~/.env-config'
import { createRequest } from './request'

const { url } = getServiceEnvConfig(import.meta.env)

export const request = createRequest({ baseURL: url, withCredentials: true })