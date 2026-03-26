'use client'

import { useEffect, useState } from "react"
import { useAlert } from "../contexts/AlertContext";
import Modal from "../modal/Modal";
import { offers } from "../api/offer/offer";
import OfferModal from "../modal/OfferModal";


export default function Cards() {
    const [itemname, setItemname] = useState<string>('');
    const [isModalOpen, setIsModalOpen] = useState(false)
    const { showAlert } = useAlert()
    const [selectedOffer, setSelectedOffer] = useState<string | null>(null);

    // const handleOpenModeli = (value: string) => {
    //     setItemname(value)
    //     setIsModalOpen(true)
    //     showAlert()
    // }

    const handleOpenModel = (value: string) => {
        if (offers[value]) {
            setSelectedOffer(value); // Open offer modal instead
        } else {
            setItemname(value);
            setIsModalOpen(true);
            showAlert();
        }
    }
    const cardvalue = [
        {
            id: 1,
            imageurl: '/fullhomecleaning.jpeg',
            workname: 'House Cleaning',
            workdescription: 'Experience top-quality house cleaning services with our expert team. We offer thorough, reliable, and affordable cleaning solutions tailored to your home’s needs. Enjoy a spotless, fresh environment with minimal effort—book your cleaning today!',
        },
        {
            id: 2,
            imageurl: '/appliancecleaning.jpeg',
            workname: 'Appliance Cleaning',
            workdescription: 'Get a sparkling clean kitchen with our professional cleaning services. We focus on every detail, from countertops to appliances, ensuring a hygienic and inviting space. Let us handle the mess—book your kitchen cleaning today!',
        },
        {
            id: 3,
            imageurl: '/bathroomcleaning.jpeg',
            workname: 'Bathroom Cleaning',
            workdescription: 'Transform your bathroom into a fresh, sparkling space with our expert cleaning services. We tackle every corner, leaving your bathroom spotless, sanitized, and smelling great. Book your bathroom cleaning today for a pristine experience!',
        },
        {
            id: 4,
            imageurl: '/sofacleaning.jpg',
            workname: 'Sofa Cleaning',
            workdescription: 'Revitalize your sofa with our deep cleaning services. We remove dirt, stains, and odors, restoring your furniture to its fresh, comfortable state. Enjoy a cleaner, cozier sofa—book your sofa cleaning today!',
        },
        {
            id: 5,
            imageurl: '/carpetcleaning.jpg',
            workname: 'Carpet Cleaning',
            workdescription: 'Refresh your carpets with our professional cleaning services. We eliminate dirt, stains, and allergens, leaving your carpets fresh, soft, and vibrant. Let us bring new life to your floors—book your carpet cleaning today!',
        },
        {
            id: 6,
            imageurl: '/diningcleaning.jpg',
            workname: 'Dining Table Cleaning',
            workdescription: 'Keep your dining table spotless and inviting with our expert cleaning services. We remove spills, stains, and grime, ensuring a clean and polished surface for every meal. Book your dining table cleaning today!',
        },
        {
            id: 7,
            imageurl: '/curtaincleaning.jpeg',
            workname: 'Curtain Cleaning',
            workdescription: 'Refresh your space with our professional curtain cleaning services. We eliminate dust, allergens, and stains to restore your curtains beauty and freshness. Schedule your curtain cleaning today!',
        },
        {
            id: 8,
            imageurl: '/mattresscleaning.jpeg',
            workname: 'Mattress Cleaning',
            workdescription: 'Enjoy a healthier sleep environment with our deep mattress cleaning services. We remove dust, allergens, and stains, leaving your mattress fresh and sanitized. Schedule your mattress cleaning today!',
        },
        {
            id: 9,
            imageurl: '/balcony-cleaning.jpeg',
            workname: 'Balcony Cleaning',
            workdescription: 'Breathe easier and relax outdoors with our professional balcony cleaning services. We eliminate dirt, dust, stains, and bird droppings, leaving your balcony spotless and refreshed. Book your balcony cleaning today!',
        },
        {
            id: 10,
            imageurl: '/kitchencleaning.jpg',
            workname: 'Kitchen Cleaning',
            workdescription: "Keep your cooking space safe and sparkling with our expert kitchen cleaning services. We tackle grease, grime, and stubborn stains to ensure a hygienic and fresh environment. Schedule your kitchen cleaning now for a spotless shine!"
        }
    ]
    const closeModal = () => {
        console.log('close modal ' + isModalOpen)
        setIsModalOpen(false)
    }
    useEffect(() => {
        if (itemname != null && itemname !== '') {
            setIsModalOpen(true);
        }
    }, [itemname != null && itemname !== ''])
    return (<>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-16 lg:p-14 md:p-8 sm:p-9 p-4 lg:mx-5" id="bookservice">

            {cardvalue.map((val) => (
                <div className="max-w-xl bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-white dark:border-gray-200" onClick={() => handleOpenModel(val.workname)} key={val.id}>
                    <a href="#" className="rounded-t-lg">
                        <img className="rounded-t-lg" src={val.imageurl} alt=""></img>
                        {/* <Image
                            src={val.imageurl}
                            alt="Picture of the author"
                            width={500}
                            height={500}
                            sizes="
        (border-top-left-radius: 0.5rem),
        (border-top-right-radius: 0.5rem),
      "
                        /> */}
                    </a>
                    <div className="p-5">
                        <a href="#">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-900">{val.workname}</h5>
                        </a>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-700">{val.workdescription}</p>
                        <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-green-600 rounded-lg focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-blue-300">
                            Book Now
                            <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                            </svg>
                        </a>
                    </div>
                </div>
            ))}
        </div>
        {selectedOffer && (
            <OfferModal
                workname={selectedOffer}
                onClose={() => setSelectedOffer(null)}
                onSelect={(subService) => {
                    setItemname(subService);
                    setIsModalOpen(true);
                    showAlert();
                }}
            />
        )}
        <Modal isOpen={isModalOpen} onClose={closeModal} servicetype={itemname}>
            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600 border-gray-200">
                <h3 className="text-xl font-semibold text-gray-900 dark:gray-900">
                    Book Cleaning Services For {itemname}
                </h3>
            </div>
        </Modal>
    </>)
}