import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchAllJobs = createAsyncThunk(
    'job/fetchJobs',
    async () => {
        const response = await fetch('https://pacific-lowlands-19741.herokuapp.com/availableJobs')
            .then(res => res.json())
        return response;
    }
)

export const fetchJobDetails = createAsyncThunk(
    'job/fetchJobDetails',
    async (id) => {
        const response = await fetch(`https://pacific-lowlands-19741.herokuapp.com/availableJobs/${id}`)
            .then(res => res.json())
        return response;
    }
)

export const jobSlice = createSlice({
    name: 'job',
    initialState: {
        jobs: [],
        jobDetails: {},
        isLoading: true
    },
    reducers: {
    },
    extraReducers: (builder) => {
        builder.addCase(fetchAllJobs.fulfilled, (state, action) => {
            state.jobs = action.payload;
            state.isLoading = false;
        })
        builder.addCase(fetchAllJobs.pending, (state, action) => {
            state.isLoading = true;
        })
        builder.addCase(fetchJobDetails.fulfilled, (state, action) => {
            state.jobDetails = {};
            console.log(action.payload);
            state.jobDetails = action.payload;
            state.isLoading = false;
        })
        builder.addCase(fetchJobDetails.pending, (state, action) => {
            state.isLoading = true;
        })
    },
});

// export const { handleSearchJobs } = jobSlice.actions;

export default jobSlice.reducer;