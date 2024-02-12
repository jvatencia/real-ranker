import { SortableContainer, SortableElement } from "react-sortable-hoc";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(
    (theme) => ({
        sortableWrapper: {

        },
        sortableItem: {
            padding: '16px 10px',
            width: '100%',
            border: '1px solid rgba(0,0,0,0.3)',
            borderRadius: '5px',
            marginBottom: '10px',
            backgroundColor: theme.palette.light.main,
            cursor: 'pointer'
        }
    })
);

const SortableWrapper = SortableContainer(({ children }: any) => {
    const classes = useStyles();

    return (
        <div className={classes.sortableWrapper}>
            {children}
        </div>
    )
})

const SortableItem = SortableElement(({ item }: any) => {
    const classes = useStyles();

    return (
        <div className={classes.sortableItem}>
            {item.name}
        </div>
    )
});

export default function SortCard({ items, setItems }: any) {

    const onSortEnd = ({ oldIndex, newIndex }: any) => {
        setItems((prevState: any) => {
            const newItems = [...prevState];

            if (oldIndex > newIndex) {
                for (let i = oldIndex - 1; i >= newIndex; i--) {
                    newItems[i].order++;
                    newItems[oldIndex].order = newIndex;
                }
            } else if (oldIndex < newIndex) {
                for (let i = oldIndex + 1; i <= newIndex; i++) {
                    newItems[i].order--;
                    newItems[oldIndex].order = newIndex;
                }
            }
            return newItems.sort((a, b) => a.order - b.order);
        });
    };

    return (
        <SortableWrapper onSortEnd={onSortEnd}>
            {
                items.map((item: any, index: number) => (
                    <SortableItem item={item} index={index} key={`sortableItemSortModal${index}`} />
                ))
            }
        </SortableWrapper>
    )
}