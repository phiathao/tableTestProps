// REACT
// MATERIAL UI
// TYPESCRIPT

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
        keyClassName: any;
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
    let cellKeys = ['name', 'name2', 'key1', 'date1', 'date2', 'button'];
    let cellThatIsDate = ['date1', 'date2'];
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
            keyClassName: classes.tableCell,
        }
    })
    return {
        isLink: true,
        linkPath: `test/path/${item._id}`,
        rowClassName: classes.tableRow,
        cell: rowCells,
        rowData: {
            item: item
        }
    }
})