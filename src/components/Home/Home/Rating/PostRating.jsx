import * as React from 'react';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';

export default function PostRating() {
  return (
    <Stack style={{color: 'white'}} spacing={1}>
      <Rating name="half-rating" defaultValue={0} precision={0.5} />
    </Stack>
  );
}