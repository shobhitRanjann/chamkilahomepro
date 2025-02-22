'use client'

import { useState } from 'react'
import {
  Dialog,
  DialogPanel,
  PopoverGroup,
} from '@headlessui/react'
import {
  Bars3Icon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { useRouter,redirect } from 'next/navigation'
import Link from 'next/link'


export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const router = useRouter()
  const handlemobileview=(val:string)=>{
      if(val==='contact'){
        setMobileMenuOpen(false);
        redirect("/contactus");
      }
      router.push(`/#${val}`);
      setMobileMenuOpen(false);
  }
  function handleClick(e:string){
    router.push(`/#${e}`)
  }
  return (
    <header className="bg-white">
      <nav aria-label="Global" className="mx-auto flex max-w-7xl lg:max-h-20 max-h-16 sm:max-h-20 items-center justify-between p-6 lg:px-8">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <img
              alt=""
              src="/chamkilahomelogo.png"
              className="h-20 w-20"
            />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="size-6" />
          </button>
        </div>
        <PopoverGroup className="hidden lg:flex lg:gap-x-12">
        <a onClick={()=>handleClick("bookservice")} className="text-sm/6 font-semibold text-gray-900 cursor-pointer">
            Book Now
          </a>

          <a onClick={()=>handleClick("aboutus")} className="text-sm/6 font-semibold text-gray-900 cursor-pointer">
            Why Us
          </a>
          <a onClick={()=>handleClick("reviews")} className="text-sm/6 font-semibold text-gray-900 cursor-pointer">
            Reviews
          </a>
          <Link href="/contactus" className="text-sm/6 font-semibold text-gray-900 cursor-pointer">
            Contact Us
          </Link>
        </PopoverGroup>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
        <img width="16" height="16" src="/icons-call.png" alt="ringer-volume"/>
          <a href="#" className="text-sm/6 font-semibold text-green-600">
            &nbsp; Call Now <span aria-hidden="true">+91-8802282721 / +91-8700667107</span>
          </a>
        </div>
      </nav>
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                alt=""
                src="/chamkilahomelogo.png"
                className="h-12 w-auto"
              />
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
              <a
                  onClick={()=>handlemobileview('bookservice')}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >
                  Book Now
                </a>
                <a
                   onClick={()=>handlemobileview('aboutus')}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >
                  Why Us
                </a>
                <a
                  onClick={()=>handlemobileview('reviews')}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >
                  Reviews
                </a>
                <a
                  onClick={()=>handlemobileview('contact')}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50 cursor-pointer"
                >
                  Contact Us
                </a>
              </div>
              <div className="py-6">
              <a href="#" className="text-sm/6 font-semibold text-green-600">
            &nbsp; Call Now <span aria-hidden="true">+91-8802282721 / +91-8700667107</span>
          </a>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  )
}