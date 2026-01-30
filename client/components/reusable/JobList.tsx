"use client"
import React from "react";
import { Card } from "../ui/card";
import { HugeiconsIcon } from "@hugeicons/react";
import { Banknote, Briefcase, MapPin } from "@hugeicons/core-free-icons";

export interface JobListProps {
  onClick: () => void;
  isSelected: boolean;
  title: string;
  postedBy: string;
  location: string;
  salary?: string;
  workPolicy: "remote" | "hybrid" | "on-site";
  hasCurrentUserApplied: boolean;
  hasCurrentUserViewed: boolean;
  totalApplicants: number;
}

const JobList = (props: JobListProps): React.ReactElement => {
  // Formats the policy coming ing
  const formatWorkPolicy = () => {
    if (props.workPolicy === "on-site") return "On-Site";
    return props.workPolicy.charAt(0).toUpperCase() + props.workPolicy.slice(1);
  };

  return (
    <Card
      onClick={props.onClick}
      className={`
        relative cursor-pointer transition-all duration-200 border-x-0 border-t-0 border-b rounded-none shadow-none
        hover:bg-slate-50
        ${props.isSelected ? "bg-slate-100 border-l-4 border-l-primary" : "bg-white border-l-4 border-l-transparent"}
      `}
    >
      <div className="p-4 space-y-2">
        {/* Top Row: Applied/Viewed Indicators */}
        <div className="flex justify-between items-start">
          <h2 className={`font-semibold text-lg leading-tight ${props.isSelected ? "text-primary" : "text-slate-900"}`}>
            {props.title}
          </h2>

          <div className="flex items-center gap-2">
            <span className="text-[10px] bg-green-100 text-green-700 font-bold px-2 py-0.5 rounded uppercase tracking-wider">
              {props.totalApplicants} applicants
            </span>

            {props.hasCurrentUserApplied && (
              <span className="text-[10px] bg-green-100 text-green-700 font-bold px-2 py-0.5 rounded uppercase tracking-wider">
                Applied
              </span>
            )}
          </div>
        </div>

        <p className="text-sm font-medium text-slate-600">{props.postedBy}</p>

        {/* Metadata Row */}
        <div className="flex flex-wrap gap-3 text-slate-500 text-xs mt-1">
          <div className="flex items-center gap-1">
            <HugeiconsIcon icon={MapPin} className="size-4" />
            <span>{props.location}</span>
          </div>
          <div className="flex items-center gap-1">
            <HugeiconsIcon icon={Briefcase} className="size-4" />
            <span className="capitalize">{formatWorkPolicy()}</span>
          </div>
          {props.salary && (
            <div className="flex items-center gap-1 text-slate-700 font-medium">
              <HugeiconsIcon icon={Banknote} className="size-4" />
              <span>{props.salary}</span>
            </div>
          )}
        </div>

        {/* Bottom Row: Viewed status indicator (Subtle) */}
        {!props.hasCurrentUserApplied && props.hasCurrentUserViewed && (
          <p className="text-[11px] text-slate-400 italic">Viewed</p>
        )}
      </div>
    </Card>
  );
};

export default JobList;