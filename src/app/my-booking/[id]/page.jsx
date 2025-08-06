import CheckoutFormUpdate from "@/components/checkoutForm/CheckoutFormUpdate"

const UpdateBookingPage = async ({params}) => {

    const p = await params;
    const res = await fetch(`http://localhost:3000/api/my-bookings/${p.id}`);
    const data = await res.json()
  return <div>
    <CheckoutFormUpdate />
  </div>
}

export default UpdateBookingPage