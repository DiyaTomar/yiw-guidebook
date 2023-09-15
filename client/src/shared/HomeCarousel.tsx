/* eslint-disable react/no-unstable-nested-components */
import { Carousel } from '@material-tailwind/react';
import HomeImage from '../assets/ClinchTubing1.jpeg';

const slides = [
    {
        id: 1,
        src: HomeImage,
        alt: '1',
    },
    {
        id: 2,
        src: 'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80',
        alt: '2',
    },
    {
        id: 3,
        src: 'https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80',
        alt: '3',
    },
];

function HomeCarousel() {
    return (
        <Carousel
            prevArrow={() => <div />}
            nextArrow={() => <div />}
            navigation={() => <div />}
            autoplay
            loop
            className="rounded-2xl"
        >
            {slides.map((slide) => (
                <img
                    key={slide.id}
                    src={slide.src}
                    alt={slide.alt}
                    className="h-full w-full object-cover"
                />
            ))}
        </Carousel>
    );
}

export default HomeCarousel;