"use client"

import { Copy } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "../ui/checkbox"
import { TbCopy } from "react-icons/tb";
import { FaShareNodes } from "react-icons/fa6";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "../ui/form"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"

const formSchema = z.object({
    title: z.string().min(2, {
        message: "Title must be at least 2 characters.",
    }),
    link: z.string().min(2, {
        message: "Link must be at least 2 characters.",
    }),
    isPublic: z.boolean().default(false).optional(),
})


export function ShareModal({ codeContent }: { codeContent: string }) {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            link: "https://ui.shadcn.com/docs/installation",
            isPublic: false
        },
    })



    function onSubmit(values: z.infer<typeof formSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
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
                                            <Input readOnly defaultValue='https://ui.shadcn.com/docs/installation' placeholder="shadcn" {...field} />
                                        </FormControl>
                                        <Button type="submit" size="sm" className="px-3">
                                            <span className="sr-only">Copy</span>
                                            <Copy className="h-4 w-4" />
                                        </Button>
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
                            name="isPublic"
                            render={({ field }) => (
                                <FormItem>
                                    <div className="flex items-center space-x-2">
                                        <FormControl>
                                            <Checkbox checked={field.value}
                                                onCheckedChange={field.onChange} />
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
                        <Button type="button" variant="secondary">
                            Close
                        </Button>
                    </DialogClose>
                </DialogFooter> */}
            </DialogContent>
        </Dialog>
    )
}
