import React, { memo } from 'react';

import AppBar from '@material-ui/core/AppBar';
import ArrowBack from '@material-ui/icons/ArrowBack';
import BarChart from 'react-bar-chart';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import Paper from '@material-ui/core/Paper';
import StudentCard from 'components/StudentsCard';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { getAllStudents } from 'containers/Dashboard/selectors';
import { useHistory } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const margin = { top: 20, right: 20, bottom: 30, left: 40 };

export function DetailsPage({ studentsList }) {
  const { id } = useParams();
  const student = studentsList[id];
  const history = useHistory();

  if (student) {
    const chartData = Object.keys(student.marks).map(sub => {
      return {
        text: sub,
        value: student.marks[sub],
      };
    });
    return (
      <div>
        <AppBar position="fixed">
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={() => history.push('/dashboard')}
            >
              <ArrowBack />
            </IconButton>
            <Typography variant="h6" style={{ fontSize: 30 }}>
              Embibe
            </Typography>
          </Toolbar>
        </AppBar>
        <Container style={{ marginTop: 100 }}>
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
            spacing={10}
          >
            <StudentCard student={student} id={id} />
            <Grid item lg={10} sm={8} xs={12} style={{ textAlign: 'center' }}>
              <Paper>
                <BarChart
                  width={300}
                  height={300}
                  data={chartData}
                  margin={margin}
                />
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </div>
    );
  }
  return <>Students Data Not Found</>;
}

const mapStateToProps = createStructuredSelector({
  studentsList: getAllStudents(),
});

export function mapDispatchToProps() {
  return {};
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(DetailsPage);
