import { edenTreaty } from '@elysiajs/eden'
import type { App } from '../server' // Make sure this path is correct

export const client = edenTreaty<App>('http://localhost:3000') // Replace with your API URL
