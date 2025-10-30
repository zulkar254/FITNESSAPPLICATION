
import { Box, Button, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material'
import React, { act, useState } from 'react'
import { addActivity } from '../services/api';

const ActivityForm = ({ onActivityAdded }) => {

  const [activity, setActivity] = useState({
    type: "RUNNING", duration: '', caloriesBurned: '',
    additionalMetrics: {}
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addActivity(activity);
      onActivityAdded();
      setActivity({
    type: "RUNNING", duration: '', caloriesBurned: '',
    additionalMetrics: {}
  });
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <Box component="form" sx={{ mb: 2 }} onSubmit={handleSubmit}>
      <FormControl>
        <InputLabel>Activity Type</InputLabel>
        <Select sx={{ mb: 2 }}
          value={activity.type}
          onChange={(e) => setActivity({...activity, type: e.target.value})}>
            <MenuItem value="RUNNING">Running</MenuItem>
            <MenuItem value="WALKING">Walking</MenuItem>
            <MenuItem value="CYCLING">Cycling</MenuItem>
          </Select>
      </FormControl>
      <TextField fullWidth
        label="Duration (Minutes)"
        type='number'
        sx={{mb: 2}}
        value={activity.duration}
        onChange={(e) => setActivity({...activity, duration: e.target.value})}/>

    <TextField fullWidth
        label="Calories Burned"
        type='number'
        sx={{mb: 2}}
        value={activity.caloriesBurned}
        onChange={(e) => setActivity({...activity, caloriesBurned: e.target.value})}/>

      <Button type='submit' variant='contained'>Add Activity</Button>
    </Box>
  )
}

export default ActivityForm