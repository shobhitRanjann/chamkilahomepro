"use client"

import type React from "react"
import { useAlert } from "../contexts/AlertContext"
import AlertText from "./AlertText"
import { useState } from "react"
import { TimeSelector } from "../timefield/timefield";

type ModalProps = {
    isOpen: boolean
    onClose: () => void
    servicetype: string
    children: React.ReactNode
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, servicetype, children }) => {
    const { isAlertVisible, hideAlert } = useAlert()
    const [betweentimeone, setStartTime] = useState("00:00 AM");
    const [betweentimetwo, setEndTime] = useState("00:00 AM");
    const [phone, setPhonenumber] = useState('+91');
    const [isLoading, setIsLoading] = useState(false)
    const [email,setEmail] = useState('');
    const [serviceDate,setServiceDate] = useState('');
    const [extracomment, setExtracomment] = useState('');
    const [address, setAddress] = useState('');
    const [addressbool,setAddressbool] = useState(true);

    const handleSubmit = async (e: React.FormEvent)=>{
        e.preventDefault();
      setIsLoading(true);

      setTimeout(() => {
        setIsLoading(false);
        onClose();
             }, 7000)
      
      e.preventDefault();
        const form={
            servicetype,
            email,
            phone,
            address,
            serviceDate,
            betweentimeone,
            betweentimetwo,
            extracomment
        }
        const response = await fetch("/api/submit", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(form),
          });

          if(!response.ok){
            alert('Please try after sometime!!');
          }
          alert('Your request has been sent successfully!...');

          setEmail('');
          setPhonenumber('+91');
          setAddress('');
          setServiceDate('');
          setExtracomment('');
    }
    const checkAddress=(e:string)=>{
        if(e.length>10){
            setAddressbool(false);
        }
        else{
            setAddressbool(true)
        }
        setAddress(e);
    }

    if (!isOpen) return null
    return (
        <div tabIndex={-1} className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full flex items-center">
            <div className="relative p-4 w-full max-w-3xl max-h-full ">
                <div className="relative bg-white rounded-lg shadow-sm dark:bg-gray-100">
                    {isAlertVisible && (
                        <div className="flex p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
                            <AlertText />

                            <button onClick={hideAlert} type="button" className="ms-auto -mx-1.5 -my-1.5 bg-red-50 text-red-500 rounded-lg focus:ring-2 focus:ring-red-400 p-1.5 hover:bg-red-200 inline-flex items-center justify-center h-8 w-8 dark:bg-gray-800 dark:text-red-400 dark:hover:bg-gray-700" data-dismiss-target="#alert-2" aria-label="Close">
                                <span className="sr-only">Close</span>
                                <svg className="w-3 h-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                </svg>
                            </button>
                        </div>
                    )}
                    {children}
                    <div className="p-4 -mt-5 ml-3 mr-3">
                        <form className="space-y-4" onSubmit={handleSubmit} >
                            <div>
                                <input type="hidden" name="servicetype" value={servicetype} />
                            </div>
                            <div>
                                <input type="hidden" name="email" value={email} />
                            </div>
                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm font-semibold text-gray-900 dark:text-black">Your email</label>
                                <input type="email" name="email" id="email" value={email} onChange={(e)=>setEmail(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-gray-500 dark:placeholder-gray-400 dark:text-gray-900" placeholder="name@company.com" required />
                            </div>
                            <div>
                                <input type="hidden" name="phone" value={phone} />
                            </div>
                            <div>
                                <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Your Phone No</label>
                                <input type="string" name="phone" id="phone" value={phone} onChange={(e) => setPhonenumber(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-gray-500 dark:placeholder-gray-400 dark:text-gray-900" placeholder="9999999999" required />
                            </div>
                            <div>
                                <label htmlFor="address" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Your Address<p className="text-red-500">{addressbool?'Enter full address':''}</p></label>
                                <input type="string" name="address" id="address" value={address} onChange={(e)=>checkAddress(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-gray-500 dark:placeholder-gray-400 dark:text-gray-900" placeholder="your location" required />
                            </div>
                            <div>
                                <input type="hidden" name="serviceDate" value={serviceDate} />
                            </div>
                            <div>
                                <label htmlFor="serviceDat" className="block mb-2 text-sm font-medium text-black dark:text-black">Service Date</label>
                                <input type="date" name="serviceDat" id="serviceDat" value={serviceDate} onChange={(e)=>setServiceDate(e.target.value)} className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-gray-500 dark:placeholder-gray-400 dark:text-gray-900" />
                            </div>
                            <div>
                                <label htmlFor="betweentimeone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Service Time Slot</label>
                                <input
                                    type="hidden"
                                    name="betweentimeone"
                                    value={betweentimeone}
                                />
                                <input
                                    type="hidden"
                                    name="betweentimetwo"
                                    value={betweentimetwo}
                                />
                                <TimeSelector label="Time From" value={betweentimeone} id="betweentimeone" name="betweentimeone" onChange={setStartTime} />
                                <TimeSelector label="Time To" value={betweentimetwo} id="betweentimetwo" name="betweentimetwo" onChange={setEndTime} />
                            </div>
                            <div>
                                <input type="hidden" name="extracomment" value={extracomment} />
                            </div>
                            <div>
                                <label htmlFor="extracomment" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Additional Message:</label>
                                <textarea name="extracomment" id="extracomment" value={extracomment} onChange={(e)=>setExtracomment(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-gray-500 dark:placeholder-gray-400 dark:text-gray-900" placeholder="your location" required />
                            </div>
                            {/* <SubmitButton /> */}
                            <button
                                type="submit"
                                disabled={isLoading}
                                className={`w-full px-4 py-2 rounded text-white ${isLoading ? "bg-gray-400" : "bg-blue-500 hover:bg-blue-600"}`}
                            >
                                {isLoading ? (
                                    <span className="flex items-center justify-center">
                                        <svg
                                            className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                        >
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path
                                                className="opacity-75"
                                                fill="currentColor"
                                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                            ></path>
                                        </svg>
                                        Submitting...
                                    </span>
                                ) : (
                                    "Submit"
                                )}
                            </button>
                            <div className="text-sm font-medium text-gray-700 dark:text-gray-700">
                                Or Call us directly!<a href="#" className="text-blue-700 hover:underline dark:text-blue-500">+918802282721</a>
                            </div>
                        </form>
                        <button onClick={onClose} className="mt-4 bg-red-500 text-white w-full px-4 py-2 rounded hover:bg-gray-400">
                            Cancel
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Modal

