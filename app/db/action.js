import React, { Component } from 'react'
import Realm from 'realm'
import {View,Text,Button,Alert} from 'react-native'
import DbSchema from './Schema'
import {observable} from 'mobx'
class Action extends React.Component
{
    @observable data=""
    _show()
    {
        DbSchema.then(realm=>{
            this.data=realm.objects('Cart');
        })
    }
    _add(id,qty)
    {
        qty=parseInt(qty)
        qtyBaru=qty+1
        DbSchema.then(realm=>{
            realm.write(()=>{
                realm.create('Cart',{id:id,qty:qtyBaru},true)
            })
            
            this.data=realm.objects("Cart")
        
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
            this.data=realm.objects("Cart")
        })
    }
  
}
export default new Action()