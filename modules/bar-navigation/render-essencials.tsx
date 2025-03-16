import Image from 'next/image';
import Link from 'next/link';

export default function RenderEssencials() {
    function openMenu() {
        
    }

    return (
        <>
            <div
                className='flex md:hidden'
            >
                <Image src='/menu.svg' width={20} height={20} alt='menu icon' onClick={openMenu}/>
            </div>

            <div
                className='gap-4 hidden md:flex'
            >
                <Link
                    className='flex gap-2 items-center font-semibold'
                    href='/'
                >
                    <Image src='/search.svg' alt='icone de pesquisa' width={20} height={20}/>
                    <h4
                        className='text-xs'
                    >Search</h4>
                </Link>

                <Link
                    className='flex gap-2 items-center font-semibold'
                    href='/'
                >
                    <Image src='/bag.svg' alt='icone de carrinho' width={20} height={20}/>
                    <h4
                        className='text-xs'
                    >Cart</h4>
                </Link>

                <Link
                    className='flex gap-2 items-center font-semibold'
                    href='/'
                >
                    <Image src='/user.svg' alt='icone de acesso a conta' width={20} height={20}/>
                    <h4
                        className='text-xs'
                    >Login</h4>
                </Link>
            </div>
        </>
    );
}