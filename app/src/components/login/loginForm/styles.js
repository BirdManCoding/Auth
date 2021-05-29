import { makeStyles } from "@material-ui/core/styles";



export default makeStyles(theme => { 
 // console.log(theme)
  return{
   loginForm: {
       padding: 25,   
   },
   loginForm__heading:{
       marginBottom: 10
   },
   loginForm__field: {
       padding: 5
   },
   loginForm__btn:{
       marginTop: 10
   }
}
});
