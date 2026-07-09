import { redirect } from "next/navigation";
import { isAuthenticated } from "@/lib/admin/auth";
import { LoginForm } from "./LoginForm";

export default function AdminLoginPage() {
  if (isAuthenticated()) redirect("/admin");

  return (
    <main className="min-h-screen flex items-center justify-center px-6">
      <div className="w-full max-w-sm bg-white border border-brand-border rounded-lg p-8">
        <h1 className="font-heading font-black text-navy text-2xl mb-1">
          Content editor
        </h1>
        <p className="text-charcoal-mid text-sm mb-6">
          Log in to edit the CRC Public Relations website.
        </p>
        <LoginForm />
      </div>
    </main>
  );
}
