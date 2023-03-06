import PageContainer from "../../components/PageContainer";
import Posts from "../../components/Posts";
import Form from "../../components/Form";

export default function PostListPage() {

  return (

    <PageContainer title='Posts'>
      <Posts showOnlyPromoted={false} />
      <Form />
    </PageContainer> 

  );
  
}