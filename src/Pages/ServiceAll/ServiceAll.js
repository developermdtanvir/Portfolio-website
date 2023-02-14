import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { ServiceCard } from '../Home/Service/ServiceCard';

export const ServiceAll = () => {
    const services = useLoaderData();
    console.log(services);
    return (
        <div className=' py-20 w-[100%]'>
            <div className=' grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-3 gap-10'>
                {
                    services.map(services => <ServiceCard service={services} />)
                }
            </div>
        </div>
    )
}
