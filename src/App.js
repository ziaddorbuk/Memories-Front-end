import React, {useEffect, useState} from 'react';
import {Container, AppBar, Typography, Grow, Grid} from '@material-ui/core';
import { useDispatch } from 'react-redux';
import {getPosts} from './actions/posts'
import useStyles from './styles'
import Memories from './images/memories.png'

import Posts from './components/Posts/Posts'
import Form from './components/Form/Form';

function App() {
  const classes = useStyles();
  const dipatch = useDispatch();
  const [currentId,setCurrentId] = useState(null);

  useEffect(()=>{
    dipatch(getPosts())
  },[currentId, dipatch])

  return (
    <Container>
      <AppBar className={classes.appBar} position='static' color='inherit' >
        <Typography className={classes.heading} variant="h2" align="center" >Memories</Typography>
        <img className={classes.image} src={Memories} alt="memories" height="60" />
      </AppBar>
      <Grow in>
        <Container>
          <Grid container className={classes.mainContainer} justify="space-between" alignItems="stretch" spacing={3} >
            <Grid item xs={12} sm={7}>
              <Posts setCurrentId={setCurrentId} />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form currentId={currentId} setCurrentId={setCurrentId} />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
}

export default App;
