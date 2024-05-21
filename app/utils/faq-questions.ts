export type FaqQuestion = {
  question: string;
  answer: string;
};

export const faqQuestions: FaqQuestion[] = [
  {
    question: 'Je účast v ambasadorském programu bezplatná?',
    answer:
      'Ano, účast v ambasadorském programu je bezplatná. Všichni ambasadoři ' +
      'jsou ale odměňováni za svou činnost, když se zúčastní organizovaných akcí.',
  },
  {
    question: 'Jak a kdy získám odměnu za svou účast v programu?',
    answer:
      'Odměna je vyplácena nejčastěji formou stipendií na základě účasti na akcích ' +
      'a aktivitách, které jsou součástí ambasadorského programu. Vyplacení odměny probíhá ' +
      'po každé akci nebo v dalším měsíci, podle domluvy a typu akce. Stačí, když dodáš ' +
      'potřebné údaje (počet hodin) a materiály (zpráva z průběhu akce). ',
  },
  {
    question: 'Jaké kvalifikace jsou požadovány pro účast v ambasadorském programu?',
    answer:
      'Očekáváme nadšení pro reprezentaci fakulty, dobré komunikační schopnosti a ' +
      'zájem o sdílení svých zkušeností s potenciálními studujícími. Vítáme studující ' +
      'ze všech oborů naší fakulty.',
  },
  {
    question: 'Jak se mohu přihlásit do ambasadorského programu?',
    answer:
      'Registruj se přímo na těchto stránkách. Po registraci se ihned přihlas ' +
      'a zobraz si rozhraní pro ambasadory, kde jsou také otázky, které je potřeba ' +
      'vyplnit. Z této aplikace v tuto chvíli nechodí žádné e-maily, po registraci se ' +
      'stačí přihlásit.',
  },
];
