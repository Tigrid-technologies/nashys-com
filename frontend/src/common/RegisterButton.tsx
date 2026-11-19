import { FiArrowUpRight } from "react-icons/fi";

type Variant = "primary" | "light" | "cream";

const styles: Record<Variant, { button: string; icon: string }> = {
  primary: {
    button: "bg-primary text-white shadow-lg shadow-primary/30",
    icon: "bg-white/15 border-white/60 group-hover:bg-white group-hover:text-primary",
  },
  light: {
    button: "bg-white text-primary shadow-lg shadow-black/20",
    icon: "border-primary/60 group-hover:bg-primary group-hover:text-white",
  },
  cream: {
    button: "bg-secondary text-primary shadow-md shadow-black/20",
    icon: "border-primary/60 group-hover:bg-primary group-hover:text-white",
  },
};

interface Props {
  label?: string;
  variant?: Variant;
  href?: string;
}

const RegisterButton = ({
  label = "Register Now",
  variant = "primary",
  href = "#register",
}: Props) => {
  const s = styles[variant];
  return (
    <a
      href={href}
      className={`group inline-flex items-center gap-3 rounded-full py-1.5 pl-5 pr-1.5 font-sans text-xs font-medium tracking-wide transition-all duration-300 hover:-translate-y-0.5 ${s.button}`}
    >
      {label}
      <span
        className={`flex h-6 w-6 items-center justify-center rounded-full border text-sm transition-colors duration-300 ${s.icon}`}
      >
        <FiArrowUpRight />
      </span>
    </a>
  );
};

export default RegisterButton;
