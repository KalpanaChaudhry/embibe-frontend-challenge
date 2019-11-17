import AvatarGenerator from 'react-avatar-generator';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import React from 'react';
import Typography from '@material-ui/core/Typography';

export default function StudentCard({ student }) {
  return (
    <Grid item lg={4} sm={6} xs={12}>
      <Card>
        <CardContent>
          <AvatarGenerator backgroundColor="#fff" />
          <Typography color="primary" gutterBottom>
            {student.id || ''}
          </Typography>
          <Typography variant="h5">{student.name}</Typography>
        </CardContent>
      </Card>
    </Grid>
  );
}
