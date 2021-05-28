import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(theme => ({
    backdrop: {
        width: "100vw",
        height: "100vh",
        position: "fixed",
        backgroundColor: "rgba(0,0,0,0.9)",
        top: 0,
        left: 0,
        zIndex: 9000,
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    }
}));

