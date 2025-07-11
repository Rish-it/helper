import * as React from "react";
import { cn } from "@/lib/utils";

const Table = ({ className, ref, ...props }: React.ComponentPropsWithRef<"table">) => (
  <div className="relative w-full overflow-auto">
    <table ref={ref} className={cn("w-full caption-bottom text-sm", className)} {...props} />
  </div>
);
Table.displayName = "Table";

const TableHeader = ({ className, ref, ...props }: React.ComponentPropsWithRef<"thead">) => (
  <thead ref={ref} className={cn("[&_tr]:border-b", className)} {...props} />
);
TableHeader.displayName = "TableHeader";

const TableBody = ({ className, ref, ...props }: React.ComponentPropsWithRef<"tbody">) => (
  <tbody ref={ref} className={cn("[&_tr:last-child]:border-0", className)} {...props} />
);
TableBody.displayName = "TableBody";

const TableFooter = ({ className, ref, ...props }: React.ComponentPropsWithRef<"tfoot">) => (
  <tfoot ref={ref} className={cn("border-t bg-muted/50 font-medium last:[&>tr]:border-b-0", className)} {...props} />
);
TableFooter.displayName = "TableFooter";

const TableRow = ({ className, ref, ...props }: React.ComponentPropsWithRef<"tr">) => (
  <tr
    ref={ref}
    className={cn("border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted", className)}
    {...props}
  />
);
TableRow.displayName = "TableRow";

const TableHead = ({ className, ref, ...props }: React.ComponentPropsWithRef<"th">) => (
  <th
    ref={ref}
    className={cn(
      "h-12 px-4 text-left align-middle text-xs font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0",
      className,
    )}
    {...props}
  />
);
TableHead.displayName = "TableHead";

const TableCell = ({ className, ref, ...props }: React.ComponentPropsWithRef<"td">) => (
  <td ref={ref} className={cn("p-4 align-middle [&:has([role=checkbox])]:pr-0", className)} {...props} />
);
TableCell.displayName = "TableCell";

const TableCaption = ({ className, ref, ...props }: React.ComponentPropsWithRef<"caption">) => (
  <caption ref={ref} className={cn("mt-4 text-sm text-muted-foreground", className)} {...props} />
);
TableCaption.displayName = "TableCaption";

export { Table, TableHeader, TableBody, TableFooter, TableHead, TableRow, TableCell, TableCaption };
