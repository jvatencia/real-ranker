import React, { useMemo, useState } from "react";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { borders } from '@mui/system';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import  {toPercent, toLetterGrade, getScore} from '../../utils/utilities';





const commonStyles = {
  bgcolor: 'background.paper',
  borderColor: 'none',
  m: 1,
  border: 0,
  width: '5.2rem',
  height: '5.2rem',
  position: 'relative',
  top: '-32px',
  right: '-25px',
  zIndex:'1000'
};


//const OurTableCell = withStyles({
  //root: {
    //borderBottom: "none"
 // }
//})(TableCell);



function Score(Text : string) {

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
      <Box sx={{ ...commonStyles, borderRadius: '50%' }} />       {Text}
       
	</Box>
);
}

function createData(
  name:string,
  success: string,
  value: string,
  cost: string,
  outcomes: string,
  diversity: string,
) {
  return { name, success, value, cost, outcomes, diversity };
}

const rows = [
  createData('Michigan','A', 'B', 'B', 'D', 'A'),

];
interface ICard{
college:any
}
export default function OutlinedCard2({college}:ICard) {


  const [successactive, setSuccessActive] = useState(false);
  const successexpanded = ( <React.Fragment>
  <TableRow>
            <TableCell align="center" sx={{borderBottom: "none" , width: '20%', whiteSpace: 'wrap'}} >Orientation to Graduation</TableCell>
            <TableCell sx={{borderBottom: "none" , width: '20%', whiteSpace: 'wrap'}}/>
            <TableCell align="center"  sx={{borderBottom: "none" , width: '20%', whiteSpace: 'wrap'}} >Average Time to Graduation</TableCell>
            <TableCell sx={{borderBottom: "none" , width: '20%', whiteSpace: 'wrap'}}/>
            <TableCell align="center" sx={{borderBottom: "none" , width: '20%', whiteSpace: 'wrap'}}>Student Support Score</TableCell>
          </TableRow>
          <TableRow>
            <TableCell align="center" sx={{borderBottom: "none", fontFamily:'Poppins', fontSize:'16px', width: '20%', whiteSpace: 'wrap'}} >{college['comp_orig_yr4_rt']}</TableCell>
            <TableCell sx={{borderBottom: "none" , width: '20%', whiteSpace: 'wrap'}}/>
            <TableCell align="center" sx={{borderBottom: "none", fontFamily:'Poppins', fontSize:'16px', width: '20%', whiteSpace: 'wrap'}} >{(4*college['c100_4']/((college['c150_4']+college['c100_4'])))+(6*college['c150_4']/((college['c150_4']+college['c100_4'])))}</TableCell>
            <TableCell sx={{borderBottom: "none" , width: '20%', whiteSpace: 'wrap'}}/>
            <TableCell align="center" sx={{borderBottom: "none", fontFamily:'Poppins', fontSize:'16px', width: '20%', whiteSpace: 'wrap'}}>{((0.4*college['support_relative'])+(0.6*college['support_absolute']))}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell align="center" sx={{borderBottom: "none", width: '20%', whiteSpace: 'wrap'}}>% Left in 2 Years</TableCell>
            <TableCell sx={{borderBottom: "none" , width: '20%', whiteSpace: 'wrap'}}/>
            <TableCell align="center" sx={{borderBottom: "none", width: '20%', whiteSpace: 'wrap'}} >Transfer Rate</TableCell>
            <TableCell sx={{borderBottom: "none" , width: '20%', whiteSpace: 'wrap'}}/>
            <TableCell align="center" sx={{borderBottom: "none", width: '20%', whiteSpace: 'wrap'}} >Withdrawal Rate</TableCell>
            </TableRow>
            <TableRow>
            <TableCell align="center" sx={{ borderColor: "black", fontFamily:'Poppins', fontSize:'16px', width: '20%', whiteSpace: 'wrap'}} >{college['enrl_orig_yr2_rt']}</TableCell>
            <TableCell sx={{borderColor: "black" , width: '20%', whiteSpace: 'wrap'}}/>
            <TableCell align="center" sx={{ borderColor: "black", fontFamily:'Poppins', fontSize:'16px', width: '20%', whiteSpace: 'wrap'}}>{college['trans_4']}</TableCell>
            <TableCell sx={{borderColor: "black" , width: '20%', whiteSpace: 'wrap'}}/>
            <TableCell align="center" sx={{ borderColor: "black", fontFamily:'Poppins', fontSize:'16px', width: '20%', whiteSpace: 'wrap'}} >{college['wdraw_orig_yr3_rt']}</TableCell>
          </TableRow>
          <TableRow> <Button variant="contained" sx={{ display: 'flex', justifyContent: 'center', position: 'relative', left: '225%', bottom: '-15px' }}>Learn More</Button> <HelpOutlineOutlinedIcon sx={{ color: "#3B45BB" ,display: 'flex', justifyContent: 'center', position: 'relative', left: '446%', bottom: '21px' }}/></TableRow>
          
          </React.Fragment>
);
const [valueactive, setValueActive] = useState(false);
const valueexpanded = ( <React.Fragment>
<TableRow>
            <TableCell align="center" sx={{borderBottom: "none", width: '20%', whiteSpace: 'wrap'}} >Worth More to Pay More</TableCell>
            <TableCell sx={{borderBottom: "none" , width: '20%', whiteSpace: 'wrap'}}/>
            <TableCell align="center" sx={{borderBottom: "none", width: '20%', whiteSpace: 'wrap'}} >Filler</TableCell>
            <TableCell sx={{borderBottom: "none" , width: '20%', whiteSpace: 'wrap'}}/>
            <TableCell align="center" sx={{borderBottom: "none", width: '20%', whiteSpace: 'wrap'}}>Filler</TableCell>
</TableRow>
<TableRow>
            <TableCell align="center" sx={{ borderColor: "black", fontFamily:'Poppins', fontSize:'16px', width: '20%', whiteSpace: 'wrap'}} >Some Professions</TableCell>
            <TableCell sx={{borderColor: "black" , width: '20%', whiteSpace: 'wrap'}}/>
            <TableCell align="center" sx={{ borderColor: "black", fontFamily:'Poppins', fontSize:'16px', width: '20%', whiteSpace: 'wrap'}} >Filler</TableCell>
            <TableCell sx={{borderColor: "black" , width: '20%', whiteSpace: 'wrap'}}/>
            <TableCell align="center" sx={{ borderColor: "black", fontFamily:'Poppins', fontSize:'16px', width: '20%', whiteSpace: 'wrap'}} >Filler</TableCell>
          </TableRow>
          <TableRow> <Button variant="contained" sx={{ display: 'flex', justifyContent: 'center', position: 'relative', left: '225%', bottom: '-15px' }}>Learn More</Button> <HelpOutlineOutlinedIcon sx={{ color: "#3B45BB" ,display: 'flex', justifyContent: 'center', position: 'relative', left: '446%', bottom: '21px' }}/></TableRow>
          </React.Fragment>
);
const [costactive, setCostActive] = useState(false);
const costexpanded = ( <React.Fragment>
  <TableRow>
            <TableCell align="center" sx={{borderBottom: "none", width: '20%', whiteSpace: 'wrap'}} >Net Price for Your Income Range</TableCell>
            <TableCell sx={{borderBottom: "none" , width: '20%', whiteSpace: 'wrap'}}/>
            <TableCell align="center" sx={{borderBottom: "none", width: '20%', whiteSpace: 'wrap'}} >Net Cost of Your Degree</TableCell>
            <TableCell sx={{borderBottom: "none" , width: '20%', whiteSpace: 'wrap'}}/>
            <TableCell align="center" sx={{borderBottom: "none", width: '20%', whiteSpace: 'wrap'}} >Filler</TableCell>
</TableRow>
<TableRow>
            <TableCell align="center" sx={{ borderColor: "black", fontFamily:'Poppins', fontSize:'16px', width: '20%', whiteSpace: 'wrap'}} >{(college['npt43_pub']+college['npt43_priv'])}</TableCell>
            <TableCell sx={{borderColor: "black" , width: '20%', whiteSpace: 'wrap'}}/>
            <TableCell align="center" sx={{ borderColor: "black", fontFamily:'Poppins', fontSize:'16px', width: '20%', whiteSpace: 'wrap'}}>{(college['npt43_pub']+college['npt43_priv'])*((4*college['c100_4']/((college['c150_4']+college['c100_4'])))+(6*college['c150_4']/((college['c150_4']+college['c100_4']))))}</TableCell>
            <TableCell sx={{borderColor: "black" , width: '20%', whiteSpace: 'wrap'}}/>
            <TableCell align="center" sx={{ borderColor: "black", fontFamily:'Poppins', fontSize:'16px', width: '20%', whiteSpace: 'wrap'}} >Filler</TableCell>
          </TableRow>
          <TableRow> <Button variant="contained" sx={{ display: 'flex', justifyContent: 'center', position: 'relative', left: '225%', bottom: '-15px' }}>Learn More</Button> <HelpOutlineOutlinedIcon sx={{ color: "#3B45BB" ,display: 'flex', justifyContent: 'center', position: 'relative', left: '446%', bottom: '21px' }}/></TableRow>

          </React.Fragment>
);
const [outcomesactive, setOutcomesActive] = useState(false);
const outcomesexpanded = ( <React.Fragment>

  <TableRow>
            <TableCell align="center" sx={{borderBottom: "none" , width: '20%', whiteSpace: 'wrap'}} >Debt/Income Ratio</TableCell>
            <TableCell sx={{borderBottom: "none" , width: '20%', whiteSpace: 'wrap'}}/>
            <TableCell align="center" sx={{borderBottom: "none", width: '20%', whiteSpace: 'wrap'}} >Inventor Score</TableCell>
            <TableCell sx={{borderBottom: "none" , width: '20%', whiteSpace: 'wrap'}}/>
            <TableCell align="center" sx={{borderBottom: "none", width: '20%', whiteSpace: 'wrap'}} >Income 90% at 10 Years</TableCell>
          </TableRow>
          <TableRow>
            <TableCell align="center" sx={{borderBottom: "none", fontFamily:'Poppins', fontSize:'16px', width: '20%', whiteSpace: 'wrap'}}>{((0.4*college['weighted_debt_relative'])+(0.6*college['weighted_debt_absolute']))/((0.4*college['weighted_income_relative'])+(0.6*college['weighted_income_absolute']))}</TableCell>
            <TableCell sx={{borderBottom: "none" , width: '20%', whiteSpace: 'wrap'}}/>
            <TableCell align="center" sx={{borderBottom: "none", fontFamily:'Poppins', fontSize:'16px', width: '20%', whiteSpace: 'wrap'}}>{college['inventor']}</TableCell>
            <TableCell sx={{borderBottom: "none" , width: '20%', whiteSpace: 'wrap'}}/>
            <TableCell align="center" sx={{borderBottom: "none", fontFamily:'Poppins', fontSize:'16px', width: '20%', whiteSpace: 'wrap'}}>{college['pct90_earn_wne_p10']}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell align="center" sx={{borderBottom: "none", width: '20%', whiteSpace: 'wrap'}}>Income 75% at 10 Years</TableCell>
            <TableCell sx={{borderBottom: "none" , width: '20%', whiteSpace: 'wrap'}}/>
            <TableCell align="center" sx={{borderBottom: "none", width: '20%', whiteSpace: 'wrap'}} >Income 25% at 10 Years</TableCell>
            <TableCell sx={{borderBottom: "none" , width: '20%', whiteSpace: 'wrap'}}/>
            <TableCell align="center" sx={{borderBottom: "none", width: '20%', whiteSpace: 'wrap'}} >Income 10% at 10 Years</TableCell>
            </TableRow>
            <TableRow>
            <TableCell align="center" sx={{ borderColor: "black", fontFamily:'Poppins', fontSize:'16px', width: '20%', whiteSpace: 'wrap'}} >{college['pct75_earn_wne_p10']}</TableCell>
            <TableCell sx={{borderColor: "black" , width: '20%', whiteSpace: 'wrap'}}/>
            <TableCell align="center" sx={{ borderColor: "black", fontFamily:'Poppins', fontSize:'16px', width: '20%', whiteSpace: 'wrap'}}>{college['pct25_earn_wne_p10']}</TableCell>
            <TableCell sx={{borderColor: "black" , width: '20%', whiteSpace: 'wrap'}}/>
            <TableCell align="center" sx={{ borderColor: "black", fontFamily:'Poppins', fontSize:'16px', width: '20%', whiteSpace: 'wrap'}} >{college['pct10_earn_wne_p10']}</TableCell>
          </TableRow>
          <TableRow> <Button variant="contained" sx={{ display: 'flex', justifyContent: 'center', position: 'relative', left: '225%', bottom: '-15px' }}>Learn More</Button> <HelpOutlineOutlinedIcon sx={{ color: "#3B45BB" ,display: 'flex', justifyContent: 'center', position: 'relative', left: '446%', bottom: '21px' }}/></TableRow>
          </React.Fragment>
);
const [diversityactive, setDiversityActive] = useState(false);
const diversityexpanded = ( <React.Fragment>
<TableRow>
            <TableCell align="center" sx={{borderBottom: "none" , width: '20%', whiteSpace: 'wrap'}} >Parents in Top Quintile of Household Income (%)</TableCell>
            <TableCell sx={{borderBottom: "none" , width: '20%', whiteSpace: 'wrap'}}/>
            <TableCell align="center" sx={{borderBottom: "none", width: '20%', whiteSpace: 'wrap'}} >Parents in Bottom Quintile of Household Income (%)</TableCell>
            <TableCell sx={{borderBottom: "none" , width: '20%', whiteSpace: 'wrap'}}/>
            <TableCell align="center" sx={{borderBottom: "none", width: '20%', whiteSpace: 'wrap'}} >Parents in Top 10% of Household Income</TableCell>
          </TableRow>
          <TableRow>
            <TableCell align="center" sx={{borderBottom: "none", fontFamily:'Poppins', fontSize:'16px', width: '20%', whiteSpace: 'wrap'}} >{college['par_q5']}</TableCell>
            <TableCell sx={{borderBottom: "none" , width: '20%', whiteSpace: 'wrap'}}/>
            <TableCell align="center" sx={{borderBottom: "none", fontFamily:'Poppins', fontSize:'16px', width: '20%', whiteSpace: 'wrap'}} >{college['par_q1']}</TableCell>
            <TableCell sx={{borderBottom: "none" , width: '20%', whiteSpace: 'wrap'}}/>
            <TableCell align="center" sx={{borderBottom: "none", fontFamily:'Poppins', fontSize:'16px', width: '20%', whiteSpace: 'wrap'}}>{college['par_top10pc']}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell align="center" sx={{borderBottom: "none", width: '20%', whiteSpace: 'wrap'}}>Parents in Top 1% of Household Income</TableCell>
            <TableCell sx={{borderBottom: "none" , width: '20%', whiteSpace: 'wrap'}}/>
            <TableCell align="center" sx={{borderBottom: "none", width: '20%', whiteSpace: 'wrap'}} >Parents in Top 0.1% of Household Income</TableCell>
            <TableCell sx={{borderBottom: "none" , width: '20%', whiteSpace: 'wrap'}}/>
            <TableCell align="center" sx={{borderBottom: "none", width: '20%', whiteSpace: 'wrap'}} >Economic Inclusion Score</TableCell>
            </TableRow>
            <TableRow>
            <TableCell align="center" sx={{ borderColor: "black", fontFamily:'Poppins', fontSize:'16px', width: '20%', whiteSpace: 'wrap'}} >{college['par_top1pc']}</TableCell>
            <TableCell sx={{borderColor: "black" , width: '20%', whiteSpace: 'wrap'}}/>
            <TableCell align="center" sx={{ borderColor: "black", fontFamily:'Poppins', fontSize:'16px', width: '20%', whiteSpace: 'wrap'}}>{college['par_toppt1pc']}</TableCell>
            <TableCell sx={{borderColor: "black" , width: '20%', whiteSpace: 'wrap'}}/>
            <TableCell align="center" sx={{ borderColor: "black", fontFamily:'Poppins', fontSize:'16px', width: '20%', whiteSpace: 'wrap'}} >{(0.4*college['economic_inclusion_score_relative'])+(0.6*college['economic_inclusion_score_absolute'])}</TableCell>
          </TableRow>
          <TableRow> <Button variant="contained" sx={{ display: 'flex', justifyContent: 'center', position: 'relative', left: '225%', bottom: '-15px' }}>Learn More</Button> <HelpOutlineOutlinedIcon sx={{ color: "#3B45BB" ,display: 'flex', justifyContent: 'center', position: 'relative', left: '446%', bottom: '21px' }}/></TableRow>

          </React.Fragment>
);

  function deactivateall(){

    setSuccessActive(false)
    setValueActive(false)
    setOutcomesActive(false)
    setCostActive(false)
    setDiversityActive(false)

    return true
  }

  return (

    <Box sx={{ minWidth: 275 , borderRadius: '16px' }}>
      <Card variant="outlined" style={{backgroundColor: "#F8CF40", borderRadius: '5px', borderColor: "black"}}>
      <React.Fragment>
    <CardHeader

     
        title={college['instnm']}
        subheader={college['stabbr']}
        
  action={
          <Box component="span" sx={{ display: 'flex', justifyContent: 'right'}}> 
<Box component="span" sx={{ ...commonStyles, borderRadius: '50%' , backgroundColor: "white"} }   display="flex"
justifyContent="center"
  alignItems="center" >  
    <Typography align="center" sx={{color: "black" , fontSize:'10px',position:'relative',bottom:'14px',left:'10px'}}>Your Score </Typography> 

  <Typography align="center" sx={{color: "#3B45BB" ,fontSize:'24px', fontFamily:'Poppins',position:'relative',bottom:'-14px',left:'-25px'}}>{toLetterGrade((((0.4*college['success_relative'])+(0.6*college['success_absolute']))+((0.4*college['outcomes_relative'])+(0.6*college['outcomes_absolute']))+((0.4*college['economic_inclusion_score_relative'])+(0.6*college['economic_inclusion_score_absolute'])))/3)} </Typography> </Box>
</Box>
        
}
        />


      
        
<CardContent>

<TableContainer >

      <Table aria-label="spanning table" style={{backgroundColor: "#F8CF40"}}>

          <TableHead>

          <colgroup>
          <col width="20%" />
          <col width="20%" />
          <col width="20%" />
          <col width="20%" />
          <col width="20%" />
          </colgroup>
          <TableRow>
            <TableCell align="center"onClick={ () => {deactivateall() && setSuccessActive(!successactive)}} sx={{borderBottom: "none", width: '20%', whiteSpace: 'wrap'}}>Success</TableCell>
            <TableCell align="center"onClick={ () => {deactivateall() && setValueActive(!valueactive)}} sx={{borderBottom: "none", width: '20%', whiteSpace: 'wrap'}}>Value</TableCell>
            <TableCell align="center"onClick={ () => {deactivateall() && setCostActive(!successactive)}} sx={{borderBottom: "none", width: '20%', whiteSpace: 'wrap'}}>Cost</TableCell>
            <TableCell align="center"onClick={ () => {deactivateall() && setOutcomesActive(!outcomesactive)}} sx={{borderBottom: "none", width: '20%', whiteSpace: 'wrap'}}>Outcomes</TableCell>
            <TableCell align="center"onClick={ () => {deactivateall() && setDiversityActive(!diversityactive)}} sx={{borderBottom: "none", width: '20%', whiteSpace: 'wrap'}}>Diversity</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            <TableRow
              key={college['instnm']}
              sx={{ '&:last-child td, &:last-child th': { borderbottom: 1 , borderColor:"black"} }}
            >
              <TableCell align="center" sx={{borderBottom: "1px solid black", fontFamily:'Poppins', fontSize:'16px'}}>{((0.4*college['success_relative'])+(0.6*college['success_absolute']))}</TableCell>
              <TableCell align="center" sx={{borderBottom: "1px solid black", fontFamily:'Poppins', fontSize:'16px'}}>{((0.4*college['value_relative'])+(0.6*college['value_absolute']))}</TableCell>
              <TableCell align="center" sx={{borderBottom: "1px solid black", fontFamily:'Poppins', fontSize:'16px'}}>{((0.4*college['cost_relative'])+(0.6*college['cost_absolute']))}</TableCell>
              <TableCell align="center" sx={{borderBottom: "1px solid black", fontFamily:'Poppins', fontSize:'16px'}}>{((0.4*college['outcomes_relative'])+(0.6*college['outcomes_absolute']))}</TableCell>
              <TableCell align="center" sx={{borderBottom: "1px solid black", fontFamily:'Poppins', fontSize:'16px'}}>{(0.5*(((0.4*college['social_diversity_score_relative'])+(0.6*college['social_diversity_score_absolute']))+((0.4*college['economic_inclusion_score_relative'])+(0.6*college['economic_inclusion_score_absolute']))))}</TableCell>
            </TableRow>

          {successactive ? successexpanded : null}
          {valueactive ? valueexpanded : null}
          {costactive ? costexpanded : null}
          {outcomesactive ? outcomesexpanded : null}
          {diversityactive ? diversityexpanded : null}

        </TableBody>
        
      </Table>

    </TableContainer>    </CardContent>
    
  </React.Fragment></Card>
      


      
            </Box>

  );
}
