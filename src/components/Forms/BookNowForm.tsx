import React from 'react'
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
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const formSchema = z.object({
  first_name: z.string().min(2).max(50),
  range: z.string(),
  estimated_passengers: z.number(),
  type_of_transportation: z.string(),
  describe: z.string(),
  how_often: z.string(),
  email: z.string().email(),
  company_name: z.string().min(2).max(50),
  last_name: z.string().min(2).max(50),
  country_code: z.string(),
  phone_number: z.string(),
});

const BookNowForm = () => {

    const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      first_name: "",
      range: "",
      estimated_passengers: 1,
      type_of_transportation:"",
      describe: "",
      how_often: "",
      email: "",
      company_name: "",
      last_name: "",
      country_code: "",
      phone_number: ""

    },
  })

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values)
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
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3 mx-2">
          <FormField
            control={form.control}
            name="range"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  When is your trip?{" "}
                  <sup className="text-red-500 font-bold">*</sup>
                </FormLabel>
                <FormControl className="w-full">
                  <Input
                    placeholder="Please use a range of dates for multiple days trip"
                    {...field}
                  />
                </FormControl>
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
                  <FormControl>
                    <Select>
                      <SelectTrigger className="w-full sm:w-[256px]">
                        <SelectValue placeholder="1" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1">1</SelectItem>
                        <SelectItem value="2">2</SelectItem>
                        <SelectItem value="3">3</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="type_of_transportation"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>What type of transportation?</FormLabel>
                  <FormControl>
                    <Select>
                      <SelectTrigger className="w-full sm:w-[256px]">
                        <SelectValue placeholder="School" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="School Shuttle">
                          School Shuttle
                        </SelectItem>
                        <SelectItem value="School Shuttle">
                          School Shuttle
                        </SelectItem>
                        <SelectItem value="School Shuttle">
                          School Shuttle
                        </SelectItem>
                        <SelectItem value="School Shuttle">
                          School Shuttle
                        </SelectItem>
                        <SelectItem value="School Shuttle">
                          School Shuttle
                        </SelectItem>
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
                  <Select>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="1" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">1</SelectItem>
                      <SelectItem value="2">2</SelectItem>
                      <SelectItem value="3">3</SelectItem>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="how_often"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  How often does your organization book transportation?
                </FormLabel>
                <FormControl>
                  <Select>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="School" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="School Shuttle">
                        School Shuttle
                      </SelectItem>
                      <SelectItem value="School Shuttle">
                        School Shuttle
                      </SelectItem>
                      <SelectItem value="School Shuttle">
                        School Shuttle
                      </SelectItem>
                      <SelectItem value="School Shuttle">
                        School Shuttle
                      </SelectItem>
                      <SelectItem value="School Shuttle">
                        School Shuttle
                      </SelectItem>
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
          <div className="w-full flex flex-col gap-2 sm:flex-row space-y-3 sm:space-y-0 justify-between sm:items-end">
            <FormField
              control={form.control}
              name="country_code"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Country Code <span className="ml-2 text-red-500">*</span>
                  </FormLabel>
                  <FormControl>
                    <Select>
                      <SelectTrigger className="w-full sm:w-110px]">
                        <SelectValue placeholder="Code" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="School Shuttle">
                          School Shuttle
                        </SelectItem>
                        <SelectItem value="School Shuttle">
                          School Shuttle
                        </SelectItem>
                        <SelectItem value="School Shuttle">
                          School Shuttle
                        </SelectItem>
                        <SelectItem value="School Shuttle">
                          School Shuttle
                        </SelectItem>
                        <SelectItem value="School Shuttle">
                          School Shuttle
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phone_number"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone number</FormLabel>
                  <FormControl className="w-full sm:w-[400px]">
                    <Input placeholder="Phone number" {...field} />
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