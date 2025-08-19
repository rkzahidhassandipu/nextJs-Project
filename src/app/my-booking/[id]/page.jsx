import CheckoutFormUpdate from "@/components/checkoutForm/CheckoutFormUpdate"
import { headers } from "next/headers";

const UpdateBookingPage = async ({params}) => {

    const p = await params;
    const res = await fetch(`http://localhost:3000/api/my-bookings/${p.id}`, {
      headers: await headers()
    });
    const data = await res.json()
  return <div>
    <CheckoutFormUpdate data={data} />
  </div>
}

export default UpdateBookingPage