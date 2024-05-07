'use server';

export async function createReportAction(formData: FormData) {
  console.log('got to action');
  try {
    console.log('in action form data is: ', formData);
    const reportForm = {
      eventId: formData.get('eventId'),
      ideas: formData.get('ideas'),
      notes: formData.get('notes'),
      numerOfAttendees: formData.get('numerOfAttendees'),
    };
  } catch (e) {
    console.error(e);
    throw e;
  }
}
