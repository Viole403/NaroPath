import Link from "next/link";
import { BreadcrumbItem } from "@/src/types/course";
import { cn } from "@/src/lib/utils";
import { ChevronRight } from "lucide-react";

interface CourseBreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
}

export default function CourseBreadcrumbs({ items, className }: CourseBreadcrumbsProps) {
  return (
    <nav className={cn("flex", className)} aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1 md:space-x-2">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <li key={item.href} className="inline-flex items-center">
              {index > 0 && (
                <ChevronRight className="mx-1 h-4 w-4 text-gray-500" />
              )}

              {isLast ? (
                <span
                  className="text-sm font-medium text-primary"
                  aria-current="page"
                >
                  {item.label}
                </span>
              ) : (
                <Link
                  href={item.href}
                  className="text-sm font-medium text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200"
                >
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}