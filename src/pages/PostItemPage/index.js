import PageContainer from "../../components/PageContainer";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

export default function PostItemPage() {

  const params = useParams();
  const post = useSelector(
    (state) => state.post.posts.find((post) => post.id === params.id)
  );
  
  return (

    <PageContainer title={post.title}>
      Id: {params.id}
    </PageContainer>

  );

}