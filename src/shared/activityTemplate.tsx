type Activity = {
    id: number;
    title: string;
    description: string;
};

type Props = {
    array: Activity[];
};

function activityTemplate({ array }: Props) {
    return <div> Hello </div>;
}

export default activityTemplate;
