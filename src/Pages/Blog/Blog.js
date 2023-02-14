import React, { useContext } from 'react';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';

export const Blog = () => {


    const { useDocumentTitle } = useContext(AuthContext);
    useDocumentTitle('Blog Page');



    return (
        <div>
            <h1 className=' mt-40 text-5xl font-bold'>SQL vs NoSQL: When to Use Which</h1>
            <div className=' py-40'>
                <img className=' rounded-md' src='https://www.freecodecamp.org/news/content/images/size/w2000/2022/09/maxresdefault.jpeg' alt='' />
            </div>
            <article className=' space-y-10 font-medium md:text-xl lg:text-2xl sm:text-lg'>
                <h1 className=' text-4xl font-semibold'>When should you use a SQL database and when should you use a NoSQL database?</h1>
                <p>We just published a course on the freeCodeCamp.org YouTube channel that will teach you the differences between NoSQL and SQL databases as well as when and why to use each kind of database.</p>
                <p>Ania Kubow developed this course. Ania is one of the most popular tutorial creators on the freeCodeCamp.org YouTube channel.</p>
                <p>In this course, you are going to go back to basics to learn what exactly a database management system (DBMS) is and how it's defined. You are then going to learn database design and why it's important as well as what a database management system is.</p>
                <p>You'll then learn about relational databases followed by a SQL crash course. You will learn about non-relational databases and then learn the pros and cons of using relational databases versus non-relational databases. Finally, you will learn some use cases followed by a NoSQL crash course.</p>
                <p>Here are the sections in this course:</p>
                <ul className=' space-y-4 text-xl'>
                    <li>* What Actually is a database</li>
                    <li>* What is database management system</li>
                    <li>* Demo: Creating a database</li>
                    <li>* Common Database Models</li>
                    <li>* Relational database</li>
                    <li>* SQL</li>
                    <li>* No Relational database</li>
                    <li>* Pros and Cons: Comparing RDBMS and NoSQL</li>
                    <li>* Wide Column Database</li>
                    <li>* Document Database</li>
                    <li>* Key-Value Database</li>
                    <li>* Multi-Model Database</li>
                    <li>* Use cases: When to use RDBMS or NoSQL</li>
                </ul>
            </article>
        </div>
    )
}
