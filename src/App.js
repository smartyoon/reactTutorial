import React, { Component } from 'react';
import './App.css';
import Customer from "./components/customer";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import { withStyles } from "@material-ui/core/styles";


const styles = theme => ({
  root : {
    width:'100%',
    marginTop:theme.spacing(3),
    overflowX:'auto'
  },
  table : {
    minWidth:1080
  }
});


const customers = [
  {
    id: "1",
    image: "https://placeimg.com/64/64/1",
    name: "프레드",
    age: "29",
    gender: "man",
  },
  {
    id: "2",
    image: "https://placeimg.com/64/64/2",
    name: "마린다",
    age: "26",
    gender: "female",
  },
  {
    id: "3",
    image: "https://placeimg.com/64/64/3",
    name: "제시",
    age: "33",
    gender: "female",
  },
];


class App extends Component {
  render() {
    const { classes } = this.props ? this.props : null; 
  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>번호</TableCell>
            <TableCell>이미지</TableCell>
            <TableCell>이름</TableCell>
            <TableCell>나이</TableCell>
            <TableCell>성별</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {customers.map((c) => {
            return (
              <Customer
                key={c.id}
                id={c.id}
                image={c.image}
                name={c.name}
                age={c.age}
                gender={c.gender}
              />
            );
          })}
        </TableBody>
      </Table>
    </Paper>
  );
  }
  
}

export default withStyles(styles)(App);
