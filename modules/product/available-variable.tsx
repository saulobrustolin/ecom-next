'use client'

import { useState, useEffect } from 'react';

import { slug, availableVariable } from '@/config/definitions';

export default function AvailableVariable({ slug }: slug) {
    const [response, setResponse] = useState({});

    useEffect(() => {
        function repeat(value: any, divContain: any) {
            // adicionando o span de cada valor
            let span = document.createElement('span');
            let divSpan = document.createElement('div');
    
            divSpan.setAttribute('class', 'rounded-xl border');
    
            span.setAttribute('class', `flex items-center justify-center w-8 h-8 rounded-lg box-border m-1 ${(value[1].type == 'color') ? 'bg' + value[1].value.toString() : ''}`);
            
            (value[1].type == 'color') ? span.setAttribute('style', `background-color:${value[1].value.toString()}`) : '';
            (value[1].type !== 'color') ? (span.innerHTML = value[1].value) : '';
    
            divSpan.appendChild(span);
            divContain?.appendChild(divSpan);

            return divContain
        }
        
        Object.entries(response).map((value: any, index) => {
            let container = document.createElement('div');
            const chef = document.getElementById('container-available');
    
            let verifyType = chef?.querySelector(`div[data-type="${value[1].type}"]`) !== null;
    
            if (!verifyType) {
                // criando os elementos
                let div = document.createElement('div');
                let h4 = document.createElement('h4');
    
                // definindo os atributos
                div.setAttribute('data-type', value[1].type);
                div.setAttribute('class', 'capitalize font-semibold text-black text-md flex flex-col gap-1');
                div.setAttribute('value', value[1].value);
                h4.innerHTML = value[1].type.toString();
    
                // concatena div com título
                div.appendChild(h4);
    
                let divContain = document.createElement('div');
                divContain.setAttribute('class', 'flex gap-2');

                // adicionando o span de cada valor
                div.appendChild(repeat(value, divContain));
                container.appendChild(div);
                chef?.appendChild(container);
            }
    
            if (verifyType) {
                let divType = document.querySelector(`#container-available div[data-type=${value[1].type}]`);
                let divContain = divType?.querySelector('div');
    
                // adicionando o span de cada valor
                repeat(value, divContain);
            }
        });
    }, [response])

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch(`http://localhost:3000/api/consult/?slug=${slug}`);
            const data = await res.json();
            data ? setResponse(data) : '';
        };

        fetchData();
    }, [])

    return (
        <div
            className="flex flex-col gap-2"
            id='container-available'
        >
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