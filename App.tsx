import styled from 'styled-components/native'

import { StatusBar } from 'expo-status-bar'

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #f5fcff;
`

const Text = styled.Text`
  font-size: 20px;
  color: #333;
`

export default function App() {
  return (
    <Container>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
    </Container>
  )
}
