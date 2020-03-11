import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import ProTip from './ProTip';
import Food from './pages/Food';

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
      <Box my={4}>
        {/* Header */}
        <div style={{ marginBottom: 30, textAlign: 'center' }}>
          <Typography variant="h4" component="h1" gutterBottom>
            오늘의 메뉴!
          </Typography>
        </div>

        {/* Pages */}
        <Food />

        {/* Footer */}
        <ProTip />
        <Copyright />
      </Box>
    </Container>
  );
}
