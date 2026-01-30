import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm, Controller } from "react-hook-form";
import z from "zod"
import { Field, FieldError, FieldGroup, FieldLabel } from "../ui/field";
import { HugeiconsIcon } from "@hugeicons/react";
import { Key, Mail } from "@hugeicons/core-free-icons";
import { Input } from "../ui/input";
import Link from "next/link";
import { Button } from "../ui/button";


// Login schema
const loginSchema = z.object({
  email: z.email({ error: "Invalid email address" }),
  password: z.string().min(6, { error: "Password must be at least 6 characters" })
    .max(50, { error: "Password cannot exceed 50 characters" })
    .regex(/(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?])/, { error: "Password must contain at least 1 special character" })
});

const Login = (): React.ReactElement => {

  // Login form
  const loginForm = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: ({
      email: "",
      password: "",
    })
  });

  // OnSubmit function
  const onSubmit = async (values: z.infer<typeof loginSchema>) => { };
  return (
    <form onSubmit={loginForm.handleSubmit(onSubmit)} id="login-form" className="w-full max-w-xs">

      {/* ===== Header ===== */}
      <header className="space-y-1 text-center lg:text-left">
        <h3 className="text-3xl font-black tracking-normal">Log back in</h3>
        <p className="text-[10px] text-zinc-400 uppercase tracking-[0.2em] font-bold">Please enter your details</p>
      </header>

      {/* ===== Main ===== */}
      <FieldGroup className="gap-4 mt-6">
        {/* Email address */}
        <Controller
          name="email"
          control={loginForm.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor="login-form-email" className="text-xs text-zinc-400 flex items-center gap-2">
                <HugeiconsIcon icon={Mail} className="size-4" />
                Email address
              </FieldLabel>
              <Input
                {...field}
                id="login-form-email"
                aria-invalid={fieldState.invalid}
                placeholder="johndoe@email.com"
                autoComplete="off"
              />
              {fieldState.invalid && (<FieldError errors={[fieldState.error]} />)}
            </Field>
          )}
        />


        {/* Password */}
        <Controller
          name="password"
          control={loginForm.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor="login-form-password" className="text-xs text-zinc-400 flex items-center gap-2">
                <HugeiconsIcon icon={Key} className="size-4" />
                Password
              </FieldLabel>
              <Input
                {...field}
                id="login-form-password"
                aria-invalid={fieldState.invalid}
                placeholder="johndoe@email.com"
                autoComplete="off"
              />
              {fieldState.invalid && (<FieldError errors={[fieldState.error]} />)}
            </Field>
          )}
        />

        {/* Submit button */}
        <Button size="lg" type="submit" form="login-form">
          Log in
        </Button>
      </FieldGroup>

      {/* ===== Footer ===== */}
      <footer>
        <div className="pt-8 text-center">
          <p className="text-[10px] text-zinc-400 uppercase tracking-widest">
            Don't have an account? <Link href="/signup" className="text-zinc-900 font-black hover:text-primary underline underline-offset-4 decoration-zinc-200">Sign up</Link>
          </p>
        </div>
      </footer>
    </form>
  );
};

export default Login;