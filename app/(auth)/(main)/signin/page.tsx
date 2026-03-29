"use client";

import SignInWithGoogleButton from "@/components/SignInWithGoogleButton";

export default function SignIn() {
    return (
        <div className="flex-1 space-y-8 text-center lg:text-left order-2 lg:order-1">
            <h1
                className="
                font-semibold leading-tight tracking-tight
                text-[clamp(2.25rem,5.5vw,3.75rem)]
                lg:text-7xl xl:text-[3.75rem]
              "
            >
                Sign into Squawk
            </h1>

            <SignInWithGoogleButton />
            
        </div>
    );
}
