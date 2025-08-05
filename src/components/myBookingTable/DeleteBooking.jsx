import { FaTrash } from "react-icons/fa";

const DeleteBooking = ({ id }) => {
  const handleDelete = async (id) => {
    // if (!confirm) return;

    try {
      const res = await fetch(`http://localhost:3000/api/service/${id}`, {
        method: "DELETE",
      });

      const data = await res.json()
    } catch (err) {
      console.error("Delete failed:", err);
    }
  };

  return (
    <button
      onClick={() => handleDelete(id)}
      className="text-red-500 hover:text-red-700 text-xl"
      title="Delete Booking"
    >
      <FaTrash />
    </button>
  );
};

export default DeleteBooking;
