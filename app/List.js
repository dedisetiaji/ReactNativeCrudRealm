import React from 'react'
import {View,Text,Button,FlatList,TouchableNativeFeedback} from 'react-native'
import Action from './db/action'
import {observer} from 'mobx-react'
import {observable} from 'mobx'
import DbSchema from './db/Schema'
@observer 
export default class List extends React.Component
{
  componentWillMount()
  {
    Action._show()
  }
  render()
  {
    return(
      <View>
         <FlatList 
            data={Action.data}
            keyExtractor={item=>item.id}
            renderItem={({item})=>
            <View style={{flex: 1, flexDirection: 'row'}}>
              <View style={{flex:1,}}>
                  <Text>{item.name}</Text>
                  <Text>{item.price}</Text>
              </View>
              <View style={{flex:1,flexDirection:'row'}}>
                      <TouchableNativeFeedback onPress={()=>Action._subb(item.id,item.qty)}>
                        <View style={{flex:1,borderWidth:1, padding:5,borderColor:'#ededed',alignItems:'center'}}>
                          <Text>-</Text>
                        </View>
                      </TouchableNativeFeedback>
                 
                  <View style={{flex:1,borderWidth:1, padding:5,borderColor:'#ededed',alignItems:'center'}}>
                      <Text style={{fontWeight:'bold',fontSize:12}}>{item.qty}</Text>
                  </View>
                  <TouchableNativeFeedback  onPress={()=>Action._add(item.id,item.qty)}>
                    <View style={{flex:1,borderWidth:1, padding:5,borderColor:'#ededed',alignItems:'center'}}>
                      <Text>+</Text>
                    </View>
                  </TouchableNativeFeedback>
              </View>
            </View>
          }
         />
      </View>
    )
  }  
}