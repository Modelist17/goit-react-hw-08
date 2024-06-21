import axios from "axios";

const instance = axios.create({
  baseURL: "https://6675f664a8d2b4d072f206e4.mockapi.io/",
}); //changed//

export const requestContacts = async () => {
  const { data } = await instance.get("/contacts");
  return data;
};

export const deleteContactsById = async (id) => {
  const { data } = await instance.delete(`/contacts/${id}`);
  return data;
};

export const addContacts = async (contact) => {
  const { data } = await instance.post("/contacts", contact);
  return data;
};
