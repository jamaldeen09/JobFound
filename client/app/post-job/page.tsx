"use client"
import React from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { HugeiconsIcon } from "@hugeicons/react";
import {
    Job,
    MapPin,
    Banknote,
    Briefcase,
    Book,
} from "@hugeicons/core-free-icons";

import { Field, FieldError, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import z from "zod"
import Navbar from "@/components/home-page/Navbar";
import Link from "next/link";

// Job schema
const jobSchema = z.object({
    title: z.string().min(5, "Job title is too short").max(100),
    location: z.string().min(2, "Location is required"),
    salary: z.string().optional(),
    workPolicy: z.enum(["remote", "hybrid", "on-site"]),
    employmentType: z.enum(["full-time", "contract", "part-time", "internship"]),
    description: z.string().min(50, "Please provide a more detailed description"),
});

// Post job page
const PostJobPage = () => {
    // Job form
    const form = useForm<z.infer<typeof jobSchema>>({
        resolver: zodResolver(jobSchema),
        defaultValues: {
            title: "",
            location: "",
            salary: "",
            workPolicy: "on-site",
            employmentType: "full-time",
            description: "",
        }
    });

    const onSubmit = async (data: z.infer<typeof jobSchema>) => {
        console.log("Posting Job:", data);
        // Integration logic here
    };

    return (
        <div className="min-h-screen bg-[#F8F8F8]">
            <main className="max-w-282 mx-auto py-8 px-4">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

                    {/* Left Side: Form Container */}
                    <div className="lg:col-span-8">
                        <div className="bg-white rounded-lg border border-zinc-200 overflow-hidden">
                            <header className="p-6 border-b border-zinc-100 bg-white">
                                <h1 className="text-2xl font-bold text-zinc-900">Post a new job</h1>
                                <p className="text-sm text-zinc-500">Find the right professional for your team.</p>
                            </header>

                            <form onSubmit={form.handleSubmit(onSubmit)} className="p-8">
                                <FieldGroup className="gap-6">

                                    {/* Job Title */}
                                    <Controller
                                        name="title"
                                        control={form.control}
                                        render={({ field, fieldState }) => (
                                            <Field data-invalid={fieldState.invalid}>
                                                <FieldLabel>Job Title</FieldLabel>
                                                <Input {...field} placeholder="e.g. Senior Frontend Developer" />
                                                {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                                            </Field>
                                        )}
                                    />

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        {/* Location */}
                                        <Controller
                                            name="location"
                                            control={form.control}
                                            render={({ field, fieldState }) => (
                                                <Field data-invalid={fieldState.invalid}>
                                                    <FieldLabel>Location</FieldLabel>
                                                    <Input {...field} placeholder="e.g. London, UK" />
                                                    {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                                                </Field>
                                            )}
                                        />

                                        {/* Work Policy */}
                                        <Controller
                                            name="workPolicy"
                                            control={form.control}
                                            render={({ field }) => (
                                                <Field>
                                                    <FieldLabel>Work Policy</FieldLabel>
                                                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                        <SelectTrigger>
                                                            <SelectValue placeholder="Select policy" />
                                                        </SelectTrigger>
                                                        <SelectContent position="popper">
                                                            <SelectItem value="on-site">On-site</SelectItem>
                                                            <SelectItem value="hybrid">Hybrid</SelectItem>
                                                            <SelectItem value="remote">Remote</SelectItem>
                                                        </SelectContent>
                                                    </Select>
                                                </Field>
                                            )}
                                        />
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">


                                        {/* Employment Type */}
                                        <Controller
                                            name="employmentType"
                                            control={form.control}
                                            render={({ field }) => (
                                                <Field>
                                                    <FieldLabel>Employment Type</FieldLabel>
                                                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                        <SelectTrigger>
                                                            <SelectValue placeholder="Select type" />
                                                        </SelectTrigger>
                                                        <SelectContent position="popper">
                                                            <SelectItem value="full-time">Full-time</SelectItem>
                                                            <SelectItem value="contract">Contract</SelectItem>
                                                            <SelectItem value="part-time">Part-time</SelectItem>
                                                            <SelectItem value="internship">Internship</SelectItem>
                                                        </SelectContent>
                                                    </Select>
                                                </Field>
                                            )}
                                        />

                                        {/* Salary */}
                                        <Controller
                                            name="salary"
                                            control={form.control}
                                            render={({ field }) => (
                                                <Field>
                                                    <FieldLabel>Salary (Optional)</FieldLabel>
                                                    <Input {...field} placeholder="e.g. $120k - $150k" />
                                                </Field>
                                            )}
                                        />
                                    </div>

                                    {/* Description */}
                                    <Controller
                                        name="description"
                                        control={form.control}
                                        render={({ field, fieldState }) => (
                                            <Field data-invalid={fieldState.invalid}>
                                                <FieldLabel>Job Description</FieldLabel>
                                                <Textarea
                                                    {...field}
                                                    className="min-h-50 resize-none"
                                                    placeholder="Describe the role, requirements, and benefits..."
                                                />
                                                {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                                            </Field>
                                        )}
                                    />

                                    <div className="flex justify-end pt-4 border-t border-zinc-100 items-center gap-2">
                                        <Link href="/home">
                                            <Button type="button" variant="outline" size="lg" className="px-12 rounded-full font-bold">
                                                Cancel
                                            </Button>
                                        </Link>

                                        <Button type="submit" size="lg" className="px-12 rounded-full font-bold">
                                            Post Job
                                        </Button>
                                    </div>
                                </FieldGroup>
                            </form>
                        </div>
                    </div>

                    {/* Right Side: Tips Card (Sticky) */}
                    <aside className="hidden lg:block lg:col-span-4">
                        <div className="bg-white rounded-lg border border-zinc-200 p-6 sticky top-20">
                            <h3 className="font-bold text-zinc-900 mb-4">Post job tips</h3>
                            <ul className="space-y-4 text-sm text-zinc-600">
                                <li className="flex gap-3">
                                    <span className="text-primary font-bold">1.</span>
                                    Be specific with the job title to attract the right candidates.
                                </li>
                                <li className="flex gap-3">
                                    <span className="text-primary font-bold">2.</span>
                                    Transparent salary ranges increase applicant quality by 30%.
                                </li>
                                <li className="flex gap-3">
                                    <span className="text-primary font-bold">3.</span>
                                    Mention your work policy clearly (Remote/Hybrid).
                                </li>
                            </ul>
                        </div>
                    </aside>
                </div>
            </main>
        </div>
    );
};

export default PostJobPage;