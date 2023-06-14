import {createSchema} from "sanity"

import banner from "./banner"
import product from "./product"
import users from "./users"

export const schemaTypes = [product, banner, users]

export default createSchema({
    name: "default",
    types: schemaTypes
})