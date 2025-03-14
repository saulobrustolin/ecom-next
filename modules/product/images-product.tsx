'use client'

import { ImagesProductProps } from '@/config/definitions';

import Image from 'next/image';

import { useState } from 'react';

export default function ImagesProduct({ images }: ImagesProductProps) {
    const [pathSelect, setPathSelect] = useState(images[0].path);

  return (
    <div
      className='flex gap-2'
    >
      <div
        className='flex flex-col gap-2'
      >
        {images.length > 0 ? (
          images.map((image, index) => (
            (images.length == 5) ? (
              <Image key={index} src={image.path} alt={`Imagem ${index}`} width={100} height={100} className={'border border-stone-500/50 rounded-md h-[calc(100%/4)]'}/>
            ) : images.length > 5 && index < 3 ? (
              <Image key={index} src={image.path} alt={`Imagem ${index}`} width={100} height={100} className='border border-stone-500/50 rounded-md h-[calc(100%/4)]'/>
            ) : ('')
        ))

        ) : (
          <p
            className='uppercase text-xs text-stone-500'
          >Sem imagens para este produto.</p>
        )}

        <div
            className='w-full h-[calc(100%/4)] border border-stone-500/50 rounded-md flex justify-center items-center'
        >
            <h1
                className='text-2xl font-semibold text-stone-400'
            >
                +{images.length - 3}
            </h1>
        </div>
      </div>

      <div
        className='border rounded-md border-stone-500/50 flex items-center justify-center relative'
      >
        {pathSelect != images[images.length - 1].path ? (
            <span
                className='absolute cursor-pointer top-[calc(50% - 5px)] bg-stone-500/75 rounded-full w-[40px] h-[40px] flex justify-center items-center'
                style={{left: 'calc(100% - 50px)'}}
            >
                <Image src='/arrow.svg' width={10} height={10} alt='flecha' className='opacity-75'/>
            </span>
        ): ''}

        {pathSelect != images[0].path ? (
            <span
                className='absolute rotate-180 cursor-pointer left-[10px] top-[calc(50% - 5px)] bg-stone-500/75 rounded-full w-[40px] h-[40px] flex justify-center items-center'
            >
                <Image src='/arrow.svg' width={10} height={10} alt='flecha' className='opacity-75'/>
            </span>
        ): ''}

        <Image src={pathSelect} width={500} height={500} alt='Imagem principal' className='rounded-md min-w-full'/>
      </div>
    </div>
  );
}
