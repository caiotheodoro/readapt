"use server"

import { elysia } from "@/src/services/elysia/client"

export const getWelcomingMessage = async () => {
    const { data, error } = await elysia.api.message.index.get()
    return { data, error }
}

export const getMessages = async (locale: string) => {
    const messages = await import(`@/src/messages/${locale}.json`);
    return messages.default;
}
