import request from "./base";


const applicant = {
    UpdateApplicantProfile : async(id, data) => {
        let path = "/hiring-role-applicant/update/"
        path += (id).toString()
        path += '?apiKey=g436739d6734gd6734'
        const response = await request.put(path, data)
        return response
    },

    GetApplicantByKey : async(id) => {
        let path = "/hiring-role-applicant/"
        path += (id).toString()
        path += '?apiKey=g436739d6734gd6734'
        const response = await request.get(path)
        return response
    }
}

export default applicant