import fs from 'fs';
import path from 'path';

import { slug } from '@/config/definitions';

import { ProductSlider } from '@/modules/product/slider-component';
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
            className='flex items-center justify-center my-4'
        >
            <div
                className='gap-5 justify-center flex flex-col xl:w-[70%] md:w-[80%]'
            >
                <ProductSlider images={images}/>

                <DetailsProduct slug={slug}/>
            </div>
        </main>
    );
}