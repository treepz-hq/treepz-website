'use client'
import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import clsx from 'clsx'
import { cn } from "@/lib/utils"


interface CountryCodeInputProps {
  name: string;
  label?: string
  error?: string
  className?: string
}

const CountryCodeInput: React.FC<CountryCodeInputProps> = ({ name, label, error, className  }) => {
  const { control } = useForm();

  return (
    <div className={cn(
          "flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 h-14",
          className
        )}>
      <label htmlFor={name} className="block text-sm font-medium text-gray-700 mb-1">
        {label}
      </label>
      <Controller
        render={({ field }) => (
          <PhoneInput
            {...field}
            inputProps={{
              name,
              required: true,
            }}
            country={"ng"}
            inputClass={clsx({
              ["flex flex-col justify-between items-center focus:outline-none placeholder:text-color-100 overflow-hidden"]:
                true,
            })}
            containerClass={clsx({
              " focus:outline-none placeholder:text-color-100":
                true,
              "border-red-600": !!error,
            })}
            dropdownClass="bg-white"
            countryCodeEditable={false}
          />
        )}
        control={control}
        name={name}
      />
    </div>
  );
};

export default CountryCodeInput;
