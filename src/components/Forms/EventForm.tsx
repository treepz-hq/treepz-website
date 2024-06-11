import React from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";
import clsx from "clsx";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { format } from "date-fns";
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
import { Textarea } from "../ui/textarea";
import toast from "react-hot-toast";
import { CalendarIcon } from "lucide-react";
const formSchema = z.object({
  startDate: z.any(),
  endDate: z.any(),
  location: z.string(),
  full_name: z.string(),
  type_of_transportation: z.string(),
  infotonote: z.string(),
  email: z.string().email(),
  phone_number: z.string(),
});

const EventForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      startDate: "",
      full_name: "",
      endDate: "",
      location: "",
      type_of_transportation: "",
      infotonote: "",
      email: "",
      phone_number: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    console.log(values);
    /* Send an email with a provider here */

    const response = await fetch("/api/eventmail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });
      if (response.ok){
            toast.success('Form submitted successfully!');
      form.reset({
      startDate: "",
      full_name: "",
      endDate: "",
      location: "",
      type_of_transportation: "",
      infotonote: "",
      email: "",
      phone_number: "",
      });

    } else {
            toast.error('Form submission failed!');
    }
  };
  return (
    <div className="mt-8 flex flex-col">
      <div className="text-[#101010] mb-10">
        <h2 className="text-[22px] sm:leading-[28px] font-semibold mb-2">
          Transportation Request
        </h2>
        <p className="text-sm">
          Give us detailed information about your event, and our team will work
          with you to create a custom transportation service that is perfectly
          suited for your needs.
        </p>
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
          <div className="w-full flex flex-col sm:flex-row space-y-3 sm:space-y-0 justify-between">
            <FormField
              control={form.control}
              name="startDate"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel>
                    Trip Start Date<span className="ml-1 text-red-500">*</span>
                  </FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <button
                          className={cn(
                            "ww-full sm:w-[256px] border rounded-sm px-3 py-4 text-left  flex items-center  border-input font-normal",
                            !field.value && "text-muted-foreground",
                          )}
                        >
                          {field.value ? (
                            format(field.value, "dd/MM/yyyy")
                          ) : (
                            <span>{format(new Date(), "dd/MM/yyyy")}</span>
                          )}
                          <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                        </button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={field.value}
                        onSelect={field.onChange}
                        disabled={(date) => date < new Date()}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="endDate"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel>
                    Trip End Date<span className="ml-1 text-red-500">*</span>
                  </FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <button
                          className={cn(
                            "w-full sm:w-[256px] border rounded-sm px-3 py-4 text-left  flex items-center border-input font-normal",
                            !field.value && "text-muted-foreground",
                          )}
                        >
                          {field.value ? (
                            format(field.value, "dd/MM/yyyy")
                          ) : (
                            <span>{format(new Date(), "dd/MM/yyyy")}</span>
                          )}
                          <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                        </button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={field.value}
                        onSelect={field.onChange}
                        disabled={(date) => date < new Date()}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="w-full flex flex-col sm:flex-row space-y-3 sm:space-y-0 justify-between">
            <FormField
              control={form.control}
              name="type_of_transportation"
              render={({ field: { onChange, onBlur, value, ref } }) => (
                <FormItem>
                  <FormLabel>Vehicle type </FormLabel>
                  <FormControl>
                    <Select value={value} onValueChange={onChange}>
                      <SelectTrigger className="w-full sm:w-[256px]">
                        <SelectValue placeholder="Please select... " />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="commercial">Commercial</SelectItem>
                        <SelectItem value="city">Conference</SelectItem>
                        <SelectItem value="sedan">Sedan</SelectItem>
                        <SelectItem value="family">Family</SelectItem>
                        <SelectItem value="minibus">Personal</SelectItem>
                        <SelectItem value="4x4">4X4</SelectItem>
                        <SelectItem value="convertible">Convertible</SelectItem>
                        <SelectItem value="coupe">Coupe</SelectItem>
                        <SelectItem value="antique">Antique</SelectItem>
                        <SelectItem value="campervan">Campervan</SelectItem>
                        <SelectItem value="suv">SUV</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="location"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Event Location</FormLabel>
                  <FormControl className="w-full">
                    <Input
                      className=" w-full sm:w-[256px]"
                      type="text"
                      placeholder="Enter event location"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormField
            control={form.control}
            name="infotonote"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Is there any important information you want us to note?
                </FormLabel>
                <FormControl>
                  <Textarea
                    {...field}
                    placeholder="Enter any additional info here.."
                  ></Textarea>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="full_name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Full name<span className="ml-1 text-red-500">*</span>
                </FormLabel>
                <FormControl className="w-full ">
                  <Input placeholder="" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="w-full flex flex-col sm:flex-row space-y-3 sm:space-y-0 justify-between">
            <FormField
              control={form.control}
              name="phone_number"
              render={({ field: { onChange, onBlur, value, ref } }) => (
                <FormItem>
                  <FormLabel>
                    Phone number <span className="ml-1 text-red-500">*</span>
                  </FormLabel>
                  <FormControl className="w-full sm:w-[256px]">
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
                        " focus:outline-none border border-input border-opacity-60 rounded-[8px] px-3 py-2.5 sm:w-[256px] w-full placeholder:text-color-100 ":
                          true,
                        "border-input": "border-input",
                      })}
                      dropdownClass="bg-white"
                      countryCodeEditable={false}
                    />
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
          <div className="w-full flex flex-col sm:flex-row space-y-3 sm:space-y-0 justify-between"></div>
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
};

export default EventForm;
