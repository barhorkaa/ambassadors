'use client';

import { createMotivationAction } from '@/app/lib/actions/motivation';
import { FormLayout } from '@/app/ui/utils/component-layouts';
import FormControl from '@/app/ui/utils/form-control';
import { formActionInitialState } from '@/app/ui/utils/form-errors';
import { useFormState } from 'react-dom';

export default function MotivationForm({ userId }: { userId: string }) {
  const [state, dispatch] = useFormState(createMotivationAction, formActionInitialState);

  return (
    <FormLayout action={dispatch} state={state}>
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
    </FormLayout>
  );
}
