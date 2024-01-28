import Avatar from '@mui/joy/Avatar';
import Chip from '@mui/joy/Chip';
import Box from '@mui/joy/Box';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import IconButton from '@mui/joy/IconButton';
import Typography from '@mui/joy/Typography';
import SvgIcon from '@mui/joy/SvgIcon';

export default function BioCard(props) {
  console.log(props);
  return (
    <Card
      sx={{
        width: 320,
        maxWidth: '100%',
        boxShadow: 'lg',
      }}
    >
      <CardContent sx={{ alignItems: 'center', textAlign: 'center' }}>
        <Avatar src={`/images/${props.data.url}`} sx={{ '--Avatar-size': '4rem' }} />
        <Chip
          size="sm"
          variant="soft"
          color="primary"
          sx={{
            mt: -1,
            mb: 1,
            border: '3px solid',
            borderColor: 'background.surface',
          }}
        >
          Profile image
        </Chip>
        <Typography level="title-lg">{props.data.name}</Typography>
        <Typography level="body-sm" sx={{ maxWidth: '24ch' }}>
         {props.data.email}
        </Typography>
        <Box
          sx={{
            display: 'flex',
            gap: 2,
            mt: 2,
            '& > button': { borderRadius: '2rem' },
          }}
        >
          
        <h4>insta - {props.data.insta}</h4>
        <h4>Github - {props.data.Linkedin}</h4>
        <h4>Linkdin - {props.data.github}</h4>
        </Box>
      </CardContent>
    </Card>
  );
}
