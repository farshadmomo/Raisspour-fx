import React from 'react';

const Products = () => {
    let a = 4_000_000
    console.log(a)
    const [items,setItems] =React.useState([
            {
                name:'advanced',
                price:'100$',
                description:'this is an advanced course for none beginners',
                picture:'something'
            },
            {
                name:'beginner',
                price:'50$',
                description:'this is a beginners course for newbies',
                picture:'something2'
            },
            {
                name:'VIP',
                price:'200$',
                description:'this is a VIP course for luxury students',
                picture:'something'
            },
            {
                name:'physical',
                price:'1000$',
                description:'if you want to have a private course with just me and you go ahead *wink*',
                picture:'something'
            },
        ]
    )
    return(
        <div className='flex justify-center items-center flex-wrap'>
            {items.map(item => (
                <div className='w-4/12 h-[60vh] bg-yellow-400 m-3 rounded-2xl flex items-center flex-col pt-4 eth-card'>
                    <div className='w-full h-full flex items-center flex-col'>
                        <div className='h-64 w-11/12 bg-blue-600'></div>
                        <div className='font-bold text-lg font-mono self-start pl-5 pt-4'>{item.name}</div>
                        <div className='px-5 pt-4 text-[14px] self-start'>{item.description}</div>
                    </div>
                    <div className='w-11/12 flex items-center justify-between'>
                        <div className=' pt-4 text-[17px] pb-4 self-start justify-self-end text-red-600 font-bold'>{item.price}</div>
                        <button className='w-3/12 h-8 bg-green-600 rounded-xl font-mono text-white'>BUY</button>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Products;
