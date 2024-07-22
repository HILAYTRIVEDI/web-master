
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

const formSchema = z.object({
    username: z.string().min(2, {
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
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            username: "",
        },
    })

    function onSubmit(values: z.infer<typeof formSchema>)
    {
        console.log(values)
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <section className="flex flex-col my-16">
                    <h1 className="text-4xl font-bold">Hi there, ....</h1>
                    <p className="mt-5 text-lg -tracking-tighter">Get Started with Appointments.</p>
                </section>
                <CustomFormField 
                    control={form.control}
                    formFieldType={FormFieldType.INPUT}
                    name="name"
                    label="Full Name"
                    placeholder="John Doe"
                    iconSrc="/assets/icons/user.svg"
                    iconAlt="User Icon"

                />
                <Button type="submit" className="w-full bg-green-500 hover:bg-dark-500 text-white">Submit</Button>
            </form>
        </Form>
    )
}

export default PatientForm