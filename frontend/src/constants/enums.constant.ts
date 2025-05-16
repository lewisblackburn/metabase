import { buildEnumOptions, createOptionSchema } from '@/utils/enum-utils';

// Department Types
export const departmentLabels: Record<Department_Types_Enum, string> = {
    [Department_Types_Enum.Cast]: 'Cast',
    [Department_Types_Enum.Crew]: 'Crew',
    [Department_Types_Enum.Production]: 'Production',
    [Department_Types_Enum.Writing]: 'Writing'
};
export const departmentOptions = buildEnumOptions(Department_Types_Enum, departmentLabels);
export const departmentOptionsSchema = createOptionSchema(Department_Types_Enum);
