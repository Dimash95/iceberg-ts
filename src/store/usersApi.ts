import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface User {
  firstName: string;
  phone: string;
  birthDate: string;
}

export const usersApi = createApi({
  reducerPath: "usersApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com/" }),
  endpoints: builder => ({
    getUsers: builder.query<User[], void>({
      query: () => "users",
      transformResponse: (response: { users: User[] }) =>
        response.users.map(user => ({
          firstName: user.firstName,
          phone: user.phone,
          birthDate: user.birthDate,
        })),
    }),
  }),
});

export const { useGetUsersQuery } = usersApi;
