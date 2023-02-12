import Markdown from "preact-markdown";

export const MdSection = ({ children }: {children: string}) => <div className='md-section'>
  <Markdown markdown={children}/>
</div>
