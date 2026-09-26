export interface Testimonial {
  id: string;
  authorName: string;
  company: string;
  role: string;
  date: string;
  dateRu: string;
  rating: number;
  text: string;
  textRu: string;
  projectSlug?: string;
  featured: boolean;
  contraUrl: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "eldos-maserov-mylogistics",
    authorName: "Eldos Maserov",
    company: "mylogistics",
    role: "Client",
    date: "Aug 21, 2026",
    dateRu: "21 авг. 2026",
    rating: 5,
    text: "Ilyas is an outstanding engineer who brings deep technical precision and autonomy to the table. He quickly grasped our product requirements, architected clean solutions, and shipped production-ready code with great attention to detail. Communication was proactive and transparent throughout the entire milestone. Would gladly partner with him again.",
    textRu:
      "Ильяс — выдающийся инженер, который сочетает глубокую техническую точность и самостоятельность. Он быстро вник в требования к нашему продукту, спроектировал чистые решения и отправил производственный код с большим вниманием к деталям. Коммуникация была проактивной и прозрачной на протяжении всего сотрудничества. С удовольствием снова буду работать с ним.",
    projectSlug: "logistics-erp",
    featured: true,
    contraUrl: "https://contra.com/ilyas_salimov/reviews?r=ilyas_salimov",
  },
  {
    id: "miras-bekmuratov-aziatest",
    authorName: "Miras Bekmuratov",
    company: "Azia-test LLP",
    role: "Client",
    date: "Aug 20, 2026",
    dateRu: "20 авг. 2026",
    rating: 5,
    text: "Ilyas engineered and deployed our core operations platform from the ground up. He demonstrated exceptional full-stack and architectural skills, delivering a fast, reliable web and mobile experience that handled our real-time workflows flawlessly. Outstanding communication, clear timelines, and true engineering ownership. We would gladly work with him again.",
    textRu:
      "Ильяс разработал и развернул нашу основную операционную платформу с нуля. Он продемонстрировал исключительные навыки full-stack и архитектурного проектирования, создав быстрый и надежный веб- и мобильный опыт, который идеально справился с нашими рабочими процессами в реальном времени. Отличная коммуникация, четкие сроки и настоящее владение инженерным процессом. Мы с удовольствием снова будем с ним работать.",
    projectSlug: "logistics-erp",
    featured: true,
    contraUrl: "https://contra.com/ilyas_salimov/reviews?r=ilyas_salimov",
  },
];

export const CONTRA_REVIEWS_URL =
  "https://contra.com/ilyas_salimov/reviews?r=ilyas_salimov";

export function getFeaturedTestimonials(): Testimonial[] {
  return testimonials.filter((t) => t.featured);
}

export function getTestimonialText(t: Testimonial, lang: "en" | "ru"): string {
  return lang === "ru" && t.textRu ? t.textRu : t.text;
}

export function getTestimonialDate(t: Testimonial, lang: "en" | "ru"): string {
  return lang === "ru" && t.dateRu ? t.dateRu : t.date;
}
