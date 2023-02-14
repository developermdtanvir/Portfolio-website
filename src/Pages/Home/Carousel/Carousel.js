import React from 'react'
import img1 from '../../../assets/carousel/carousel-1.webp'
import img2 from '../../../assets/carousel/carousel-2.webp'
import img3 from '../../../assets/carousel/carousel-3.webp'
import img4 from '../../../assets/carousel/carousel-4.webp'
import img5 from '../../../assets/carousel/carousel-5.webp'
import { CarouselItem } from './CarouselItem'
export const Carousel = () => {

    const carouselItem = [
        {
            next: 2,
            prev: 5,
            id: 1,
            img: img1,
            title: "যারা উচ্চশিক্ষা বা চাকরির জন্য বিদেশে যেতে চান।যারা উচ্চশিক্ষা শেষে বা দেশে  বসবাসরত অবস্থায় বিদেশে স্থায়ীভাবে বসবাসের জন্য আবেদন করতে চান যারা আগে পরীক্ষা দিয়েছেন কিন্তু নিজের IELTS Band Score বাড়াতে চান।"
        },
        {
            next: 3,
            prev: 1,
            id: 2,
            img: img2,
            title: "ডিজিটাল মার্কেটিং সেক্টরের একটি বিশাল অংশ দখল করে রেখেছে ফেসবুক মার্কেটিং। বাংলাদেশে সবচেয়ে বেশি ব্যবহারকারী রয়েছে এই সোশ্যাল মিডিয়া সাইটে। তাই আপনি যে ব্যবসাই করুন না কেন, নিশ্চিতভাবে ধরে নিতে পারেন,"
        },
        {
            next: 4,
            prev: 2,
            id: 3,
            img: img3,
            title: "সাবলীলভাবে ইংরেজিতে কথা বলতে পারা এই যুগে একটি গুরুত্বপূর্ণ দক্ষতা। স্পোকেন ইংলিশ স্কিল থাকলে জীবনের প্রতিটি পর্যায়েই এগিয়ে থাকা যায়। পড়াশোনা, ক্যারিয়ার, প্রতিযোগিতামূলক পরীক্ষা,"
        },
        {
            next: 5,
            prev: 3,
            id: 4,
            img: img4,
            title: "সেরা শিক্ষকের তৈরি ক্লাস নোটস, লেকচার শিট এবং আকর্ষণীয় অফার পেতে শেয়ার করুন আপনার ফোন নাম্বার"
        },
        {
            next: 1,
            prev: 4,
            id: 5,
            img: img5
        },
    ]
    return (
        <div className=' py-20 rounded-md'>

            <div className="carousel w-full rounded-md">
                {
                    carouselItem.map(item => <CarouselItem item={item} />)
                }
            </div>
        </div>
    )
}
