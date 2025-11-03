import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "@/components/ui/button"

const schema = z.object({
  email: z.string().email("Enter a valid email"),
  password: z.string().min(6, "Min 6 characters"),
})

type FormValues = z.infer<typeof schema>

export default function SignIn() {
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { email: "", password: "" }
  })

  async function onSubmit(values: FormValues) {
    await new Promise(r => setTimeout(r, 400))
    alert(`Signed in as ${values.email}`)
  }

  return (
    <div className="max-w-sm mx-auto bg-card text-card-foreground rounded-lg border p-6">
      <div className="mb-6 text-center">
        <h1 className="text-xl font-bold">Sign in to your account</h1>
      </div>
      <form className="space-y-4" onSubmit={handleSubmit(onSubmit)} noValidate>
        <div>
          <label className="block text-xs font-medium mb-1" htmlFor="email">Email address</label>
          <input
            id="email"
            type="email"
            className="w-full px-3 py-2 rounded-md border bg-background"
            placeholder="you@example.com"
            {...register("email")}
          />
          {errors.email && <p className="text-sm text-red-600 mt-1">{errors.email.message}</p>}
        </div>
        <div>
          <label className="block text-xs font-medium mb-1" htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            className="w-full px-3 py-2 rounded-md border bg-background"
            placeholder="••••••••"
            {...register("password")}
          />
          {errors.password && <p className="text-sm text-red-600 mt-1">{errors.password.message}</p>}
        </div>
        <Button type="submit" className="w-full" disabled={isSubmitting}>
          {isSubmitting ? "Signing in..." : "Sign In"}
        </Button>
      </form>
      <div className="mt-5 text-center text-xs text-muted-foreground">
        Don't have an account? <a href="/create-account" className="text-primary underline">Create account</a>
      </div>
    </div>
  )
}
