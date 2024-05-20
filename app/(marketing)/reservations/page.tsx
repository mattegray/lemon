import { ReservationForm } from "@/components/reservation-form"

export const metadata = {
  title: "Reservations",
}

export default function ReservationPage() {
  return (
    <section id="menu" className="container space-y-6 py-8 md:py-12 lg:py-24">
      <div className="mx-auto max-w-[32rem] justify-between py-6">
        <h2 className="font-heading text-4xl">Reservations</h2>
      </div>
      <div className="mx-auto max-w-[32rem] justify-center">
        <ReservationForm />
      </div>
    </section>
  )
}
