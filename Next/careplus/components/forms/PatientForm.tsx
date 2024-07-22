
"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import
{
    Form
} from "@/components/ui/form"
import CustomFormField from "../CustomFormField"
import SubmitButton from "../SubmitButton"
import { useState } from "react"
import { useRouter } from "next/navigation"

const formSchema = z.object({
    name: z.string().min(2, {
        message: "Full name must be at least 2 characters.",
    }),
    email: z.string().email({
        message: "Please enter a valid email address.",
    }),
    phone: z.string().regex(/^\+[0-9]{2}\s[0-9]{3}\s[0-9]{3}\s[0-9]{4}$/),
})

export enum FormFieldType{
    INPUT = "input",
    CHECKBOX = "checkbox",
    EMAIL = "email",
    PHONE_INPUT = "phoneInput",
    TEXTAREA = "textarea",
    DATE_PICKER = "datePicker",
    SELECT = "select",
    SKELETON = "skeleton",
}

const PatientForm = () =>
{

    const router = useRouter();

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            phone: "",
        },

    })

    async function onSubmit(values: z.infer<typeof formSchema>)
    {
        setIsLoading(true);

        try{
            // const userData = { name: values.name, email: values.email, phone: values.phone }

            // const user = await createUser(userData);

            // if(user){
            //     router.push(`/patients/${user.id}/register`)
            // }
        }
        catch(error){
            console.log(error)
        }
        finally{
            setIsLoading(false);
        }
    }
    
    const [isLoading, setIsLoading] = useState(false);

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <section className="flex flex-col my-8">
                    <h1 className="text-4xl font-bold">Hi there, ....</h1>
                    <p className="mt-5 text-lg -tracking-tighter">Get Started with Appointments.</p>
                </section>
                <CustomFormField
                    formFieldType={FormFieldType.INPUT}
                    control={form.control}
                    name="name"
                    label="Full name"
                    placeholder="John Doe"
                    iconSrc="/assets/icons/user.svg"
                    iconAlt="user"
                />

                <CustomFormField
                    formFieldType={FormFieldType.INPUT}
                    control={form.control}
                    name="email"
                    label="Email"
                    placeholder="johndoe@gmail.com"
                    iconSrc="/assets/icons/email.svg"
                    iconAlt="email"
                />

                <CustomFormField
                    formFieldType={FormFieldType.PHONE_INPUT}
                    control={form.control}
                    name="phone"
                    label="Phone number"
                    placeholder="(555) 123-4567"
                />
                <SubmitButton isLoading={isLoading}>
                    Get Started
                </SubmitButton>
            </form>
        </Form>
    )
}

export default PatientForm