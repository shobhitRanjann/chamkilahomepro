'use client'

import { useState } from 'react'
import { ChevronDownIcon } from '@heroicons/react/16/solid'
import { Field, Label, Switch } from '@headlessui/react'
import { redirect } from 'next/navigation'


export default function Example() {
  const [agreed, setAgreed] = useState(false)
  const [serviceType, setServiceType] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('+91');
  const [message, setMessage] = useState('');
  const [mailid, setMailid] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const services = [
    {
      id: 0,
      name: 'please-select'
    },
    {
      id: 1,
      name: 'House Cleaning'
    },
    {
      id: 2,
      name: 'Kitchen Cleaning'
    },
    {
      id: 3,
      name: 'Bathroom Cleaning'
    },
    {
      id: 4,
      name: 'Sofa Cleaning'
    },
    {
      id: 5,
      name: 'Carpet Cleaning'
    },
    {
      id: 6,
      name: 'Dining Table Cleaning'
    },
  ]



  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let newValue = e.target.value;
    if (!newValue.startsWith('+91')) {
      newValue = '+91';
    }
    const rest = newValue.slice(3);
    const filtered = rest.replace(/[^0-9]/g, '');
    if (e.target.value.length < 14) {
      setPhoneNumber('+91' + filtered);
    }
  };



  const handleSubmit = async (formData: FormData) => {
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      setPhoneNumber('+91');
      setMailid('');
      setMessage('');
      setServiceType('');
      redirect(`/`);
    }, 10000)
    const data: Record<string, string> = {};
    formData.forEach((value, key) => {
      data[key] = value as string;
    });
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if(!response.ok){
      alert('Please try after sometime!...')
    }


  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const allowedKeys = ['Backspace', 'Delete', 'ArrowLeft', 'ArrowRight', 'Tab'];
    const selectionStart = e.currentTarget.selectionStart;

    if (selectionStart !== null && selectionStart < 3) {
      if (e.key === 'Backspace' || e.key === 'Delete') {
        e.preventDefault();
        return;
      }
    }
    if (allowedKeys.includes(e.key) || e.ctrlKey || e.metaKey) {
      return;
    }
    if (!/^[0-9]$/.test(e.key)) {
      e.preventDefault();
    }
  };

  return (
    <div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-balance text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">Contact-Us</h2>
        <p className="mt-2 text-lg/8 text-gray-600">Contact here if you are here regarding big orders.</p>
      </div>
      <form action={handleSubmit} id='contactformdata' className="mx-auto mt-16 max-w-xl sm:mt-20">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div>
            <label htmlFor="firstname" className="block text-sm/6 font-semibold text-gray-900">
              First name
            </label>
            <div className="mt-2.5">
              <input
                id="firstname"
                name="firstname"
                type="text"
                required
                autoComplete="given-name"
                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
              />
            </div>
          </div>
          <div>
            <label htmlFor="lastname" className="block text-sm/6 font-semibold text-gray-900">
              Last name
            </label>
            <div className="mt-2.5">
              <input
                id="lastname"
                name="lastname"
                type="text"
                required
                autoComplete="family-name"
                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="service" className="block text-sm/6 font-semibold text-gray-900">
              Purpose
            </label>
            <input
              type="hidden"
              name="servicetype"
              value={serviceType}
            />
            <div className="mt-2 grid grid-cols-1">
              <select
                id="service"
                name="service"
                autoComplete="service-type"
                value={serviceType}
                onChange={(e) => { setServiceType(e.target.value) }}
                className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pl-3 pr-8 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
              >
                {services.map((val) =>
                  <option key={val.id} value={val.name}>{val.name}</option>
                )}
              </select>
              <ChevronDownIcon
                aria-hidden="true"
                className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="emailid" className="block text-sm/6 font-semibold text-gray-900">
              Email
            </label>
            <div className="mt-2.5">
              <input
                id="emailid"
                name="emailid"
                type="email"
                value={mailid}
                required
                onChange={(e) => setMailid(e.target.value)}
                autoComplete="emailid"
                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="phonenumber" className="block text-sm/6 font-semibold text-gray-900">
              Phone number
            </label>
            <div className="mt-2.5">

              <input
                id="phonenumber"
                name="phonenumber"
                value={phoneNumber}
                onChange={handleChange}
                onKeyDown={handleKeyDown}
                type="text"
                inputMode="numeric"
                required
                placeholder="123-456-7890"
                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="message" className="block text-sm/6 font-semibold text-gray-900">
              Message
            </label>
            <div className="mt-2.5">
              <textarea
                id="message"
                name="message"
                rows={4}
                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                value={message}
                required
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>
          </div>
          <Field className="flex gap-x-4 sm:col-span-2">
            <div className="flex h-6 items-center">
              <Switch
                checked={agreed}
                onChange={setAgreed}
                className="group flex w-8 flex-none cursor-pointer rounded-full bg-gray-200 p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 data-[checked]:bg-indigo-600"
              >
                <span className="sr-only">Agree to policies</span>
                <span
                  aria-hidden="true"
                  className="size-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out group-data-[checked]:translate-x-3.5"
                />
              </Switch>
            </div>
            <Label className="text-sm/6 text-gray-600">
              By selecting this, you agree that entered data is appropriate
            </Label>
          </Field>
        </div>
        <div className="mt-10">
          {!isLoading ? <>
            {agreed ?
              <button
                type="submit"
                className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Send Request
              </button>
              : ''} </>
            :
            <button
              disabled
              className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Request Sent Succesfully!..
            </button>
          }
        </div>
      </form>
    </div>
  )
}
