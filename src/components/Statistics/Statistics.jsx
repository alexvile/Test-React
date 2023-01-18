export const Statistics = ({ stats }) => {
  // const { id, label, percentage } = stats
  return (
    <section className="statistics m-3 border w-[200px]">
      <h2 className="title">Upload stats</h2>

      <ul className="stat-list">
        {stats.map(({ id, label, percentage }) => (
          <li key={id}>
            <span className="mx-1">{label}:</span>
            <span>{percentage}% </span>
          </li>
        ))}
        {/* <li className="item">
          <span className="label">.docx</span>
          <span className="percentage">4%</span>
        </li> */}
      </ul>
    </section>
  );
};
