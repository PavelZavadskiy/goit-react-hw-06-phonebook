import { Item, Text, List, Button, Wrapper } from './ContactList.styled';
import { useSelector } from 'react-redux';
import { getContacts } from '../../redux/selectors';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice';
import { getFilter } from '../../redux/selectors';

export function ContactList() {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  return (
    <>
      <List>
        {(filter.length > 0
          ? contacts.filter(item => item.name.toLowerCase().includes(filter.toLowerCase()))
          : contacts
        ).map(item => (
          <Item key={item.id}>
            <Wrapper>
              <Text>
                {item.name}: {item.number}
              </Text>
              <Button onClick={() => dispatch(deleteContact(item.id))}>Delete</Button>
            </Wrapper>
          </Item>
        ))}
      </List>
    </>
  );
}
