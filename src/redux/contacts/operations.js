import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  addContacts,
  deleteContactsById,
  requestContacts,
} from "../../api/api";

export const initialState = {
  contacts: {
    items: [],
    loading: false,
    error: null,
  },
  filters: {
    name: "",
  },
};
// apiRequestContacts
export const fetchContacts = createAsyncThunk(
  "contacts/fetchAll",
  async (contactId, thinkApi) => {
    try {
      const data = await requestContacts(contactId);
      return data;
    } catch (error) {
      return thinkApi.rejectWithValue(error.message);
    }
  }
);
// apiAddContacts
export const addContact = createAsyncThunk(
  "contacts/addContact",
  async (contact, thinkApi) => {
    try {
      const data = await addContacts(contact);
      return data;
    } catch (error) {
      return thinkApi.rejectWithValue(error.message);
    }
  }
);
// apiDeleteContacts
export const deleteContact = createAsyncThunk(
  "contacts/deleteContacts",
  async (contactId, thinkApi) => {
    try {
      const data = await deleteContactsById(contactId);
      return data;
    } catch (error) {
      return thinkApi.rejectWithValue(error.message);
    }
  }
);
