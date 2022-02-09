import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import './App.css';
import { Checkbox, FormControl, FormControlLabel, FormLabel, IconButton, RadioGroup } from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Radio from '@mui/material/Radio';
import Slider from '@mui/material/Slider';
import Switch from '@mui/material/Switch';
import Box from '@mui/material/Box';
import img from "./images/lion.jpg"
import Avatar from '@mui/material/Avatar';
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';






function App() {
  return (
    <div className="App">
      <h1>hello world</h1>
      <p>Text buttons</p>
      <Button>text me</Button>
      <Button disabled>disabled</Button>
      <Button href="#text-buttons">link</Button>
      <h1>contained button</h1>
      <Button variant="contained">contained</Button>
      <Button variant="contained" disabled>contained</Button>
      <Button variant="contained" href="#contained-buttons">link</Button>
      <h1>outlined button</h1>
      <Button variant="outlined">primary</Button>
      <Button variant="outlined" disabled>primary</Button>
      <Button variant="outlined" href="outlined-buttons">link</Button>
      <h3>button with icons and label</h3>
      <Button variant="outlined" startIcon={<DeleteIcon />}>delete</Button>
      <Button variant="contained" color="success" endIcon={<SendIcon />}>Send</Button>
      <h1>Icon Button</h1>
      <IconButton aria-label="delete"><DeleteIcon fontSize="inherit" /></IconButton>
      <IconButton aria-label="add to shopping cart"><AddShoppingCartIcon /></IconButton>
      <h1>checkbox</h1>
      <Checkbox />
      <Checkbox color="success" checked="true"></Checkbox>
      <h1>radio button</h1>
      <FormControl component="fieldset">
        <FormLabel component="legend">GENDER</FormLabel>
        <RadioGroup
          aria-label="gender" defaultValue="female" name="radio-buttons-group">
          <FormControlLabel value="female" control={<Radio />} label="Female" />
          <FormControlLabel value="male" control={<Radio />} label="Male" />
          <FormControlLabel value="other" control={<Radio />} label="Other" />
        </RadioGroup>
      </FormControl>
      <Avatar>A</Avatar>
      <Slider
        size="small"
        defaultValue={20}
        aria-label="large"
        valueLabelDisplay="auto"
        color="success"
      />

      <h1>switch</h1>
      <Switch />
      <h1>color</h1>
      <Box color="primary.main">success</Box>
      <Box color="secondary.main">secondary</Box>
      <Box color="error.main">success</Box>
      <Box color="warning.main">warning</Box>
      <Box color="info.main">info</Box>
      <Box color="success.main">succes</Box>
      <Box color="text.primary">primary</Box>
      <Box color="text.secondary">text</Box>
      <Box color="text.disabled">disabled</Box>
      <h1>bg color</h1>
      <Box bgcolor="primary.main">success</Box>
      <Box bgcolor="secondary.main">secondary</Box>
      <Box bgcolor="error.main">success</Box>
      <Box bgcolor="warning.main">warning</Box>
      <Box bgcolor="info.main">info</Box>
      <Box bgcolor="success.main">succes</Box>
      <Box bgcolor="text.primary">primary</Box>
      <Box bgcolor="text.secondary">text</Box>
      <Box bgcolor="text.disabled">disabled</Box>
      <h1>Margin</h1>
      <Box m={1}>hello</Box>
      <Box mt={3}>hello</Box>
      <Box mb={1}>hello</Box>
      <Box ml={1}>hello</Box>
      <Box mr={1}>hello</Box>
      <h1>border</h1>
      <Box border={2} borderRadius="50%" width={300} height={50}>hello 1</Box>
      <Box borderTop={2}>hello 2</Box>
      <Box borderBottom={2}>hello 3</Box>
      <Box borderRight={2}>hello 4</Box>
      <Box borderLeft={2}>hello 5</Box>
      <img src={img} alt="lions" />
      <h1>Avatar</h1>
      <Avatar src={img} alt="beautiful lion" ></Avatar>
      <Avatar>A</Avatar>
      <h1>badge</h1>
      <Button variant='outlined'>class</Button>
      <Button variant='outlined' disabled>promary</Button>
      <Badge badgeContent={4} color="error">
        <MailIcon color="action" />
      </Badge>
      <Slider
        size="small"
        defaultValue={20}
        aria-label="large"
        valueLabelDisplay="auto"
        color="success"
      />
    </div>
  );
}

export default App
