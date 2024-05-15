import Link from "next/link"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"

export function MenuCard({ title, description, price, image }) {
  return (
    <div className="relative overflow-hidden rounded-3xl border bg-gray-200">
      <div className="flex flex-col h-full rounded-2xl p-2">
        <img src={image} className="h-40 fill-current rounded-2xl"/>
        <div className="flex flex-col p-3 justify-between flex-grow">
          <div>
            <div className="flex justify-between items-center py-2">
              <h3 className="font-bold">{title}</h3>
              <p className="font-bold text-xs">{price}</p>
            </div>
            <p className="text-sm text-muted-foreground pb-4">
              {description}
            </p>
          </div>
          <Link href="/reservations" className={cn(buttonVariants({ variant: "default", size: "sm" }))}> Add to Reservation </Link>
        </div>
      </div>
    </div>
  )
}