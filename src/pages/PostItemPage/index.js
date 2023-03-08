import PageContainer from "../../components/PageContainer";
import { useParams } from "react-router-dom";

export default function PostItemPage() {

  const params = useParams();
  
  return (

    <PageContainer title='Post'>
      Id: {params.id}
    </PageContainer>

  );

}