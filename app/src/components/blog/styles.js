import { makeStyles } from "@material-ui/core/styles";



export default makeStyles(theme => { 
 // console.log(theme)
  return{
    blog: {
        padding: "20px"
    },  
    blog__heading: {
          marginBottom: "25px"
      },
    blog__intro: {
        marginBottom: "25px"
    },
    blog__subHeading:{
        marginBottom: "25px"
    }  
}
});
