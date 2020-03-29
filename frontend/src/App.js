import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import ProTip from './ProTip';
import Foods from './pages/Foods';
import HideAppBar from "./components/HideAppBar";
import Toolbar from '@material-ui/core/Toolbar';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="http://13.209.21.146">
        성기동 Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function App() {
  return (
    <Container maxWidth="xl">
      {/* Header */}
      <HideAppBar Title={"오늘의메뉴"} />
      <Toolbar />

      <Box my={4}>
        {/* Pages */}
        <Foods />

        {/* Footer */}
        <ProTip />
        <Copyright />
      </Box>
    </Container>
  );
}
