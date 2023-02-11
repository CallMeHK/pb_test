import { usePmessages } from "../hooks";
import { user_data } from "../signals";

export const Message = (props: { id: string; text: string }) => {
  const isAuthor = props.id === user_data.value.id
  const divStyle = isAuthor ?
    {display: 'flex', flexDirection: 'row-reverse', marginLeft: '16px'}
    : {display: 'flex', flexDirection: 'row', marginRight: '24px'}
  const articleStyle = isAuthor ? { backgroundColor: "rgb(34 66 31)"} : { backgroundColor: "#182530"}
  return (
    <div style={divStyle}>
      <article
        style={{
          ...articleStyle,
          margin: "calc(var(--block-spacing-vertical)/2) 0",
          padding:
            "calc(var(--block-spacing-horizontal)/1.5) calc(var(--block-spacing-horizontal)/1.5)",
        }}
      >
        <p>{props.text}</p>
      </article>
    </div>
  );
};

export const ChatMessages = () => {
  const { data: pmessages } = usePmessages({ skipMountFetch: true });
  return (
    <div>
      {pmessages.map((pm) => (
        <Message key={pm.id} id={pm.author} text={pm.text} />
      ))}
    </div>
  );
};
