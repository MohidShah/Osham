
import { cn } from '@/lib/utils';
import { ReceiptText } from 'lucide-react';

export function Logo({ className }: { className?: string }) {
  return (
    <div
      className={cn('flex items-center gap-2', className)}
      title="Osham Medical Billing"
    >
      <ReceiptText className="h-8 w-8 text-primary" />
      <div className="flex flex-col">
        <span className="text-2xl font-bold text-foreground leading-tight">Osham</span>
        <span className="text-xs font-medium text-primary/80 tracking-normal normal-case">Medical Billing</span>
      </div>
    </div>
  );
}
