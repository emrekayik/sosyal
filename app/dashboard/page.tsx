import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { Database } from '@/database.types'
import AccountForm from './account-form'

export default async function Home() {
  const supabase = createServerComponentClient<Database>({ cookies })

  const {
    data: { session },
  } = await supabase.auth.getSession()

  return (
    <div>
      <div className="min-h-screen flex justify-center items-center">
        <div className="w-96 flex flex-col space-y-2 items-center">
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <div className="divider"></div>
          <AccountForm session={session} />
        </div>
      </div>
    </div>
  )
}
