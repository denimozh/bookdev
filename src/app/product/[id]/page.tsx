import React from 'react';
import { Slider } from '@/components';
import { FaStar } from 'react-icons/fa';
import reviewer1 from './img/reviewer1.avif';
import reviewer2 from './img/reviewer2.avif';
import { ProductType } from '@/types/types';
import Price from '@/components/Price';

const getData = async (id: string) => {
    const res = await fetch(`http://localhost:3000/api/products/${id}`, {
        cache: 'no-store',
    });

    if (!res.ok) {
        throw new Error('Failed!');
    }

    return res.json();
};

const page = async ({ params }: { params: { id: string } }) => {
    const singleProduct: ProductType = await getData(params.id);
    return (
        <div className="px-4 h-[200vh] flex flex-col gap-1">
            <div className="flex flex-row h-[35%] gap-1">
                <div className="flex basis-1/3 bg-white rounded-[20px] justify-center">
                    <img src={singleProduct.img} className="scale-95" />
                </div>
                <div className="flex flex-col basis-2/3 gap-1">
                    <Price product={singleProduct} />
                </div>
            </div>
            <Slider />
            <div className="flex flex-col bg-white rounded-[20px] h-[30%]">
                <div className="flex flex-row justify-between pt-4 pl-4 pr-4">
                    <div>
                        <p className="font-semibold">Description</p>
                    </div>
                    <div>
                        <p className="font-semibold pr-48">Fragment</p>
                    </div>
                    <div className="flex flex-row gap-5">
                        <p>Nominated Books</p>
                        <p>Bestsellers</p>
                        <p>Masters of Genre</p>
                    </div>
                </div>
                <div className="flex flex-row pl-4 pr-4 gap-10">
                    <div className="flex basis-1/3 ">
                        <p className="text-2xl pt-12">{singleProduct.desc}</p>
                    </div>
                    <div className="flex basis-2/3 pt-12">
                        <p>
                            As I passed the well-remembered door, which must
                            always be associated in my mind with my wooing, and
                            with the dark incidents of the Study in Scarlet, I
                            was seized with a keen desire to see Holmes again,
                            and to know how he was employing his extraordinary
                            powers. His rooms were brilliantly lit, and, even as
                            I looked up, I saw his tall, spare figure pass twice
                            in a dark silhouette against the blind. He was
                            pacing the room swiftly, eagerly, with his head sunk
                            upon his chest and his hands clasped behind him. To
                            me, who knew his every mood and habit, his attitude
                            and manner told their own story. He was at work
                            again. He had risen out of his drug-created dreams
                            and was hot upon the scent of some new problem. I
                            rang the bell and was shown up to the chamber which
                            had formerly been in part my own. His manner was not
                            effusive. It seldom was; but he was glad, I think,
                            to see me. With hardly a word spoken, but with a
                            kindly eye, he waved me to an armchair, threw across
                            his case of cigars, and indicated a spirit case and
                            a gasogene in the corner. Then he stood before the
                            fire and looked me over in his singular
                            introspective fashion. “Wedlock suits you,” he
                            remarked. “I think, Watson, that you have put on
                            seven and a half pounds since I saw you.” “Seven!” I
                            answered. “Indeed, I should have thought a little
                            more. Just a trifle more, I fancy, Watson. And in
                            practice again, I observe. You did not tell me that
                            you intended to go into harness.” “Then, how do you
                            know?” “I see it, I deduce it. How do I know that
                            you have been getting yourself very wet lately, and
                            that you have a most clumsy and careless servant
                            girl?”...
                        </p>
                    </div>
                </div>
            </div>
            <div className="h-[40%] bg-black rounded-[20px] flex flex-row gap-1 pb-4">
                <div className="basis-1/3 h-full bg-red-200 rounded-[20px] pt-4 pl-4 pr-4">
                    <p className="font-semibold">Editorial Reviews</p>
                    <div className="flex flex-col h-full gap-10 pt-5">
                        <div className="flex basis-1/3 flex-col gap-3 text-2xl">
                            <p>
                                "The Adventures of Sherlock Holmes by Sir Arthur
                                Conan Doyle is a timeless masterpiece featuring
                                twelve captivating short stories. Doyle
                                skillfully weaves intricate plots that showcase
                                Holmes' unparalleled deductive skills, while the
                                dynamic between Holmes and Watson adds depth."
                            </p>
                            <p className="font-semibold">-The New Yorker</p>
                        </div>
                        <div className="flex basis-1/3 flex-col gap-3 text-2xl">
                            <p>
                                "Sir Arthur Conan Doyle's The Adventures of
                                Sherlock Holmes is a literary triumph that has
                                captivated readers for generations. With a dozen
                                intricately woven short stories, Doyle showcases
                                Holmes' brilliant deductive prowess in diverse
                                cases, keeping readers hooked."
                            </p>
                            <p className="font-semibold">-Lionel Trilling</p>
                        </div>
                    </div>
                </div>
                <div className="basis-2/3 h-full bg-white rounded-[20px] pt-4 pl-4 pr-4">
                    <p className="font-semibold">Customer Reviews</p>
                    <div className="flex flex-col pt-10 gap-14">
                        <div className="flex flex-col">
                            <div className="flex flex-row justify-between">
                                <div className="flex flex-row">
                                    <img
                                        className="w-12 h-12 rounded-full"
                                        src={reviewer1.src}
                                    />
                                    <div className="flex flex-col pl-4">
                                        <p>Adam G.</p>
                                        <p className="text-gray-400">
                                            03.03.2022
                                        </p>
                                    </div>
                                </div>
                                <div className="flex flex-row">
                                    <div className="flex flex-row items-center gap-4">
                                        <div className="flex flex-row gap-1">
                                            <FaStar />
                                            <FaStar />
                                            <FaStar />
                                            <FaStar />
                                        </div>
                                        <div>
                                            <p>4 / 5</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="pl-16 pt-3">
                                <p>
                                    The Adventures of Sherlock Holmes is an
                                    absolute must-read for mystery enthusiasts
                                    and literature lovers alike. Sir Arthur
                                    Conan Doyle's storytelling prowess shines
                                    through in this collection of twelve
                                    gripping short stories. The brilliant
                                    detective, Sherlock Holmes, and his loyal
                                    companion, Dr. Watson, tackle a variety of
                                    intriguing cases, each with its own unique
                                    twist. The writing is captivating, with
                                    vivid descriptions transporting readers to
                                    Victorian London. The dynamic between Holmes
                                    and Watson adds a delightful layer to the
                                    narrative. A timeless classic that continues
                                    to captivate readers with its clever
                                    mysteries and enduring characters. Highly
                                    recommended!
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <div className="flex flex-row justify-between">
                                <div className="flex flex-row">
                                    <img
                                        className="w-12 h-12 rounded-full"
                                        src={reviewer2.src}
                                    />
                                    <div className="flex flex-col pl-4">
                                        <p>Anderson D.</p>
                                        <p className="text-gray-400">
                                            03.03.2022
                                        </p>
                                    </div>
                                </div>
                                <div className="flex flex-row">
                                    <div className="flex flex-row items-center gap-4">
                                        <div className="flex flex-row gap-1">
                                            <FaStar />
                                            <FaStar />
                                            <FaStar />
                                            <FaStar />
                                            <FaStar />
                                        </div>
                                        <div>
                                            <p>5 / 5</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="pl-16 pt-3">
                                <p>
                                    The Adventures of Sherlock Holmes is an
                                    absolute must-read for mystery enthusiasts
                                    and literature lovers alike. Sir Arthur
                                    Conan Doyle's storytelling prowess shines
                                    through in this collection of twelve
                                    gripping short stories. The brilliant
                                    detective, Sherlock Holmes, and his loyal
                                    companion, Dr. Watson, tackle a variety of
                                    intriguing cases, each with its own unique
                                    twist. The writing is captivating, with
                                    vivid descriptions transporting readers to
                                    Victorian London. The dynamic between Holmes
                                    and Watson adds a delightful layer to the
                                    narrative. A timeless classic that continues
                                    to captivate readers with its clever
                                    mysteries and enduring characters. Highly
                                    recommended!
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default page;
