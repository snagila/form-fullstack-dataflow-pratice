import AddFormSchema from "../schema/AddFormSchema.js";

export const Addform = (formObj) => {
  return AddFormSchema(formObj).save();
};
