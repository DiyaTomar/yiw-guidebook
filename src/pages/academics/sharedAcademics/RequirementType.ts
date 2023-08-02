export type RequirementType = {
    main: string;
    note?: string[];
};

export type AllRequirementsType = {
    id: number;
    sectionName: string;
    sectionList: RequirementType[];
};
