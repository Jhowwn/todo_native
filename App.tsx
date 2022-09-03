import { StatusBar } from 'react-native';
import { Home } from './src/screens/home/index'
import { Header } from './src/components/header/index'

export default function App() {
  return (
   <>
    <StatusBar 
      barStyle='light-content'
      backgroundColor='transparent'
      translucent
     />
     <Header />
     <Home />
   </>
  );
}