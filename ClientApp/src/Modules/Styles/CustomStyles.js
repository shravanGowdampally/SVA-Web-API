import { makeStyles } from "@material-ui/core/styles";

const drawerWidthOpen = 105;
const draweWidthClose = 105;

export const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    height: "100%",
    //position: "absolute",
    position: "fixed",
    top: 0,
    bottom: 0,
    marginTop: 0,
    zIndex: 1,
    overflow: "hidden",
  },
  appFrame: {
    position: "relative",
    display: "flex",
    width: "100%",
    height: "100%",
  },
  /*  appBar: {
    position: "absolute",
    //backgroundColor: theme.palette.labelAppBar,
    //backgroundColor: "#007D57",
    zIndex: theme.zIndex.navDrawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  }, */
  /* appBarShift: {
    marginLeft: drawerWidthOpen,
    width: `calc(100% - ${drawerWidthOpen}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }, */
  appBarWidget: {
    marginLeft: "40px",
  },
  drawerPaper: {
    position: "relative",
    overflowX: "hidden",
    height: "100%",
    //backgroundColor: theme.palette.labelCommanDark,
    backgroundColor: "#26343f",
    width: drawerWidthOpen - 1,
    // marginTop: 100,
  },
  drawerPaperClose: {
    width: draweWidthClose,
    overflowX: "hidden",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  drawerInner: {
    width: 95,
  },
  drawerHeader: {
    //height: "80px !important",
    /*  display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    //padding: "0 68px",
    ...theme.mixins.toolbar, */
  },
  content: {
    weidth: "100%",
    flexGrow: 1,
    overflow: "auto",
    backgroundColor: "white",
    paddingLeft: 24,
    paddingRight: 10,
    height: "calc(100% - 56px)",
    marginTop: 56,
    [theme.breakpoints.up("sm")]: {
      height: "calc(100% -100px)",
      marginTop: 100,
    },
    fontsize: "1.2em !important",
    position: "relative",
  },
  /*  content2: {
    marginTop: 500,
    fontsize: "4.2em !important",
    marginLeft: "400px",
    backgroundColor: "#26343f",
  }, */
  pageContent: {
    marginTop: 110,
    marginLeft: 30,
    width: "100%",
  },
  menuTopMargin: {
    marginTop: 310,
    paddingTop: "80px",
  },
}));
