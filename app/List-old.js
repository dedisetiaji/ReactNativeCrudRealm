import React from 'react'
import Realm from 'realm'
import DbSchema from './db/Schema'
import {View,Text,FlatList, TouchableNativeFeedback,Alert} from 'react-native';

class List extends React.Component
{
  constructor()
  {
    super()
    this.state=
    {
      realm:'',data:''

    }
  }
  _add(id,qty)
  {
    qty=parseInt(qty)
    qtyBaru=qty+1
    DbSchema.then(realm=>{
      realm.write(()=>{
        realm.create('Cart',{id:id,qty:qtyBaru},true)
      })
      this.setState({
        data:realm.objects("Cart")
      })
    })
  }
  _subb(id,qty)
  {
    qty=parseInt(qty)
    qtyBaru=qty-1
    DbSchema.then(realm=>{
      realm.write(()=>{
        realm.create('Cart',{id:id,qty:qtyBaru},true)
      })
      this.setState({
        data:realm.objects("Cart")
      })
    })
  }
  componentWillMount()
  {
    DbSchema.then(realm=>{
      this.setState({
        data:realm.objects("Cart")
      })
    })
  }
  render()
  {
    return(
      <View>
         <FlatList 
            data={this.state.data}
            keyExtractor={item=>item.id}
            renderItem={({item})=>
            <View style={{flex: 1, flexDirection: 'row'}}>
              <View style={{flex:1,}}>
                  <Text>{item.name}</Text>
                  <Text>{item.price}</Text>
              </View>
              <View style={{flex:1,flexDirection:'row'}}>
                      <TouchableNativeFeedback onPress={()=>this._subb(item.id,item.qty)}>
                        <View style={{flex:1,borderWidth:1, padding:5,borderColor:'#ededed',alignItems:'center'}}>
                          <Text>-</Text>
                        </View>
                      </TouchableNativeFeedback>
                 
                  <View style={{flex:1,borderWidth:1, padding:5,borderColor:'#ededed',alignItems:'center'}}>
                      <Text style={{fontWeight:'bold',fontSize:12}}>{item.qty}</Text>
                  </View>
                  <TouchableNativeFeedback  onPress={()=>this._add(item.id,item.qty)}>
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
export default List