import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ArrayPersons } from '../types/types';

export const api = createApi({
  reducerPath: 'api',
  tagTypes: ['Data'],
  baseQuery: fetchBaseQuery({ baseUrl: 'http://www.filltext.com' }),
  endpoints: (builder) => ({
    getData: builder.query<ArrayPersons, number>({
      query: (amount) =>
        `/?rows=${amount}&id={number|1000}&firstName={firstName}&delay=3&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}`,
      providesTags: ['Data'],
    }),
    create: builder.mutation({
      query: (body) => ({
        url: `/?rows=${32}&id={number|1000}&firstName={firstName}&delay=3&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}`,
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Data'],
    }),
  }),
});

export const { useGetDataQuery, useCreateMutation } = api;
