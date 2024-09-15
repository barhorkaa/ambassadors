import { UserRoles } from '@/app/utils/user-roles';
import { UserModel } from '@/models/user-models';
import { Container, Text } from '@react-email/components';

interface UserDisplayProps {
  user: UserModel;
  compareUser: UserModel;
}

const EmailUserDisplay = ({ user, compareUser }: UserDisplayProps) => (
  <Container className="shadow-xl px-4 py-2 ">
    <Text>
      <strong>Jméno: </strong>
      <Text className={user.name !== compareUser.name ? 'text-[#FF0000]' : ''}>{user.name}</Text>
    </Text>
    <Text>
      <strong>E-mail: </strong>
      <Text className={user.email !== compareUser.email ? 'text-[#FF0000]' : ''}>{user.email}</Text>
    </Text>
    <Text>
      <strong>Číslo: </strong>
      <Text className={user.phone_number !== compareUser.phone_number ? 'text-[#FF0000]' : ''}>
        {user.phone_number}
      </Text>
    </Text>
    <Text>
      <strong>UČO: </strong>
      <Text className={user.uco !== compareUser.uco ? 'text-[#FF0000]' : ''}>{user.uco}</Text>
    </Text>
    <Text>
      <strong>Role v aplikaci: </strong>
      <Text className={user.role !== compareUser.role ? 'text-[#FF0000]' : ''}>
        {user.role === UserRoles.manager ? 'Manažer' : 'Ambasador'}
      </Text>
    </Text>
  </Container>
);

export default EmailUserDisplay;
