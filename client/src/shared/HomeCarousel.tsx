/* eslint-disable react/no-unstable-nested-components */
import { Carousel } from '@material-tailwind/react';
import HomeImage from '../assets/ClinchTubing1.jpeg';
import HomeImage2 from '../assets/HomeImage2.jpeg';
import HomeImage3 from '../assets/HomeImage3.jpg';

const slides = [
    {
        id: 1,
        src: HomeImage,
        alt: '1',
    },
    {
        id: 2,
        src: HomeImage2,
        alt: '2',
    },
    {
        id: 3,
        src: HomeImage3,
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
