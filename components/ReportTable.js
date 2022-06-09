import { hours } from "../data";

export default function ReportTable({ table_data }) {
    return (
        <table>
            <thead className="px-8 py-2 text-black bg-emerald-500">
                <tr>
                    <th>Location</th>
                    {hours.map(hour => {
                        return <th key={hour}>{hour}</th>
                    })}
                    <th>Totals</th>
                </tr>
            </thead>
            <tbody>
                {table_data.map(item => {
                    return <tr key={item.city}>
                        <td>{item.city}</td>
                        {hours.map(hour => {
                            return <td key={hour}>
                                {item.values[hour]}
                            </td>
                        })}
                        <td>{item.total}</td>
                    </tr>
                })}
            </tbody>
        </table>
    )
}