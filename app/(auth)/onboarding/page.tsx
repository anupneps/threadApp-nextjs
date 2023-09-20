import AccountProfile from "@/components/forms/AccountProfile"
import { currentUser } from "@clerk/nextjs"

// interface Props {
//     userDetail: {
//         _id: number;
//         objectId: string;
//         username : string;
//         name: string;
//         bio: string; 
//         image: string;
//     };
//     btnTitle: string
// }

async function Page() {
    const user = await currentUser()

    const userInfo = {
        // _id: 1,
        // username: "@usertest",
        // name: "test",
        // bio: "testing testing testing",
        // image: "https://sm.ign.com/ign_nordic/cover/a/avatar-gen/avatar-generations_prsz.jpg"
    }

    const userData = {
        id: user?.id,
        objectId: userInfo?._id,
        username: userInfo?.username || user?.username,
        name:userInfo?.name || user?.firstName || " ",
        bio: userInfo?.bio || " ",
        image: userInfo?.image || user?.imageUrl 
    }

    return (
        <main className="mx-auto flex max-w-3xl flex-col justify-start pxx-10 py-20">
            <h1 className="head-text">Onboarding</h1>
            <p className="mt-3 text-base-regular text-light-2">Complete your profile now to use Thread </p>

            <section className="mt-9 bg-dark-4 p-10">
               <AccountProfile 
               user={userData} 
               btnTitle="Continue" />
            </section>
        </main>
    )
}

export default Page