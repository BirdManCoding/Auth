import { makeStyles } from "@material-ui/core/styles";



export default makeStyles(theme => { 
 // console.log(theme)
  return{
   postForm: {
       padding: 25,   
   },
   postForm__heading:{
       marginBottom: 10
   },
   postForm__field: {
       padding: 5
   },
   postForm__btn:{
       marginTop: 10
   }
}
});
