export default function Table({data}){
    return (
        <>
            <table border="1">
                <thead>
                <tr>
                    <th>object_id</th>
                    <th>item_name</th>
                    <th>price</th>
                    <th>purchase_date</th>
                </tr>
                </thead>
                <tbody>
                {data.map(result => (
                    <tr key={result._id}>
                        <td>{result._id}</td>
                        <td>{result.item_name}</td>
                        <td>{result.price}</td>
                        <td>{(result.purchase_date)}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </>
    )
}