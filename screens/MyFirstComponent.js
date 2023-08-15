import React from 'react'
import { SafeAreaView, Text } from 'react-native'

const MyFirstComponent = () => {
    const [userName, setUserName] = useState('')
  return (
    <SafeAreaView>
      <Text>My First Component</Text>
    </SafeAreaView>
  )
}

export default MyFirstComponent
