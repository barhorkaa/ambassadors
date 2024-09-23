'use client';

import { createMotivationAction } from '@/app/lib/actions/motivation';
import { formActionInitialState } from '@/app/lib/actions/utils';
import { FormLayout } from '@/app/ui/utils/component-layouts';
import FormControl from '@/app/ui/utils/form-control';
import { useFormState } from 'react-dom';

interface MotivationFormProps {
  userId: string;
}

export default function MotivationForm({ userId }: MotivationFormProps) {
  const [state, dispatch] = useFormState(createMotivationAction, formActionInitialState);

  return (
    <FormLayout action={dispatch} state={state}>
      <FormControl
        title={'Proč jste se rozhodli k nám přidat?'}
        id={'why'}
        inputType={'textarea'}
        placeholder={'Chci zvýšit povědomí o fakultě, přividělat si ...'}
      />
      <FormControl
        title={'Doporučil vám někto přidat se k programu? Pokud ano, kto?'}
        id={'who'}
        inputType={'textarea'}
        placeholder={'Ne / Ano + kto'}
      />
      <FormControl
        title={'Co byste chtěli jako ambasador dosáhnout?'}
        id={'goals'}
        inputType={'textarea'}
        placeholder={'Chci se podílet na propagaci, dostat merch...'}
      />
      <FormControl
        title={'Jakých akcí byste se chtěli převážně zúčastňovat?'}
        id={'preferredEvents'}
        inputType={'textarea'}
        placeholder={'Výjezdy, Dny otevřených dveří, Veltrhy ...'}
      />
      <FormControl
        title={'Kolik času budete mít na ambasadorskou činnost?'}
        id={'time'}
        inputType={'textarea'}
        placeholder={'Na kolik akcí zhruba za rok byste chtěli jít?'}
      />
      <input id="id" type="hidden" name="userId" value={userId} required />
    </FormLayout>
  );
}
