import { content } from './content-bar';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function RenderRedirections() {
    const slug = usePathname();

    if (!slug) {
        return null;
    }

    const links = Object.entries(content).map((obj) => {
        let name = obj[1].name;
        let slugObject = obj[1].slug;

        return (
            <Link
                key={slugObject}
                href={slugObject}
                id={slugObject}
                className={slug.includes('/' + slugObject) ? 'text-stone-900 font-semibold' : ''}
            >
                {name}
        </Link>
        );
    });

    return <div className='flex text-xs text-stone-500 capitalize gap-4 content-center flex-wrap'>{links}</div>;
}