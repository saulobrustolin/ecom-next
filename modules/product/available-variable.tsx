'use client'

import { useState, useEffect } from 'react';

import { slug } from '@/config/definitions';

export default function AvailableVariable({ slug }: slug) {
    const options = {
        colors: {
            data: [
                {
                    "color": "#111111"
                },
                {
                    "color": "#0302B1"
                },
                {
                    "color": "#103C10"
                }
            ]
        },
        size: {
            data: [
                {
                    'size': 'small'
                },
                {
                    'size': 'medium'
                },
                {
                    'size': 'large'
                },
                {
                    'size': 'extra large'
                },
            ]
        }
    }

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch(`http://localhost:3000/api/consult/?slug=${slug}`);
            const data = await res.json();
            setResponse(data);
        };

        fetchData();
    }, [])

    const [response, setResponse] = useState(null);
    const [select, setSelect] = useState(options);

    (response != null ? console.log(response) : '')

    function changeSelect({ target }: any) {
        setSelect(target.getAttribute('id'));
    }

    return (
        <div
            className="flex flex-col gap-2"
        >
            <h4
                className="capitalize font-semibold text-black text-lg"
            >
                available color
            </h4>

            <div
                className="flex gap-2"
            >
                {/* {colors ? (
                    (colors.data).map((index, value) => {
                        return (
                            <div
                                className={`rounded-xl border ${index.color === select ? 'border-black' : 'border-stone-400'}`}
                                onClick={changeSelect}
                            >
                                <span
                                    key={index.color}
                                    id={index.color}
                                    className={`flex w-8 h-8 rounded-lg box-border m-1`}
                                    style={{backgroundColor: `${index.color}`}}
                                > </span>
                            </div>
                        )
                    })
                ) : ''} */}

                
            </div>
        </div>
    );
}