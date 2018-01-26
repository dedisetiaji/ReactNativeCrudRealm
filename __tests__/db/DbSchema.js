import Realm from 'realm'
const StudentSchema=
{
    name:'Student',
    primaryKey:'id',
    properties:
    {
        id:{type:'string',indexed:true},
        name:'string'
    }
}
let exportSchema = Realm.open({
    schema:[StudentSchema]
})
export default exportSchema