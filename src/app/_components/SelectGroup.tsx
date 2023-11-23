import React from 'react'

interface Option {
  value: string | boolean
  label: string
}

interface SelectGroupProps {
  label: string
  options: Option[]
  value?: string | number
  defaultValue?: string | number
  helperMessage?: string
  errors?: string[]
  name?: string
  disabled?: boolean
  loading?: boolean
  onChange?: React.ChangeEventHandler<HTMLSelectElement>
}

function SelectGroup ({ label, options, helperMessage, disabled, loading, errors, name, value, defaultValue, onChange }: SelectGroupProps) {
  return (
    <div className="flex flex-col items-start ">
      <label htmlFor={name} className="block text-left text-sm sm:text-base font-bold uppercase text-gray-900">{label}</label>
      <select
        className="w-full bg-white h-10 sm:h-12 text-sm sm:text-base border rounded-sm border-zinc-300 px-3"
        name={name}
        id={name}
        disabled={disabled}
        value={value}
        defaultValue={defaultValue}
        onChange={onChange}>
        <option value="">{(loading ?? false) ? 'Loading...' : 'Select one'}</option>
        {options.map((option) => (
          <option key={option.value.toString()} value={option.value.toString()}>
            {option.label}
          </option>
        ))}
      </select>
      {(errors?.length ?? 0) > 0 &&
        <div className="mt-1 space-y-1">
          {errors?.map((error, i) => (
            <div key={i} className='text-sm text-red-500'>{error}</div>
          ))}
        </div>
      }
      <div className="text-sm text-black-500">{helperMessage}</div>
    </div>
  )
}

export default SelectGroup
