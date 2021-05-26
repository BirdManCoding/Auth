import { makeStyles } from "@material-ui/core/styles";

const drawerWidth = 240;

export default makeStyles(theme => { 
  console.log(theme)
  return{
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: theme.palette.primary.light
  },
  drawer__Header: {
    display: 'flex',
    alignItems: 'center',
    padding: "17px",
    justifyContent: 'flex-start',
  },
  drawer__List:{
    color: theme.palette.secondary.main
  }
}});
