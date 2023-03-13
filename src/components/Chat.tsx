import { useMemo } from 'preact/hooks';
import { ChatsCollection, useChats } from '../hooks'

type User = { id: string; user: string; email: string }
type Props = { chat: ChatsCollection, myUser: User, otherUser: User  }
export const Chat = ({ chat, myUser, otherUser }: Props) => {
  const query = useMemo(() =>({ expand: 'messages' }),[])
  const {data} = useChats(query)
  console.log(data)
  return null
}
