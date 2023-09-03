import {
    Card,
    CardBody,
    CardFooter,
    Typography,
    Button,
} from '@material-tailwind/react';
import { Link } from 'react-router-dom';

type Props = {
    name: string;
    paragraph: string;
    major: string;
};

export default function TestimonialHomeCard({ name, paragraph, major }: Props) {
    return (
        <Card className="mt-6 w-80">
            <CardBody className="h-3/4 overflow-hidden text-left">
                {name}

                <Typography variant="h6" color="blue-gray" className="mb-2">
                    {major}
                </Typography>
                <div>
                    <Typography>{paragraph}</Typography>
                </div>
            </CardBody>
            <CardFooter className="pt-0 h-1/4">
                <Link to="/college-life/student-experiences">
                    <Button color="indigo">Read More</Button>
                </Link>
            </CardFooter>
        </Card>
    );
}
