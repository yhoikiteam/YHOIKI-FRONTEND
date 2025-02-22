interface IProps extends React.HTMLAttributes<HTMLDivElement> {
  label: string;
  description: string;
}

export default function HeadingAuth({ label, description, ...props }: IProps) {
  return (
    <div className="space-y-2 text-center" {...props}>
      <h1 className="text-3xl font-bold text-davy-gray">{label}</h1>
      <p className="text-sm text-davy-gray">{description}</p>
    </div>
  );
}
