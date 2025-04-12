import { ErrorBoundary as ReactErrorBoundary } from "react-error-boundary";
import { Button } from "@workspace/ui/components/button";
import { AlertTriangle } from "lucide-react";
import { cn } from "@/src/lib/utils";

export interface ErrorBoundaryProps {
  children: React.ReactNode;
  className?: string;
  resetErrorState?: () => void;
  fallbackRender?: (props: { error: Error; resetErrorBoundary: () => void }) => React.ReactNode;
}

interface DefaultFallbackProps {
  error: Error;
  resetErrorBoundary: () => void;
  className?: string;
}

export function DefaultErrorFallback({
  error,
  resetErrorBoundary,
  className
}: DefaultFallbackProps) {
  return (
    <div className={cn(
      "rounded-lg border border-red-200 bg-red-50 p-4 text-red-900 dark:border-red-800 dark:bg-red-950/50 dark:text-red-200",
      className
    )}>
      <div className="flex items-start gap-4">
        <div className="mt-0.5 rounded-full bg-red-100 p-1 dark:bg-red-900/50">
          <AlertTriangle className="h-5 w-5 text-red-600 dark:text-red-400" />
        </div>
        <div className="flex-1">
          <h3 className="text-base font-medium leading-6">Something went wrong</h3>
          <div className="mt-2 text-sm">
            <p>{error.message || "An unexpected error occurred"}</p>
          </div>
          <div className="mt-4">
            <Button
              size="sm"
              variant="outline"
              onClick={resetErrorBoundary}
            >
              Try again
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export function ErrorBoundary({
  children,
  className,
  resetErrorState,
  fallbackRender
}: ErrorBoundaryProps) {
  return (
    <ReactErrorBoundary
      fallbackRender={fallbackRender || (
        ({ error, resetErrorBoundary }) => (
          <DefaultErrorFallback
            error={error}
            resetErrorBoundary={resetErrorBoundary}
            className={className}
          />
        )
      )}
      onReset={resetErrorState}
    >
      {children}
    </ReactErrorBoundary>
  );
}