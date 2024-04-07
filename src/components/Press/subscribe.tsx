"use client"
import React from 'react'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

const FormSchema = z.object({
  email: z.string().email({
    message: "Not a valid Email address",
}),
})
const SubscribeComponent = () => {
    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            email: "",
        },
    })

    const onSubmit = (data: z.infer<typeof FormSchema>) => {
     console.log(data)
    }

  return (
    <div className="mt-[50px] sm:mt-[161px] flex flex-col sm:flex-row justify-between items-center">
        <p className="w-full sm:w-[388px] font-semibold text-[32px] sm:text-[56px] uppercase leading-[40px] sm:leading-[64px] text-gray-900">Subscribe to our blog</p>
        <div className="flex w-full sm:w-[610px] flex-col mt-10 sm:mt-0">
            <p className="text-2xl mb-6 text-[#212529] font-medium">Follow our journey as we bring put Africa’s 26 million cars to better use.</p>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                        <FormControl>
                            <Input placeholder="Enter email address" className='!border-b focus-visible:border-none focus:outline-none' {...field} />
                        </FormControl>
                        <FormDescription className="text-[#6F7174]">
                            By clicking Submit, you agree to our <span className="underline">Privacy Policy</span>
                        </FormDescription>
                        <FormMessage />
                        </FormItem>
                    )}
                    />
                </form>
            </Form>
        </div>
    </div>
  )
}

export default SubscribeComponent
