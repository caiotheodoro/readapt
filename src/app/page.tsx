import { elysia } from "@/elysia/client";
import ReadaptLandingPage from '@/src/components/pages/landing';

export default async function Home() {
  const { data, error } = await elysia.api.message.index.get()

  // You may wrap it with "server actions"
  // const {data, error} = await getWelcomingMessage()
  
  return <ReadaptLandingPage />;
}
