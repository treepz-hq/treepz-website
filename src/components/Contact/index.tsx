"use client";

import clsx from "clsx";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import Image from "next/image";
import AcientGateIcon from "@/assets/svgs/ancient-gate-fill.svg";
import { z } from "zod";
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
import CountryCodeInput from "@/components/ui/country-code-input";
import { Textarea } from "../ui/textarea";

import toast, { Toaster } from "react-hot-toast";
const formSchema = z.object({
  first_name: z.string().min(2).max(50),
  range: z.string(),
  estimated_passengers: z.string(),
  type_of_transportation: z.string(),
  describe: z.string(),
  how_often: z.string(),
  email: z.string().email(),
  company_name: z.string().min(2).max(50),
  last_name: z.string().min(2).max(50),
  phone_number: z.string() || z.number(),
});

const ContactComponent = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      first_name: "",
      range: "",
      estimated_passengers: "1",
      type_of_transportation: "",
      describe: "",
      how_often: "",
      email: "",
      company_name: "",
      last_name: "",
      phone_number: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    console.log(values);

    const response = await fetch("/api/sendemail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });

    if (response.ok) {
      toast.success("Form submitted successfully!");
      form.reset({
        first_name: "",
        range: "",
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
      toast.error("Form submission failed!");
    }
  };

  return (
    <div className="bg-gradient-to-t to-[#FDF2D052] from-[#FDF2D000] container px-4 sm:px-20 flex flex-col sm:flex-row gap-16 pt-10 sm:pt-[114px]">
      <div className="w-full sm:w-[585px] hidden sm:inline-block">
        <h1 className="text-[#212529] text-[32px] sm:text-[56px] leading-[40px] sm:leading-[64px] font-bold uppercase">
          Stress-free travel, wherever you go. Book your ride with Treepz and
          simply enjoy the journey.
        </h1>
        <p className="mb-14 mt-[28px] sm:text-xl text-[#4D5154]">
          However you want to travel, the choice is yours – we have hundreds of
          vehicles and options for recurring transportation, micro-transit, or
          special days like weddings, sporting events, school trips and
          corporate events.
        </p>
        <div className="flex flex-col w-full sm:w-[585px] bg-[#FDF2D0] py-6 px-4 rounded-2xl">
          <div className="flex gap-4 items-center">
            <AcientGateIcon /> Easy booking
          </div>
          <div className="flex gap-4 items-center my-4">
            <AcientGateIcon /> A real-time vehicle tracking system
          </div>
          <div className="flex gap-4 items-center">
            <AcientGateIcon /> Simple payment process
          </div>
        </div>
        <div className="mt-14">
          <h1 className="text-[#A0A3A6] font-semibold mb-8">
            WE&lsquo;RE TRUSTED BY
          </h1>
          <div className="flex justify-between items-center">
            <Image
              src="/trusted/Eleveation-Church-logo.png"
              width={92.7}
              height={32}
              alt="elevation"
            />
            <Image
              src="/trusted/LBS-Logo.png"
              width={92.8}
              height={32}
              alt="lbs"
            />
            <Image
              src="/trusted/RBS_Rounded_Color_Claim_Logo.png"
              width={32}
              height={32}
              alt="rbs"
            />
            <Image
              src="/trusted/gospel-pillars.png"
              width={104}
              height={32}
              alt="gpc"
            />
            <Image
              src="/trusted/WakaWakaNG.png"
              width={48}
              height={48}
              alt="waka"
            />
          </div>
        </div>
      </div>
      <div className="w-full sm:w-[600px] p-8 border rounded-2xl genShadow bg-white">
        <p className="text-[22px] font-semibold text-[#101010]">
          Transportation Request
        </p>
        <p className="mb-10 text-[#101010]">
          Looking for transportation? We can help. Provide detailed information
          about your event, and our team will work with you to create a custom
          transportation service that is perfectly suited for your needs.
        </p>
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
                    <Textarea
                      {...field}
                      placeholder="Describe transportation"
                    ></Textarea>
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
                        " focus:outline-none border border-[#A0A3A6] border-opacity-60 rounded-[8px] px-3 py-4 w-full placeholder:text-color-100 ":
                          true,
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
            {/* <FormField
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
              /> */}
            <p className="my-4 sm:!mt-6 sm:!mb-8">
              Treepz needs the contact information you provide to us to contact
              you about our products and services. You may unsubscribe from
              these communications at anytime.
            </p>
            <Button type="submit" className="w-full !mb-8 text-gray-900">
              Submit
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default ContactComponent;
