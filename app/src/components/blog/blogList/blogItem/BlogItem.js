import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import useStyles from './styles'

export default function BlogItem({postData}) {
  const classes = useStyles();

  return (
    <Card className={classes.blogItem}>
      <CardActionArea>
        <CardMedia
          className={classes.blogItem__image}
          image="https://i.pinimg.com/originals/d4/8d/fb/d48dfba1ffd2158d31089ea9095b0ca3.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {postData.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
              {postData.content}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}