import { makeStyles } from "@mui/styles"
import { MOCK_VIOLIN_GRAPH_DATA } from "../../../utils/mocks";
import ViolinGraph from "../../../components/charts/ViolinGraph";

const useStyles = makeStyles(
    (theme) => ({
        graphTitle: {
            fontFamily: 'Poppins',
            fontWeight: 'bold',
            color: theme.palette.primary.main
        },
    })
);

export default function WhatsNewViolinGraph() {
    const classes = useStyles();
    const data = MOCK_VIOLIN_GRAPH_DATA;

    return (
        <div>
            <div className={classes.graphTitle}>Violin Graph</div>
            <ViolinGraph
                width={800}
                height={500}
                data={data}
            />
        </div>
    )
}