import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  jobs: [],
  filtredJobs: [],
  initialized: false,
};

const jobSlice = createSlice({
  name: "jobSlice",
  initialState,
  reducers: {
    setJobs: (state, action) => {
      state.jobs = action.payload;
      state.filtredJobs = action.payload;
      state.initialized = true;
    },
    addJob: (state, action) => {
      state.jobs.push(action.payload);
    },
    // arama terimine göre filtreleme
    filterBySearch: (state, action) => {
      /*
        1- filtrelenecek kelimeyi al
        2- filtreleme yap
      */
      // arama terimini küçük harfe çevirme
      const filtred = state.jobs.filter((job) =>
        job.company.toLowerCase().includes(query)
      );
      // aksiyonla gelen arama terimiyle eşleşen objelerle yeni bir dizi oluştur

      // store'u güncelle
      state.filtredJobs = filtred;
    },
    // aksiyonla gelen duruma göre filtreleme yap
    filterByStatus: (state, action) => {
      // aksiyonun payload değeriyle eşleşen işlerle yeni bir dizi oluşturur
      state.filtredJobs = state.jobs.filter(
        (job) => job.status === action.payload
      );
    },

    // tipine göre filtreleme
    filterByType: (state, action) => {
      state.filtredJobs = state.jobs.filter(
        (job) => job.type === action.payload
      );
    },
  },
});

export const { setJobs, addJob, filterBySearch, filterByStatus, filterByType } =
  jobSlice.actions;

export default jobSlice.reducer;
