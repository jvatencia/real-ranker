import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Skeleton, debounce, TextField, useMediaQuery } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { devices } from "../../utils";
import { useEffect, useState } from "react";
import { SearchOutlined } from "@mui/icons-material";
import { useShallow } from "zustand/react/shallow";
import useCollegeStore from "../../store/college/college.store";


const useStyles = makeStyles(
    (theme: any) => ({
        modalBody: {
            width: '100%',
            minHeight: '368px',
            padding: ' 24px 20px',
            [theme.breakpoints.up('md')]: {
                width: '600px'
            }
        },
        collegeItem: {
            width: '100%',
            padding: '10px 16px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            border: '1px solid ' + theme.palette.primary.main,
            boxShadow: '0px 3px 0px ' + theme.palette.primary.main,
            marginBottom: '10px',
            borderRadius: '5px',
            fontSize: '14px'
        },
        searchBox: {
            display: 'flex',
            alignItems: 'center',
            padding: '8px 16px'
        },
        searchResult: {
            overflowY: 'auto',
            maxHeight: '500px'
        }
    })
)

interface SearchCollegeModalProps {
    showDialog: boolean;
    setDialog: any;
    setCollege: any;
}
export default function SearchCollegeModal({ showDialog, setDialog, setCollege }: Readonly<SearchCollegeModalProps>) {
    const classes = useStyles();
    const colleges = useCollegeStore(useShallow((state) => state.colleges));
    const fetchUniversities = useCollegeStore((state) => state.fetchUniversities);
    const [searchResult, setSearchResult] = useState<any[]>([]);
    const [isSearching, setIsSearching] = useState(false);
    const matches = useMediaQuery(devices.tablet);
    const onClose = () => {
        setDialog(false)
    }

    const confirmSelection = (college: any) => {
        setCollege(college);
        onClose();
    }

    const searchCollege = debounce((e: any) => {
        const input = e.target.value.toLowerCase();
        console.log('[searchCollege] searched input', input);

        setSearchResult([]);
        setSearchResult(colleges.filter((item) => {
            console.log(`[setSearchResult] ${item.instnm} did matched ${input}?`, item.instnm.toLowerCase().includes(input));
            return item.instnm.toLowerCase().includes(input);
        }));
        setIsSearching(false);
    }, 1000);

    const initSearch = (e: any) => {
        setIsSearching(false);
    }

    useEffect(() => {
        console.log('[searchCollege] searched colleges', searchResult);
    }, [searchResult]);

    useEffect(() => {
        if (showDialog) {
            setSearchResult([]);
        }
    }, [showDialog]);

    useEffect(() => {
        if (colleges.length === 0)
            fetchUniversities()
        console.log('[searchCollege] colleges', colleges);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [colleges]);


    return (
        <Dialog
            open={showDialog}
            onClose={onClose}
            aria-labelledby="max-width-dialog-title"
            fullScreen={matches}
        >
            <DialogTitle>
                Search College
            </DialogTitle>
            <DialogContent className={classes.modalBody}>
                <div className={classes.searchBox}>
                    <SearchOutlined />
                    <TextField
                        variant="standard"
                        sx={{ ml: 1, flex: 1 }}
                        placeholder="Search College"
                        inputProps={{ 'aria-label': 'search college' }}
                        onInput={(e) => { initSearch(e); searchCollege(e); }}
                    />
                </div>
                {
                    isSearching && searchResult.length === 0 ?
                        <div>
                            <Skeleton variant="rectangular" width={'100%'} height={70} sx={{ marginTop: '5px' }} />
                            <Skeleton variant="rectangular" width={'100%'} height={70} sx={{ marginTop: '5px' }} />
                            <Skeleton variant="rectangular" width={'100%'} height={70} sx={{ marginTop: '5px' }} />
                            <Skeleton variant="rectangular" width={'100%'} height={70} sx={{ marginTop: '5px' }} />
                        </div>
                        :
                        <div className={classes.searchResult}>
                            {
                                searchResult.map((college) => (
                                    <div className={classes.collegeItem}
                                        onClick={(e) => confirmSelection(college)}
                                        key={`collegeSearchItem${college.id}`}>
                                        {college.instnm}
                                    </div>
                                ))
                            }
                        </div>
                }
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose} color="primary">
                    Close
                </Button>
            </DialogActions>
        </Dialog>

    )
}