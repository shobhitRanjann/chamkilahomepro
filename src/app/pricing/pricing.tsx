export default function PricingCard() {
    const value = [
        {
            id: 1,
            servicetype: 'House Cleaning Including Balcony & Utility Area',
            priceone: '1 BHK 3800',
            pricetwo: '2 BHK 4700',
            pricethree: '3 BHK 5,600',
            pricefour: '4 BHK 6,500',
            pricefive: 'AC cleaning 200',
        },
        {
            id: 2,
            servicetype: 'Sofa & Carpet Cleaning',
            priceone: '130/per Sheet',
            pricetwo: '250/per Mattress',
            pricethree: '250/per Carpet',
            pricefour: '',
            pricefive: '',
        },
        {
            id: 3,
            servicetype: 'Kitchen & Washroom Cleaning',
            priceone: '1 Kitchen 900',
            pricetwo: '1 Washroom 380',
            pricethree: '',
            pricefour: '',
            pricefive: ''
        }
    ]
    return (<>
     <div className="text-center">
                    <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-gray-900 ">Pricing!</h1>        
        <div className="relative isolate bg-white px-6 lg:px-8 mx-auto max-w-screen-xl text-center grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
            <div aria-hidden="true" className="absolute inset-x-0 -top-3 -z-10 transform-gpu overflow-hidden px-36 blur-3xl">
                <div
                    style={{
                        clipPath:
                            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                    }}
                    className="mx-auto aspect-1155/678 w-[72.1875rem] bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
                />
            </div>
            {value.map((val) =>
            <div className=" sm:py-6 py-6" key={val.id}>
                <div className="w-full max-w-sm p-4 bg-green-100 border border-gray-600 rounded-lg shadow-sm sm:p-8 h-96">
                    <h5 className="mb-4 text-xl font-semibold text-black ">{val.servicetype}</h5>
                    <ul role="list" className="space-y-5 my-7">
                        <li className="flex items-center">
                        </li>
                        {val.priceone!==''?
                        <li className="flex">
                            <svg className="shrink-0 w-4 h-4 text-green-600 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                            </svg>
                            <span className="text-base font-normal leading-tight text-gray-500 ms-3">{val.priceone}</span>
                        </li>
                        :
                        <li className="flex"></li>
                        }
                        {val.pricetwo!==''?
                        <li className="flex">
                            <svg className="shrink-0 w-4 h-4 text-green-600 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                            </svg>
                            <span className="text-base font-normal leading-tight text-gray-500 ms-3">{val.pricetwo}</span>
                        </li>
                        :
                        <li className="flex"></li>
                        }
                        {val.pricethree!==''?
                        <li className="flex">
                            <svg className="shrink-0 w-4 h-4 text-green-600 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                            </svg>
                            <span className="text-base font-normal leading-tight text-gray-500 ms-3">{val.pricethree}</span>
                        </li>
                        :<li className="flex"></li>}
                         {val.pricefour!==''?
                        <li className="flex">
                            <svg className="shrink-0 w-4 h-4 text-green-600 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                            </svg>
                            <span className="text-base font-normal leading-tight text-gray-500 ms-3">{val.pricefour}</span>
                        </li>
                        :<li className="flex"></li>}
                         {val.pricefive!==''?
                        <li className="flex">
                            <svg className="shrink-0 w-4 h-4 text-green-600 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                            </svg>
                            <span className="text-base font-normal leading-tight text-gray-500 ms-3">{val.pricefive}</span>
                        </li>
                        :<li className="flex"></li>}
                    </ul>
                </div>
                </div>
            )}
        </div>
        </div>
    </>)
}