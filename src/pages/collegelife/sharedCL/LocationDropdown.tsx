import { Select, Option } from '@material-tailwind/react';

export default function LocationDropdown() {
    return (
        <div className="w-72">
            <Select
                label="Select Location"
                variant="outlined"
                color="green"
                animate={{
                    mount: { y: 0 },
                    unmount: { y: 25 },
                }}
            >
                <Option>Wise</Option>
                <Option>Norton</Option>
                <Option>Big Stone Gap</Option>
                <Option>Abingdon</Option>
                <Option>Kingsport</Option>
            </Select>
        </div>
    );
}
