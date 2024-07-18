"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import {
    InputOTP,
    InputOTPGroup,
    InputOTPSlot,
} from "@/components/ui/input-otp"
import { useRouter, useSearchParams } from "next/navigation"
import { REGEXP_ONLY_DIGITS_AND_CHARS } from "input-otp"
import { toast } from "sonner"

const FormSchema = z.object({
    pin: z.string().min(6, {
        message: "Your one-time password must be 6 characters.",
    }),
})

export function PassCode() {

    const params = useSearchParams()
    const router = useRouter()
    const uniqueKey = params.get('uniqueKey')
    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            pin: "",
        },
    })

    async function onSubmit(data: z.infer<typeof FormSchema>) {

        const res = await fetch(`http://localhost:3000/api/shareYourCode/verifyCode?uniqueKey=${uniqueKey}`, {
            cache: 'no-store',
            method: 'POST',
            body: JSON.stringify(data),
            credentials: 'include'
        })
        const resData = await res.json();
        if (resData?.success) {
            router.back()
        }
        else {
            // toast({ title: 'Message', description: resData?.msf })
            toast(resData?.msg)
        }
        console.log(resData, 'resData')
        // The return value is *not* serialized
        // You can return Date, Map, Set, etc.



    }

    return (
        <div className="grid place-items-center h-[75vh] w-full">
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="w-fit space-y-6">
                    <FormField
                        control={form.control}
                        name="pin"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="text-2xl text-white">Please Verify</FormLabel>
                                <FormControl>
                                    <InputOTP maxLength={6}
                                        pattern={REGEXP_ONLY_DIGITS_AND_CHARS} {...field}>
                                        <InputOTPGroup className="text-white">
                                            <InputOTPSlot index={0} />
                                            <InputOTPSlot index={1} />
                                            <InputOTPSlot index={2} />
                                            <InputOTPSlot index={3} />
                                            <InputOTPSlot index={4} />
                                            <InputOTPSlot index={5} />
                                        </InputOTPGroup>
                                    </InputOTP>
                                </FormControl>
                                <FormDescription>
                                    Please enter the valid code sent by owner.
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <Button type="submit">Submit</Button>
                </form>
            </Form>
        </div>
    )
}

