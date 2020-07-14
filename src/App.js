import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
import KanBanCard from './KanBanCard';
import IconButton from '@material-ui/core/IconButton';
import PlaylistAddIcon from '@material-ui/icons/PlaylistAdd';
import DeleteIcon from '@material-ui/icons/Delete';
import EditCard from './EditCard';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  kanbanCard: {
    maxWidth: 345,
  },
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbar: {
    flexWrap: 'wrap',
  },
  toolbarTitle: {
    flexGrow: 1,
  },
  link: {
    margin: theme.spacing(1, 1.5),
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

var data = [
  { columnNum: 0,
    columnTittle: "My Plans",
    columnVal: [{
      cardNum: 0,
      cardTittle: "Shanghai",
      cardDesc: "ChinaJoy 2020",
      cardDate: "July 30, 2020",
      cardLinks: "http://www.chinajoy.net/"
    },
    {
      cardNum: 5,
      cardTittle: "Hefei", 
      cardDesc: "This impressive paella is a perfect party dish and a fun meal to cook together with your guests.",
      cardLinks: ["https://www.baidu.com/"],
      cardDate: "July 20, 2020"
      }]
  },
  { columnNum: 1,
    columnTittle: "columnTittle1",
    columnVal: [{
      cardNum: 1,
      cardTittle: "cardTittle1",
      cardDesc: "description1",
      cardDate: "September 14, 2016",
      cardLinks: []
    }]
  },
  { columnNum: 2,
    columnTittle: "columnTittle2",
    columnVal: [{
      cardNum: 2,
      cardTittle: "cardTittle2",
      cardDesc: "description2",
      cardDate: "September 14, 2016",
      cardLinks: []
    }]
  },
  { columnNum: 3,
    columnTittle: "columnTittle3",
    columnVal: [{
      cardNum: 3,
      cardTittle: "cardTittle3",
      cardDesc: "description3",
      cardDate: "September 14, 2016",
      cardLinks: []
    }]
  }
]



class Column extends React.Component {
  render() {
    var commentsNode = this.props.comments.columnVal.map(function(comment, index) {
      return <KanBanCard key={'comment-' + index} props={comment} />
    });

    return (
      // <Grid container spacing={3}>
        <Grid item xs>
            <div>
              <Typography variant="h6">
              {this.props.comments.columnTittle}
              </Typography>
              <IconButton aria-label="open editCard" onClick={this.props.clickEvent}>
                <PlaylistAddIcon />
              </IconButton>
              <IconButton aria-label="delete column" >
                <DeleteIcon />
              </IconButton>
            </div>
            {commentsNode}
        </Grid>
    );
  }
}

function App() {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);

  var cardNode = null;
  const handleClickOpen = () => {
    console.log("ss");
    console.log(cardNode);
    // return EditCard.handleClickOpen;
    // setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  var columnNode = data.map(function(comment, index) {
    return( <Column key={'comment-' + index} comments={comment} clickEvent={handleClickOpen} /> );
  });

  return (
    // <Button variant="contained" color="primary">
    //   你好，世界
    // </Button>
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs>
          {/* <Paper className={classes.paper}>xs</Paper> */}
          <AppBar position="static" color="default" elevation={0} className={classes.appBar}>
            <Toolbar className={classes.toolbar}>
              <Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle}>
                My Board
              </Typography>
              <nav>
                <Link variant="button" color="textPrimary" href="#" className={classes.link}>
                Yuexin Zhang
                </Link>
              </nav>
              <Button href="#" color="primary" variant="outlined" className={classes.link}>
                Login
              </Button>
            </Toolbar>
          </AppBar>
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        {columnNode}
      </Grid>
      <EditCard ref={(node) => cardNode = node} />
    </div>
  );
}

export default App;
