import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const shazamCoreApi = createApi({
  reducerPath: "shazamCoreApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `https://shazam.p.rapidapi.com`,
    prepareHeaders: (headers) => {
      headers.set("X-RapidAPI-Key", import.meta.env.VITE_SHAZAM_RAPID_API_KEY);

      return headers;
    },
  }),

  endpoints: (builder) => ({
    getSongsByGenre: builder.query({
      query: (genre) => `charts/track?listId=${genre}&pageSize=12`,
    }),
    getSongsBySearch: builder.query({
      query: (searchTerm) => `/search?term=${searchTerm}`,
    }),
    getArtistTopTracks: builder.query({
      query: (artistId) => `/songs/list-artist-top-tracks?id=${artistId}`,
    }),

    getSongDetails: builder.query({
      query: (songKey) => `/songs/get-details?key=${songKey}`,
    }),
    getSongRelated: builder.query({
      query: (songKey) => `/songs/list-recommendations?key=${songKey}`,
    }),
  }),
});

export const {
  useGetSongsByGenreQuery,
  useGetSongsBySearchQuery,
  useGetArtistTopTracksQuery,
  useGetSongDetailsQuery,
  useGetSongRelatedQuery,
} = shazamCoreApi;
