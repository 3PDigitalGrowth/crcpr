import { redirect } from "next/navigation";
import { brisbaneDate } from "@/lib/planner/model";

export default function PlanIndex() {
  redirect(`/plan/${brisbaneDate().slice(0, 7)}`);
}
