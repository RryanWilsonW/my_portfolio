import React from 'react';
import './style.css';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import movie from '../../imgs/moviemadness.gif';
import employee from '../../imgs/employee.png';
import weather from '../../imgs/weather.png';
import cats from '../../imgs/cats.png';
import wellness from '../../imgs/wellness.gif';
import quiz from '../../imgs/quiz.png';

const useStyles = makeStyles((theme) => ({
    cardGrid: {
      paddingTop: theme.spacing(6),
      paddingBottom: theme.spacing(4),
    },
    card: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
    },
    cardMedia: {
      paddingTop: '65.25%',
    },
    cardContent: {
      flexGrow: 1,
      backgroundColor: '#04001A',
      color: 'white'
    },
    button: {
        paddingLeft: theme.spacing(6),
    }
  }));
  const cards = [
      {
        id: 1,
        image: movie,
        project: "Movie Madness",
        description: "Movie Madness is an application designed to help a user find movie trailers with ease.",
        github: "https://github.com/RryanWilsonW/Movie_Madness",
        deployed: "https://protected-depths-82462.herokuapp.com/login"
      },
      {
        id: 2,
        image: wellness,
        project: "Well Rounded Fitness",
        description: "Well rounded fitness is a wellness application that a user can use to evaluate their overall being.",
        github: "https://github.com/Chamilitary216/Wellness_Project",
        deployed: "https://wellness-2021.herokuapp.com/"
      },
      {
        id: 3,
        image: employee,
        project: "Exhibiting Employees",
        description: "Ehxibing Employees is a React based application designed to help a user find an employee based on name.",
        github: "https://github.com/RryanWilsonW/Exhibiting_Employees",
        deployed: "https://rryanwilsonw.github.io/Exhibiting_Employees/"
      },
      {
        id: 4,
        image: weather,
        project: "Raining API",
        description: "Raining API is a weather app designed to get the current and future weather information of a specific city.",
        github: "https://github.com/RryanWilsonW/raining-api",
        deployed: "https://rryanwilsonw.github.io/raining-api/"
      },
      {
        id: 5,
        image: cats,
        project: "Adoptable Cats",
        description: "Cat lovers can come to our website and search for different types of cats that are available for adoption.",
        github: "https://github.com/RryanWilsonW/adoptable-cats",
        deployed: "https://hughesthatgirl.github.io/adoptable-cats/"
      },
      {
      id: 5,
      image: quiz,
      project: "Finding the Weakest Link",
      description: "In this program the user is presented with a quiz to test their knowledge of computer programming.",
      github: "https://github.com/RryanWilsonW/finding_the_weakest_link",
      deployed: "https://rryanwilsonw.github.io/finding_the_weakest_link/"
      }
  ];

const Portfolio = () => {
    const classes = useStyles();
    return (
        <div className='portfolio'>
            <h1 className='projects'>Projects</h1>
            <Container className={classes.cardGrid} maxWidth="md">
              <Grid container spacing={10}>
                {cards.map((card) => (
                    <Grid className='cards' item key={card} xs={12} sm={6} md={6}>
                    <Card className={classes.card}>
                    <CardMedia
                      className={classes.cardMedia}
                      image={card.image}
                      title="Image title"
                    />
                    <CardContent className={classes.cardContent}>
                      <Typography gutterBottom variant="h5" component="h2">
                        {card.project}
                      </Typography>
                      <Typography>
                        {card.description}
                      </Typography>
                    </CardContent>
                  <CardActions className={classes.cardContent}>
                    <Button className={classes.button} size="small" color="primary">
                      <a href={card.github} target='_blank'>Github Repository</a>
                    </Button>
                    <Button size="small" color="primary">
                        <a href={card.deployed} target='_blank'>Deployed Application</a>
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
        </div>


    )
}

export default Portfolio;