import {usePuterStore} from "~/lib/puter";
import {useEffect} from "react";
import {useLocation, useNavigate} from "react-router";

export const meta = () => ([
    { title: 'Resumind | Auth' },
    { name: 'description', content: 'Log into your account' },
])

const Auth = () => {
    const { isLoading, auth } = usePuterStore();
    const location = useLocation();
    const next = location.search.split('next=')[1];
    const navigate = useNavigate();

    useEffect(() => {
        if(auth.isAuthenticated) navigate(next);
    }, [auth.isAuthenticated, next])

    

    return (
        <main className="bg-[url('/images/bg-auth.svg')] bg-cover min-h-screen flex items-center justify-center">
            <div className="gradient-border shadow-lg">
            <section className="flex flex-col gap-8 bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 rounded-2xl p-10 relative z-10 text-black">

                    <div className="flex flex-col items-center gap-2 text-center">
                        <h1>Welcome to AIRAA</h1>
                        <h3>Log In to Continue Your Job Journey</h3>
                    </div>
                    <div>
                        {isLoading ? (
                            // <div className="w-40 h-20 bg-blue-500 rounded-t-full">
                            <button className="auth-button   animate-pulse">
                                <p>Signing you in...</p>
                            </button>
                            // </div>
                        ) : (
                            <>
                                {auth.isAuthenticated ? (
                                    <button className="auth-button" onClick={auth.signOut}>
                                        <p>Log Out</p>
                                    </button>
                                ) : (
                                    <button className="auth-button" onClick={auth.signIn}>
                                        <p>Log In</p>
                                    </button>
                                )}
                            </>
                        )}
                    </div>
                </section>
            </div>
        </main>
    )
}

export default Auth