export default function PricingCard() {
    const images = [
        {
            id: 1,
            src: '/chamkila01card.png',
            alt: 'Combo Cleaning'
        },
        {
            id: 2,
            src: '/chamkila02card.png',
            alt: 'combo 1, QUICK CLEAN'
        },
        {
            id: 3,
            src: '/chamkila03card.png',
            alt: 'combo 2, FAMILY PACK'
        },
        {
            id: 4,
            src: '/chamkila04card.png',
            alt: 'combo 3, DELUX CLEAN'
        },
        {
            id: 5,
            src: '/chamkila05card.png',
            alt: 'combo 4, FESTIVAL FULL'
        },
        {
            id: 6,
            src: '/combopackage1.jpeg',
            alt: 'combo 4, FESTIVAL FULL'
        },
        {
            id: 7,
            src: '/combopackage2.jpeg',
            alt: 'combo 4, FESTIVAL FULL'
        }
    ];
    return (<>
      <div className="text-center">
                <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-gray-900">
                    Pricing!
                </h1>

                <div className="relative isolate bg-white px-6 lg:px-8 mx-auto max-w-screen-xl text-center grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
                    <div
                        aria-hidden="true"
                        className="absolute inset-x-0 -top-3 -z-10 transform-gpu overflow-hidden px-36 blur-3xl"
                    >
                        <div
                            style={{
                                clipPath:
                                    'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                            }}
                            className="mx-auto aspect-1155/678 w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
                        />
                    </div>

                    {images.map((img) => (
                        <div className="sm:py-6 py-6" key={img.id}>
                            <div className="w-full max-w-sm p-4 bg-green-100 border border-gray-600 rounded-lg shadow-sm sm:p-6 h-96 flex items-center justify-center">
                                <img
                                    src={img.src}
                                    alt={img.alt}
                                    loading="lazy"
                                    className="object-contain h-full w-full rounded-md"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
    </>)
}