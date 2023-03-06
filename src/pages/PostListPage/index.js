import PageContainer from "../../components/PageContainer";
import Posts from "../../components/Posts";

export default function PostListPage() {

  return (

    <PageContainer title='Posts'>
      <Posts showOnlyPromoted={false} />
    </PageContainer> 

  );
  
}