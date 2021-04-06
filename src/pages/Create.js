import React, { useState } from "react";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import AcUnitOutlined from "@material-ui/icons/AcUnitOutlined";
import SendIcon from "@material-ui/icons/Send";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import Container from "@material-ui/core/Container";
import { FormControlLabel, makeStyles } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import { useHistory } from "react-router";

const useStyles = makeStyles({
  // btn: {
  //   fontSize: 60,
  //   backgroundColor: "violet",
  //   "&:hover": {
  //     backgroundColor: "blue",
  //   },
  // },
  // title: {
  //   textDecoration: "underline",
  //   marginBottom: 20,
  // },
  field: {
    marginTop: 20,
    marginBottom: 20,
    display: "block",
  },
});

export default function Create() {
  const classes = useStyles();

  const history = useHistory();

  const [title, setTitle] = useState("");
  const [details, setdetails] = useState("");

  const [titleError, setTitleError] = useState(false);
  const [detailsError, setdetailsError] = useState(false);

  const [category, setCategory] = useState("todos");

  const handleSubmit = (e) => {
    e.preventDefault();

    setTitleError(false);
    setdetailsError(false);

    if (title == "") {
      setTitleError(true);
    }

    if (details == "") {
      setdetailsError(true);
    }

    if (title && details) {
      fetch("http://localhost:8000/notes", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({ title, details, category }),
      }).then(() => history.push("/"));
    }
  };

  return (
    <Container>
      <Typography
        variant="h6"
        color="textSecondary"
        component="h2"
        gutterBottom /**egy kis margo az aljára */
      >
        Create a New Note
      </Typography>

      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <TextField
          onChange={(e) => setTitle(e.target.value)}
          className={classes.field}
          label="Note Title"
          variant="outlined"
          color="secondary"
          fullWidth
          required
          error={titleError}
        />
        <TextField
          onChange={(e) => setdetails(e.target.value)}
          className={classes.field}
          label="Details"
          variant="outlined"
          color="secondary"
          multiline
          rows={4}
          fullWidth
          required
          error={detailsError}
        />

        <FormControl className={classes.field}>
          <FormLabel color="primary">Note Category</FormLabel>
          <RadioGroup
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <FormControlLabel value="asd" control={<Radio />} label="asd" />
            <FormControlLabel value="todos" control={<Radio />} label="Todos" />
            <FormControlLabel
              value="reminders"
              control={<Radio />}
              label="Reminders"
            />
            <FormControlLabel
              value="others"
              control={<Radio />}
              label="Others"
            />
          </RadioGroup>
        </FormControl>

        <Button
          //onClick={() => console.log("submitted")}
          type="submit"
          color="secondary"
          variant="contained"
          //startIcon={<SendIcon />}
          //endIcon={<KeyboardArrowRightIcon />}
          endIcon={<SendIcon />}
        >
          Submit
        </Button>
      </form>

      {/** icons */}

      <AcUnitOutlined />
      {/* <AcUnitOutlined color="secondary" fontSize="large" /> */}
    </Container>
  );
}
