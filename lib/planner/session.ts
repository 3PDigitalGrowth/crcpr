import { cookies } from "next/headers";
import { PEOPLE, type Person } from "./model";

/**
 * Who is using the planner. Access itself is the shared website-editor
 * login (lib/admin/auth); this cookie only labels notes and sign-offs with a
 * name, so the planner can show who said what.
 */

const WHO_COOKIE = "crcpr_planner_who";

export function getWho(): Person | null {
  const value = cookies().get(WHO_COOKIE)?.value;
  return PEOPLE.includes(value as Person) ? (value as Person) : null;
}

export function setWho(person: Person): void {
  cookies().set(WHO_COOKIE, person, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 180,
  });
}

export function clearWho(): void {
  cookies().delete(WHO_COOKIE);
}
