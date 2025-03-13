import fs from 'fs';
import path from 'path';

import { slug } from '@/config/definitions';

import ImagesProduct from '@/modules/product/images-product';

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
        <div>
            <ImagesProduct images={images} />
        </div>
    );
}