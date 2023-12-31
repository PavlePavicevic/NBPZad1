import { Typography, Avatar, Grid, Button } from "@mui/material";

export default function DeletedExercisePage() {
    return (
        <>
        <Grid fullwidth style={{ display: "flex", flexDirection: "column", justifyContent: "space-around", alignItems:"center", height: "60%", marginBottom: 20, flexWrap:"wrap" }}>
            <Grid fullwidth style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems:"center", height: "60%", marginBottom: 20 }}>
            <Avatar
                  variant="rounded"
                  alt="Remy Sharp"
                  src={process.env.PUBLIC_URL + "/images/"}
                  sx={{ width: 360, height: 350, marginTop: 14, justifySelf: "center" }}
                />
            </Grid>
            <Grid style={{alignItems:"flex-start"}}>
            <Typography style={{color:"#8298cb", fontWeight:"bold", fontSize:50, justifySelf:"flex-start", alignSelf:"flex-start"}}>Success!</Typography>
            <Typography style={{color:"#8298cb", fontWeight:"bold", fontSize:25}}>Exercise removed from UpFit collection!</Typography>
            <Button variant="contained" href="http://localhost:3000/" style={{marginTop:30, backgroundColor:"#f50057"}}>GO BACK TO HOME PAGE</Button>
            </Grid>
            
        </Grid>
        </>

    )
}