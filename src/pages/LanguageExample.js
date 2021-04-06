import React, { useState } from 'react'
import { useTranslation } from "react-i18next";

import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';


const languages = [
  {
    code: "en",
    name: "English",
    country_code: "en"
  },
  {
    code: "de",
    name: "Deutsch",
    country_code: "de"
  }
]

const LanguageExample = () => {
  const { t } = useTranslation();

  const [state, setState] = useState({
    language: "en",
  });

  const releaseDate = new Date("2021-03-07");
  const timeDifference = new Date() - releaseDate;
  const number_of_days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

  const handleChange = (event) => {
    const name = event.target.name;
    setState({
      ...state,
      [name]: event.target.value,
    });
  };

  return (
    <Container>
      <Box display="flex" justifyContent="flex-end">
        <FormControl>
          <InputLabel htmlFor="native-simple">Language</InputLabel>
          <Select
            native
            value={state.language}
            onChange={handleChange}
            inputProps={{
              name: 'language',
              id: 'native-simple',
            }}
          >
            {languages.map(({ code, name, country_code }) => <option key={country_code} value={code}>{name}</option>)}
          </Select>
        </FormControl>
      </Box>
      <Box display="flex" flexDirection="column" justifyContent="flex-start">
        <h1>{t("welcome_message")}</h1>
        <p>{t("days_since_release", { number_of_days })}</p>
      </Box>
    </Container>
  )
}

export default LanguageExample
