import React from 'react'


import clsx from "clsx";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { DateRange } from "react-day-picker"
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from '../ui/textarea';
import { addDays, format } from "date-fns"
import { cn } from "@/lib/utils"
import { Calendar as CalendarIcon } from "lucide-react"

import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

import toast from 'react-hot-toast';
const formSchema = z.object({
  first_name: z.string().min(2).max(50),
  range: z.object({
    from: z.date(),
    to: z.date(),
  }),
  estimated_passengers: z.string(),
  type_of_transportation: z.string(),
  describe: z.string(),
  how_often: z.string(),
  email: z.string().email(),
  company_name: z.string().min(2).max(50),
  last_name: z.string().min(2).max(50),
  phone_number: z.string(),
});

const BookNowForm = () => {
    const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      first_name: "",
      range:{} ,
      estimated_passengers: '1',
      type_of_transportation:"",
      describe: "",
      how_often: "",
      email: "",
      company_name: "",
      last_name: "",
      phone_number: ""

    },
  })

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    console.log(values)
    /* Send an email with a provider here */

    const response = await fetch("/api/sendemail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });

    if (response.ok) {
            toast.success('Form submitted successfully!');
      form.reset({
        first_name: "",
        range: {},
        estimated_passengers: "1",
        type_of_transportation: "",
        describe: "",
        how_often: "",
        email: "",
        company_name: "",
        last_name: "",
        phone_number: "",
      });

    } else {
            toast.error('Form submission failed!');
    }
  }
  return (
    <div className="mt-8 flex flex-col">
      <div className="text-[#101010] mb-10">
        <h2 className="text-[22px] sm:leading-[28px] font-semibold mb-2">
          Transportation Request
        </h2>
        <p className="text-sm">
          Looking for transportation? We can help. Provide detailed information
          about your event, and our team will work with you to create a custom
          transportation service that is perfectly suited for your needs.
        </p>
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
 <FormField
      control={form.control}
      name="range"
      render={({ field }) => (
        <FormItem>

                <FormLabel>
                  When is your trip?{" "}
                  <sup className="text-red-500 font-bold">*</sup>
                </FormLabel>
          <FormControl>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant={"outline"}
                  className={cn(
                    "w-full justify-start text-left font-normal rounded-sm !border-input",
                    !field.value && "text-muted-foreground",
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {field.value?.from ? (
                    field.value.to ? (
                      <>
                        {format(field.value.from, "LLL dd, y")} -{" "}
                        {format(field.value.to, "LLL dd, y")}
                      </>
                    ) : (
                      format(field.value.from, "LLL dd, y")
                    )
                  ) : (
                    <span>Pick a date</span>
                  )}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  initialFocus
                  mode="range"
                  defaultMonth={field.value?.from}
                  selected={field.value}
                  onSelect={field.onChange}
                  numberOfMonths={2}
                />
              </PopoverContent>
            </Popover>
          </FormControl>
          <FormDescription>
Select a range of dates for multiple days trip
          </FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
          <div className="w-full flex flex-col sm:flex-row space-y-3 sm:space-y-0 justify-between">
            <FormField
              control={form.control}
              name="estimated_passengers"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Total estimated passengers</FormLabel>
                  <FormControl className="w-full">
                    <Input type="number" min="1" placeholder="" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="type_of_transportation"
                                render={({ field: { onChange, onBlur, value, ref } }) => (
                  <FormItem>
                    <FormLabel>What type of transportation?</FormLabel>
                    <FormControl>
                      <Select value={value} onValueChange={onChange}>
                      <SelectTrigger className="w-full sm:w-[256px]">
                        <SelectValue placeholder="School" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="corporate">Corporate</SelectItem>
                        <SelectItem value="conference">Conference</SelectItem>
                        <SelectItem value="school">School</SelectItem>
                        <SelectItem value="employee">Employee</SelectItem>
                        <SelectItem value="personal">Personal</SelectItem>
                        <SelectItem value="wedding">Wedding</SelectItem>
                        <SelectItem value="others">Others</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormField
            control={form.control}
            name="describe"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Describe the transportation you are looking for *
                </FormLabel>
                <FormControl>
                  <Textarea {...field} placeholder="Describe transportation"></Textarea>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="how_often"
              render={({ field: { onChange, onBlur, value, ref } }) => (
                <FormItem>
                  <FormLabel>
                    How often does your organization book transportation?
                  </FormLabel>
                  <FormControl>
                    <Select value={value} onValueChange={onChange}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="School" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="daily">Daily</SelectItem>
                      <SelectItem value="weekly">Weekly</SelectItem>
                      <SelectItem value="monthly">Monthly</SelectItem>
                      <SelectItem value="quaterly">Quaterly</SelectItem>
                      <SelectItem value="once-a-year">Once a year</SelectItem>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="w-full flex flex-col sm:flex-row space-y-3 sm:space-y-0 justify-between">
            <FormField
              control={form.control}
              name="company_name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>What&lsquo;s your company name?</FormLabel>
                  <FormControl className="w-full sm:w-[256px]">
                    <Input placeholder="" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Email <span className="ml-1 text-red-500">*</span>
                  </FormLabel>
                  <FormControl className="w-full sm:w-[256px]">
                    <Input placeholder="email" type="email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="w-full flex flex-col sm:flex-row space-y-3 sm:space-y-0 justify-between">
            <FormField
              control={form.control}
              name="first_name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    First name <span className="ml-2 text-red-500">*</span>
                  </FormLabel>
                  <FormControl className="w-full sm:w-[256px]">
                    <Input placeholder="Firstname" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="last_name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Last name <span className="ml-2 text-red-500">*</span>
                  </FormLabel>
                  <FormControl className="w-full sm:w-[256px]">
                    <Input placeholder="Last name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="w-full  gap-2 sm:flex-row space-y-3 sm:space-y-0 justify-between sm:items-end">
                        <FormField
              control={form.control}
              name="phone_number"
              render={({ field: { onChange, onBlur, value, ref } }) => (
                <FormItem>
                  <FormLabel>Phone number</FormLabel>
                  <FormControl className="w-full">
                    <PhoneInput
                      value={value}
                      onChange={onChange}
                      inputProps={{
                        required: true,
                      }}
                      country={"ng"}
                      inputClass={clsx({
                        ["flex flex-col justify-between   items-center focus:outline-none placeholder:text-color-100 w-full "]:
                          true,
                      })}
                      containerClass={clsx({
                        " focus:outline-none border border-[#A0A3A6] border-opacity-60 rounded-[8px] px-3 py-4 w-full placeholder:text-color-100 ": true,
                        "border-[#A0A3A6]": "border-[#A0A3A6]",
                      })}
                      dropdownClass="bg-white"
                      countryCodeEditable={false}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <p className="my-4 sm:!mt-6 sm:!mb-8">
            Treepz needs the contact information you provide to us to contact
            you about our products and services. You may unsubscribe from these
            communications at anytime.
          </p>
          <Button type="submit" className="w-full !mb-8 text-gray-900">
            Submit
          </Button>
        </form>
      </Form>
    </div>
  );
}

export default BookNowForm
