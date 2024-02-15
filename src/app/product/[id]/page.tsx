import React from 'react'
import { Slider } from '@/components';
import detective1 from "./img/detective1.jpg";
import { MdMenuBook } from "react-icons/md";
import { MdOutlineBookOnline } from "react-icons/md";
import { FaHeadphones } from "react-icons/fa";
import { FaStar } from "react-icons/fa"
import reviewer1 from "./img/reviewer1.avif";
import reviewer2 from "./img/reviewer2.avif";

const page = () => {
  return (
    <div className='px-4 h-[200vh] flex flex-col gap-1'>
        <div className='flex flex-row h-[35%] gap-1'>
            <div className='flex basis-1/3 bg-white rounded-[20px] justify-center'>
                <img src={detective1.src} className='scale-95'/>
            </div>
            <div className='flex flex-col basis-2/3 gap-1'>
                <div className='flex flex-col justify-between bg-white h-[85%]  rounded-[20px] pt-4 pl-4'>
                    <div className='flex flex-col'>
                        <div className='flex flex-row gap-3 text-gray-500'>
                            <p className=''>Detective</p>
                            <p className=''>-</p>
                            <p className=''>Arthur Conan Doyle</p>
                        </div>
                    </div>
                    <div className='flex flex-col gap-5'>
                        <div className='flex flex-col gap-4'>
                            <p className='text-5xl font-semibold'>The Adventures of Sherlock Holmes</p>  
                            <p className='font-semibold pl-2'>By Arthur Conan Doyle</p>
                            <div className='flex flex-row w-[80%] gap-5 pt-12'>
                                <button className='h-[100px] group flex basis-1/3 flex-col focus:bg-red-200 hover:bg-red-100 focus:border-0 ease-in-out duration-500 border-2 border-gray-400 rounded-[20px] p-3 gap-2 '>
                                    <div className='flex flex-row gap-1 items-center'>
                                        <MdMenuBook/>
                                        <p>Hardcover</p>
                                    </div>
                                    <div>
                                        <p className='text-2xl group-focus:text-4xl font-semibold ease-in-out duration-500'>$39.59</p>
                                    </div>
                                </button>
                                <button className='group flex basis-1/3 flex-col focus:bg-red-200 hover:bg-red-100 ease-in-out focus:border-0 duration-500 border-2 border-gray-400 rounded-[20px] p-3 gap-2'>
                                    <div className='flex flex-row gap-1 items-center'>
                                        <MdOutlineBookOnline/>
                                        <p>eBook</p>
                                    </div>
                                    <div>
                                        <p className='text-2xl group-focus:text-4xl font-semibold ease-in-out duration-500'>$32.59</p>
                                    </div>
                                </button>
                                <button className='group flex basis-1/3 flex-col border-2 focus:bg-red-200 hover:bg-red-100 focus:border-0 ease-in-out duration-500 border-gray-400 rounded-[20px] p-3 gap-2'>
                                    <div className='flex flex-row gap-1 items-center'>
                                        <FaHeadphones/>
                                        <p>AudioBook</p>
                                    </div>
                                    <div>
                                        <p className='text-2xl group-focus:text-4xl font-semibold ease-in-out duration-500'>$27.59</p>
                                    </div>
                                </button>
                            </div>
                        </div>
                        <div className='grid grid-cols-4 grid-rows-4 gap-4 pt-5 pl-4 pb-5'>
                            <div className='flex flex-row text-gray-500'>Publisher</div>
                            <div className='flex flex-row font-semibold'>2</div>
                            <div className='flex flex-row text-gray-500'>Print Length</div>
                            <div className='flex flex-row font-semibold'>4</div>
                            <div className='flex flex-row text-gray-500'>Publication Date</div>
                            <div className='flex flex-row font-semibold'>6</div>
                            <div className='flex flex-row text-gray-500'>Dimensions</div>
                            <div className='flex flex-row font-semibold'>8</div>
                            <div className='flex flex-row text-gray-500'>Language</div>
                            <div className='flex flex-row font-semibold'>10</div>
                            <div className='flex flex-row text-gray-500'>Age</div>
                            <div className='flex flex-row font-semibold'>12</div>
                        </div>
                    </div>
                </div>
                <div className='flex flex-row h-[15%] gap-1'>
                    <div className='flex basis-2/3 bg-red-200 rounded-[20px] cursor-pointer justify-center items-center'>
                            <p className='text-4xl font-medium'>Add To Cart</p>
                    </div>
                    <div className='flex basis-1/3 bg-orange-200 rounded-[20px] cursor-pointer justify-center items-center'>
                        <p className='text-4xl font-medium'>WishList</p>
                    </div>
                </div>
            </div>
        </div>
        <Slider/>
        <div className='flex flex-col bg-white rounded-[20px] h-[30%]'>
            <div className='flex flex-row justify-between pt-4 pl-4 pr-4'>
                <div>
                    <p className='font-semibold'>Description</p>
                </div>
                <div>
                    <p className='font-semibold pr-48'>Fragment</p>
                </div>
                <div className='flex flex-row gap-5'>
                    <p>Nominated Books</p>
                    <p>Bestsellers</p>
                    <p>Masters of Genre</p>
                </div>
            </div>
            <div className='flex flex-row pl-4 pr-4 gap-10'>
                <div className='flex basis-1/3 '>
                    <p className='text-2xl pt-12'>The Adventures of Sherlock Holmes is a collection of twelve short stories by Arthur Conan Doyle. 
                        Published in 1892, the stories involve the peculiar exploits of the sharp-witted detective Sherlock Holmes, 
                        whose fierce energy and acute observation and reasoning skills enable him to solve the strangest of crimes.</p>
                </div>
                <div className='flex basis-2/3 pt-12'>
                    <p>As I passed the
                        well-remembered door, which must always be associated in my mind with my wooing, and with the dark
                        incidents of the Study in Scarlet, I was seized with a
                        keen desire to see Holmes again, and to know how he
                        was employing his extraordinary powers. His rooms
                        were brilliantly lit, and, even as I looked up, I saw
                        his tall, spare figure pass twice in a dark silhouette
                        against the blind. He was pacing the room swiftly,
                        eagerly, with his head sunk upon his chest and his
                        hands clasped behind him. To me, who knew his
                        every mood and habit, his attitude and manner told
                        their own story. He was at work again. He had risen
                        out of his drug-created dreams and was hot upon the
                        scent of some new problem. I rang the bell and was
                        shown up to the chamber which had formerly been
                        in part my own.
                        His manner was not effusive. It seldom was; but
                        he was glad, I think, to see me. With hardly a word
                        spoken, but with a kindly eye, he waved me to an
                        armchair, threw across his case of cigars, and indicated a spirit case and a gasogene in the corner. Then
                        he stood before the fire and looked me over in his
                        singular introspective fashion.
                        “Wedlock suits you,” he remarked. “I think, Watson, that you have put on seven and a half pounds
                        since I saw you.”
                        “Seven!” I answered.
                        “Indeed, I should have thought a little more. Just
                        a trifle more, I fancy, Watson. And in practice again, I
                        observe. You did not tell me that you intended to go
                        into harness.”
                        “Then, how do you know?”
                        “I see it, I deduce it. How do I know that you
                        have been getting yourself very wet lately, and that
                        you have a most clumsy and careless servant girl?”...
                    </p>
                </div>
            </div>
        </div>
        <div className='h-[40%] bg-black rounded-[20px] flex flex-row gap-1 pb-4'>
            <div className='basis-1/3 h-full bg-red-200 rounded-[20px] pt-4 pl-4 pr-4'>
                <p className='font-semibold'>Editorial Reviews</p>
                <div className='flex flex-col h-full gap-10 pt-5'>
                    <div className='flex basis-1/3 flex-col gap-3 text-2xl'>
                        <p>"The Adventures of Sherlock Holmes by Sir Arthur Conan Doyle is a timeless masterpiece 
                            featuring twelve captivating short stories. Doyle skillfully weaves intricate plots that 
                            showcase Holmes' unparalleled deductive skills, while the dynamic between Holmes and Watson 
                            adds depth."
                        </p>
                        <p className='font-semibold'>-The New Yorker</p>
                    </div>
                    <div className='flex basis-1/3 flex-col gap-3 text-2xl'>
                        <p>"Sir Arthur Conan Doyle's The Adventures of Sherlock Holmes is a literary triumph that has 
                            captivated readers for generations. With a dozen intricately woven short stories, 
                            Doyle showcases Holmes' brilliant deductive prowess in diverse cases, keeping readers hooked."
                        </p>
                        <p className='font-semibold'>-Lionel Trilling</p>
                    </div>
                </div>
            </div>
            <div className='basis-2/3 h-full bg-white rounded-[20px] pt-4 pl-4 pr-4'>
                <p className='font-semibold'>Customer Reviews</p>
                <div className='flex flex-col pt-10 gap-14'>
                    <div className='flex flex-col'>
                        <div className='flex flex-row justify-between'>
                            <div className='flex flex-row'>
                                <img className="w-12 h-12 rounded-full" src={reviewer1.src}/>
                                <div className='flex flex-col pl-4'>
                                    <p>Adam G.</p>
                                    <p className='text-gray-400'>03.03.2022</p>
                                </div>
                            </div>
                            <div className='flex flex-row'>
                                <div className='flex flex-row items-center gap-4'>
                                    <div className='flex flex-row gap-1'>
                                        <FaStar/>
                                        <FaStar/>
                                        <FaStar/>
                                        <FaStar/>
                                    </div>
                                    <div>
                                        <p>4 / 5</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='pl-16 pt-3'>
                            <p>The Adventures of Sherlock Holmes is an absolute must-read for mystery enthusiasts and literature lovers alike. Sir Arthur Conan Doyle's storytelling prowess shines through in this collection of twelve gripping short stories. The brilliant detective, Sherlock Holmes, and his loyal companion, Dr. Watson, tackle a variety of intriguing cases, each with its own unique twist. The writing is captivating, with vivid descriptions transporting readers to Victorian London. The dynamic between Holmes and Watson adds a delightful layer to the narrative. A timeless classic that continues to captivate readers with its clever mysteries and enduring characters. Highly recommended!</p>
                        </div>
                    </div>
                    <div className='flex flex-col'>
                        <div className='flex flex-row justify-between'>
                            <div className='flex flex-row'>
                                <img className="w-12 h-12 rounded-full" src={reviewer2.src}/>
                                <div className='flex flex-col pl-4'>
                                    <p>Anderson D.</p>
                                    <p className='text-gray-400'>03.03.2022</p>
                                </div>
                            </div>
                            <div className='flex flex-row'>
                                <div className='flex flex-row items-center gap-4'>
                                    <div className='flex flex-row gap-1'>
                                        <FaStar/>
                                        <FaStar/>
                                        <FaStar/>
                                        <FaStar/>
                                        <FaStar/>
                                    </div>
                                    <div>
                                        <p>5 / 5</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='pl-16 pt-3'>
                            <p>The Adventures of Sherlock Holmes is an absolute must-read for mystery enthusiasts and literature lovers alike. Sir Arthur Conan Doyle's storytelling prowess shines through in this collection of twelve gripping short stories. The brilliant detective, Sherlock Holmes, and his loyal companion, Dr. Watson, tackle a variety of intriguing cases, each with its own unique twist. The writing is captivating, with vivid descriptions transporting readers to Victorian London. The dynamic between Holmes and Watson adds a delightful layer to the narrative. A timeless classic that continues to captivate readers with its clever mysteries and enduring characters. Highly recommended!</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default page