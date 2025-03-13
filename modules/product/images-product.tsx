import { ImagesProductProps } from '@/config/definitions';

import Image from 'next/image';

export default function ImagesProduct({ images }: ImagesProductProps) {

  return (
    <div
      className=''
    >
      <div
        className='flex flex-col gap-2'
      >
        {images.length > 0 ? (
          images.map((image, index) => (
            (images.length == 5) ? (
              <Image key={index} src={image.path} alt={`Imagem ${index}`} width={150} height={150} className='border border-stone-500/50 rounded-md'/>
            ) : images.length > 5 && index < 4 ? (
              <Image key={index} src={image.path} alt={`Imagem ${index}`} width={150} height={150} className='border border-stone-500/50 rounded-md'/>
            ) : ''
        ))
        ) : (
          <p
            className='uppercase text-xs text-stone-500'
          >Sem imagens para este produto.</p>
        )}
      </div>
    </div>
  );
}
