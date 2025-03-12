'use client'

import RenderRedirections from "./render-redirections";
import RenderEssencials from "./render-essencials";

import Image from 'next/image';
import Link from 'next/link';

export default function BarNavigation() {
    return (
        <div className="flex mx-4 my-2 justify-between flex-wrap">
            <div
                className="flex"
            >
                <Link
                    href='/'
                >
                    <Image
                        src='/logo.svg'
                        alt="logo da apple"
                        width={35}
                        height={35}
                        className="mx-8"
                    />
                </Link>

                <RenderRedirections/>
            </div>
            <div
                className="flex justify-center"
            >
                <RenderEssencials/>
            </div>   
        </div>
    );
}