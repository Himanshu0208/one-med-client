import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { StaticImageData } from 'next/image';


export default function Cards({
  title,
  description,
  image
} : {
  title: string,
  description: string,
  image: string
}) {
  return (
      <Card sx={{ maxWidth: 345 }} className='hover:shadow-xl'>
        <CardMedia
          sx={{ height: 150 }}
          image={image}
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </Card>
  )
}