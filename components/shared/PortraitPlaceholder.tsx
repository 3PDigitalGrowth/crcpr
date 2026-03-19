interface PortraitPlaceholderProps {
  size?: "sm" | "md" | "lg";
  initials?: string;
  className?: string;
}

export function PortraitPlaceholder({
  size = "md",
  initials = "LM",
  className = "",
}: PortraitPlaceholderProps) {
  const sizes = {
    sm: "w-24 h-24 text-2xl",
    md: "w-48 h-48 text-5xl",
    lg: "w-64 h-64 text-7xl",
  };
  return (
    <div
      className={`${sizes[size]} bg-navy-mid rounded-lg flex items-center justify-center border border-white/10 flex-shrink-0 ${className}`}
    >
      <span
        className="font-heading font-black text-brand-gold select-none"
        aria-label={initials === "LM" ? "Lyall Mercer" : initials}
      >
        {initials}
      </span>
    </div>
  );
}
