import React from 'react'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { Checkbox, makeStyles, TextField } from '@material-ui/core';

export default ({ results, onGroupChange, onAdminChange }) => {
    const classes = useStyles();

    return (
        <TableContainer className={classes.container}>
            <Table stickyHeader >
                <TableHead>
                    <TableRow>
                        <TableCell align="right">{'שם משתמש'}</TableCell>
                        <TableCell align="right">{'שם מלא'}</TableCell>
                        <TableCell align="right">{'נפה'}</TableCell>
                        <TableCell align="right">{'אדמין'}</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {results.map((user, i) => (
                        <TableRow key={user.id}>
                            <TableCell align="right" name={user.id}>{user.id} </TableCell>
                            <TableCell align="right" name={user.id}>{user.user_name} </TableCell>
                            <TableCell align="right"
                                name={i}
                                value={user.investigation_group}
                                component={TextField}
                                type='number'
                                onChange={onGroupChange}>
                                {user.investigation_group}
                            </TableCell>
                            <TableCell align="right" name={user.id}>
                                <Checkbox
                                    color='primary'
                                    name={i}
                                    checked={user.is_admin ? true : false}
                                    onChange={onAdminChange} />
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

const useStyles = makeStyles({
    container: {
        height: '430px'
    }
});