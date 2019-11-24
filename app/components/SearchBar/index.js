import { ArrowDownward, ArrowUpward } from '@material-ui/icons';
import { Button, Tooltip } from '@material-ui/core';
import React, { useState } from 'react';

import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';
import Paper from '@material-ui/core/Paper';
import SearchIcon from '@material-ui/icons/Search';
import { debounce } from 'lodash';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
}));

export default function SearchBar({
  search,
  sortByName,
  sortByMarks,
  isSortByNameClicked,
  isSortByMarksClicked,
}) {
  const classes = useStyles();
  const [searchString, changeSearchString] = useState('');
  const handleOnChange = debounce(val => {
    search(val);
    changeSearchString(val);
  }, 1000);

  return (
    <Paper component="form" className={classes.root}>
      <InputBase
        className={classes.input}
        placeholder="Search Here"
        inputProps={{ 'aria-label': 'search here' }}
        onChange={e => {
          e.preventDefault();
          handleOnChange(e.target.value);
        }}
      />
      <IconButton
        onClick={() => handleOnChange(searchString)}
        className={classes.iconButton}
        aria-label="search"
      >
        <SearchIcon />
      </IconButton>
      <Divider className={classes.divider} orientation="vertical" />
      {!isSortByNameClicked ? (
        <Tooltip title="Sorted name in descending order">
          <Button
            variant="outlined"
            aria-label="name"
            color="primary"
            onClick={() => sortByName()}
            endIcon={<ArrowDownward />}
          >
            Name
          </Button>
        </Tooltip>
      ) : (
        <Tooltip title="Sorted name in ascending order">
          <Button
            variant="outlined"
            aria-label="name"
            color="primary"
            onClick={() => sortByName()}
            endIcon={<ArrowUpward />}
          >
            Name
          </Button>
        </Tooltip>
      )}
      <Divider className={classes.divider} orientation="vertical" />

      {!isSortByMarksClicked ? (
        <Tooltip title="Sorted marks in descending order">
          <Button
            variant="outlined"
            aria-label="marks"
            color="primary"
            onClick={() => sortByMarks()}
            endIcon={<ArrowDownward />}
          >
            Marks
          </Button>
        </Tooltip>
      ) : (
        <Tooltip title="Sorted marks in ascending order">
          <Button
            variant="outlined"
            aria-label="marks"
            color="primary"
            onClick={() => sortByMarks()}
            endIcon={<ArrowUpward />}
          >
            Marks
          </Button>
        </Tooltip>
      )}
    </Paper>
  );
}
