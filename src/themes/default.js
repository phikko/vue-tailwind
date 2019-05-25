const DefaultTheme = {
  TInput: {
    baseClass: 'border block w-full rounded',
    defaultStatusClass: 'bg-white',
    warningStatusClass: 'border-yellow-400 bg-yellow-100',
    errorStatusClass: 'border-red-300 bg-red-100',
    successStatusClass: 'border-green-300 bg-green-100',
    disabledClass: 'bg-gray-100 cursor-not-allowed opacity-75',
    defaultSizeClass: 'p-3',
    largeSizeClass: 'p-4 text-lg',
    smallSizeClass: 'p-2 text-sm',
  },
  TTextarea: {
    baseClass: 'border block w-full rounded',
    defaultStatusClass: 'bg-white',
    errorStatusClass: 'border-red-300 bg-red-100',
    warningStatusClass: 'border-yellow-400 bg-yellow-100',
    successStatusClass: 'border-green-300 bg-green-100',
    disabledClass: 'bg-gray-100 cursor-not-allowed opacity-75',
    defaultSizeClass: 'p-3',
    largeSizeClass: 'p-4 text-lg',
    smallSizeClass: 'p-2 text-sm',
  },
  TSelect: {
    baseClass: 'block appearance-none w-full border pr-8 rounded leading-tight',
    baseClassMultiple: 'block appearance-none w-full border rounded leading-tight',
    defaultStatusClass: 'bg-white',
    errorStatusClass: 'border-red-300 bg-red-100',
    successStatusClass: 'border-green-300 bg-green-100',
    warningStatusClass: 'border-yellow-400 bg-yellow-100',
    disabledClass: 'bg-gray-100 cursor-not-allowed opacity-75',
    defaultSizeClass: 'p-3',
    largeSizeClass: 'p-4 text-lg',
    smallSizeClass: 'p-2 text-sm',
    wrapperClass: 'relative',
    arrowWrapperClass: 'pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700',
    arrowClass: 'fill-current h-4 w-4',
  },
  TRadio: {
    baseClass: '',
  },
  TCheckbox: {
    baseClass: '',
  },
  TButton: {
    baseClass: 'border block rounded inline-flex items-center justify-center',
    defaultClass: 'bg-white border-gray-400 hover:bg-gray-100 hover:border-gray-500',
    primaryClass: 'text-white bg-blue-500 border-blue-500 hover:bg-blue-600 hover:border-blue-600',
    secondaryClass: 'border-blue-500 text-blue-500 bg-white hover:border-blue-600 hover:text-blue-600 hover:bg-white',
    tertiaryClass: 'border block underline text-blue-500 border-transparent bg-transparent hover:text-blue-600',
    successClass: 'text-white bg-green-500 border-green-500 hover:bg-green-600 hover:border-green-600',
    dangerClass: 'text-white bg-red-500 border-red-500 hover:bg-red-600 hover:border-red-600',
    warningClass: 'text-yellow-900 bg-yellow-500 border-yellow-500 hover:bg-yellow-600 hover:border-yellow-600',
    disabledClass: 'cursor-not-allowed opacity-75',
    defaultSizeClass: 'px-6 py-3',
    largeSizeClass: 'px-8 py-4 text-lg',
    smallSizeClass: 'px-4 py-2 text-sm',
  },
  TRadioGroup: {
    baseClass: 'flex flex-col',
    defaultStatusClass: '',
    errorStatusClass: 'text-red-500',
    successStatusClass: 'text-green-500',
    warningStatusClass: 'text-yellow-500',
    disabledClass: 'cursor-not-allowed opacity-75',
    defaultSizeClass: '',
    largeSizeClass: 'text-lg',
    smallSizeClass: 'text-sm',
    optionClass: 'py-1',
    inputClass: '',
    labelClass: 'ml-1',
  },
}

export const {
  TInput: TInputTheme,
  TTextarea: TTextareaTheme,
  TSelect: TSelectTheme,
  TButton: TButtonTheme,
  TRadio: TRadioTheme,
  TCheckbox: TCheckboxTheme,
  TRadioGroup: TRadioGroupTheme,
} = DefaultTheme

export default DefaultTheme