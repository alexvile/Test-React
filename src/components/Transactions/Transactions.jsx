export const Transactions = ({ items }) => {
  return (
    <table className="border">
      <thead className="bg-gray-400">
        <tr>
          <th className="p-1">Type</th>
          <th className="p-1">Amount</th>
          <th className="p-1">Currency</th>
        </tr>
      </thead>
      <tbody>
        {items.map(({ id, type, amount, currency }) => (
          <tr key={id} className="odd:bg-white even:bg-slate-50">
            <td className="p-1">{type}</td>
            <td className="p-1">{amount}</td>
            <td className="p-1">{currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
