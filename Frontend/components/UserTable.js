import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

export default function UserTable(props) {

    return (
        <Table>
            <TableHeader>
                <TableRow>
                    {
                        props.columnName.map((val) => {
                            return <TableHead className="text-md text-green-600">{val}</TableHead>
                        })
                    }
                </TableRow>
            </TableHeader>
            <TableBody>
                <TableRow>
                    {
                        props.rowData.map((val) => {
                            return (
                                val === 'View Detail' ? <TableCell className="text-green-600 hover:text-green-700">{val}</TableCell> :
                                    <TableCell>{val}</TableCell>
                            )
                        })
                    }
                </TableRow>
            </TableBody>
        </Table>
    );
}