import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import TestimonialCard from './CardInfo/TestimonialCard';
export default function CarouselPage() {
    return (
        <Carousel infiniteLoop={true} autoPlay={true} Interval={5000} showStatus={false}>
            <TestimonialCard name="Alex Wurst" description="This is the best Mediterranean food I've ever had!"/>
            <TestimonialCard name="Jacob Walker" description="Amazing staff, well decorated and amazing food."/>
            <TestimonialCard name="Sarah Raj" description="Very cozy and welcoming vibe, will definitiely be coming here again."/>
            <TestimonialCard name="Kevin Lee" description="A great restaurant to bring your family to. Met the owners, very nice and down to 
                earth people!"/>
            <TestimonialCard name="Martin Smith" description="The variety in dishes beats any other Mediterranean restaurants in the midwest."/>
            <TestimonialCard name="George Jackson" description="The food here was delicious! Everyone should try this place
                 out at least once if they live in Chicago."/>
            <TestimonialCard name="Emilia Goldberg" description="I came to Little Lemon after a 4 hour flight from Seatte.
                 A perfect way to end a long day of travel!"/>
            <TestimonialCard name="Juliette Villeneuve" description="I love the atmosphere, so relaxing and beautiful!"/>
             </Carousel>
    )
}
