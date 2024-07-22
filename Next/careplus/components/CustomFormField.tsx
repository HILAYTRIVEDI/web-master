import
{
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"

import { Input } from "@/components/ui/input"
import { Control } from "react-hook-form"
import { FormFieldType } from "./forms/PatientForm"

interface CustomFormFieldProps
{
    control: Control<any>,
    formFieldType: FormFieldType,
    name: string,
    label: string,
    placeholder: string,
    iconSrc: string,
    iconAlt: string,
}

const CustomFormField = ({ control, formFieldType,name, label, placeholder, iconSrc, iconAlt }: CustomFormFieldProps) =>
{
    return (
        <FormField
            control={control}
            name={name}
            render={({ field }) => (
                <FormItem className="flex-1">
                    { formFieldType !== FormFieldType.CHECKBOX && label &&(
                        <FormLabel>{label}</FormLabel>
                    ) }
                </FormItem>
            )}
        />
    )
}

export default CustomFormField