'use server'

import { User } from '@nhost/nhost-js/auth'
import Image from 'next/image'

import { Button } from '@/components/ui/button'
import { createNhostClient } from '@/lib/nhost/server'

import UserTabsContainer from './components/user-tabs-container'

export default async function ProfilePage() {
    const nhost = await createNhostClient()
    const session = nhost.getUserSession()
    const user = session?.user

    if (!user) return null

    const backgroundUrl = null

    return (
        <>
            <div className="relative w-full h-[50vh] overflow-hidden">
                {backgroundUrl ? (
                    <Image
                        src={backgroundUrl}
                        alt="User Background"
                        sizes="100%"
                        fill
                        className="object-cover bg-muted"
                        loading="eager"
                        priority
                    />
                ) : (
                    <div className="bg-muted size-full" />
                )}

                {/* Fade overlay */}
                <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-background to-transparent" />
            </div>
            <section className="mx-auto my-4 max-w-7xl p-5 space-y-6">
                <div className="flex flex-row items-end justify-center gap-4 md:items-start md:justify-start">
                    {/* User Avatar */}
                    <aside className="-mt-20 lg:-mt-32 w-2/5 md:w-3/12 shrink-0">
                        <div className="relative aspect-square">
                            <Image
                                src={user.avatarUrl + '&s=512'}
                                alt="User Avatar"
                                sizes="100%"
                                fill
                                className="object-cover bg-muted rounded-md border"
                                loading="eager"
                            />
                        </div>
                    </aside>

                    {/* User Info - Desktop Only */}
                    <div className="hidden md:block">
                        <UserInfo user={user} />
                    </div>
                </div>

                {/* User Info - Mobile Only */}
                <div className="flex justify-center items-center md:hidden">
                    <div className="block">
                        <UserInfo user={user} />
                    </div>
                </div>

                {/* Tabs */}
                <UserTabsContainer />
            </section>
        </>
    )
}

const UserInfo = ({ user }: { user: User }) => {
    return (
        <>
            <span>Member since {user.createdAt}</span>
            <div className="flex flex-row items-center justify-between gap-2">
                <h1>{user.displayName}</h1>
                <Button>Edit Profile</Button>
            </div>
            <div className="flex flex-row items-center justify-between gap-2">
                <span>0 followers</span>
            </div>
        </>
    )
}
