import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 200,
    margin:'10px',
    padding:'20px',
  },
  media: {
    height:'100px',
  },
});

const ProfileCard = (props) => {
  const classes = useStyles();
  const [pop, setPop] = React.useState(false);
  const popUp = () => {
    setPop(true);
  };
  const popDown = () => {
    setPop(false);
  };
  return (
    <Card  direction="row" className={classes.root} style={{height:props.contact?'300px':null}}onMouseOver={popUp} onMouseOut={popDown} raised={ pop? true:false} >
      <CardActionArea style={{height:props.contact?'300px':null}}>
        <CardMedia style={{}}
          className={classes.media}
          image={props.imageUrl}
          title={props.imageTitle}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.Name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.Description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default ProfileCard
