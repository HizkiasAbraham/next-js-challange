import {
  Box,
  Button,
  Grid,
  Paper,
  TextareaAutosize,
  TextField,
  Typography,
} from "@mui/material"
import { useState } from "react"
import TodoDatePiker from "../../components/date-picker"
import Layout from "../../components/layout"

export default function AddNewTodo() {
  const [value, setValue] = useState(new Date("2014-08-18T21:11:54"))

  const handleChange = (newValue) => {
    setValue(newValue)
  }
  return (
    <Layout>
      <Typography variant="h5" component={"p"}>
        Create Todo
      </Typography>
      <Box mt={3}>
        <Paper>
          <form>
            <Grid container p={2}>
              <Grid item xs={12} md={4}>
                <TextField fullWidth label="Title" />
              </Grid>
            </Grid>
            <Grid container p={2}>
              <Grid item xs={12} md={6}>
                <TextField fullWidth label="Description" />
              </Grid>
            </Grid>
            <Grid container p={2}>
              <Grid item xs={12} md={4}>
                <TodoDatePiker label={" Pick Date"} />
              </Grid>
            </Grid>
            <Box p={2}>
              <Button variant="contained">Create</Button>
            </Box>
          </form>
        </Paper>
      </Box>
    </Layout>
  )
}
