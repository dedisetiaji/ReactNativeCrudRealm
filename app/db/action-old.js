import Realm from 'realm'
import React from 'react'
import DbSchema from './Schema'
class Action extends React.Component
{
    _add(id,qty,data)
    {
        qty=parseInt(qty)
        qtyBaru=qty+1
        DbSchema.then(realm=>{
            realm.write(()=>{
                realm.create('Cart',{id:id,qty:qtyBaru},true)
            })
            
            data=realm.objects("Cart")
        
        })
    }
    _subb(id,qty,data)
    {
        qty=parseInt(qty)
        qtyBaru=qty-1
        DbSchema.then(realm=>{
            realm.write(()=>{
                realm.create('Cart',{id:id,qty:qtyBaru},true)
            })
            data=realm.objects("Cart")
        })
    }
}
export default new Action()