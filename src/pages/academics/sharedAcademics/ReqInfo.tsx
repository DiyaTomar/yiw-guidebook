type Props = {
    sectionName: string;
    sectionList: string[];
};

const listStyling = 'list-disc list-inside text-xl py-2';

function ReqInfo({ sectionName, sectionList }: Props) {
    return (
        <div className="mx-auto w-2/3 text-black py-8 text-2xl">
            {sectionName}
            <ul className="mt-2 p-4">
                {sectionList.map((listItem, index) => (
                    <li key={`${index + Date.now()}`} className={listStyling}>
                        {listItem}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ReqInfo;
