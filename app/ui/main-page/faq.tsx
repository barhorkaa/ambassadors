import { FaqQuestion, faqQuestions } from '@/app/utils/faq-questions';

export default function FAQ() {
  return (
    <div className="w-1/2 sm:w-full">
      {faqQuestions.map((question, index) => (
        <FAQDrawer key={index} faq={question} />
      ))}
    </div>
  );
}

function FAQDrawer({ faq }: { faq: FaqQuestion }) {
  return (
    <div className="collapse collapse-arrow border-2 border-fi-200 rounded-none">
      <input type="checkbox" name="my-accordion-2" />
      <div className="collapse-title text-xl font-medium">{faq.question}</div>
      <div className="collapse-content">
        <p>{faq.answer}</p>
      </div>
    </div>
  );
}
