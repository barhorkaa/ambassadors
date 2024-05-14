import { createMotivationAction } from '@/app/lib/actions/motivation';
import SubmitButton from '@/app/ui/button/submit-button';
import FormControl from '@/app/ui/utils/form-control';

export default function MotivationForm({ userId }: { userId: string }) {
  return (
    <form action={createMotivationAction} className="card-body">
      <FormControl
        title={'Proč jste se rozhodli k nám přidat?'}
        id={'why'}
        inputType={'area'}
        placeholder={'Chci zvýšit povědomí o fakultě, přividělat si ...'}
      />
      <FormControl
        title={'Doporučil vám někto přidat se k programu? Pokud ano, kto?'}
        id={'who'}
        inputType={'area'}
        placeholder={'Ne / Ano + kto'}
      />
      <FormControl
        title={'Co byste chtěli jako ambasador dosáhnout?'}
        id={'goals'}
        inputType={'area'}
        placeholder={'Chci se podílet na propagaci, dostat merch...'}
      />
      <FormControl
        title={'Jakých akcí byste se chtěli převážně zúčastňovat?'}
        id={'preferredEvents'}
        inputType={'area'}
        placeholder={'Výjezdy, Dny otevřených dveří, Veltrhy ...'}
      />
      <FormControl
        title={'Kolik času budete mít na ambasadorskou činnost?'}
        id={'time'}
        inputType={'area'}
        placeholder={'Na kolik akcí zhruba za rok byste chtěli jít?'}
      />
      <input id="id" type="hidden" name="userId" value={userId} required />
      <SubmitButton title={'Odeslat'} />
    </form>
  );
}
