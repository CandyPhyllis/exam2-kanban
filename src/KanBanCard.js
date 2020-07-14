import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import Button from '@material-ui/core/Button';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    }
  }));

function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}

function KanBanCard(cardData) {
    const classes = useStyles();

    const handleExpandClick = () => {
      // setExpanded();
    };

    return (
      <Card className={classes.root}>
        <CardHeader
          // title={comments.tittle}
          title={cardData.props.cardTittle}
          // subheader="September 14, 2016"
          subheader={cardData.props.cardDate}
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {/* This impressive paella is a perfect party dish and a fun meal to cook together with your
            guests. Add 1 cup of frozen peas along with the mussels, if you like. */}
            {/* {comments.description} */}
            {cardData.props.cardDesc}
          </Typography>
          <List component="nav" aria-label="secondary mailbox folders">
            <ListItemLink href="#simple-list">
              <ListItemText primary={cardData.props.cardLinks} />
            </ListItemLink>
          </List>
        </CardContent>
        <CardActions>
        <Button size="small" color="primary">
          Edit
        </Button>
        <Button size="small" color="primary">
          Delete
        </Button>
      </CardActions>
        <CardActions disableSpacing>
          <IconButton aria-label="back">
            <ArrowBackIcon />
          </IconButton>
          <IconButton aria-label="upward">
            <ArrowUpwardIcon />
          </IconButton>
          <IconButton aria-label="downward">
            <ArrowDownwardIcon />
          </IconButton>
          <IconButton aria-label="forward">
            <ArrowForwardIcon />
          </IconButton>
        </CardActions>
        
      </Card>
    );
}

export default KanBanCard;
