import "./Rows.css";

function Rows({ teror }) {
  return (
    <table className="table">
      <thead>
        <tr>
          <th className="titlesOfTable"> Name </th>
          <th className="titlesOfTable"> Organization</th>
          <th className="titlesOfTable"> AttacksCount</th>
          <th className="titlesOfTable"> Status</th>
          <th className="titlesOfTable"> RelationToIsraelSummary</th>
          <th className="titlesOfTable"> Image </th>
        </tr>
      </thead>
      <tbody>
        {teror.map((t, i) => (
          <tr key={i}>
            <td className="row">{t.name}</td>
            <td className="row">{t.organization}</td>
            <td className="row">{t.attacksCount}</td>
            <td className="row">{t.status}</td>
            <td className="row">{t.relationToIsraelSummary}</td>
            <td>
              <img src={t.imageUrl} alt="licensed-image.webp" />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Rows;
