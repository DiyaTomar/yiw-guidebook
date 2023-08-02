import { RequirementType } from './RequirementType';

type Props = {
    id: number;
    sectionName: string;
    sectionList: RequirementType[];
};

const listStyling = 'list-disc text-xl py-2 leading-9';

function ReqInfoCard({ id, sectionName, sectionList }: Props) {
    return (
        <div className="mx-auto w-2/3 text-black py-8 text-4xl">
            {sectionName}
            <ul className="mt-2 p-4 ml-8">
                {sectionList.map((listItem) => (
                    <li key={id} className={listStyling}>
                        {listItem.main}
                        <ul className="ml-24">
                            {listItem.note?.map((noteItem, index) => (
                                <li
                                    key={`${index + Date.now()}`}
                                    className={listStyling}
                                >
                                    {noteItem}
                                </li>
                            ))}
                        </ul>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ReqInfoCard;
