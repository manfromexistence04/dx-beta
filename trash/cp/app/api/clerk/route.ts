// import { WebhookEvent } from '@clerk/nextjs/server'

// export async function POST(request: Request) {
//   const payload: WebhookEvent = await request.json()
//   console.log(payload)
// }

// export async function GET() {
//   return Response.json({ message: 'Hello World!' })
// }
import { WebhookEvent } from '@clerk/nextjs/server'

export async function POST(request: Request) {
  try {
    const payload: WebhookEvent = await request.json()
    console.log(payload)

    // process the event

    // everything went well
    return Response.json({ message: 'Received' })
  } catch (e) {
    // something went wrong
    // no changes were made to the database
    return Response.error()
  }
}

export async function GET() {
  return Response.json({ message: 'Hello World!' })
}