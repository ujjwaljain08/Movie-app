import React from 'react'
import Pagination from '@material-ui/lab/Pagination';
import { createMuiTheme, ThemeProvider } from "@material-ui/core";

const darkTheme = createMuiTheme({
    palette: {
      type: "dark",
    },
  });
function CustomPagination({setpage,numOfPages=10}) {
    const handlePageChange=(page)=>{
        setpage(page)
        window.scroll(0,0)
    }
    return (
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            marginTop: 10,
          }}
        >
          <ThemeProvider theme={darkTheme}>
            <Pagination
              onChange={(e) => handlePageChange(e.target.textContent)}
              count={numOfPages}
              color="primary"
              hideNextButton
              hidePrevButton
            />
          </ThemeProvider>
        </div>
      );
    }

export default CustomPagination
