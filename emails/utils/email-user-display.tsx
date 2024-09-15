import { UserRoles } from '@/app/utils/user-roles';
import { UserModel } from '@/models/user-models';
import { Column, Container, Row, Section, Text } from '@react-email/components';

interface UserDisplayProps {
  user: UserModel;
  compareUser: UserModel;
}

const EmailUserDisplay = ({ user, compareUser }: UserDisplayProps) => (
  <Container className="shadow-xl px-4 py-2 ">
    <DisplayRow tag={'Jméno'} property={user.name} propertyComp={compareUser.name} />
    <DisplayRow tag={'E-mail'} property={user.email} propertyComp={compareUser.email} />
    <DisplayRow tag={'Tel. číslo'} property={user.phone_number} propertyComp={compareUser.phone_number} />
    <DisplayRow tag={'UČO'} property={user.uco} propertyComp={compareUser.uco} />
    <DisplayRow
      tag={'Role v aplikaci'}
      property={user.role}
      propertyComp={compareUser.role}
      value={user.role === UserRoles.manager ? 'Manažer' : 'Ambasador'}
    />
  </Container>
);

interface DisplayRowProps {
  tag: string;
  property: string | number;
  propertyComp: string | number;
  value?: string | number;
}

const DisplayRow = ({ tag, property, propertyComp, value = property }: DisplayRowProps) => (
  <Section>
    <Row>
      <Column>
        <Text className="w-1/2">
          <strong>{tag}: </strong>
        </Text>
      </Column>
      <Column className="w-1/2">
        <Text className={property !== propertyComp ? 'text-[#FF0000]' : ''}>{value}</Text>
      </Column>
    </Row>
  </Section>
);

export default EmailUserDisplay;
