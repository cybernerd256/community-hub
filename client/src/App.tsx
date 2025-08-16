import { Container, Typography, Button, Box } from '@mui/material'

function App() {
  return (
    <Container maxWidth="sm" sx={{ mt: 8 }}>
      <Box sx={{ textAlign: 'center' }}>
        <Typography variant="h3" gutterBottom>
          Welcome to Community Hub
        </Typography>
        <Typography variant="h6" color="text.secondary" gutterBottom>
          Manage your groups, events, and community all in one place.
        </Typography>
        <Button variant="contained" color="primary" size="large" sx={{ mt: 4 }}>
          Get Started
        </Button>
      </Box>
    </Container>
  )
}

export default App
