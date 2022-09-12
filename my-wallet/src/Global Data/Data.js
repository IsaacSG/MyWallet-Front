export const BaseAPI = "";

export const autorização = (user) => {return{headers: {
    "Autorization": `Bearer ${user.token}`
}}};