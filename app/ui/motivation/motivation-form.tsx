import { createMotivationAction } from '@/app/lib/actions/motivation';
import SubmitButton from '@/app/ui/button/submit-button';
import FormControl from '@/app/ui/utils/form-control';

export default function MotivationForm({ userId }: { userId: string }) {
  return (
    <form action={createMotivationAction} className="card-body">
      <FormControl title={'Proč jste se rozhodli k nám přidat?'} id={'why'} placeholder={'Proč'} />
      <FormControl
        title={'Doporučil vám někto přidat se k programu? Pokud ano, kto?'}
        id={'who'}
        placeholder={'Ne / Ano + kto'}
      />
      <FormControl title={'Co byste chtěli jako ambasador dosáhnout?'} id={'goals'} placeholder={'Vaše cíle'} />
      <FormControl
        title={'Jakých akcí byste se chtěli převážně zúčastňovat?'}
        id={'preferredEvents'}
        placeholder={'Výjezdy, Dny otevřených dveří, Veltrhy ...'}
      />
      <FormControl
        title={'Kolik času budete mít na ambasadorskou činnost?'}
        id={'time'}
        placeholder={'Vaše časové možnosti'}
      />
      <input id="id" type="hidden" name="userId" value={userId} required />
      <SubmitButton title={'Odeslat'} />
    </form>
  );
}
