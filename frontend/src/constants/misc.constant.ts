import { Gender_Types_Enum, Order_By } from '@/generated/graphql';
import { buildEnumOptions, createOptionSchema } from '@/utils/enum-to-options';

export const orderEnumMap = {
    asc: Order_By.Asc,
    desc: Order_By.Desc
} as const;

// Genders
export const genderLabels: Record<Gender_Types_Enum, string> = {
    [Gender_Types_Enum.Female]: 'Female',
    [Gender_Types_Enum.Male]: 'Male',
    [Gender_Types_Enum.Other]: 'Other'
};
export const genderOptions = buildEnumOptions(Gender_Types_Enum, genderLabels);
export const genderOptionsSchema = createOptionSchema(Gender_Types_Enum);
