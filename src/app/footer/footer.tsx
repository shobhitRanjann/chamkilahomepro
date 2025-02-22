"use client"
import Link from 'next/link';
import { useRouter,redirect } from 'next/navigation'

export default function Footer() {
    const router = useRouter()
      const handlemobileview=(val:string)=>{
          if(val==='contact'){
            redirect("/contactus");
          }
          router.push(`/#${val}`);
      }


    return (<>
        <footer className="bg-white dark:bg-white">
            <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                <div className="md:flex md:justify-between">
                    <div className="mb-6 md:mb-0">
                        <Link href="/" className="flex items-center">
                            <img src="/chamkilahomelogo.png" className="h-20 w-20 me-3" alt="FlowBite Logo" />
                            <span className="self-center text-2xl font-semibold whitespace-nowrap text-black dark:text-black">ChamkilaHomes</span>
                        </Link>
                    </div>
                    <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                        <div>
                            <h2 className="mb-6 text-sm font-bold text-gray-900 uppercase dark:text-gray-900">Services</h2>
                            <ul className="text-gray-500 dark:text-gray-500 font-medium">
                                <li className="mb-4">
                                    <a onClick={()=>handlemobileview('bookservice')} className="hover:underline">House Cleaning</a>
                                </li>
                                <li className="mb-4">
                                    <a onClick={()=>handlemobileview('bookservice')} className="hover:underline">Washroom Cleaning</a>
                                </li>
                                <li className="mb-4">
                                    <a onClick={()=>handlemobileview('bookservice')} className="hover:underline">House Cleaning</a>
                                </li>
                                <li>
                                    <a onClick={()=>handlemobileview('bookservice')} className="hover:underline">Washroom Cleaning</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-bold text-gray-900 uppercase dark:text-gray-900">Follow us</h2>
                            <ul className="text-gray-500 dark:text-gray-500 font-medium">
                                <li className="mb-4">
                                    <a href="https://www.facebook.com/profile.php?id=61572985831834" className="hover:underline ">Facebook</a>
                                </li>
                                <li>
                                    <a href="https://www.instagram.com/chamkilahomes/" className="hover:underline">Instagram</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-bold text-gray-900 uppercase dark:text-gray-900">Quick Links</h2>
                            <ul className="text-gray-500 dark:text-gray-500 font-medium">
                                <li className="mb-4">
                                    <a onClick={()=>handlemobileview('aboutus')} className="hover:underline">About-Us</a>
                                </li>
                                <li>
                                    <a onClick={()=>handlemobileview('contact')} className="hover:underline">Contact-Us</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-200 lg:my-8" />
            </div>
        </footer>
    </>)
}