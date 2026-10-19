import { notFound, redirect } from "next/navigation";
import { isAuthenticated } from "@/lib/admin/auth";
import { brisbaneDate, isMonthKey, monthLabel, PEOPLE, SIDE_LABEL, SIDE_OF } from "@/lib/planner/model";
import { readPlanner } from "@/lib/planner/store";
import { getWho } from "@/lib/planner/session";
import { chooseWhoAction } from "../actions";
import { Planner } from "@/components/planner/Planner";

export async function generateMetadata({ params }: { params: { month: string } }) {
  return {
    title: isMonthKey(params.month)
      ? `${monthLabel(params.month)} | Forward planner`
      : "Forward planner",
  };
}

export default async function PlannerMonthPage({ params }: { params: { month: string } }) {
  const { month } = params;
  if (!isMonthKey(month)) notFound();
  const here = `/plan/${month}`;
  if (!isAuthenticated()) redirect(`/plan/login?next=${encodeURIComponent(here)}`);

  const who = getWho();
  if (!who) return <WhoPicker next={here} />;

  const { state } = await readPlanner();
  return <Planner initialState={state} month={month} who={who} today={brisbaneDate()} />;
}

function WhoPicker({ next }: { next: string }) {
  return (
    <main className="min-h-screen flex items-center px-4 sm:px-10">
      <div className="w-full max-w-xl">
        <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#6B6560]">
          Forward planner
        </p>
        <h1 className="font-heading text-[#1A2B4A] text-5xl sm:text-6xl leading-[0.95] mt-3">
          Who&apos;s planning today?
        </h1>
        <p className="mt-4 text-[15px] leading-relaxed max-w-md">
          Your name goes on your notes and sign-offs, so everyone can see who said what.
        </p>
        <form action={chooseWhoAction} className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
          <input type="hidden" name="next" value={next} />
          {PEOPLE.map((person) => (
            <button
              key={person}
              type="submit"
              name="who"
              value={person}
              className="group flex items-baseline justify-between rounded-xl border border-[#C5BFB5] bg-[#FAFAF8] px-5 py-4 text-left hover:border-[#1A2B4A] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1A2B4A]"
            >
              <span className="font-heading text-3xl text-[#1A2B4A]">{person}</span>
              <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-[#6B6560] group-hover:text-[#1A2B4A]">
                {SIDE_LABEL[SIDE_OF[person]]}
              </span>
            </button>
          ))}
        </form>
      </div>
    </main>
  );
}
