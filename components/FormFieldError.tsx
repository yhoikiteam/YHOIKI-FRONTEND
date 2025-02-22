interface IProps {
  errors?: { message?: string };
}

export default function FormFieldError({ errors }: IProps) {
  if (!errors?.message) return null;

  return <p className="mt-2 text-xs text-red-500">*{errors.message}</p>;
}
