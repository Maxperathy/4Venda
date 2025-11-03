import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";

const schema = z
  .object({
    name: z.string().min(2, "Enter your full name"),
    email: z.string().email("Enter a valid email"),
    password: z.string().min(6, "Min 6 characters"),
    confirmPassword: z.string().min(6, "Min 6 characters"),
  })
  .refine((vals) => vals.password === vals.confirmPassword, {
    path: ["confirmPassword"],
    message: "Passwords do not match",
  });

type FormValues = z.infer<typeof schema>;

export default function CreateAccount() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { name: "", email: "", password: "", confirmPassword: "" },
  });

  async function onSubmit(values: FormValues) {
    await new Promise((r) => setTimeout(r, 500));
    alert(`Account created for ${values.name}`);
  }

  return (
    <div className="max-w-sm mx-auto bg-card text-card-foreground rounded-lg border p-6">
      <div className="mb-6 text-center">
        <h1 className="text-xl font-bold">Create your account</h1>
      </div>
      <form className="space-y-4" onSubmit={handleSubmit(onSubmit)} noValidate>
        <div>
          <label className="block text-xs font-medium mb-1" htmlFor="name">
            Full Name
          </label>
          <input
            id="name"
            className="w-full px-3 py-2 rounded-md border bg-background"
            placeholder="Your name"
            {...register("name")}
          />
          {errors.name && (
            <p className="text-sm text-red-600 mt-1">{errors.name.message}</p>
          )}
        </div>
        <div>
          <label className="block text-xs font-medium mb-1" htmlFor="email">
            Email address
          </label>
          <input
            id="email"
            type="email"
            className="w-full px-3 py-2 rounded-md border bg-background"
            placeholder="you@example.com"
            {...register("email")}
          />
          {errors.email && (
            <p className="text-sm text-red-600 mt-1">{errors.email.message}</p>
          )}
        </div>
        <div>
          <label className="block text-xs font-medium mb-1" htmlFor="password">
            Password
          </label>
          <input
            id="password"
            type="password"
            className="w-full px-3 py-2 rounded-md border bg-background"
            placeholder="••••••••"
            {...register("password")}
          />
          {errors.password && (
            <p className="text-sm text-red-600 mt-1">
              {errors.password.message}
            </p>
          )}
        </div>
        <div>
          <label
            className="block text-xs font-medium mb-1"
            htmlFor="confirmPassword"
          >
            Confirm Password
          </label>
          <input
            id="confirmPassword"
            type="password"
            className="w-full px-3 py-2 rounded-md border bg-background"
            placeholder="••••••••"
            {...register("confirmPassword")}
          />
          {errors.confirmPassword && (
            <p className="text-sm text-red-600 mt-1">
              {errors.confirmPassword.message}
            </p>
          )}
        </div>
        <Button type="submit" className="w-full" disabled={isSubmitting}>
          {isSubmitting ? "Creating..." : "Create Account"}
        </Button>
      </form>
      <div className="mt-5 text-center text-xs text-muted-foreground">
        Already have an account?{" "}
        <a href="/sign-in" className="text-primary underline">
          Sign in
        </a>
      </div>
    </div>
  );
}
