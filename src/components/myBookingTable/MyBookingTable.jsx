const MyBookingTable = ({ data }) => {
  return (
    <div className="overflow-x-auto">
      <table className="table w-11/12 mx-auto my-5 border border-gray-300">
        <thead className="bg-gray-100">
          <tr>
            <th>#</th>
            <th>Service Title</th>
            <th>Date</th>
            <th>Amount</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((item, index) => (
            <tr key={item._id} className="border-t">
              <td>{index + 1}</td>
              <td>{item.title}</td>
              <td>{item.date}</td>
              <td>${item.amount}</td>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.phone}</td>
              <td>{item.address}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyBookingTable;
