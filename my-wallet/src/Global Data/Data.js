export const BaseAPI = "localhost:5000";

export const autorização = (user) => {return{headers: {
    "Autorization": `Bearer ${user.token}`
}}};