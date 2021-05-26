import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(theme => ({
    brand:{
      display: 'flex',
      alignItems: 'center'
    },
    brand__heading: {
        color: "white",
      },
      brand__image: {
        margin: "0px 15px",
        width:"50px",
        height:"50px"
      },
}));
