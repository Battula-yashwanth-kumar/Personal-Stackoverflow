import axios from 'axios'
const baseURL =process.env.REACT_APP_BASE_URL


const api=axios.create({
    baseURL
})
export const AddError=payload=>api.post('/addError',payload);

const apis={
    AddError
}
export default apis;