'use client'
import { Auth } from '@supabase/auth-ui-react'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { Database } from '@/database.types'

export default function AuthForm() {
  const supabase = createClientComponentClient<Database>()

  return (
    <Auth
      supabaseClient={supabase}
      view="magic_link"
      appearance={{
        extend: false,
        className: {
          container: "w-full join join-vertical space-y-4 flex items-center",
          button: "btn btn-primary w-full max-w-xs",
          input: "input input-bordered w-full max-w-xs",
          label: "label label-text",
        },
      }}
      showLinks={false}
      providers={['google']}
      redirectTo="/auth/callback"
    />
  )
}