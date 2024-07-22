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
import Image from "next/image"
import { FormFieldType } from "./forms/PatientForm"
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'

interface CustomFormFieldProps
{
    control: Control<any>,
    formFieldType: FormFieldType,
    name: string,
    label?: string,
    placeholder?: string,
    iconSrc?: string,
    iconAlt?: string,
    disabled?: boolean,
    dateFormat?: string,
    showTimeSelect?: boolean,
    children?: React.ReactNode,
    renderSkeleton?: (field: any) => React.ReactNode,
}

const RenderField = ({field, props} : {field: any, props: CustomFormFieldProps}) => {
    const { name, label, placeholder, iconSrc, iconAlt } = props
    switch (props.formFieldType) {
        case FormFieldType.INPUT:
            return(
                <div className="flex rounded-md border border-dark-500 bg-dark-400">
                    {
                        iconSrc && (
                            <Image 
                                src={iconSrc} 
                                alt={iconAlt || "icon"} 
                                width={24} 
                                height={24} 
                                className="ml-2"
                            />
                        )
                    }
                    <FormControl className="flex-1">
                        <Input 
                            {...field} 
                            placeholder={placeholder} 
                            className="shad-input border-0" 
                        />
                    </FormControl>
                </div>
            )
        case FormFieldType.PHONE_INPUT:
            return(
                <div className="flex rounded-md border border-dark-500 bg-dark-400">
                    {
                        iconSrc && (
                            <Image 
                                src={iconSrc} 
                                alt={iconAlt || "icon"} 
                                width={24} 
                                height={24} 
                                className="ml-2"
                            />
                        )
                    }
                    <FormControl className="flex-1">
                        <PhoneInput
                            placeholder="Enter phone number"
                            defaultCountry="US"
                            international
                            withCountryCallingCode
                            value={field.value as E164Number | undefined}
                            className="shad-input border-0 px-4"
                            onChange={field.onChange}
                        />
                    </FormControl>
                </div>
            )
        default:
            return null
    }
}

const CustomFormField = ( props : CustomFormFieldProps) =>
{
    const { control, formFieldType, name, label, placeholder, iconSrc, iconAlt } = props
    return (
        <FormField
            control={control}
            name={name}
            render={({ field }) => (
                <FormItem className="flex-1">
                    { formFieldType !== FormFieldType.CHECKBOX && label &&(
                        <FormLabel>{label}</FormLabel>
                    ) }
                    <RenderField  field={field} props={props} />
                    <FormMessage  className="shad-error" />
                </FormItem>
            )}
        />
    )
}

export default CustomFormField