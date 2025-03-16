import Image from 'next/image';

import { slug } from '@/config/definitions';

export default function StarReviews({ slug }: slug) {
    const available = {
        qnt: 4.9,
    }
    
    return (
        <div
                        className='flex gap-2'
                    >
                    {
                        slug ? (
                            [...Array(5)].map((value, index) => {
                                const st = index < Math.floor(available.qnt) ? 'opacity-100' : 'opacity-50';

                                return (
                                    <Image
                                        key={index}
                                        src='/star.svg'
                                        className={st}
                                        alt='extrela'
                                        width={20}
                                        height={20}
                                    />
                                );
                            })
                        ) : ''
                    }
                    <span>
                        (4,9) 1,2K Reviews
                    </span>
                    </div>
    );
}