// REACT
// MATERIAL UI
// TODO inhance TYPESCRIPT better

const classes: any = {}
// const classes = useStyles();
interface ITableHeaderRowKeys {
    headerClassName?: string;
    headerCell: {
        keyName: string;
        label: string;
        align: 'left' | 'right' | undefined;
        hide?: boolean;
        keyIsDate?: boolean;
        sort?: boolean;
        padding?: boolean;
        class?: string;
    }[]
}
// <ReuseableTableComponent sticky className={classes.table} tableHeaderRow={examplePassHeader} tableRows={examplePassRows}/>
const examplePassHeader: ITableHeaderRowKeys = {
    headerClassName: classes.headerTableRow,
    headerCell: ['name', 'name2', 'key1', 'date1', 'date2', 'button'].map(key => {
        return {
            keyName: key,
            label: key.toUpperCase(),
            align: key.length > 4 ? 'left' : 'right',
            hide: false,
            keyIsDate: (key === 'date1' || key === 'date2') ? true : false,
            sort: false,
            padding: false,
            class: classes[key],
        }
    })
}

interface ITableRowKeys {
    // ROW
    isLink?: boolean;
    rowClassName?: string;
    rowData?: {
        keyName: string;
    };
    // CELL
    cell: {
        keyName: string;
        keyClassName?: any;
        align: 'left' | 'right' | undefined;
        keyIsDate?: boolean;
        hideKey?: boolean;
    }[];
}
const itemTest = {
    _id: '1245a',
    name: 'a',
    name2: 'b',
    key1: 'key1',
    date1: '11/1/2012',
    date2: '12/2/2013',
    other: 'ga',
    stuff: 'est',
    iAm: 'testing',
    thatWill: 'notShow',
    booleanTest: false,
}
const tableListTest = [itemTest, itemTest, itemTest, itemTest, itemTest, itemTest]
const examplePassRows = (props) => tableListTest.map((item, i) => {
    // const classes = useStyles();
    let cellKeys = ['name', 'name2', 'key1', 'date1', 'date2', 'button']; // cell that can display
    // <TableCell> {row.key}
    let cellThatIsDate = ['date1', 'date2']; // cell parse date
    // <TableCell> new Date(row.dateKey)
    let cellHideOnMediaSize = ['key1']; // cell hide on media size
    let cellRight = ['name']; // cells align position // IE for number, date, boolean, and string position
    // <TableCell align="right">
    let cellLeft = ['name2'];
    // <TableCell align="left">

    let rowCells = Object.keys(item).filter(key => {
        let check = false
        cellKeys.map(cellKey => {
            if (key === cellKey) {
                check = true
            }
        })
        return check
    }).map(cellKey => {
        return {
            keyName: cellKey,
            keyValue: item[cellKey],
            // keyClassName: classes.tableCell,
            // <TableCell className={keyClassName}
            keyIsDate: cellThatIsDate.filter(key => key === cellKey).length > 0 ? true : false,
            hideKey: cellThatIsDate.filter(key => key === cellKey).length > 0 ? true : false
        }
    })

    // table connect base on cells / isLink / check to add className / data
    return {
        isLink: true,
        linkPath: `test/path/${item._id}`,
        // TableRow on click
        rowClassName: classes.tableRow,
        // <TableRow className={rowClassName}
        cell: rowCells,
        rowData: {
            item: item
            // ref item object
        }
    }
})

// TODO goal reusable