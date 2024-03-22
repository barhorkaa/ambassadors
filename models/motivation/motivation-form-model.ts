import { zfd } from "zod-form-data";

export const MotivationFormModel = zfd.formData({
  why: zfd.text(),
  who: zfd.text(),
  goals: zfd.text(),
  preferred_events: zfd.text(),
  time: zfd.text(),
  user_id: zfd.text()
});