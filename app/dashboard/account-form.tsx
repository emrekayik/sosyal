'use client'
import { useCallback, useEffect, useState } from 'react'
import { Database } from '@/database.types'
import { Session, createClientComponentClient } from '@supabase/auth-helpers-nextjs'

export default function AccountForm({ session }: { session: Session | null }) {
    const supabase = createClientComponentClient<Database>()
    const [loading, setLoading] = useState(true)
    const [fullname, setFullname] = useState<string | null>(null)
    const [username, setUsername] = useState<string | null>(null)
    const [website, setWebsite] = useState<string | null>(null)
    const user = session?.user

    const getProfile = useCallback(async () => {
        try {
            setLoading(true)

            let { data, error, status } = await supabase
                .from('profiles')
                .select(`full_name, username, website`)
                .eq('id', user?.id)
                .single()

            if (error && status !== 406) {
                throw error
            }

            if (data) {
                setFullname(data.full_name)
                setUsername(data.username)
                setWebsite(data.website)
            }
        } catch (error) {
            alert('Error loading user data!')
        } finally {
            setLoading(false)
        }
    }, [user, supabase])

    useEffect(() => {
        getProfile()
    }, [user, getProfile])

    async function updateProfile({
        username,
        website,
    }: {
        username: string | null
        fullname: string | null
        website: string | null
    }) {
        try {
            setLoading(true)

            let { error } = await supabase.from('profiles').upsert({
                id: user?.id as string,
                full_name: fullname,
                username,
                website,
                updated_at: new Date().toISOString(),
            })
            if (error) throw error
            //alert('Profile updated!')
            Alert()
        } catch (error) {
            alert('Error updating the data!')
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className='flex flex-col justify-center items-center'>
            <div className="form-control w-full max-w-xs">
                <label htmlFor="email">Email</label>
                <input id="email" type="text" value={session?.user.email} className="input input-bordered w-full max-w-xs" disabled />
            </div>
            <div className="form-control w-full max-w-xs">
                <label className="label" htmlFor="fullName">
                    <span className="label-text">
                        Full Name
                    </span>
                </label>
                <input
                    id="fullName"
                    type="text"
                    value={fullname || ''}
                    onChange={(e) => setFullname(e.target.value)}
                    className="input input-bordered w-full max-w-xs"
                />
            </div>
            <div className="form-control w-full max-w-xs">
                <label className="label" htmlFor="username">
                    <span className="label-text">
                        Username
                    </span>
                </label>
                <input
                    id="username"
                    type="text"
                    value={username || ''}
                    onChange={(e) => setUsername(e.target.value)}
                    className="input input-bordered w-full max-w-xs"
                />
            </div>

            <div className="form-control w-full max-w-xs m-2 space-y-2">
                <button
                    className="btn btn-primary text-white w-full max-w-xs"
                    onClick={() => updateProfile({ fullname, username, website })}
                    disabled={loading}
                >
                    {loading ? 'Loading ...' : 'Update'}
                </button>

                <form className="btn btn-outline btn-error group" action="/auth/signout" method="post">
                    <button className="group-hover:text-white" type="submit">
                        Sign out
                    </button>
                </form>
            </div>
        </div>
    )
}
function Alert() {
    return (
        <div className="alert alert-info">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-current shrink-0 w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            <span>Profil güncellendi</span>
        </div>
    )
}