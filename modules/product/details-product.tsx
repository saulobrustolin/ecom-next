import { slug } from '@/config/definitions';

import Price from './price';
import StarReviews from './star-reviews';
import DescriptionProduct from './description-product';

export default function DetailsProduct({ slug }: slug) { 
    return (
        <div
            className='flex flex-col gap-4 px-6'
        >
                    <Price/>

                    <StarReviews slug={slug}/>

                    <DescriptionProduct/>
                </div>
    );
}