import css from "./TransactionHistory.module.css"

export default function TransactionHistory({ items }) {
    return (
        <div className={css.transcontainer}>
            <table className={css.translist}>
<thead>
    <tr>
        <th className={css.listitemhead}>Type</th>
        <th className={css.listitemhead}>Amount</th>
        <th className={css.listitemhead}>Currency</th>
    </tr>
</thead>

<tbody>
    {items.map(({ id, type, amount, currency }) => (
        <tr key={id}>
            <td className={css.listitembody}>{type}</td>
            <td className={css.listitembody}>{amount}</td>
            <td className={css.listitembody}>{currency}</td>
        </tr>
    ))}
</tbody>
</table>
</div>
);
}