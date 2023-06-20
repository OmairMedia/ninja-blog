import Image from 'next/image'
import {options} from "app/api/auth/[...nextauth]/route.js"
import {getServerSession} from "next-auth/next"


export default async function Home() {
  const session = await getServerSession(options)
  console.log(session?.user)

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
       <h2>From App Directory</h2>
    </main>
  )
}
