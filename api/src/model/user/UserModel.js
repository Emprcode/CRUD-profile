import UserSchema from './UserSchema.js'

// create

export const insertUser = userObj => {
    return UserSchema(userObj).save()

}
// read

export const getUsers = () => {
    return UserSchema.find()
}
// update
// filter, updateobj must be an object data type

export const updateUsers = (filter, updateObj) => {
    return UserSchema.findOneAndUpdate(filter, updateObj, {new:true})
}


// delete

// export const deleteUser = (filter) => {
//     return UserSchema.findOneAndDelete(filter)
// }
export const deleteUserById = (_id) => {
    return UserSchema.findOneAndDelete(_id)
}

