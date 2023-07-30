import { useRoute } from 'wouter-preact'
import { MdPage } from '../components/MdPage'

export const BeerRecipePage = () => {
const [_match, params] = useRoute('/beer/recipe/:name')


return <MdPage name={params?.name}/>
}

