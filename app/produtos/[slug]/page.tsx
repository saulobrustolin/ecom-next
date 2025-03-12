import { slug } from '@/config/definitions';

import MainProduct from '@/modules/product/main-product';

export default async function Product({
    params
} : {
    params: Promise<slug>
}) {

    const { slug } = await params;
    return (
        <div>
            <MainProduct/>
        </div>
    );
}