import { zfd } from 'zod-form-data';

export const MotivationFormModel = zfd
  .formData({
    why: zfd.text(),
    who: zfd.text(),
    goals: zfd.text(),
    preferredEvents: zfd.text(),
    time: zfd.text(),
    userId: zfd.text(),
  })
  .transform((model) => ({
    preferred_events: model.preferredEvents,
    user_id: model.userId,
    ...model,
  }))
  .transform((model) => {
    const { preferredEvents, userId, ...rest } = model;
    return rest;
  });
