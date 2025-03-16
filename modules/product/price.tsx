import DiscountPercent from "./discount-percent";

export default function Price() {
    return (
        <div
            className='flex items-end gap-2'
        >                  
            <div
                className='flex items-center gap-2'
            >
                <DiscountPercent/>
            
                <h4
                    className='text-4xl font-semibold'
                >
                    $122.00
                </h4>
                <p
                    className='line-through text-stone-500'
                >
                    De $129.00
                </p>
            </div>
        </div>
    );
}