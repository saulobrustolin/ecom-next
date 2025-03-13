import fs from 'fs';
import path from 'path';

import { slug } from '@/config/definitions';

import ImagesProduct from '@/modules/product/images-product';
import DetailsProduct from '@/modules/product/details-product';

export default async function Product({
    params,
} : {
    params: Promise<slug>,
}) {
    const { slug } = await params;

    const imagesDirectory = path.join('public/product/1');
    const filenames = fs.readdirSync(imagesDirectory);
  
    const images = filenames.map((filename) => ({
      path: `/product/${slug}/${filename}`,
    }));

    return (
        <main
            className='flex items-center justify-center my-8'
        >
            <div
                className='grid grid-cols-2 w-[90%]'
            >
                <ImagesProduct images={images}/>

                <DetailsProduct slug={slug}/>
            </div>
        </main>
    );
}