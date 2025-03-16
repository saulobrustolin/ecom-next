export default function DiscountPercent() {
    return (
        <span
            className='rounded-md bg-red-600 font-semibold text-white px-2 py-1 text-xl'
        >
            -{100 - Math.round((122/129)*100)}%
        </span>
    );
}