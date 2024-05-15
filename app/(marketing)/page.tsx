import Link from "next/link"
import Image from "next/image"

import { env } from "@/env.mjs"
import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { MenuCard } from "@/components/menu-card"


export default async function IndexPage() {
  return (
    <>
      <section className="bg-primary_green space-y-6 pb-32 pt-32">
        <div className="container grid grid-cols-2 gap-4  max-w-[64rem]">
          <div className="container flex flex-col gap-8 text-left">
            <h1 className="font-heading text-6xl text-primary_yellow">
              Little Lemon
            </h1>
            <h2 className="font-heading text-4xl text-white">
              Chicago
            </h2>
            <p className="max-w-[42rem] leading-normal text-lg text-white">
              We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
            </p>
            <div className="space-x-4">
              <Link href="/reservation" className={cn(buttonVariants({ size: "lg" }))}>
                Reserve a table
              </Link>
            </div>
          </div>
          <div className="container">
            <img src="/images/restaurantfood.jpg" alt="A dish of food" className="rounded-3xl h-[300] w-auto"/>
          </div>
        </div>
      </section>
      <section
        id="specials"
        className="container space-y-6 py-8 md:py-12 lg:py-24"
      >
        <div className="mx-auto flex max-w-[58rem] flex-row justify-between py-6">
          <h2 className="font-heading text-4xl">
            This weeks specials!
          </h2>
          <Link href="/menu" className={cn(buttonVariants({ size: "lg" }))}>
            Online Menu
          </Link>
        </div>
        <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[58rem] md:grid-cols-3">
          <MenuCard
            title="Greek Salad"
            description="A vibrant medley of crisp lettuce, juicy tomatoes, tangy olives, creamy feta cheese, and refreshing cucumbers tossed in a zesty dressing."
            price="$12.99"
            image="/images/greek-salad.jpg"
          />
          <MenuCard
            title="Bruchetta"
            description="Toasted bread topped with a mixture of fresh tomatoes, basil, garlic, and olive oil."
            price="$12.99"
            image="/images/bruchetta.jpg"
          />
          <MenuCard
            title="Lemon Dessert"
            description="A light and refreshing lemon dessert that is perfect for summer."
            price="$12.99"
            image="/images/lemon-dessert.jpg"
          />
        </div>
      </section>
      <section id="about" className="container py-8 md:py-12 lg:py-24">
      </section>
      <section id="open-source" className="container py-8 md:py-12 lg:py-24">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
          <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
            Proudly Open Source
          </h2>
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            Taxonomy is open source and powered by open source software. <br />{" "}
            The code is available on{" "}
            <Link
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer"
              className="underline underline-offset-4"
            >
              GitHub
            </Link>
            .{" "}
          </p>
        </div>
      </section>
    </>
  )
}
