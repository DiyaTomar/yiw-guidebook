import ActivityCarousel from './ActivityCarousel';

type Activity = {
    id: number;
    title: string;
    description: string;
};

type Props = {
    array: Activity[];
};

function ActivityTemplate({ array }: Props) {
    return (
        <div className="md:flex flex-row-reverse pb-12">
            <div className="md:sticky h-96 w-1/3 top-16 mx-auto mt-16 mb-16">
                <ActivityCarousel />
            </div>
            <div className="w-2/5 mt-10 mx-auto ml-48">
                {array.map((activity) => (
                    <div className="py-7" key={activity.id}>
                        <h1 className="text-3xl font-semibold">
                            {activity.title}
                        </h1>
                        <p className="pt-4">{activity.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ActivityTemplate;
