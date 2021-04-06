import React, { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";

import NoteCard from "../components/NoteCard";

export default function Notes() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/notes")
      .then((res) => res.json())
      .then((data) => setNotes(data));
  }, []);

  const handleDelete = async (id) => {
    await fetch(`http://localhost:8000/notes/${id}`, {
      method: "DELETE",
    });

    setNotes((notes) => notes.filter((note) => note.id !== id));
  };

  return (
    <Container>
      {/* <Grid container>
        <Grid item xs={12} sm={6} md={3}>
          <Paper>1</Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Paper>2</Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Paper>3</Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Paper>4</Paper>
        </Grid>
      </Grid> */}
      <Grid container spacing={3}>
        {notes.map((note) => (
          <Grid item key={note.id} xs={12} sm={6} lg={4}>
            <NoteCard note={note} handleDelete={handleDelete} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}