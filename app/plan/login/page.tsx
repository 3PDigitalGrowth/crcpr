import { redirect } from "next/navigation";
import { isAuthenticated } from "@/lib/admin/auth";
import { PlannerLoginForm } from "@/components/planner/PlannerLoginForm";

export default function PlannerLoginPage({
  searchParams,
}: {
  searchParams: { next?: string };
}) {
  const next = searchParams.next?.startsWith("/plan") ? searchParams.next : "/plan";
  if (isAuthenticated()) redirect(next);

  return (
    <main className="min-h-screen flex items-center px-4 sm:px-10">
      <div className="w-full max-w-md">
        <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#6B6560]">
          CRC Public Relations · My PR Partner
        </p>
        <h1 className="font-heading text-[#1A2B4A] text-5xl sm:text-6xl leading-[0.95] mt-3">
          Forward planner
        </h1>
        <p className="mt-4 text-[15px] leading-relaxed text-[#3D3D3D] max-w-sm">
          What goes out each month, when, and who has signed it off. Use the same
          password as the website editor.
        </p>
        <div className="mt-8">
          <PlannerLoginForm next={next} />
        </div>
      </div>
    </main>
  );
}
