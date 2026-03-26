// components/OfferModal.tsx

import { offers } from "../api/offer/offer";


type OfferModalProps = {
    workname: string;
    onClose: () => void;
    onSelect: (subService: string) => void;
};

export default function OfferModal({ workname, onClose, onSelect }: OfferModalProps) {
    const items = offers[workname];

    if (!items) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="relative bg-white rounded-lg shadow-lg max-w-3xl w-full p-6 overflow-y-auto max-h-[90vh]">

                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-500 hover:text-red-600 text-2xl font-bold focus:outline-none"
                    aria-label="Close"
                >
                    &times;
                </button>

                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                    {workname} Offers
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {items.map((item) => (
                        <div key={item.id} className="border border-gray-300 rounded-lg p-4 shadow hover:shadow-md transition">
                            <h3 className="text-xl font-semibold mb-2">{item.subService}</h3>
                            <div className="flex items-center gap-2 mb-2">
                                <span className="line-through text-gray-500">₹{item.originalPrice}</span>
                                <span className="text-green-600 font-bold text-lg">₹{item.discountedPrice}</span>
                            </div>
                            <ul className="text-sm text-gray-700 mb-4 list-disc list-inside">
                                {item.features.map((f, idx) => (
                                    <li key={idx}>{f}</li>
                                ))}
                            </ul>
                            <button
                                onClick={() => {
                                    onSelect(item.subService);
                                    onClose();
                                }}
                                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 w-full"
                            >
                                Book for {item.subService}
                            </button>
                        </div>
                    ))}
                </div>

                <button onClick={onClose} className="mt-6 w-full text-center text-red-500 underline">
                    Cancel
                </button>
            </div>
        </div>

    );
}
