import Image from 'next/image';

import { slug } from '@/config/definitions';

export default function DetailsProduct({ slug }: slug) {
    const available = {
        qnt: 4.9,
    }
    
    return (
        <div
                    className='px-8'
                >
                    <p
                        className='text-4xl'
                    >
                        Boa Fleece Jacket
                    </p>

                    <div
                        className='flex items-end my-4 gap-2'
                    >
                        <p
                            className='line-through text-stone-500'
                        >
                            $129.00
                        </p>
                        <div
                            className='flex items-center gap-2'
                        >
                            <h4
                                className='text-4xl font-semibold'
                            >
                                $122.00
                            </h4>

                            <span
                                className='rounded-md bg-black text-white px-2 py-1 text-sm'
                            >
                                {100 - Math.round((122/129)*100)}% Desc
                            </span>
                        </div>
                    </div>

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
                </div>
    );
}