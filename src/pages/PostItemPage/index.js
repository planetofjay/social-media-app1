import PageContainer from "../../components/PageContainer";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import NotFoundPage from "../NotFoundPage";

export default function PostItemPage() {

  const params = useParams();
  const post = useSelector(
    (state) => state.post.posts.find((post) => post.id === params.id)
  );

  if(!post) {
    return <NotFoundPage />
  }
  
  return (

    <PageContainer title={post.title}>
      Id: {params.id}
    </PageContainer>

  );

}