import React, { useState } from 'react'
import { SafeAreaView, Text } from 'react-native'

const MyFirstComponent = () => {

  const [userName, setUserName] = useState('')
  return (
    <SafeAreaView>
      <Text>My First Component By Santiago Jimenez</Text>
    </SafeAreaView>
  )
}

export default MyFirstComponent
