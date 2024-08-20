"use client"
import { Copy } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Checkbox } from "../ui/checkbox"
import { FaShareNodes } from "react-icons/fa6";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useState } from "react"
import generateRandomString from "@/lib/generateRandomString"
import { toast } from 'sonner'
import copyToClipboard from "@/lib/copyToClipboard"
import { LuCopy } from "react-icons/lu";



const formSchema = z.object({
    title: z.string().min(2, {
        message: "Title must be at least 2 characters.",
    }),
    link: z.string().min(2, {
        message: "Link must be at least 2 characters.",
    }),
    isPrivate: z.boolean().default(false).optional(),
})


export function ShareModal({ codeContent }: { codeContent: string }) {
    const [uniqueString, setUniqueString] = useState(generateRandomString(6))
    const [link, setLink] = useState(`${process.env.NEXT_PUBLIC_DOMAIN}/shareYourCode/view/${uniqueString}`)
    const [isLoading, setIsLoading] = useState(false)
    // const { toast } = useToast()
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            link: link,
            isPrivate: false
        },
    })

    const postData = async (data: any) => {
        try {
            console.log(data)
            setIsLoading(true)
            const response = await fetch(`${process.env.NEXT_PUBLIC_DOMAIN}/api/shareYourCode`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ ...data, code: codeContent, uniqueKey: uniqueString }),
            })
            console.log(response)
            if (!response?.ok) {
                setIsLoading(false)
                return toast.message('Request Failed', {
                    description: "There was an issue processing your request.",
                })

            }
            const result = await response.json();
            if (result?.data?.secretKey) {
                toast(<div className="bg-slate-900 rounded-md shadow-2xl grid place-items-center gap-4 w-full p-4 m-0">
                    <div className="w-full text-left font-medium text-white">Secret Code</div>
                    <div className="flex gap-3 justify-between items-center w-full">{result?.data?.secretKey?.split('')?.map((_: string, idx: number) => {

                        return <div key={idx} className="size-10 text-white bg-slate-500/30 grid place-items-center rounded-md">{_}</div>
                    })}</div>
                    <button
                        onClick={() => {
                            copyToClipboard(result?.data?.secretKey)
                        }}
                        type="button"
                        className="bg-slate-100 w-full py-2 flex justify-center items-center gap-2" type="button"><span>Copy</span> <LuCopy /></button>
                </div>, { duration: 10000, className: 'rounded-md border-none outline-none shadow p-0.5' });
            }
            console.log(result, "result")


            setIsLoading(false)
        } catch (error) {
            toast.message('Request Failed', {
                description: 'There was an issue processing your request.',
            })

            setIsLoading(false)

            console.log(error)
        }
    }

    function onSubmit(values: z.infer<typeof formSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        postData(values)
        console.log(values, "values")
    }


    return (
        <Dialog>
            <DialogTrigger asChild>
                <button className='active:bg-black/50 transition-all bg-black/30 p-2 rounded-md' type="button"><FaShareNodes /></button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
                <DialogHeader>
                    <DialogTitle>Share link</DialogTitle>
                    <DialogDescription>
                        Anyone who has this link will be able to view this.
                    </DialogDescription>
                </DialogHeader>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                        <FormField
                            control={form.control}
                            name="link"
                            render={({ field }) => (
                                <FormItem>
                                    {/* <FormLabel>Link</FormLabel> */}
                                    <div className="flex items-center space-x-2">
                                        <FormControl>
                                            <Input readOnly placeholder="shadcn" {...field} />
                                        </FormControl>
                                        {
                                            isLoading ? <Button type="button" size="sm" className="px-3 relative">
                                                <div className="absolute w-full h-full grid place-items-center">
                                                    <div className="border-4 size-6 border-white/60 border-b-gray-100/90 animate-spin duration-500 rounded-full"></div>
                                                </div>
                                                <div className="h-4 w-4" />
                                            </Button> : <Button type="submit" size="sm" className="px-3 relative">

                                                <span className="sr-only">Copy</span>
                                                <Copy className="h-4 w-4" />
                                            </Button>
                                        }
                                    </div>
                                    {/* <FormDescription>
                                        This is your public display name.
                                    </FormDescription> */}
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="title"
                            render={({ field }) => (
                                <FormItem>
                                    {/* <FormLabel>Title</FormLabel> */}
                                    <FormControl>
                                        <Input placeholder="Enter Title Here..." {...field} />
                                    </FormControl>
                                    {/* <FormDescription>
                                        This is your public display name.
                                    </FormDescription> */}
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="isPrivate"
                            render={({ field }) => (
                                <FormItem>
                                    <div className="flex items-center space-x-2">
                                        <FormControl>
                                            <Checkbox checked={field.value}
                                                onCheckedChange={(e) => {
                                                    field.onChange(e);
                                                    form.setValue('link', `${link}/?isPrivate=${e}`)
                                                    console.log(e);
                                                }}

                                            />
                                        </FormControl>
                                        <FormLabel>Private</FormLabel>
                                    </div>
                                    {/* <FormDescription>
                                        This is your public display name.
                                    </FormDescription> */}
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </form>
                </Form>

                {/* <DialogFooter className="sm:justify-start">
                    <DialogClose asChild>
                        <Button
                            
                            type="button" variant="secondary">
                            Close
                        </Button>
                    </DialogClose>
                </DialogFooter> */}
            </DialogContent>
        </Dialog>

    )
}

