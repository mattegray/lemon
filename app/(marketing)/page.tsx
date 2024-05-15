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
      <section id="home" className="bg-primary_green space-y-6 pb-32 pt-32">
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
              <Link href="/reservations" className={cn(buttonVariants({ size: "lg" }))}>
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
        id="menu"
        className="container space-y-6 py-8 md:py-12 lg:py-24"
      >
        <div className="mx-auto flex max-w-[58rem] flex-row justify-between py-6">
          <h2 className="font-heading text-4xl">
            Our Menu
          </h2>
          <Link href="/reservations" className={cn(buttonVariants({ size: "lg" }))}>
            Reserve a table
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
            price="$14.99"
            image="/images/bruchetta.jpg"
          />
          <MenuCard
            title="Lemon Dessert"
            description="A light and refreshing lemon dessert that is perfect for summer."
            price="$7.99"
            image="/images/lemon-dessert.jpg"
          />
        </div>
      </section>
      <section id="about" className="bg-primary_green container space-y-6 py-8 md:py-12 lg:py-24">
        <div className="mx-auto flex max-w-[48rem] flex-col items-center justify-center gap-4 text-center">
          <h2 className="font-heading text-4xl text-white">
            About Us
          </h2>
          <h3 className="font-heading text-2xl text-white">Little Lemon, Chicago: A Mediterranean Delight</h3>
          <img src="/images/mario-and-adrian-A.jpg" alt="Mario and Adrian A" className="rounded-3xl h-[300] w-auto"/>
          <p className="max-w-[85%] leading-8 text-white">
            Little Lemon, nestled in the heart of Chicago, is a charming family-owned Mediterranean restaurant renowned for its perfect blend of tradition and modernity.
            The menu features classic Mediterranean dishes like hummus, baba ganoush, and lamb kebabs, each crafted from age-old recipes passed down through generations.
            However, what truly sets Little Lemon apart is its innovative twist on these beloved classics, resulting in signature dishes such as lemon-infused chicken shawarma and grilled octopus with a pomegranate glaze.
            The restaurant's commitment to using fresh, locally-sourced ingredients ensures every bite is bursting with authentic flavor.
          </p>
          <img src="/images/mario-and-adrian-B.jpg" alt="Mario and Abrian B" className="rounded-3xl h-[300] w-auto"/>
          <p className="max-w-[85%] leading-8 text-white">
            The warm, inviting atmosphere of Little Lemon makes it an ideal spot for any occasion, from casual family dinners to special celebrations.
            The rustic yet elegant décor, combined with the attentive and knowledgeable staff, creates a dining experience that feels both cozy and refined.
            Whether you’re indulging in a mezze platter or savoring a hearty moussaka, Little Lemon offers a culinary journey that delights the senses and celebrates the rich heritage of Mediterranean cuisine.
          </p>
        </div>
      </section>
    </>
  )
}
