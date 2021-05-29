import { makeStyles } from "@material-ui/core/styles";



export default makeStyles(theme => { 
 // console.log(theme)
  return{
   registerForm: {
       padding: 25,   
   },
   registerForm__heading:{
       marginBottom: 10
   },
   registerForm__field: {
       padding: 5
   },
   registerForm__btn:{
       marginTop: 10
   }
}
});
