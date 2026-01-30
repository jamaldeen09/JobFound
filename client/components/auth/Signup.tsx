import React from "react";
import { Field, FieldError, FieldGroup, FieldLabel } from "../ui/field";
import { Controller, useForm } from "react-hook-form";
import z from "zod"
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import Link from "next/link";
import { Key, Mail, User } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

// Signup schema
const signupSchema = z.object({
    name: z.string().min(2, { error: "Your name must be at least 2 characters" }),
    email: z.email({ error: "Invalid email address" }),
    password: z.string().min(6, { error: "Password must be at least 6 characters" })
        .max(50, { error: "Password cannot exceed 50 characters" })
        .regex(/(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?])/, { error: "Password must contain at least 1 special character" })
});

const Signup = (): React.ReactElement => {
    // Signup form
    const signupForm = useForm<z.infer<typeof signupSchema>>({
        resolver: zodResolver(signupSchema),
        defaultValues: ({
            name: "",
            email: "",
            password: "",
        })
    });

    // OnSubmit function
    const onSubmit = async (values: z.infer<typeof signupSchema>) => { };
    return (
        <form onSubmit={signupForm.handleSubmit(onSubmit)} id="signup-form" className="w-full max-w-xs">

            {/* ===== Header ===== */}
            <header className="space-y-1 text-center lg:text-left">
                <h3 className="text-3xl font-black tracking-normal">New account</h3>
                <p className="text-[10px] text-zinc-400 uppercase tracking-[0.2em] font-bold">Register your credentials</p>
            </header>

            {/* ===== Main ===== */}
            <FieldGroup className="gap-4 mt-6">
                {/* Name */}
                <Controller
                    name="name"
                    control={signupForm.control}
                    render={({ field, fieldState }) => (
                        <Field data-invalid={fieldState.invalid}>
                            <FieldLabel htmlFor="signup-form-name" className="text-xs text-zinc-400 flex items-center gap-2">
                                <HugeiconsIcon icon={User} className="size-4" />
                                Name
                            </FieldLabel>
                            <Input
                                {...field}
                                id="signup-form-name"
                                aria-invalid={fieldState.invalid}
                                placeholder="e.g John Doe"
                                autoComplete="off"
                            />
                            {fieldState.invalid && (<FieldError errors={[fieldState.error]} />)}
                        </Field>
                    )}
                />

                {/* Email address */}
                <Controller
                    name="email"
                    control={signupForm.control}
                    render={({ field, fieldState }) => (
                        <Field data-invalid={fieldState.invalid}>
                            <FieldLabel htmlFor="signup-form-email" className="text-xs text-zinc-400 flex items-center gap-2">
                                <HugeiconsIcon icon={Mail} className="size-4" />
                                Email address
                            </FieldLabel>
                            <Input
                                {...field}
                                id="signup-form-email"
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
                    control={signupForm.control}
                    render={({ field, fieldState }) => (
                        <Field data-invalid={fieldState.invalid}>
                            <FieldLabel htmlFor="signup-form-password" className="text-xs text-zinc-400 flex items-center gap-2">
                                <HugeiconsIcon icon={Key} className="size-4" />
                                Password
                            </FieldLabel>
                            <Input
                                {...field}
                                id="signup-form-password"
                                aria-invalid={fieldState.invalid}
                                placeholder="johndoe@email.com"
                                autoComplete="off"
                            />
                            {fieldState.invalid && (<FieldError errors={[fieldState.error]} />)}
                        </Field>
                    )}
                />

                {/* Submit button */}
                <Button size="lg" type="submit" form="signup-form">
                    Sign up
                </Button>
            </FieldGroup>

            {/* ===== Footer ===== */}
            <footer>
                <div className="pt-8 text-center">
                    <p className="text-[10px] text-zinc-400 uppercase tracking-widest">
                        Already have an account? <Link href="/login" className="text-zinc-900 font-black hover:text-primary underline underline-offset-4 decoration-zinc-200">Log In</Link>
                    </p>
                </div>
            </footer>
        </form>
    );
};

export default Signup;