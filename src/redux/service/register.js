import {createApi} from "@reduxjs/toolkit/query/react";
import { createBaseQuery } from "../../config/create-bace-query";

export const  registerApi = createApi({
    reducerPath: "register_api",
    baseQuery: createBaseQuery(),
    endpoints: (build) => ({
        postRegister: build.mutation({
            query: (data) => ({
                url: "/register",
                method: "POST",
                body: data,
            }),
        }),
    }),
    
})

export const { usePostRegisterMutation } = registerApi