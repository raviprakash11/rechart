import { Box, Divider, Grid, Typography } from "@mui/material";
import React from "react";

export default function DashBoard() {
  return (
    <Box sx={{ background: "#101010", color: "#FF0100", height: "100%" }}>
      <Grid container sx={{ padding: "2rem 5rem 2rem" }} spacing={4}>
        <Grid item>
          <img
            src="/assest/logo/main-logo.png"
            alt="logo"
            style={{ height: "100px", width: "100px" }}
          />
        </Grid>
        <Grid item>
          <Typography
            variant="p"
            component="div"
            sx={{
              fontSize: "28px",
              color: "#FFFFFF",
              padding: "10px 0px 10px 0px",
            }}
          >
            NovaEnergon
          </Typography>
          <Typography variant="p" sx={{ fontSize: "16px", color: "#FFFFFF" }}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo,
            repellat nesciunt.
          </Typography>
        </Grid>
      </Grid>
      <div style={{ padding: "0rem 5rem 0rem" }}>
        <Divider sx={{ borderColor: "#FFFFFF" }} />
      </div>

      <Box sx={{color:'#FFFFFF', padding:'2rem 6rem 0rem'}}>
        <Typography variant="p" component="div" sx={{ fontSize: "18px" }}>
         <span style={{color:'yellow'}}>Q.</span> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo,
          repellat nesciunt.
        </Typography>
        <Typography variant="p" sx={{ fontSize: "16px" }}>
        <span style={{color:'Gold'}}>A.</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus labore
          molestiae, saepe commodi aliquam mollitia eum dolore, soluta
          laudantium nihil amet incidunt necessitatibus alias sapiente atque.
          Omnis inventore deleniti maiores.
        </Typography>
      </Box>

      <Box sx={{color:'#FFFFFF', padding:'2rem 6rem 0rem'}}>
        <Typography variant="p" component="div" sx={{ fontSize: "18px" }}>
         <span style={{color:'yellow'}}>Q.</span> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo,
          repellat nesciunt.
        </Typography>
        <Typography variant="p" sx={{ fontSize: "16px" }}>
        <span style={{color:'Gold'}}>A.</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus labore
          molestiae, saepe commodi aliquam mollitia eum dolore, soluta
          laudantium nihil amet incidunt necessitatibus alias sapiente atque.
          Omnis inventore deleniti maiores.
        </Typography>
        {/* <CodeBlockConfig filename="hello-world.js">

```javascript
const foo = 'bar'
function hello() {
  return Math.random() > 0.5 ? 'Hello' : 'Bonjour'
}
```

</CodeBlockConfig> */}
      </Box>

      <Box sx={{color:'#FFFFFF', padding:'2rem 6rem 0rem'}}>
        <Typography variant="p" component="div" sx={{ fontSize: "18px" }}>
         <span style={{color:'yellow'}}>Q.</span> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo,
          repellat nesciunt.
        </Typography>
        <Typography variant="p" sx={{ fontSize: "16px" }}>
        <span style={{color:'Gold'}}>A.</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus labore
          molestiae, saepe commodi aliquam mollitia eum dolore, soluta
          laudantium nihil amet incidunt necessitatibus alias sapiente atque.
          Omnis inventore deleniti maiores.
        </Typography>
      </Box>

      <Box sx={{color:'#FFFFFF', padding:'2rem 6rem 0rem'}}>
        <Typography variant="p" component="div" sx={{ fontSize: "18px" }}>
         <span style={{color:'yellow'}}>Q.</span> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo,
          repellat nesciunt.
        </Typography>
        <Typography variant="p" sx={{ fontSize: "16px" }}>
        <span style={{color:'Gold'}}>A.</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus labore
          molestiae, saepe commodi aliquam mollitia eum dolore, soluta
          laudantium nihil amet incidunt necessitatibus alias sapiente atque.
          Omnis inventore deleniti maiores.
        </Typography>
      </Box>

      <Box sx={{color:'#FFFFFF', padding:'2rem 6rem 0rem'}}>
        <Typography variant="p" component="div" sx={{ fontSize: "18px" }}>
         <span style={{color:'yellow'}}>Q.</span> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo,
          repellat nesciunt.
        </Typography>
        <Typography variant="p" sx={{ fontSize: "16px" }}>
        <span style={{color:'Gold'}}>A.</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus labore
          molestiae, saepe commodi aliquam mollitia eum dolore, soluta
          laudantium nihil amet incidunt necessitatibus alias sapiente atque.
          Omnis inventore deleniti maiores.
        </Typography>
      </Box>

      <Box sx={{color:'#FFFFFF', padding:'2rem 6rem 0rem'}}>
        <Typography variant="p" component="div" sx={{ fontSize: "18px" }}>
         <span style={{color:'yellow'}}>Q.</span> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo,
          repellat nesciunt.
        </Typography>
        <Typography variant="p" sx={{ fontSize: "16px" }}>
        <span style={{color:'Gold'}}>A.</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus labore
          molestiae, saepe commodi aliquam mollitia eum dolore, soluta
          laudantium nihil amet incidunt necessitatibus alias sapiente atque.
          Omnis inventore deleniti maiores.
        </Typography>
      </Box>
    </Box>
  );
}
