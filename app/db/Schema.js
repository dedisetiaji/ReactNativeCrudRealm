import Realm from 'realm'
const DbSchema=
{
    name:"Cart",
    primaryKey:'id',
    properties:
    {
        id:"string",
        name:"string",
        qty:"int",
        price:"int",
    }
}
let Schema=Realm.open({schema:[DbSchema]})
export default Schema