import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(theme => ({
  navbar: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "16px",
    marginBottom: "50px",
  },
  navbar__menu:{
    fontSize: "2rem",
    cursor: "pointer",
  }
}));
